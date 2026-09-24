import { Footer } from "@/components/Footer";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import styles from "./about.module.css";

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
const stats = [
  ["120+", "cities covered", "Local choices, one familiar profile"],
  ["98%", "match accuracy", "Recommendations that keep learning"],
  ["3M+", "meals matched", "Real decisions in real moments"],
  ["24/7", "live guidance", "Useful whenever your day changes"],
];
const values = [
  { number: "01", title: "Personal before popular", body: "A good recommendation starts with the person, not the trend. Taste, health and context shape every answer.", icon: "profile" },
  { number: "02", title: "Clarity over complexity", body: "Nutrition can feel noisy. We turn detailed signals into one useful choice you can understand and trust.", icon: "clarity" },
  { number: "03", title: "Privacy by design", body: "Health information stays protected and under your control. It is never treated as advertising inventory.", icon: "privacy" },
];
const disciplines = [
  { title:"Nutrition", body:"Turns evidence into guidance that works in everyday life.", label:"EVIDENCE LED", icon:"nutrition", image:"/images/about-discipline-nutrition.webp", alt:"A nutritionist arranging salmon and fresh vegetables on a plate" },
  { title:"Intelligence", body:"Finds the relationship between food, place and live signals.", label:"CONTEXT ENGINE", icon:"intelligence", image:"/images/about-discipline-intelligence.webp", alt:"A person reviewing connected wellness data from a smartwatch and phone" },
  { title:"Product", body:"Makes every recommendation quick, calm and understandable.", label:"HUMAN CENTERED", icon:"product", image:"/images/about-discipline-product.webp", alt:"A traveler using a personalized meal recommendation app" },
  { title:"Hospitality", body:"Keeps local food culture and human taste at the center.", label:"LOCAL BY DESIGN", icon:"hospitality", image:"/images/about-discipline-hospitality.webp", alt:"A chef and server preparing a carefully plated restaurant meal" },
];

function ValueIcon({ type }: { type: string }) {
  if (type === "privacy") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 2.7 8.1 7 10 4.3-1.9 7-5.5 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.8 3.6-4"/></svg>;
  if (type === "clarity") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M4 12h16M4 17h8"/><circle cx="17" cy="7" r="2"/><circle cx="15" cy="17" r="2"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5.5 20c.7-4.3 2.9-6.4 6.5-6.4s5.8 2.1 6.5 6.4"/><path d="m18 4 .7 1.4L20 6l-1.3.6L18 8l-.7-1.4L16 6l1.3-.6L18 4Z"/></svg>;
}

function DisciplineIcon({ type }: { type: string }) {
  if (type === "nutrition") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 4.5c-7 .2-11 3.8-11 9.5 4.8.7 9.1-2.4 11-9.5Z"/><path d="M5 20c2.2-5.1 5.7-8.5 10.4-10.4"/></svg>;
  if (type === "intelligence") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="m8 8.2 2.8 7.5M16 8.2l-2.8 7.5M8.4 7h7.2"/></svg>;
  if (type === "product") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><path d="M17 14v6M14 17h6"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15h14M7 15a5 5 0 0 1 10 0M12 8V6M4 19h16"/><circle cx="12" cy="5" r="1"/></svg>;
}

