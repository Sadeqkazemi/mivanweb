import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import styles from "./features.module.css";
const blocks = [
  {
    eyebrow: "Personalized",
    title: "Picks built around your body",
    body: "A short AI quiz learns your flavors, diet, allergies and conditions. Every recommendation is ranked for you — not the average person.",
    points: ["Taste & flavor profile", "Diabetes, low-sodium & more", "Allergy-safe by default"],
    imgLabel: "app screen — daily picks",
  },
  {
    eyebrow: "Menu scan",
    title: "Snap any menu, know what fits",
    body: "Point your camera at a restaurant menu. Mivan reads every dish and ranks it against your profile, so you order with confidence in any city.",
    points: ["Reads the whole menu", "Ranks every dish for you", "Flags allergens instantly"],
    imgLabel: "app screen — menu scan results",
    reverse: true,
  },
  {
    eyebrow: "Apple Watch",
    title: "Stress-aware recovery",
    body: "When your watch shows rising stress or a heavy day, Mivan suggests food and drinks that help you bounce back — right for your body in that moment.",
    points: ["Reads stress, heart rate & sleep", "Recovery suggestions", "Works while you travel"],
    imgLabel: "app screen — watch recovery",
  },
  {
    eyebrow: "Everywhere",
    title: "Right food in any city",
    body: "At home, traveling, or reading a menu you have never seen — Mivan works across 120+ cities and every major smartwatch.",
    points: ["120+ cities covered", "Apple Watch, Wear OS, Fitbit, Garmin", "Offline-friendly profiles"],
    imgLabel: "app screen — discover map",
    reverse: true,
  },
  {
    eyebrow: "Mivan Club",
    title: "Get rewarded for eating well",
    body: "Earn points for healthy choices and redeem them for Plus, partner vouchers and more.",
    points: ["Points for every healthy pick", "Gold & Platinum tiers", "Partner rewards"],
    imgLabel: "app screen — club & rewards",
  },
];

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

export default function FeaturesPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/features" ? "page" : undefined} className={href === "/features" ? styles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/features" ? "page" : undefined}>{label}</Link>)}</nav></details>
      </header>
      <main className={shared.container}>
        <section className={styles.hero} aria-labelledby="features-title">
          <p className={shared.eyebrow}>Features</p>
          <h1 id="features-title">Everything Mivan does<br />for you</h1>
          <p className={styles.intro}>One companion for taste, health and recovery — in your pocket, wherever the day takes you.</p>
        </section>
        <div className={styles.blocks}>
          {blocks.map((block, index) => <section key={block.title} className={styles.block} aria-labelledby={`feature-${index}`}>
            <div className={styles.copy}>
              <p className={shared.eyebrow}>{block.eyebrow}</p>
              <h2 id={`feature-${index}`}>{block.title}</h2>
              <p className={styles.body}>{block.body}</p>
              <ul>{block.points.map(point => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
            </div>
            <div className={`${shared.stripe} ${styles.screen}`} role="img" aria-label={block.imgLabel}><span>{block.imgLabel}</span></div>
          </section>)}
        </div>
        <section className={`${shared.cta} ${styles.cta}`} aria-labelledby="download-title"><h2 id="download-title" className={shared.title}>Eat what truly fits you.</h2><p>Download Mivan free on iPhone and Android and get food that fits your body, taste, and day.</p><Link href="/download" className={`${shared.button} ${shared.outline}`}>Get the app</Link></section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
