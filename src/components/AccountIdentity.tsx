"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import s from "./Panel.module.css";
export function AccountName({ initial = false }: { initial?: boolean }) {
  const { data } = authClient.useSession();
  const name = data?.user.name ?? "Account";
  return <>{initial ? name.charAt(0).toUpperCase() : name}</>;
}
export function AccountEmail() { const { data } = authClient.useSession(); return <>{data?.user.email ?? ""}</>; }
export function SignOut({ className, destination = "/login" }: { className?: string; destination?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  return <><button type="button" className={className} disabled={busy} aria-label="Sign out of Mivan" onClick={async () => {
    setBusy(true); setError("");
    try { const result = await authClient.signOut(); if (result.error) throw new Error(); router.replace(destination); router.refresh(); }
    catch { setError("Sign out failed. Please retry."); setBusy(false); }
  }}><span className={s.signoutIcon} aria-hidden="true">{busy ? <span className={s.signoutSpinner}/> : <SignOutIcon/>}</span><span className={s.signoutText}><strong>{busy ? "Signing out…" : "Sign out"}</strong><small>{busy ? "Ending your session" : "Leave this account"}</small></span><span className={s.signoutArrow} aria-hidden="true">→</span></button>{error && <span className={s.signoutError} role="alert">{error}</span>}</>;
}

function SignOutIcon() {
  return <svg viewBox="0 0 24 24"><path d="M10 5H6.5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19H10M14.5 8.5 18 12l-3.5 3.5M18 12H9"/></svg>;
}