export default function AboutPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/about" ? "page" : undefined} className={href === "/about" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <MobileNavMenu links={links} activeHref="/about" />
      </header>

      <main className={`${shared.container} ${styles.page}`}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>WHY MIVAN EXISTS</p>
            <h1 id="about-title">Food should fit the <span>person</span> eating it.</h1>
            <p className={styles.heroText}>Mivan brings taste, health and the rhythm of your day into one clear recommendation, wherever life takes you.</p>
            <div className={styles.heroActions}><Link href="/how-it-works" className={styles.primaryAction}>How Mivan works</Link></div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/food-salmon-greens.webp" alt="Herb roasted salmon served with asparagus and fresh greens" fill priority sizes="(max-width: 800px) 100vw, 52vw" />
            <div className={styles.visualTopbar}><span><i />LIVE CONTEXT</span><b>UPDATED NOW</b></div>
            <aside className={styles.visualResult} aria-label="Example personalized meal match">
              <div className={styles.resultScore}><strong>91%</strong><span>PERSONAL MATCH</span></div>
              <div className={styles.resultCopy}><small>YOUR BEST FIT</small><h2>Herb roasted salmon</h2><p>High protein · omega rich · recovery friendly</p></div>
              <div className={styles.contextList}><span>Taste aligned</span><span>Health checked</span><span>Live context</span></div>
            </aside>
          </div>
        </section>

        <section className={styles.stats} aria-label="Mivan in numbers">
          {stats.map(([value, label, detail], index) => <article key={label}><div><span>{String(index + 1).padStart(2, "0")}</span><i /></div><strong>{value}</strong><h2>{label}</h2><p>{detail}</p></article>)}
        </section>

        <section className={styles.mission} aria-labelledby="mission-title">
          <div className={styles.missionTitle}><p className={styles.kicker}>OUR MISSION</p><h2 id="mission-title">Make the right meal easier to find.</h2><div className={styles.missionSignal}><span>PERSON</span><i /><span>MOMENT</span><i /><span>MEAL</span></div></div>
          <div className={styles.missionCopy}><p>Travel, stress, sleep and health conditions can change what your body needs. Restaurant menus rarely understand any of that.</p><p>Mivan closes the gap. We learn what you enjoy, respect what you need to avoid and read the context around your day. Then we turn it into a choice that feels practical, local and unmistakably yours.</p><blockquote>Better food guidance should feel less like homework and more like good hospitality.</blockquote></div>
        </section>

        <section className={styles.valuesSection} aria-labelledby="values-title">
          <div className={styles.sectionHeading}><div><p className={styles.kicker}>WHAT GUIDES US</p><h2 id="values-title">Principles you can feel in the product.</h2></div><p>Every detail is designed to make personal food guidance safer, calmer and more useful.</p></div>
          <div className={styles.values}>{values.map(value => <article key={value.title}><div className={styles.valueTop}><span>{value.number}</span><div className={styles.valueIcon}><ValueIcon type={value.icon} /></div></div><h3>{value.title}</h3><p>{value.body}</p><div className={styles.valueFooter}><i /><span>MIVAN PRINCIPLE</span></div></article>)}</div>
        </section>

        <section className={styles.disciplines} aria-labelledby="team-title">
          <div className={styles.disciplineHeading}><p className={styles.kicker}>BUILT ACROSS DISCIPLINES</p><h2 id="team-title">Different expertise.<br />One clear answer.</h2><p>Mivan combines human understanding with careful technology so every suggestion feels relevant in the moment.</p></div>
          <div className={styles.disciplineGrid}>{disciplines.map((discipline, index) => <article key={discipline.title}>
            <div className={styles.disciplineVisual}><Image src={discipline.image} alt={discipline.alt} fill sizes="(max-width: 460px) 100vw, (max-width: 1000px) 50vw, 45vw" /></div>
            <div className={styles.disciplineBody}>
              <div className={styles.disciplineCardTop}><span>{String(index + 1).padStart(2, "0")}</span><div className={styles.disciplineIcon}><DisciplineIcon type={discipline.icon} /></div></div>
              <div className={styles.disciplineCopy}><h3>{discipline.title}</h3><p>{discipline.body}</p></div>
              <div className={styles.disciplineLabel}><i /><span>{discipline.label}</span></div>
            </div>
          </article>)}</div>
        </section>

        <section className={styles.closing} aria-labelledby="about-cta-title"><div><p className={styles.kicker}>THE NEXT MEAL</p><h2 id="about-cta-title">Your profile gets smarter. Your choices get simpler.</h2></div><Link href="/login">Build my food profile</Link></section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
