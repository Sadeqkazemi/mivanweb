import { requireUser } from "@/server/auth";
export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  await requireUser();
  return children;
}
