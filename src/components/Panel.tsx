"use client";
import { AccountName, AccountEmail, SignOut } from "./AccountIdentity";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import s from "./Panel.module.css";
export const userLinks = [["/dashboard", "Home"], ["/health", "My health"], ["/club", "Mivan Club"], ["/settings", "Settings"]];
export const adminLinks = [["/admin", "Overview"], ["/admin/users", "Users"], ["/admin/content", "Content"], ["/admin/blog", "Blog"], ["/admin/analytics", "Analytics"], ["/admin/settings", "Settings"], ["/admin/restaurants", "Restaurants"], ["/admin/menus", "Menus & dishes"], ["/admin/ai", "AI engine"]];
export function PanelShell({ children, active, admin = false }: {
    children: ReactNode;
    active: string;
    admin?: boolean;
}) {
    const [open, setOpen] = useState(false);
    return <div className={`${s.shell} ${admin ? s.admin : ""}`}><aside className={`${s.sidebar} ${open ? s.open : ""}`}><Link className={s.logo} href={admin ? "/admin" : "/dashboard"} aria-label={admin ? "Mivan admin home" : "Mivan app home"}><Image src="/images/mivan-logo.png" width={48} height={28} alt="Mivan"/></Link>{admin ? <div className={s.adminBadge}>● SUPER ADMIN</div> : <div className={s.menuLabel}>MENU</div>}<nav className={s.nav}>{(admin ? adminLinks : userLinks).map(([href, label], i) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={label === active ? "page" : undefined} className={`${label === active ? s.active : ""} ${admin && i === 6 ? s.separated : ""}`}>{label}</Link>)}</nav><SignOut className={s.signout} destination={admin ? "/admin/login" : "/login"}/></aside><main className={s.main}><button className={s.mobileMenu} style={open ? {position:"fixed",left:250,top:16,zIndex:40,background:"white"} : undefined} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Close menu" : "☰ Menu"}</button>{children}</main></div>;
}
export function ProfileMenu({ admin = false, active = "" }: {
    admin?: boolean;
    active?: string;
}) { const [open, setOpen] = useState(false); return <div className={s.profile} onKeyDown={e => { if (e.key === "Escape")
    setOpen(false); }}><button className={`${s.avatar} ${admin ? s.adminAvatar : ""}`} aria-label="Account menu" aria-expanded={open} onClick={() => setOpen(!open)}><AccountName initial/></button>{open && <div className={s.dropdown}><div className={s.profileBanner}><span className={s.avatar}><AccountName initial/></span><div><b><AccountName/></b><div><AccountEmail/></div></div></div><div className={s.profileMeta}><span className={`${s.pill} ${s.orangePill}`}>{admin ? "SUPER ADMIN" : "FREE"}</span><span>{admin ? "Admin" : "0 pts"}</span></div><nav>{(admin ? adminLinks.slice(0, 6) : userLinks).map(([href, label]) => <Link key={href} href={href} className={active === label ? s.active : ""} onClick={() => setOpen(false)}>•　{label === "Home" ? "Dashboard" : label}</Link>)}</nav><SignOut className={s.dropdownSignout} destination={admin ? "/admin/login" : "/login"}/></div>}</div>; }
export function PanelHeader({ title, subtitle, admin = false, active = "", gold = false }: {
    title: string;
    subtitle: string;
    admin?: boolean;
    active?: string;
    gold?: boolean;
}) { return <header className={s.header}><div><h1>{title}</h1><p>{subtitle}</p></div><div className={s.headerActions}><span className={`${s.badge} ${gold ? s.gold : ""}`} title="Sample preview status">{gold ? "FREE MEMBER" : <><i className={s.dot} style={admin ? { background: "#4c8055" } : undefined}/>{admin ? "Admin preview" : "No device connected"}</>}</span><ProfileMenu admin={admin} active={active}/></div></header>; }
export function PanelCard({ children, className = "" }: {
    children: ReactNode;
    className?: string;
}) { return <section className={`${s.card} ${className}`}>{children}</section>; }
export function Stats({ items }: {
    items: string[][];
}) { return <div className={s.grid4}>{items.map(([label, value, sub]) => <PanelCard key={label} className={s.stat}><div className={s.eyebrow}>{label}</div><strong>{value}</strong>{sub && <small>{sub}</small>}</PanelCard>)}</div>; }
export function Progress({ label, value, pct }: {
    label: string;
    value: string;
    pct: number;
}) { return <div className={s.metric}><div className={s.row}><span>{label}</span><b>{value}</b></div><div className={s.progress}><i style={{ width: `${pct}%` }}/></div></div>; }
export function Switch({ label, initial = false, on, disabled = false, onChange }: {
    label: string;
    initial?: boolean;
    on?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
}) { const [value, setValue] = useState(initial); const checked = on ?? value; return <button type="button" role="switch" aria-label={label} aria-checked={checked} disabled={disabled} className={s.toggle} onClick={() => { setValue(!checked); onChange?.(!checked); }}><span /></button>; }
export function PreviewAction({ children, className = "", message = "This service is not connected in this preview." }: {
    children: ReactNode;
    className?: string;
    message?: string;
}) { const [open, setOpen] = useState(false); return <><button className={`${s.button} ${className}`} onClick={() => setOpen(true)}>{children}</button>{open && <Modal title="Preview" onClose={() => setOpen(false)}><p className={s.notice}>{message}</p></Modal>}</>; }
export function Modal({ title, children, onClose }: {
    title: string;
    children: ReactNode;
    onClose: () => void;
}) { return <div className={s.modalBackdrop} onClick={onClose} onKeyDown={e => { if (e.key === "Escape")
    onClose(); }}><div className={s.modal} role="dialog" aria-modal="true" aria-label={title} onClick={e => e.stopPropagation()}><div className={s.row}><h2>{title}</h2><button autoFocus aria-label="Close dialog" className={`${s.button} ${s.outline}`} onClick={onClose}>×</button></div>{children}</div></div>; }
export function Status({ value }: {
    value: string;
}) { return <span className={`${s.status} ${["Draft", "Idle", "Hidden", "Archived"].includes(value) ? s.inactive : ["Review", "Scheduled"].includes(value) ? s.warning : ["Suspended", "Rolled back"].includes(value) ? s.danger : ""}`}>{value}</span>; }
