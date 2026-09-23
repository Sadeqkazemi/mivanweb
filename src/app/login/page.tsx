"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoogleG } from "@/components/Buttons";
import styles from "./login.module.css";

export default function LoginPage() {
 const router = useRouter();
 const [mode, setMode] = useState<"login" | "signup">("login");
 const [notice, setNotice] = useState("");
 const [busy, setBusy] = useState(false);
 const [showPassword, setShowPassword] = useState(false);
 const isLogin = mode === "login";
 function changeMode(next: "login" | "signup") { setMode(next); setNotice(""); setShowPassword(false); }
 async function continueWithGoogle() {
 setBusy(true); setNotice("");
 const destination = new URLSearchParams(window.location.search).get("next");
 try {
 const result = await authClient.signIn.social({
 provider: "google",
 callbackURL: destination === "/admin" ? "/admin" : "/dashboard",
 errorCallbackURL: "/login?oauth=error",
 additionalParams: { prompt: "select_account" },
 });
 if (result.error) setNotice("Google sign-in is unavailable. Please try again.");
 } catch { setNotice("Google sign-in is unavailable. Please try again."); }
 finally { setBusy(false); }
 }
 async function submit(event: FormEvent<HTMLFormElement>) {
 event.preventDefault(); setBusy(true); setNotice(""); const data = new FormData(event.currentTarget);
 const credentials = { email: String(data.get("email")).trim().toLowerCase(), password: String(data.get("password")) };
 try { const result = isLogin ? await authClient.signIn.email({ ...credentials, rememberMe: data.has("remember") }) : await authClient.signUp.email({ ...credentials, name: String(data.get("name")).trim() });
 if (result.error) { setNotice(isLogin ? "Unable to sign in. Check your email and password." : "Unable to create your account. Check your details or try signing in."); return; }
 const destination = new URLSearchParams(window.location.search).get("next");
 router.replace(destination === "/admin" ? "/admin" : "/dashboard"); router.refresh();
 } catch { setNotice("Connection unavailable. Please try again."); } finally { setBusy(false); }
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
    <div className={styles.tabs} role="group" aria-label="Account access">
     <button type="button" aria-pressed={isLogin} className={isLogin ? styles.active : ""} onClick={() => changeMode("login")}>Sign in</button>
     <button type="button" aria-pressed={!isLogin} className={!isLogin ? styles.active : ""} onClick={() => changeMode("signup")}>Create account</button>
    </div>
    <h2 id="auth-title">{isLogin ? "Welcome back" : "Create your account"}</h2>
    <p className={styles.subtitle}>{isLogin ? "Sign in to continue to your Mivan dashboard." : "Start getting food that fits you in seconds."}</p>
    <button type="button" className={styles.google} onClick={continueWithGoogle} disabled={busy}><GoogleG size={22} />Continue with Google</button>
    <div className={styles.divider}><span />OR<span /></div>
    <form onSubmit={submit}>
     {!isLogin && <label className={styles.field}>Full name<input name="name" maxLength={100} autoComplete="name" required /></label>}
     <label className={styles.field}>Email<input name="email" type="email" autoComplete="email" placeholder="you@gmail.com" required /></label>
     <label className={styles.field}>Password<span className={styles.passwordWrap}><input name="password" type={showPassword ? "text" : "password"} autoComplete={isLogin ? "current-password" : "new-password"} placeholder="••••••••" required minLength={isLogin ? undefined : 12} maxLength={128} /><button type="button" className={styles.passwordToggle} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} onClick={() => setShowPassword(value => !value)}>{showPassword ? <EyeOffIcon /> : <EyeIcon />}</button></span></label>
     <div className={styles.options}><label><input type="checkbox" name="remember" />Remember me</label><button type="button" onClick={() => setNotice("Password recovery is not connected yet.")}>Forgot password?</button></div>
     <button type="submit" disabled={busy} className={styles.submit}>{busy ? "Please wait…" : isLogin ? "Sign in" : "Create account"}</button>
    </form>
    {notice && <p className={styles.notice} role="status">{notice}</p>}
    <p className={styles.switch}>{isLogin ? "New to Mivan? " : "Already have an account? "}<button type="button" onClick={() => changeMode(isLogin ? "signup" : "login")}>{isLogin ? "Create account" : "Sign in"}</button></p>
    <div className={styles.staff}><Link href="/admin/login">Staff &amp; admin sign in →</Link></div>
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
