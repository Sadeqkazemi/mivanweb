"use client";
import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { GoogleG } from "@/components/Buttons";
import { ImageSlot } from "@/components/ImageSlot";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isLogin = mode === "login";

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-between p-10 bg-[#f4ede2]">
        <Link href="/" className="text-[12px] font-semibold text-label">
          ← Back to site
        </Link>
        <div>
          <h1 className="font-display font-extrabold text-[28px] tracking-[-0.03em] mb-3 max-w-xs">
            Food that fits your body, taste, and day.
          </h1>
          <p className="text-body-text text-[13px] leading-relaxed max-w-sm mb-5">
            Sign in to get personalized picks wherever you are — powered by your taste
            profile and your Apple Watch.
          </p>
          <ul className="space-y-2 text-[12.5px] font-medium mb-6">
            {["Personalized recommendations", "Scan any menu, anywhere", "Stress-aware recovery picks"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-accent-text font-bold">✓</span>
                  {t}
                </li>
              )
            )}
          </ul>
          <ImageSlot className="h-56" label="app screen" />
        </div>
        <div className="text-muted-2 text-[11px]">© 2026 Mivan</div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-[360px]">
          <div className="flex items-center gap-2 mb-6 md:hidden">
            <LogoMark size={32} />
            <span className="font-display font-extrabold text-[17px]">Mivan</span>
          </div>

          <div className="flex bg-[#f4ede2] rounded-2xl p-1 mb-6 text-[11.5px] font-bold">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-[14px] transition ${isLogin ? "bg-white text-ink shadow-sm" : "text-muted"}`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 rounded-[14px] transition ${!isLogin ? "bg-white text-ink shadow-sm" : "text-muted"}`}
            >
              Create account
            </button>
          </div>

          <h2 className="font-display font-extrabold text-[20px] mb-1">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <p className="text-muted text-[12.5px] mb-5">
            {isLogin
              ? "Sign in to get food that fits your body, taste, and day."
              : "Start getting food that fits your body, your taste, and your day."}
          </p>

          <button className="w-full flex items-center justify-center gap-2 rounded-full border border-[var(--hairline-strong)] bg-white py-3 text-[11.5px] font-bold mb-4">
            <GoogleG /> Continue with Gmail
          </button>

          <div className="flex items-center gap-3 text-muted-2 text-[10px] font-semibold mb-4">
            <div className="flex-1 h-px bg-[var(--hairline)]" />
            OR
            <div className="flex-1 h-px bg-[var(--hairline)]" />
          </div>

          <form className="flex flex-col gap-3">
            {!isLogin && (
              <input placeholder="Full name" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
            )}
            <input placeholder="Email" type="email" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
            <input placeholder="Password" type="password" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
            {isLogin && (
              <div className="flex items-center justify-between text-[11px] text-muted">
                <label className="flex items-center gap-1.5">
                  <input type="checkbox" className="accent-[var(--accent)]" />
                  Remember me
                </label>
                <a href="#" className="text-accent-text font-semibold">Forgot password?</a>
              </div>
            )}
            <Link href="/dashboard" className="btn-gradient w-full text-center rounded-full text-white text-[11.5px] font-bold py-3 mt-1">
              {isLogin ? "Sign in" : "Create account"}
            </Link>
          </form>

          <p className="text-center text-muted text-[11.5px] mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setMode(isLogin ? "signup" : "login")} className="text-accent-text font-semibold">
              {isLogin ? "Create account" : "Sign in"}
            </button>
          </p>

          <Link href="/admin/login" className="block text-center text-muted-2 text-[11px] mt-6">
            Staff & admin sign in →
          </Link>
        </div>
      </div>
    </div>
  );
}
