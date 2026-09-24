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
    }}><span className={s.signoutIcon} aria-hidden="true">{busy ? <span className={s.signoutSpinner}/> : <SignOutIcon/>}</span><span className={s.signoutText}><strong>{busy ? "Signing out…" : "Sign out"}</strong><small>{busy ? "Ending your session" : "Leave this account"}</small></span></button>{error && <span className={s.signoutError} role="alert">{error}</span>}</>;
}

function SignOutIcon() {
  return <svg viewBox="0 0 24 24"><path d="M12 3v8"/><path d="M6.3 6.8a8 8 0 1 0 11.4 0"/></svg>;
}
