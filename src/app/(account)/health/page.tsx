import Link from "next/link";
import { AppShell, PanelHeader } from "@/components/AppShell";
import { PanelCard } from "@/components/Panel";
export default function Page(){return <AppShell active="My health"><PanelHeader title="My health" subtitle="Your account" active="My health"/><PanelCard><h2>No connected devices</h2><p>No health readings yet. Wearable connections and health data collection are not enabled. You can manage your dietary preferences in Settings.</p><Link href="/settings">Open Settings →</Link></PanelCard></AppShell>;}
