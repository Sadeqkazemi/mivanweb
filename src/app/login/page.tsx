"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoogleG } from "@/components/Buttons";
import styles from "./login.module.css";

type Verification = { email: string };

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [verification, setVerification] = useState<Verification | null>(null);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const isLogin = mode === "login";

  function changeMode(next: "login" | "signup") {
    setMode(next);
    setVerification(null);
    setOtp("");
    setNotice("");
    setShowPassword(false);
  }

  async function continueWithGoogle() {
    setBusy(true);
    setNotice("");
    const destination = new URLSearchParams(window.location.search).get("next");
    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: destination === "/admin" ? "/admin" : "/dashboard",
        errorCallbackURL: "/login?oauth=error",
        additionalParams: { prompt: "select_account" },
      });
      if (result.error) setNotice("Google sign-in is unavailable. Please try again.");
    } catch {
      setNotice("Google sign-in is unavailable. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email")).trim().toLowerCase();
    const credentials = { email, password: String(data.get("password")) };
    try {
      if (isLogin) {
        const result = await authClient.signIn.email({ ...credentials, rememberMe: data.has("remember") });
        if (result.error) {
          if (result.error.code === "EMAIL_NOT_VERIFIED") {
            setOtp("");
            setVerification({ email });
            setNotice(`We sent a 6-digit verification code to ${email}.`);
          } else {
            setNotice("Unable to sign in. Check your email and password.");
          }
          return;
        }
        const destination = new URLSearchParams(window.location.search).get("next");
        router.replace(destination === "/admin" ? "/admin" : "/dashboard");
        router.refresh();
        return;
      }

      const result = await authClient.signUp.email({
        ...credentials,
        name: String(data.get("name")).trim(),
      });
      if (result.error) {
        setNotice("Unable to create the account or send the verification code. Please try again.");
        return;
      }
      setOtp("");
      setVerification({ email });
      setNotice(`We sent a 6-digit verification code to ${email}.`);
    } catch {
      setNotice("Connection unavailable. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function verifyOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!verification) return;
    if (otp.length !== 6) {
      setNotice("Enter the complete 6-digit code.");
      return;
    }
    setBusy(true);
    setNotice("");
    try {
      const result = await authClient.emailOtp.verifyEmail({ email: verification.email, otp });
      if (result.error) {
        setNotice("That code is incorrect or has expired. Check the email or request a new code.");
        return;
      }
      router.replace("/dashboard");
      router.refresh();
    } catch {
      setNotice("Connection unavailable. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function resendOtp() {
    if (!verification) return;
    setBusy(true);
    setNotice("");
    try {
      const result = await authClient.emailOtp.sendVerificationOtp({
        email: verification.email,
        type: "email-verification",
      });
      setNotice(result.error ? "Please wait before requesting another code." : `A new code was sent to ${verification.email}.`);
    } catch {
      setNotice("Could not resend the code. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <main className={styles.page}>
    <aside className={styles.brandPanel}>
      <Link href="/" className={styles.back}>← Back to site</Link>
      <div className={styles.pitch}>
        <Link href="/" className={styles.logo} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={60} height={30} priority /></Link>
        <h1>Food that fits your<br />body, taste, and day.</h1>
        <p>Sign in to get personalized picks wherever you are — powered by your taste profile and your Apple Watch.</p>
        <ul>{["Personalized recommendations", "Scan any menu, anywhere", "Stress-aware recovery picks"].map(text => <li key={text}><span aria-hidden="true">✓</span>{text}</li>)}</ul>
      </div>
      <small>© 2026 Mivan</small>
    </aside>
    <section className={styles.formPanel} aria-labelledby="auth-title">
      <div className={styles.formWrap}>
        {!verification && <div className={styles.tabs} role="group" aria-label="Account access">
          <button type="button" aria-pressed={isLogin} className={isLogin ? styles.active : ""} onClick={() => changeMode("login")}>Sign in</button>
          <button type="button" aria-pressed={!isLogin} className={!isLogin ? styles.active : ""} onClick={() => changeMode("signup")}>Create account</button>
        </div>}

        {verification ? <>
          <div className={styles.otpIcon} aria-hidden="true">✉</div>
          <p className={styles.kicker}>EMAIL VERIFICATION</p>
          <h2 id="auth-title">Check your inbox</h2>
          <p className={styles.subtitle}>Enter the 6-digit code sent to <strong>{verification.email}</strong>. The code expires in 10 minutes.</p>
          <form key="otp-form" onSubmit={verifyOtp} className={styles.otpForm}>
            <label className={styles.field}>Verification code<input key="otp-code" className={styles.otpInput} name="verification_code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} placeholder="000000" value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))} required autoFocus /></label>
            <button type="submit" disabled={busy} className={styles.submit}>{busy ? "Verifying…" : "Verify email & continue"}</button>
          </form>
          <div className={styles.otpActions}><button type="button" disabled={busy} onClick={resendOtp}>Resend code</button><button type="button" disabled={busy} onClick={() => { setVerification(null); setOtp(""); setNotice(""); }}>Use another email</button></div>
        </> : <>
          <h2 id="auth-title">{isLogin ? "Welcome back" : "Create your account"}</h2>
          <p className={styles.subtitle}>{isLogin ? "Sign in to continue to your Mivan dashboard." : "Create your account, then verify your email with a one-time code."}</p>
          <button type="button" className={styles.google} onClick={continueWithGoogle} disabled={busy}><GoogleG size={22} />Continue with Google</button>
          <div className={styles.divider}><span />OR<span /></div>
          <form key="credentials-form" onSubmit={submit}>
            {!isLogin && <label className={styles.field}>Full name<input name="name" maxLength={100} autoComplete="name" required /></label>}
            <label className={styles.field}>Email<input name="email" type="email" autoComplete="email" placeholder="you@gmail.com" required /></label>
            <label className={styles.field}>Password<span className={styles.passwordWrap}><input name="password" type={showPassword ? "text" : "password"} autoComplete={isLogin ? "current-password" : "new-password"} placeholder="••••••••" required minLength={isLogin ? undefined : 12} maxLength={128} /><button type="button" className={styles.passwordToggle} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} onClick={() => setShowPassword(value => !value)}>{showPassword ? <EyeOffIcon /> : <EyeIcon />}</button></span></label>
            <div className={styles.options}><label><input type="checkbox" name="remember" />Remember me</label><button type="button" onClick={() => setNotice("Password recovery is not connected yet.")}>Forgot password?</button></div>
            <button type="submit" disabled={busy} className={styles.submit}>{busy ? "Please wait…" : isLogin ? "Sign in" : "Create account & send code"}</button>
          </form>
          <p className={styles.switch}>{isLogin ? "New to Mivan? " : "Already have an account? "}<button type="button" onClick={() => changeMode(isLogin ? "signup" : "login")}>{isLogin ? "Create account" : "Sign in"}</button></p>
          <div className={styles.staff}><Link href="/admin/login">Staff &amp; admin sign in</Link></div>
        </>}
        {notice && <p className={styles.notice} role="status">{notice}</p>}
      </div>
    </section>
  </main>;
}

function EyeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.75" /></svg>;
}

function EyeOffIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18" /><path d="M10.6 6.15A10.9 10.9 0 0 1 12 6c6 0 9.5 6 9.5 6a16.7 16.7 0 0 1-2.25 2.9M15.5 17.35A10.5 10.5 0 0 1 12 18c-6 0-9.5-6-9.5-6a16.2 16.2 0 0 1 3.1-3.75M9.9 9.9a3 3 0 0 0 4.2 4.2" /></svg>;
}
