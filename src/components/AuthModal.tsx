"use client";
import { useState } from "react";
import { GoogleG } from "./Buttons";

export function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  if (!open) return null;

  const isLogin = mode === "login";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[rgba(21,16,11,0.55)] backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[336px] max-h-[92vh] overflow-y-auto bg-white rounded-[28px] p-6 relative shadow-[0_50px_100px_-40px_rgba(21,16,11,0.7)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-[28.8px] h-[28.8px] rounded-full bg-[#f4ede2] text-body-text text-[13px] font-bold flex items-center justify-center"
        >
          &times;
        </button>

        <div className="flex items-center gap-2 mb-5">
          <div className="btn-gradient w-9 h-9 rounded-[10px] flex items-center justify-center text-white font-serif text-lg">
            M
          </div>
          <span className="font-display font-extrabold text-[17px]">Mivan</span>
        </div>

        <div className="flex bg-[#f4ede2] rounded-2xl p-1 mb-5 text-[11.5px] font-bold">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-[14px] transition ${
              isLogin ? "bg-white text-ink shadow-sm" : "text-muted"
            }`}
          >
            Sign in
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-[14px] transition ${
              !isLogin ? "bg-white text-ink shadow-sm" : "text-muted"
            }`}
          >
            Create account
          </button>
        </div>

        <h3 className="font-display font-extrabold text-[19px] mb-1">
          {isLogin ? "Welcome back" : "Create your account"}
        </h3>
        <p className="text-muted text-[12.5px] mb-4">
          {isLogin
            ? "Sign in to get food that fits your body, taste, and day."
            : "Start getting food that fits your body, your taste, and your day."}
        </p>

        <button className="w-full flex items-center justify-center gap-2 rounded-full border border-[var(--hairline-strong)] bg-white py-3 text-[11.5px] font-bold mb-4">
          <GoogleG />
          Continue with Google
        </button>

        <div className="flex items-center gap-3 text-muted-2 text-[10px] font-semibold mb-4">
          <div className="flex-1 h-px bg-[var(--hairline)]" />
          OR
          <div className="flex-1 h-px bg-[var(--hairline)]" />
        </div>

        <form className="flex flex-col gap-3">
          {!isLogin && (
            <input
              placeholder="Full name"
              className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent"
            />
          )}
          <input
            placeholder="Email"
            type="email"
            className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent"
          />
          <input
            placeholder="Password"
            type="password"
            className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent"
          />

          {isLogin && (
            <div className="flex items-center justify-between text-[11px] text-muted">
              <label className="flex items-center gap-1.5">
                <input type="checkbox" className="accent-[var(--accent)]" />
                Remember me
              </label>
              <a href="#" className="text-accent-text font-semibold">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="button"
            className="btn-gradient w-full rounded-full text-white text-[11.5px] font-bold py-3 mt-1"
          >
            {isLogin ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="text-center text-muted text-[11.5px] mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setMode(isLogin ? "signup" : "login")}
            className="text-accent-text font-semibold"
          >
            {isLogin ? "Create account" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
