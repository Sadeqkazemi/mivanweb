import Link from "next/link";
import { AppShell, PanelHeader } from "@/components/AppShell";
import { PanelCard } from "@/components/Panel";
export default function Page(){return <AppShell active="Mivan Club"><PanelHeader title="Mivan Club" subtitle="Your account" active="Mivan Club"/><PanelCard><h2>0 points</h2><p>You have no points or rewards yet. Earning points and redeeming rewards are not enabled.</p><Link href="/settings">Open Settings →</Link></PanelCard></AppShell>;}
