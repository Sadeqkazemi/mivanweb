import Link from "next/link";
import { ReactNode } from "react";
import { LogoMark } from "./Logo";

const navItems = [
  { href: "/dashboard", label: "Home" },
  { href: "/health", label: "My health" },
  { href: "/club", label: "Mivan Club" },
  { href: "/settings", label: "Settings" },
];

export function AppShell({
  children,
  active,
}: {
  children: ReactNode;
  active: string;
}) {
  return (
    <div className="min-h-screen flex bg-paper">
      <aside className="w-56 shrink-0 border-r border-[var(--hairline)] hidden md:flex flex-col p-5">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <LogoMark size={30} />
          <span className="font-display font-extrabold text-[16px]">Mivan</span>
        </Link>
        <nav className="flex flex-col gap-1 text-[12.5px] font-semibold text-label">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-2 rounded-xl transition ${
                n.label === active ? "bg-[#f4ede2] text-ink" : "hover:bg-[#f4ede2]/60"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/"
          className="mt-auto text-[12px] font-semibold text-muted flex items-center gap-1.5"
        >
          ← Sign out
        </Link>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="md:hidden flex items-center justify-between p-4 border-b border-[var(--hairline)]">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark size={26} />
            <span className="font-display font-extrabold text-[14px]">Mivan</span>
          </Link>
          <span className="text-[11px] font-semibold text-muted">Menu</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function WatchLiveBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent-text bg-[#fdece0] px-3 py-1.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      Watch live
    </div>
  );
}
