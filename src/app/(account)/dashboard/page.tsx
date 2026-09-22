import Link from "next/link";
import { requireUser } from "@/server/auth";
import { AppShell, PanelHeader } from "@/components/AppShell";
import { PanelCard } from "@/components/Panel";
import s from "@/components/Panel.module.css";
export default async function DashboardPage() {
 const user = await requireUser();
 return <AppShell active="Home"><PanelHeader title={`Welcome, ${user.name}`} subtitle="Your Mivan account" active="Home"/><div className={s.stack}><PanelCard><h2>Make Mivan yours</h2><p className={s.muted}>Set your dietary preferences and profile to get started.</p><Link href="/settings" className={s.button}>Complete your profile</Link></PanelCard><div className={s.grid3}>{[["Recommendations", "No recommendations yet. The recommendation service is not connected."],["Health signals", "No device connected. Wearable syncing is not available yet."],["Menu scans", "No scans yet. Menu scanning is not connected."]].map(([title,body])=><PanelCard key={title}><h2>{title}</h2><p className={s.muted}>{body}</p></PanelCard>)}</div></div></AppShell>;
}
