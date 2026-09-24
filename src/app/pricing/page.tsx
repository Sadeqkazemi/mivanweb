import { Footer } from "@/components/Footer";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import styles from "./pricing.module.css";

const plans = [
  {
    name: "Free",
    price: "$0",
    overline: "START HERE",
    description: "Build your food profile and get confident daily picks at home.",
    features: ["Taste and health profile", "Daily personalized picks", "5 menu scans each month"],
    cta: "Create free profile",
    note: "No card required",
  },
  {
    name: "Plus",
    price: "$9",
    overline: "BEST FOR TRAVEL",
    description: "Unlimited guidance for menus, travel days and live recovery.",
    features: ["Everything in Free", "Unlimited menu scans", "Smartwatch recovery guidance", "Mivan Club rewards"],
    cta: "Start with Plus",
    note: "Cancel anytime",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    overline: "FOR PEOPLE ON THE MOVE",
    description: "One simple plan for frequent-travel teams of up to 10 people.",
    features: ["Everything in Plus", "Up to 10 member profiles", "Central team billing", "Trip and expense friendly"],
    cta: "Choose Team",
    note: "Built for small teams",
  },
];

const comparison = [
  ["Taste and health profile", "Included", "Included", "Included"],
  ["Daily recommendations", "Included", "Included", "Included"],
  ["Menu scans", "5 / month", "Unlimited", "Unlimited"],
  ["Smartwatch recovery", "—", "Included", "Included"],
  ["Member profiles", "1", "1", "Up to 10"],
];

const faqs = [
  ["Is the Free plan really free?", "Yes. Create a complete taste and health profile, get daily recommendations and scan five menus every month without adding a card."],
  ["Can I change or cancel my plan?", "Yes. Plus is month-to-month, and you can change or cancel it from your account settings at any time."],
  ["Which watches work with Plus?", "Mivan supports Apple Watch, Wear OS, Fitbit and Garmin for live stress, activity and recovery context."],
  ["How does Team billing work?", "Team includes up to 10 member profiles under one central monthly subscription designed for frequent-travel teams."],
];

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

export default function PricingPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/pricing" ? "page" : undefined} className={href === "/pricing" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <MobileNavMenu links={links} activeHref="/pricing" />
      </header>

      <main className={`${shared.container} ${styles.page}`}>
        <section className={styles.hero} aria-labelledby="pricing-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>PRICING THAT TRAVELS WITH YOU</p>
            <h1 id="pricing-title">Start free.<br />Go further when <span>life moves.</span></h1>
            <p className={styles.heroText}>Build your private food profile for free. Upgrade when you want unlimited menu scans, smartwatch context and guidance in every city.</p>
            <div className={styles.heroActions}>
              <Link href="/login" className={styles.primaryButton}>Start free</Link>
            </div>
            <div className={styles.heroTrust}><span>✓ No card required</span><span>✓ Cancel anytime</span><span>✓ Health data stays private</span></div>
          </div>

          <aside className={styles.heroPlan} aria-label="Mivan Plus plan preview">
            <div className={styles.heroPlanTop}><span>MIVAN PLUS</span><b>MOST POPULAR</b></div>
            <div className={styles.heroPrice}><strong>$9</strong><span>per month</span></div>
            <p>Everything you need when the menu, city and rhythm of your day keep changing.</p>
            <div className={styles.heroBenefits}>
              <div><i aria-hidden="true">∞</i><span><small>MENU SCANS</small><strong>Unlimited</strong></span></div>
              <div><i aria-hidden="true">72</i><span><small>LIVE CONTEXT</small><strong>Recovery ready</strong></span></div>
              <div><i aria-hidden="true">120+</i><span><small>TRAVEL</small><strong>Cities covered</strong></span></div>
            </div>
            <div className={styles.heroPlanFoot}><span><i /> Your profile stays in sync</span><Link href="/login">Choose Plus</Link></div>
          </aside>
        </section>

        <section className={styles.promiseBar} aria-label="Pricing promises">
          <div><span>01</span><strong>Begin without a card</strong><small>See the value before you pay.</small></div>
          <div><span>02</span><strong>Upgrade only when useful</strong><small>Your free profile stays yours.</small></div>
          <div><span>03</span><strong>Leave whenever you want</strong><small>No contracts or hidden fees.</small></div>
        </section>

        <section id="plans" className={styles.plansSection} aria-labelledby="plans-title">
          <div className={styles.sectionHeading}><div><p className={styles.kicker}>CHOOSE YOUR LEVEL</p><h2 id="plans-title">One profile. Three ways to use it.</h2></div><p>Every plan starts with the same private understanding of your taste, diet and health. Choose how far you want to take it.</p></div>
          <div className={styles.plans}>
            {plans.map(plan => (
              <article key={plan.name} className={`${styles.plan} ${plan.popular ? styles.popularPlan : ""}`}>
                <div className={styles.planHeader}><span>{plan.overline}</span>{plan.popular && <b>POPULAR</b>}</div>
                <h3>{plan.name}</h3>
                <div className={styles.planPrice}><strong>{plan.price}</strong><span>/ month</span></div>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.planDivider} />
                <ul>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <Link href="/login" className={styles.planButton}>{plan.cta}</Link>
                <small className={styles.planNote}>{plan.note}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.compareSection} aria-labelledby="compare-title">
          <div className={styles.compareIntro}><p className={styles.kicker}>AT A GLANCE</p><h2 id="compare-title">Compare what comes with each plan.</h2><p>Start with the essentials, then add unlimited scanning and live health context when you need them.</p></div>
          <div className={styles.tableWrap}>
            <table>
              <thead><tr><th>FEATURE</th><th>FREE</th><th className={styles.plusColumn}>PLUS</th><th>TEAM</th></tr></thead>
              <tbody>{comparison.map(([feature, free, plus, team]) => <tr key={feature}><th>{feature}</th><td>{free}</td><td className={styles.plusColumn}>{plus}</td><td>{team}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="questions-title">
          <div className={styles.faqHeading}><p className={styles.kicker}>GOOD TO KNOW</p><h2 id="questions-title">Clear answers before you choose.</h2></div>
          <div className={styles.answers}>{faqs.map(([question, answer], index) => <article key={question}><span>0{index + 1}</span><div><h3>{question}</h3><p>{answer}</p></div></article>)}</div>
        </section>

        <section className={styles.finalCta} aria-labelledby="pricing-cta-title">
          <div><p>READY WHEN YOU ARE</p><h2 id="pricing-cta-title">Your first useful recommendation is free.</h2></div>
          <Link href="/login">Create my profile</Link>
        </section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
