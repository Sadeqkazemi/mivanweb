import { PrismaClient } from '@prisma/client';
const email=process.argv[2]?.trim().toLowerCase();
if(!email)throw new Error('Usage: npm run db:admin -- existing-account@example.com');
const db=new PrismaClient();
try { await db.user.update({where:{email},data:{role:'admin'}}); console.log('Existing account granted admin access.'); } finally {await db.$disconnect();}
