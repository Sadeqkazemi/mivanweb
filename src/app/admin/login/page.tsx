"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth-client";
import styles from "./admin-login.module.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    const data = new FormData(event.currentTarget);

    try {
      const result = await authClient.signIn.email({
        email: String(data.get("email")).trim().toLowerCase(),
        password: String(data.get("password")),
        rememberMe: data.has("remember"),
      });

      if (result.error) {
        setNotice("Unable to sign in. Check your email and password.");
        return;
      }

      const session = await authClient.getSession();
      const role = (session.data?.user as { role?: string } | undefined)?.role;
      if (role !== "admin") {
        await authClient.signOut();
        setNotice("This account does not have staff or administrator access.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setNotice("Connection unavailable. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className={styles.page}>
      <Link href="/" className={styles.back}>← Back to Mivan</Link>
      <section className={styles.card} aria-labelledby="staff-login-title">
        <div className={styles.brandPanel}>
          <span className={styles.logo}><Image src="/images/mivan-logo.png" alt="Mivan" width={82} height={41} priority /></span>
          <div>
            <p className={styles.eyebrow}>MIVAN OPERATIONS</p>
            <h1>Staff &amp;<br />administrator access.</h1>
            <p>Secure access to customer support, content, restaurant and platform operations.</p>
          </div>
          <small>Authorized team members only</small>
        </div>

        <div className={styles.formPanel}>
          <p className={styles.kicker}>INTERNAL PORTAL</p>
          <h2 id="staff-login-title">Sign in to the admin panel</h2>
          <p className={styles.subtitle}>Use the email and password assigned to your authorized Mivan account.</p>

          <form onSubmit={submit}>
            <label className={styles.field}>Work email
              <input name="email" type="email" autoComplete="username" placeholder="name@mivanfood.com" required />
            </label>
            <label className={styles.field}>Password
              <span className={styles.passwordWrap}>
                <input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="••••••••" required maxLength={128} />
                <button type="button" className={styles.passwordToggle} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} onClick={() => setShowPassword(value => !value)}>
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </span>
            </label>
            <label className={styles.remember}><input type="checkbox" name="remember" />Keep me signed in on this device</label>
            <button type="submit" className={styles.submit} disabled={busy}>{busy ? "Checking access…" : "Sign in securely"}</button>
          </form>

          {notice && <p className={styles.notice} role="status">{notice}</p>}
          <p className={styles.help}>Need access or cannot sign in? Contact the Mivan system administrator.</p>
        </div>
      </section>
    </main>
  );
}

function EyeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.75" /></svg>;
}

function EyeOffIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18" /><path d="M10.6 6.15A10.9 10.9 0 0 1 12 6c6 0 9.5 6 9.5 6a16.7 16.7 0 0 1-2.25 2.9M15.5 17.35A10.5 10.5 0 0 1 12 18c-6 0-9.5-6-9.5-6a16.2 16.2 0 0 1 3.1-3.75M9.9 9.9a3 3 0 0 0 4.2 4.2" /></svg>;
}
