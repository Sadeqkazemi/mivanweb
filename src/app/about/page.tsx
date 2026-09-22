import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import styles from "./about.module.css";
const stats = [
  { value: "120+", label: "Cities covered" },
  { value: "98%", label: "Match accuracy" },
  { value: "3M+", label: "Meals matched" },
  { value: "24/7", label: "Live guidance" },
];

const values = [
  { title: "Health first", body: "Every recommendation is safe for your conditions and allergies — no exceptions." },
  { title: "Your data, yours", body: "Health data is encrypted and never sold. You stay in control." },
  { title: "Built for real life", body: "Stress, travel and busy days are the norm. Mivan is designed for them." },
];

const team = [
  { role: "Founder & CEO" },
  { role: "Head of Nutrition" },
  { role: "Head of AI" },
  { role: "Head of Design" },
];

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
export default function AboutPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/about" ? "page" : undefined} className={href === "/about" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/about" ? "page" : undefined}>{label}</Link>)}</nav></details>
      </header>
      <main className={shared.container}>
        <section className={featureStyles.hero} aria-labelledby="about-title">
          <p className={shared.eyebrow}>About</p>
          <h1 id="about-title">Food that fits you,<br />wherever you are</h1>
          <p className={`${featureStyles.intro} ${styles.intro}`}>Millions travel and struggle to find food that suits their taste, diet and health. We built Mivan to close that gap.</p>
        </section>
        <section className={`${shared.why} ${styles.mission}`} aria-labelledby="mission-title">
          <div className={shared.whyIntro}>
            <div><p className={shared.eyebrow}>Our mission</p><h2 id="mission-title" className={styles.title}>Help everyone eat<br />what truly fits them.</h2></div>
            <div className={shared.whyCopy}><p>Modern life loads our days with stress and pressure that quietly shape what our bodies actually need — and travel makes it even harder to find the right meal.</p><p>Mivan learns your palate, understands your conditions and diet, reads your day through your smartwatch, and recommends the right meal for your exact moment — even from a photo of a menu you have never seen.</p></div>
          </div>
          <div className={shared.stats}>{stats.map(stat => <div className={shared.stat} key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </section>
        <section className={styles.section} aria-labelledby="values-title">
          <div className={styles.heading}><p className={shared.eyebrow}>Our values</p><h2 id="values-title" className={styles.title}>What we believe</h2></div>
          <div className={shared.threeGrid}>{values.map(value => <article key={value.title} className={styles.value}><h3>{value.title}</h3><p>{value.body}</p></article>)}</div>
        </section>
        <section className={styles.section} aria-labelledby="team-title">
          <div className={styles.heading}><p className={shared.eyebrow}>Team</p><h2 id="team-title" className={styles.title}>The people behind Mivan</h2></div>
          <div className={styles.team}>{team.map(member => <article className={styles.member} key={member.role}><div className={`${shared.stripe} ${styles.photo}`} role="img" aria-label={`Team photo placeholder: ${member.role}`}><span>team photo</span></div><div className={styles.memberCopy}><h3>Team member</h3><p>{member.role}</p></div></article>)}</div>
        </section>
        <section className={`${shared.cta} ${featureStyles.cta}`} aria-labelledby="download-title"><h2 id="download-title" className={shared.title}>Eat what truly fits you.</h2><p>Download Mivan free on iPhone and Android and get food that fits your body, taste, and day.</p><Link href="/download" className={`${shared.button} ${shared.outline}`}>Get the app</Link></section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
