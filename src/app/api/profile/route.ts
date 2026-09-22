import { z } from "zod";
import { getSession } from "@/server/auth";
import { db } from "@/server/db";
const fields = z.object({
  name: z.string().trim().min(1).max(100), phone: z.string().trim().max(30), location: z.string().trim().max(120),
  lowSodium: z.boolean(), diabetesAware: z.boolean(), plantForward: z.boolean(), dailyPicks: z.boolean(), clubUpdates: z.boolean(),
}).strict();
const defaults = { phone: "", location: "", lowSodium: false, diabetesAware: false, plantForward: false, dailyPicks: false, clubUpdates: false };
export async function GET() {
  const session = await getSession();
  if (!session) return Response.json({ error: "Sign in required" }, { status: 401 });
  const profile = await db.profile.findUnique({ where: { userId: session.user.id } });
  return Response.json({ ...defaults, ...profile, name: session.user.name, email: session.user.email, createdAt: session.user.createdAt }, { headers: { "Cache-Control": "private, no-store" } });
}
export async function PATCH(request: Request) {
  if (request.headers.get("origin") !== new URL(process.env.BETTER_AUTH_URL!).origin) return Response.json({ error: "Invalid origin" }, { status: 403 });
  const session = await getSession();
  if (!session) return Response.json({ error: "Sign in required" }, { status: 401 });
  if (Number(request.headers.get("content-length") ?? 0) > 8192) return Response.json({ error: "Request too large" }, { status: 413 });
  const body = await request.text();
  if (body.length > 8192) return Response.json({ error: "Request too large" }, { status: 413 });
  let json: unknown;
  try { json = JSON.parse(body); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400 }); }
  const parsed = fields.safeParse(json);
  if (!parsed.success) return Response.json({ error: "Please check your profile fields" }, { status: 400 });
  const { name, ...data } = parsed.data;
  try {
    await db.$transaction([
      db.user.update({ where: { id: session.user.id }, data: { name } }),
      db.profile.upsert({ where: { userId: session.user.id }, create: { userId: session.user.id, ...data }, update: data }),
    ]);
    return Response.json({ ok: true });
  } catch { return Response.json({ error: "Could not save your profile. Please retry." }, { status: 503 }); }
}
