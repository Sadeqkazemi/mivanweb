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
  const [step, setStep] = useState<"password" | "otp">("password");
  const [email, setEmail] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    const data = new FormData(event.currentTarget);
    const submittedEmail = String(data.get("email")).trim().toLowerCase();

    try {
      const result = await authClient.signIn.email({
        email: submittedEmail,
        password: String(data.get("password")),
        rememberMe: data.has("remember"),
      });

      if (result.error) {
        setNotice("Unable to sign in. Check your email and password.");
        return;
      }

      const needsSecondFactor = Boolean((result.data as { twoFactorRedirect?: boolean } | null)?.twoFactorRedirect);
      if (needsSecondFactor) {
        const challenge = await authClient.twoFactor.sendOtp({ trustDevice: false });
        if (challenge.error) {
          setNotice("Your password was accepted, but the security code could not be sent. Please try again.");
          return;
        }
        setEmail(submittedEmail);
        setStep("otp");
        setNotice("");
        return;
      }

      const session = await authClient.getSession();
      const role = (session.data?.user as { role?: string } | undefined)?.role;
      if (role !== "admin") {
        await authClient.signOut();
        setNotice("This account does not have staff or administrator access.");
        return;
      }
      await authClient.signOut();
      setNotice("Two-step verification is required for administrator accounts. Ask the system administrator to refresh this account's access.");
    } catch {
      setNotice("Connection unavailable. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function verifyOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    const data = new FormData(event.currentTarget);

    try {
      const result = await authClient.twoFactor.verifyOtp({
        code: String(data.get("otp")).replace(/\D/g, ""),
        trustDevice: false,
      });
      if (result.error) {
        setNotice("That code is incorrect or has expired. Request a new code and try again.");
        return;
      }
      const role = (result.data?.user as { role?: string } | undefined)?.role;
      if (role !== "admin") {
        await authClient.signOut();
        setStep("password");
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

  async function resendOtp() {
    setBusy(true);
    setNotice("");
    try {
      const result = await authClient.twoFactor.sendOtp({ trustDevice: false });
      setNotice(result.error ? "The code could not be sent. Please try again." : "A new security code has been sent.");
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
          <Link href="/" className={styles.logo} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={82} height={41} priority /></Link>
          <div>
            <p className={styles.eyebrow}>MIVAN OPERATIONS</p>
            <h1>Staff &amp;<br />administrator access.</h1>
            <p>Secure access to customer support, content, restaurant and platform operations.</p>
          </div>
          <small>Authorized team members only</small>
        </div>

        <div className={styles.formPanel}>
          {step === "password" ? <>
            <p className={styles.kicker}>INTERNAL PORTAL</p>
            <h2 id="staff-login-title">Sign in to the admin panel</h2>
            <p className={styles.subtitle}>Enter your work email and password. A one-time security code will follow.</p>

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
              <button type="submit" className={styles.submit} disabled={busy}>{busy ? "Checking access…" : "Continue securely"}</button>
            </form>
          </> : <>
            <div className={styles.otpIcon} aria-hidden="true">6</div>
            <p className={styles.kicker}>SECOND SECURITY STEP</p>
            <h2 id="staff-login-title">Enter your one-time code</h2>
            <p className={styles.subtitle}>We sent a six-digit code to <strong>{email}</strong>. It expires in 10 minutes.</p>
            <form onSubmit={verifyOtp} className={styles.otpForm}>
              <label className={styles.field}>Security code
                <input className={styles.otpInput} name="otp" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} placeholder="000000" autoFocus required />
              </label>
              <button type="submit" className={styles.submit} disabled={busy}>{busy ? "Verifying…" : "Verify and enter"}</button>
            </form>
            <div className={styles.otpActions}><button type="button" onClick={resendOtp} disabled={busy}>Send a new code</button><button type="button" onClick={() => { setStep("password"); setNotice(""); }}>Use another account</button></div>
          </>}

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
