"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth-client";
import styles from "@/app/home.module.css";

export function NavAuthActions() {
  const router = useRouter();
  const profileMenuRef = useRef<HTMLDetailsElement>(null);
  const [signingOut, setSigningOut] = useState(false);
  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    function closeProfileMenu(event: PointerEvent) {
      const profileMenu = profileMenuRef.current;
      if (profileMenu?.open && event.target instanceof Node && !profileMenu.contains(event.target)) {
        profileMenu.open = false;
      }
    }

    function closeProfileMenuWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && profileMenuRef.current?.open) {
        profileMenuRef.current.open = false;
        profileMenuRef.current.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeProfileMenu);
    document.addEventListener("keydown", closeProfileMenuWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeProfileMenu);
      document.removeEventListener("keydown", closeProfileMenuWithEscape);
    };
  }, []);

  async function signOut() {
    setSigningOut(true);
    await authClient.signOut();
    router.replace("/");
    router.refresh();
  }

  if (isPending) return <div className={`${styles.authActions} ${styles.authPending}`} aria-label="Checking account session" />;
  if (data?.user) {
    const firstName = data.user.name.trim().split(/\s+/)[0] || "Account";
    const initial = firstName.charAt(0).toUpperCase();
    return <div className={styles.authActions}>
      <details ref={profileMenuRef} className={styles.profileMenu}>
        <summary className={styles.profileTrigger} aria-label={`Open profile menu for ${data.user.name}`}>
          <span className={styles.profileAvatar}>{initial}</span>
          <span className={styles.profileTriggerText}><strong>{firstName}</strong></span>
        </summary>
        <div className={styles.profileCard}>
          <div className={styles.profileCover}>
            <span>MIVAN ACCOUNT</span>
          </div>
          <span className={styles.profileCardAvatar}>{initial}</span>
          <div className={styles.profileIdentity}>
            <strong>{data.user.name}</strong>
            <small>{data.user.email}</small>
            <div className={styles.profileVerified}><span aria-hidden="true">✓</span>Verified account</div>
          </div>
          <nav aria-label="Profile navigation">
              <Link href="/dashboard"><span className={styles.profileMenuIcon} aria-hidden="true"><DashboardIcon /></span><span><strong>Dashboard</strong><small>View your daily overview</small></span></Link>
              <Link href="/settings"><span className={styles.profileMenuIcon} aria-hidden="true"><ProfileIcon /></span><span><strong>Profile</strong><small>Preferences and account</small></span></Link>
          </nav>
          <button type="button" className={styles.profileSignOut} onClick={signOut} disabled={signingOut}><SignOutIcon />{signingOut ? "Signing out…" : "Sign out of Mivan"}</button>
        </div>
      </details>
    </div>;
  }
  return <div className={styles.authActions}>
    <Link href="/login" className={`${styles.button} ${styles.primary}`}>Get started</Link>
  </div>;
}

function DashboardIcon() {
  return <svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><path d="M8.5 4v16M12.5 8h4.5M12.5 12h4.5M12.5 16h2.5" /></svg>;
}

function ProfileIcon() {
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.25" /><path d="M5.5 20c.6-4 2.75-6 6.5-6s5.9 2 6.5 6" /></svg>;
}

function SignOutIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v8" /><path d="M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>;
}
