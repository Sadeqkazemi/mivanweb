"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function AccountName({ initial = false }: { initial?: boolean }) {
  const { data } = authClient.useSession();
  const name = data?.user.name ?? "Account";
  return <>{initial ? name.charAt(0).toUpperCase() : name}</>;
}
export function AccountEmail() { const { data } = authClient.useSession(); return <>{data?.user.email ?? ""}</>; }
export function SignOut({ className }: { className?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  return <><button className={className} disabled={busy} onClick={async () => {
    setBusy(true); setError("");
    try { const result = await authClient.signOut(); if (result.error) throw new Error(); router.replace("/login"); router.refresh(); }
    catch { setError("Sign out failed. Please retry."); setBusy(false); }
  }}>{busy ? "Signing out…" : "← Sign out"}</button>{error && <span role="alert">{error}</span>}</>;
}
