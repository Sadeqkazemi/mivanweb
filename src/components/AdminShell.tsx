import { ReactNode } from "react";
import { PanelShell, PanelHeader, PanelCard, ProfileMenu } from "./Panel";
import s from "./Panel.module.css";
export function AdminShell({ children, active, title, subtitle }: {
    children: ReactNode;
    active: string;
    title: string;
    subtitle: string;
}) { return <PanelShell active={active} admin><PanelHeader title={title} subtitle={subtitle} active={active} admin/>{children}</PanelShell>; }
export function StatCard({ label, value, sub }: {
    label: string;
    value: string;
    sub?: string;
}) { return <PanelCard className={s.stat}><div className={s.eyebrow}>{label}</div><strong>{value}</strong>{sub && <small>{sub}</small>}</PanelCard>; }
export const ProfileBox = ProfileMenu;
