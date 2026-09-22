import { requireUser } from "@/server/auth";
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireUser(true);
  return <><p style={{ margin: 0, padding: "10px 24px", background: "#ffefd6", position: "relative", zIndex: 50 }}>Admin preview: charts and records below are demonstration data. Administration persistence is not connected yet.</p>{children}</>;
}
