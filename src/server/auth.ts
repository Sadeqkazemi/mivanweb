import "server-only";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "./db";

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: "postgresql" }),
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        socialProviders: {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        },
      }
    : {}),
  emailAndPassword: { enabled: true, minPasswordLength: 12, maxPasswordLength: 128 },
  user: { additionalFields: { role: { type: "string", defaultValue: "user", input: false } } },
  session: { expiresIn: 60 * 60 * 24 * 7, updateAge: 60 * 60 * 24 },
  rateLimit: { enabled: true, storage: "database", window: 60, max: 60,
    customRules: { "/sign-in/email": { window: 60, max: 5 }, "/sign-up/email": { window: 60, max: 5 } } },
  databaseHooks: { user: { create: { before: async (user) => ({ data: { ...user, email: user.email.trim().toLowerCase(), name: user.name.trim().slice(0, 100) } }) } } },
});
export async function getSession() { return auth.api.getSession({ headers: await headers() }); }
export async function requireUser(admin = false) {
  const session = await getSession();
  if (!session) redirect(admin ? "/admin/login" : "/login");
  if (admin && session.user.role !== "admin") redirect("/dashboard");
  return session.user;
}
