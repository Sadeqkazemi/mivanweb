"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
 const router = useRouter();
 const [mode, setMode] = useState<"login" | "signup">("login");
 const [notice, setNotice] = useState("");
 const [busy, setBusy] = useState(false);
 const isLogin = mode === "login";
 function changeMode(next: "login" | "signup") { setMode(next); setNotice(""); }
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
    <button type="button" className={styles.google} onClick={() => setNotice("Google sign-in is not connected yet.")}><span aria-hidden="true">G</span>Continue with Gmail</button>
    <div className={styles.divider}><span />OR<span /></div>
    <form onSubmit={submit}>
     {!isLogin && <label className={styles.field}>Full name<input name="name" maxLength={100} autoComplete="name" placeholder="Sara Ahmadi" required /></label>}
     <label className={styles.field}>Email<input name="email" type="email" autoComplete="email" placeholder="you@gmail.com" required /></label>
     <label className={styles.field}>Password<input name="password" type="password" autoComplete={isLogin ? "current-password" : "new-password"} placeholder="••••••••" required minLength={isLogin ? undefined : 12} maxLength={128} /></label>
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
