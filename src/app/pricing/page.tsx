import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import styles from "./pricing.module.css";
const plans = [
  {
    name: "Free",
    price: "$0",
    tag: "Personalized picks at home.",
    features: ["Taste & health profile", "Daily recommendations", "5 menu scans / month"],
    cta: "Get started",
  },
  {
    name: "Plus",
    price: "$9",
    tag: "Full power, everywhere you go.",
    features: ["Everything in Free", "Unlimited menu scans", "Apple Watch recovery", "Mivan Club rewards"],
    cta: "Start Plus",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    tag: "For frequent-travel teams.",
    features: ["Everything in Plus", "Up to 10 members", "Trip & expense friendly"],
    cta: "Get started",
  },
];

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes. The Free plan gives you a full taste & health profile and daily recommendations at home, with no card required.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Plus is month-to-month and you can cancel from Settings in one tap.",
  },
  {
    q: "Do you offer team billing?",
    a: "Yes — the Team plan supports up to 10 members with trip- and expense-friendly billing.",
  },
];

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

export default function PricingPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/pricing" ? "page" : undefined} className={href === "/pricing" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/pricing" ? "page" : undefined}>{label}</Link>)}</nav></details>
      </header>
      <main className={shared.container}>
        <section className={featureStyles.hero} aria-labelledby="pricing-title">
          <p className={shared.eyebrow}>Pricing</p>
          <h1 id="pricing-title">Start free. Upgrade<br />when you travel more</h1>
          <p className={featureStyles.intro}>Personalized picks are free forever. Unlock unlimited scans and recovery when you are on the move.</p>
        </section>
        <section className={`${shared.threeGrid} ${styles.plans}`} aria-label="Available plans">
          {plans.map(plan => <article key={plan.name} className={`${shared.plan} ${plan.popular ? `${shared.popular} ${styles.plus}` : ""}`}>
            {plan.popular && <div className={shared.popularBadge}>Most popular</div>}
            <h2 className={shared.planName}>{plan.name}</h2>
            <div className={shared.price}><strong>{plan.price}</strong><span>/mo</span></div><p>{plan.tag}</p>
            <ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
            <Link href="/login" className={`${shared.button} ${shared.outline}`}>{plan.cta}</Link>
          </article>)}
        </section>
        <section className={styles.questions} aria-labelledby="questions-title">
          <h2 id="questions-title">Pricing questions</h2>
          <div className={styles.answers}>{faqs.map(faq => <article className={styles.answer} key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></article>)}</div>
        </section>
        <section className={`${shared.cta} ${featureStyles.cta} ${styles.cta}`} aria-labelledby="download-title"><h2 id="download-title" className={shared.title}>Eat what truly fits you.</h2><p>Download Mivan free on iPhone and Android and get food that fits your body, taste, and day.</p><Link href="/download" className={`${shared.button} ${shared.outline}`}>Get the app</Link></section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
