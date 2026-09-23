"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import styles from "@/app/home.module.css";
export function NavAuthActions() {
  const { data, isPending } = authClient.useSession();
  if (isPending) return <div className={`${styles.authActions} ${styles.authPending}`} aria-label="Checking account session" />;
  if (data?.user) {
    const firstName = data.user.name.trim().split(/\s+/)[0] || "Account";
    return <div className={styles.authActions}><span className={styles.accountChip} title={data.user.email}><span>{firstName.charAt(0).toUpperCase()}</span>{firstName}</span><Link href="/dashboard" className={`${styles.button} ${styles.primary}`}>Dashboard</Link></div>;
  }
  return <div className={styles.authActions}><Link href="/login" className={`${styles.button} ${styles.outline}`}>Sign in</Link><Link href="/login" className={`${styles.button} ${styles.primary}`}>Get started</Link></div>;
}
