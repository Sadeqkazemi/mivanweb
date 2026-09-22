"use client";
import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function AdminLoginPage() {
  const [role, setRole] = useState<"Admin" | "Employee">("Admin");
  const [step, setStep] = useState<"email" | "2fa">("email");

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-paper">
      <div className="hidden md:flex flex-col justify-between p-10 bg-[#1d160f] text-white">
        <Link href="/" className="text-[12px] font-semibold text-white/70">
          ← Back to site
        </Link>
        <div>
          <div className="btn-gradient w-10 h-10 rounded-xl mb-4" />
          <h1 className="font-display font-extrabold text-[26px] tracking-[-0.03em] mb-2">
            Staff area
          </h1>
          <p className="text-white/70 text-[13px] leading-relaxed mb-5 max-w-sm">
            Internal console for the Mivan team. Restricted access. Every sign-in is logged
            and protected with two-factor verification.
          </p>
          <ul className="space-y-2 text-[12.5px] font-medium">
            {["Users, content & analytics", "AI engine controls", "Role-based permissions"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-accent-light font-bold">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white/50 text-[11px]">© 2026 Mivan · Authorized personnel only</div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-[360px]">
          <div className="flex items-center gap-2 mb-6 md:hidden">
            <LogoMark size={32} />
            <span className="font-display font-extrabold text-[17px]">Mivan</span>
          </div>

          <h2 className="font-display font-extrabold text-[20px] mb-1">Staff sign in</h2>
          <p className="text-muted text-[12.5px] mb-5">
            Use your Mivan work account to continue.
          </p>

          <div className="flex bg-[#f4ede2] rounded-2xl p-1 mb-5 text-[11.5px] font-bold">
            {(["Admin", "Employee"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-[14px] transition ${role === r ? "bg-white text-ink shadow-sm" : "text-muted"}`}
              >
                {r}
              </button>
            ))}
          </div>

          {step === "email" ? (
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("2fa");
              }}
            >
              <input placeholder="Work email" type="email" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
              <input placeholder="Password" type="password" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
              <button type="submit" className="btn-gradient w-full rounded-full text-white text-[11.5px] font-bold py-3 mt-1">
                Continue →
              </button>
            </form>
          ) : (
            <form className="flex flex-col gap-3">
              <input placeholder="2FA code" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent tracking-widest text-center" />
              <div className="text-muted text-[11px] text-center">From your authenticator app</div>
              <Link href="/admin" className="btn-gradient w-full text-center rounded-full text-white text-[11.5px] font-bold py-3 mt-1">
                Sign in
              </Link>
            </form>
          )}

          <div className="flex items-center justify-between text-[11px] text-muted mt-5">
            <a href="#" className="text-accent-text font-semibold">Forgot password?</a>
            <a href="#" className="font-semibold">Request access</a>
          </div>

          <Link href="/login" className="block text-center text-muted-2 text-[11px] mt-6">
            ← Customer sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
