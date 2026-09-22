"use client";
import Link from "next/link";
import { useState } from "react";
import { ReactNode } from "react";
import { LogoMark } from "./Logo";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/restaurants", label: "Restaurants" },
  { href: "/admin/menus", label: "Menus & dishes" },
  { href: "/admin/ai", label: "AI engine" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
];

export function ProfileBox({
  name = "Aria Admin",
  role = "Super admin",
  email = "aria@mivan.ai",
}: {
  name?: string;
  role?: string;
  email?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-[#f4ede2] transition"
      >
        <div className="btn-gradient w-8 h-8 rounded-full text-white font-bold text-[13px] flex items-center justify-center">
          {name[0]}
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-[12px] font-bold leading-tight">{name}</div>
          <div className="text-[10.5px] text-muted leading-tight">{role}</div>
        </div>
        <span className="text-muted text-[10px]">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-[var(--hairline)] shadow-lg p-2 z-50 text-[12.5px]">
          <div className="px-3 py-2 border-b border-[var(--hairline)] mb-1">
            <div className="font-bold">{name}</div>
            <div className="text-muted text-[11px]">{email}</div>
          </div>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f4ede2]">
            Account settings
          </button>
          <Link
            href="/admin/login"
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#f4ede2] block text-accent-text font-semibold"
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
}

export function AdminShell({
  children,
  active,
  title,
  subtitle,
}: {
  children: ReactNode;
  active: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="min-h-screen flex bg-paper">
      <aside className="w-56 shrink-0 border-r border-[var(--hairline)] hidden md:flex flex-col p-5">
        <Link href="/admin" className="flex items-center gap-2 mb-1">
          <LogoMark size={28} />
          <span className="font-display font-extrabold text-[15px]">Mivan</span>
        </Link>
        <div className="text-muted-2 text-[10px] font-semibold uppercase tracking-wide mb-5">
          Super admin
        </div>
        <nav className="flex flex-col gap-1 text-[12px] font-semibold text-label">
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
        <Link href="/admin/login" className="mt-auto text-[12px] font-semibold text-muted">
          ← Sign out
        </Link>
      </aside>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-[var(--hairline)]">
          <div>
            <h1 className="font-display font-extrabold text-[19px] tracking-[-0.02em]">
              {title}
            </h1>
            <p className="text-muted text-[12px]">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-accent-text bg-[#fdece0] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              All systems normal
            </span>
            <ProfileBox />
          </div>
        </div>
        <div className="p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-[18px] border border-[var(--hairline)] p-4">
      <div className="text-muted text-[11px] mb-1">{label}</div>
      <div className="font-display font-extrabold text-xl">{value}</div>
      {sub && <div className="text-accent-text text-[10.5px] font-semibold mt-1">{sub}</div>}
    </div>
  );
}
