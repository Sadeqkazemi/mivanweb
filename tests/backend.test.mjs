import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { PrismaClient } from '@prisma/client';
const base=process.env.BETTER_AUTH_URL;
if(!['127.0.0.1','localhost'].includes(new URL(base).hostname)||!['127.0.0.1','localhost'].includes(new URL(process.env.DATABASE_URL).hostname))throw new Error('Integration tests only run locally');
const db=new PrismaClient();const created=[];
async function request(path,{cookie,body,method,origin=base}={}){return fetch(base+path,{method:method??(body?'POST':'GET'),headers:{...(cookie?{cookie}:{}),...(body?{'Content-Type':'application/json',origin}:{})},body:body?JSON.stringify(body):undefined,redirect:'manual'});}
async function signup(){
 const email=`test-${randomUUID()}@example.test`;created.push(email);
 const r=await request('/api/auth/sign-up/email',{body:{name:'Backend Test',email,password:'Secure-test-password-2026!'}});
 assert.equal(r.status,200,await r.clone().text());
 assert.equal(r.headers.getSetCookie().length,0,'signup must not create a session before email verification');
 const verification=await db.verification.findFirst({where:{identifier:`email-verification-otp-${email}`}});
 assert.ok(verification,'signup must create an email OTP');
 const otp=verification.value.slice(0,verification.value.lastIndexOf(':'));
 const verified=await request('/api/auth/email-otp/verify-email',{body:{email,otp}});
 assert.equal(verified.status,200,await verified.clone().text());
 const cookie=verified.headers.getSetCookie().map(x=>x.split(';')[0]).join('; ');
 assert.ok(cookie,'email verification must create the account session');
 assert.equal((await db.user.findUnique({where:{email}})).emailVerified,true);
 return {email,cookie};
}
test('authentication, ownership, validation and persistent profile',async()=>{
 try{
 assert.equal((await request('/api/profile')).status,401);
 assert.equal((await request('/dashboard')).status,307);
 const a=await signup(),b=await signup();assert.ok(a.cookie);
 const data={name:'Changed Name',phone:'123456',location:'Test City',lowSodium:true,diabetesAware:false,plantForward:true,dailyPicks:false,clubUpdates:false};
 assert.equal((await request('/api/profile',{cookie:a.cookie,method:'PATCH',body:data})).status,200);
 const profile=await (await request('/api/profile',{cookie:a.cookie})).json();assert.equal(profile.name,data.name);assert.equal(profile.location,data.location);
 const other=await (await request('/api/profile',{cookie:b.cookie})).json();assert.equal(other.location,'');assert.equal(other.name,'Backend Test');
 assert.equal((await request('/api/profile',{cookie:a.cookie,method:'PATCH',body:{...data,userId:'someone-else'}})).status,400);
 assert.equal((await request('/api/profile',{cookie:a.cookie,method:'PATCH',body:{...data,name:''}})).status,400);
 assert.equal((await request('/api/profile',{cookie:a.cookie,method:'PATCH',body:data,origin:'https://evil.example'})).status,403);
 const duplicate=await request('/api/auth/sign-up/email',{body:{name:'Duplicate',email:a.email,password:'Secure-test-password-2026!'}});assert.equal(duplicate.status,200);assert.equal(duplicate.headers.getSetCookie().length,0);
 assert.equal((await request('/admin',{cookie:a.cookie})).status,307);
 const account=await db.account.findFirst({where:{user:{email:a.email}}});assert.ok(account.password);assert.notEqual(account.password,'Secure-test-password-2026!');
 assert.equal((await request('/api/auth/sign-out',{cookie:a.cookie,body:{}})).status,200);
 assert.equal((await request('/api/profile',{cookie:a.cookie})).status,401);
 const login=await request('/api/auth/sign-in/email',{body:{email:a.email,password:'Secure-test-password-2026!'}});assert.equal(login.status,200);
 const cookie=login.headers.getSetCookie().map(x=>x.split(';')[0]).join('; ');
 assert.equal((await (await request('/api/profile',{cookie})).json()).location,'Test City');
 await db.session.updateMany({where:{user:{email:a.email}},data:{expiresAt:new Date(0)}});
 assert.equal((await request('/api/profile',{cookie})).status,401);
 }finally{await db.user.deleteMany({where:{email:{in:created}}});await db.$disconnect();}
});
