import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import styles from "./how-it-works.module.css";
const steps = [
  {
    n: 1,
    title: "Tell us your taste & health",
    body: "A short AI quiz learns your flavors, diet, allergies and conditions — like diabetes or low-sodium needs. It takes about two minutes.",
    img: "app screen — onboarding quiz",
  },
  {
    n: 2,
    title: "We read your day",
    body: "Connect your Apple Watch and Mivan factors in your stress, heart rate and activity, so picks fit how your body actually feels.",
    img: "app screen — watch sync",
  },
  {
    n: 3,
    title: "Get the right pick",
    body: "Personalized food and drinks wherever you are — at home, traveling, or from a photo of any menu.",
    img: "app screen — recommendation",
  },
];

const underTheHood = [
  { title: "Taste model", body: "Learns the flavors and textures you actually enjoy, and adapts as you rate meals." },
  { title: "Health graph", body: "Maps your conditions, diet and allergies to every dish for a safe, ranked match." },
  { title: "Live signals", body: "Reads your smartwatch in real time to adjust picks for stress, sleep and activity." },
];

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

export default function HowItWorksPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/how-it-works" ? "page" : undefined} className={href === "/how-it-works" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/how-it-works" ? "page" : undefined}>{label}</Link>)}</nav></details>
      </header>
      <main className={shared.container}>
        <section className={featureStyles.hero} aria-labelledby="how-title">
          <p className={shared.eyebrow}>How it works</p>
          <h1 id="how-title">Three steps to the right<br />meal</h1>
          <p className={featureStyles.intro}>No calorie counting, no guesswork. Set up once and Mivan does the thinking every time you eat.</p>
        </section>
        <div className={featureStyles.blocks}>
          {steps.map((step, index) => <section key={step.n} className={`${featureStyles.block} ${index % 2 ? styles.reverse : ""}`} aria-labelledby={`step-${step.n}`}>
            <div className={`${featureStyles.copy} ${styles.copy}`}>
              <div className={styles.number}>{step.n}</div>
              <h2 id={`step-${step.n}`}>{step.title}</h2>
              <p className={featureStyles.body}>{step.body}</p>
            </div>
            <div className={`${shared.stripe} ${featureStyles.screen} ${styles.screen}`} role="img" aria-label={step.img}><span>{step.img}</span></div>
          </section>)}
        </div>
        <section className={styles.accuracy} aria-labelledby="accuracy-title">
          <div className={styles.heading}><p className={shared.eyebrow}>Under the hood</p><h2 id="accuracy-title">What makes it accurate</h2></div>
          <div className={shared.threeGrid}>{underTheHood.map(item => <article className={styles.card} key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </section>
        <section className={`${shared.cta} ${featureStyles.cta}`} aria-labelledby="download-title"><h2 id="download-title" className={shared.title}>Eat what truly fits you.</h2><p>Download Mivan free on iPhone and Android and get food that fits your body, taste, and day.</p><Link href="/download" className={`${shared.button} ${shared.outline}`}>Get the app</Link></section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
