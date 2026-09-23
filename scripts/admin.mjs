import { randomUUID } from 'node:crypto';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'better-auth/crypto';

const email = process.argv[2]?.trim().toLowerCase();
if (!email) throw new Error('Usage: npm run db:admin -- existing-account@example.com [--password-stdin]');

async function readHiddenPassword() {
  if (process.env.ADMIN_PASSWORD) return process.env.ADMIN_PASSWORD;

  if (process.argv.includes('--password-stdin')) {
    let value = '';
    for await (const chunk of process.stdin) value += chunk;
    return value.replace(/[\r\n]+$/, '');
  }

  if (!process.stdin.isTTY || typeof process.stdin.setRawMode !== 'function') {
    throw new Error('Run this command in an interactive terminal, or pass --password-stdin and provide the password on standard input.');
  }

  process.stdout.write('New admin password: ');
  process.stdin.setRawMode(true);
  process.stdin.setEncoding('utf8');
  process.stdin.resume();

  return new Promise((resolve, reject) => {
    let value = '';
    const cleanup = () => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.removeListener('data', onData);
    };
    const onData = (key) => {
      if (key === '\u0003') {
        cleanup();
        process.stdout.write('\n');
        reject(new Error('Cancelled.'));
        return;
      }
      if (key === '\r' || key === '\n') {
        cleanup();
        process.stdout.write('\n');
        resolve(value);
        return;
      }
      if (key === '\u007f' || key === '\b') {
        value = value.slice(0, -1);
        return;
      }
      value += key;
    };
    process.stdin.on('data', onData);
  });
}

const password = await readHiddenPassword();
if (password.length < 12 || password.length > 128) {
  throw new Error('The admin password must be between 12 and 128 characters.');
}

const passwordHash = await hashPassword(password);
const db = new PrismaClient();
try {
  const user = await db.$transaction(async (transaction) => {
    const updated = await transaction.user.update({
      where: { email },
      data: { role: 'admin' },
      select: { id: true, email: true },
    });
    const credential = await transaction.account.findFirst({
      where: { userId: updated.id, providerId: 'credential', accountId: updated.id },
      select: { id: true },
    });
    if (credential) {
      await transaction.account.update({ where: { id: credential.id }, data: { password: passwordHash } });
    } else {
      await transaction.account.create({
        data: {
          id: randomUUID(),
          userId: updated.id,
          providerId: 'credential',
          accountId: updated.id,
          password: passwordHash,
        },
      });
    }
    await transaction.session.deleteMany({ where: { userId: updated.id } });
    return updated;
  });
  console.log(`Admin password and access updated for ${user.email}. Existing sessions were revoked; sign in again.`);
} finally {
  await db.$disconnect();
}
