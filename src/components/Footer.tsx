import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] mt-16">
      <div className="content-col py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Logo size={30} />
          <p className="text-muted text-[12px] mt-3 leading-relaxed">
            Your AI food companion for taste, health, and recovery — wherever the day takes
            you.
          </p>
          <p className="text-muted-2 text-[11px] mt-3">hello@mivan.ai</p>
          <p className="text-muted-2 text-[11px]">
            Downtown Dubai, Burj Khalifa Blvd, Office 210, Dubai, UAE
          </p>
        </div>
        <div>
          <div className="text-label text-[11px] font-bold uppercase tracking-wide mb-3">
            Product
          </div>
          <ul className="space-y-2 text-[12px] text-muted">
            <li><Link href="/how-it-works" className="hover:text-accent-text">How it works</Link></li>
            <li><Link href="/features" className="hover:text-accent-text">Menu scan</Link></li>
            <li><Link href="/health" className="hover:text-accent-text">Smartwatch</Link></li>
            <li><Link href="/pricing" className="hover:text-accent-text">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-label text-[11px] font-bold uppercase tracking-wide mb-3">
            Account
          </div>
          <ul className="space-y-2 text-[12px] text-muted">
            <li><Link href="/login" className="hover:text-accent-text">Sign in</Link></li>
            <li><Link href="/login" className="hover:text-accent-text">Create account</Link></li>
            <li><Link href="/dashboard" className="hover:text-accent-text">My dashboard</Link></li>
            <li><Link href="/admin/login" className="hover:text-accent-text">Admin panel</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-label text-[11px] font-bold uppercase tracking-wide mb-3">
            Company
          </div>
          <ul className="space-y-2 text-[12px] text-muted">
            <li><Link href="/about" className="hover:text-accent-text">About</Link></li>
            <li><Link href="/faq" className="hover:text-accent-text">Privacy</Link></li>
            <li><Link href="/faq" className="hover:text-accent-text">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-accent-text">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="content-col py-4 border-t border-[var(--hairline)] text-muted-2 text-[11px]">
        © 2026 Mivan · Made for people on the move
      </div>
    </footer>
  );
}
