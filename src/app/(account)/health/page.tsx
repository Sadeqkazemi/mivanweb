import Link from "next/link";
import { AppShell, PanelHeader } from "@/components/AppShell";
import s from "@/components/Panel.module.css";

export default function HealthPage() {
  return <AppShell active="My health">
    <PanelHeader title="My health" subtitle="Live context when you choose to connect it" active="My health" />
    <section className={s.healthEmpty} aria-labelledby="health-empty-title">
      <div className={s.healthEmptyCopy}>
        <p className={s.appKicker}>OPTIONAL HEALTH CONTEXT</p>
        <h2 id="health-empty-title">Your day can shape your next meal.</h2>
        <p>Connect a wearable to let stress, activity and recovery refine your recommendations. Mivan only uses the signals you choose to share.</p>
        <div className={s.deviceNames}><span>Apple Watch</span><span>Wear OS</span><span>Fitbit</span><span>Garmin</span></div>
        <Link href="/settings" className={s.appPrimary}>Manage connections</Link>
      </div>
      <div className={s.watchPreview} aria-hidden="true">
        <div className={s.watchBand} />
        <div className={s.watchFace}><small>LIVE SIGNAL</small><strong>—</strong><span>Waiting for a device</span></div>
        <div className={s.signalOrbit}><i /><i /><i /></div>
      </div>
    </section>
  </AppShell>;
}
