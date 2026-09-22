import { ReactNode } from "react";
import { PanelShell, PanelHeader, ProfileMenu } from "./Panel";
import s from "./Panel.module.css";
export function AppShell({ children, active }: {
    children: ReactNode;
    active: string;
}) { return <PanelShell active={active}>{children}</PanelShell>; }
export function WatchLiveBadge() { return <div className={s.headerActions}><span className={s.badge}><i className={s.dot}/>Watch live</span><ProfileMenu /></div>; }
export { PanelHeader };
