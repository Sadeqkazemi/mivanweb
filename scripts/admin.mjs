import { PrismaClient } from '@prisma/client';
const email=process.argv[2]?.trim().toLowerCase();
if(!email)throw new Error('Usage: npm run db:admin -- existing-account@example.com');
const db=new PrismaClient();
try {
  const user = await db.$transaction(async (transaction) => {
    const updated = await transaction.user.update({ where: { email }, data: { role: 'admin' }, select: { id: true, email: true } });
    await transaction.session.deleteMany({ where: { userId: updated.id } });
    return updated;
  });
  console.log(`Admin access granted to ${user.email}. Existing sessions were revoked; sign in again.`);
} finally { await db.$disconnect(); }
