import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { requireUser } from "@/server/auth";
import { db } from "@/server/db";
import { AppShell, PanelHeader } from "@/components/AppShell";
import s from "@/components/Panel.module.css";

const starterPicks = [
  { image: "/images/food-miso-magnesium-bowl-v2.webp", title: "Miso magnesium bowl", match: "91%", detail: "Calm energy · gut-friendly" },
  { image: "/images/food-salmon-greens.webp", title: "Salmon & greens", match: "88%", detail: "Low sodium · high protein" },
  { image: "/images/food-herb-lentil-plate.webp", title: "Herb lentil plate", match: "84%", detail: "Plant-forward · high fibre" },
  { image: "/images/food-green-tea-dates.webp", title: "Green tea & dates", match: "79%", detail: "Light reset · steady energy" },
];

export default async function DashboardPage() {
  const user = await requireUser();
  const profile = await db.profile.findUnique({ where: { userId: user.id } });
  const detailsReady = Boolean(profile?.phone || profile?.location);
  const preferencesReady = Boolean(profile?.lowSodium || profile?.diabetesAware || profile?.plantForward);
  const messagesReady = Boolean(profile?.dailyPicks || profile?.clubUpdates);
  const completed = 1 + Number(detailsReady) + Number(preferencesReady) + Number(messagesReady);
  const progress = completed * 25;

  const nextSteps = [
    ["01", "Your profile", detailsReady ? "Your contact details are ready." : "Add your location or phone so Mivan can tailor the experience.", detailsReady ? "Ready" : "Add details", "/settings"],
    ["02", "Food preferences", preferencesReady ? "Your first food preferences are saved." : "Choose the preferences that should guide every recommendation.", preferencesReady ? "Ready" : "Choose preferences", "/settings"],
    ["03", "Health context", "Connect a wearable only when you want your day to shape your picks.", "Optional", "/health"],
  ];

  return <AppShell active="Home">
    <PanelHeader title={`Welcome, ${user.name}`} subtitle="Your personal food workspace" active="Home" />
    <div className={s.accountPage}>
      <section className={s.dashboardHero} aria-labelledby="setup-title">
        <div className={s.dashboardIntro}>
          <p className={s.appKicker}>{progress === 100 ? "YOUR PROFILE IS READY" : "FINISH YOUR PROFILE"}</p>
          <h2 id="setup-title">Food choices that begin with you.</h2>
          <p>Set your taste, diet and health preferences once. Mivan uses them to make every menu and daily suggestion easier to understand.</p>
          <Link href="/settings" className={s.appPrimary}>{progress === 100 ? "Review my profile" : "Continue setup"}</Link>
        </div>
        <div className={s.profileProgress} aria-label={`Profile is ${progress} percent complete`}>
          <div style={{ "--profile-progress": `${progress * 3.6}deg` } as CSSProperties}><strong>{progress}%</strong><span>PROFILE READY</span></div>
          <p>{progress === 100 ? "Your preferences are ready for personal recommendations." : `${4 - completed} short ${4 - completed === 1 ? "step" : "steps"} left before your profile is complete.`}</p>
        </div>
      </section>

      <section className={s.pickSection} aria-labelledby="picks-title">
        <div className={s.appSectionHeading}>
          <div><p>STARTER IDEAS</p><h2 id="picks-title">A first look at your daily picks</h2></div>
          <span>Swipe to explore</span>
        </div>
        <div className={s.pickRail} aria-label="Starter meal ideas">
          {starterPicks.map((pick, index) => <article className={s.homePick} key={pick.title}>
            <div className={s.homePickImage}>
              <Image src={pick.image} alt="" fill sizes="(max-width: 650px) 78vw, (max-width: 1100px) 38vw, 250px" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className={s.homePickCopy}>
              <div><h3>{pick.title}</h3><strong>{pick.match}</strong></div>
              <p>{pick.detail}</p>
            </div>
          </article>)}
        </div>
        <p className={s.pickNote}>These are starter ideas. Complete your profile to make future picks reflect your needs.</p>
      </section>

      <section className={s.activitySection} aria-labelledby="status-title">
        <div className={s.appSectionHeading}><div><p>NEXT STEPS</p><h2 id="status-title">Make Mivan yours</h2></div></div>
        <div className={s.activityList}>{nextSteps.map(([number, title, body, status, href]) => <Link href={href} key={title} className={s.activityItem}>
          <span className={s.activityNumber}>{number}</span>
          <div><h3>{title}</h3><p>{body}</p></div>
          <small>{status}</small>
        </Link>)}</div>
      </section>
    </div>
  </AppShell>;
}
