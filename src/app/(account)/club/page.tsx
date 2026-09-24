import Link from "next/link";
import { AppShell, PanelHeader } from "@/components/AppShell";
import s from "@/components/Panel.module.css";

const milestones = [["0", "Member"], ["250", "Explorer"], ["750", "Insider"], ["1,500", "Local"]];

export default function ClubPage() {
  return <AppShell active="Mivan Club">
    <PanelHeader title="Mivan Club" subtitle="Recognition for discovering food that fits" active="Mivan Club" gold />
    <section className={s.clubExperience} aria-labelledby="club-title">
      <div className={s.clubIntro}>
        <p className={s.appKicker}>YOUR MEMBERSHIP</p>
        <strong>0</strong><span>POINTS</span>
        <h2 id="club-title">Start with your first useful choice.</h2>
        <p>Points and rewards will appear here as Club benefits become available. Your account is already ready for them.</p>
        <Link href="/settings" className={s.appLightButton}>Review my profile</Link>
      </div>
      <div className={s.clubJourney}>
        <div className={s.clubJourneyHeading}><span>MEMBERSHIP PATH</span><small>Benefits coming soon</small></div>
        <div className={s.clubTrack}>{milestones.map(([points, label], index) => <div key={label} className={index === 0 ? s.currentMilestone : ""}><i /><strong>{label}</strong><span>{points} pts</span></div>)}</div>
        <p>Complete your profile now so future rewards can reflect the food experiences you value.</p>
      </div>
    </section>
  </AppShell>;
}
