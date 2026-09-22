"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { GradientPill } from "./Buttons";
import { AuthModal } from "./AuthModal";

const links = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/health", label: "Health" },
  { href: "/pricing", label: "Pricing" },
  { href: "/club", label: "Club" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function PublicNav() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-[var(--hairline)]">
        <div className="content-col flex items-center justify-between py-3">
          <Link href="/">
            <Logo size={34} />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-[12px] font-semibold text-label">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-accent-text transition">
                {l.label}
              </Link>
            ))}
          </nav>
          <GradientPill onClick={() => setModalOpen(true)}>Get the app</GradientPill>
        </div>
      </header>
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
