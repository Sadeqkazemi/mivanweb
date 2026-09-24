import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Mivan",
  description: "How Mivan protects your profile, health signals and food preferences.",
};

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

const rights = [
  ["Access", "See the personal information we hold."],
  ["Export", "Receive your data in a portable format."],
  ["Correct", "Fix an inaccurate preference or signal."],
  ["Delete", "Remove your account and personal data."],
  ["Withdraw", "Stop an optional connection or consent."],
  ["Restrict", "Ask us to limit certain processing."],
];

export default function PrivacyPage() {
  return <div className={shared.landing}>
    <header className={`${shared.container} ${shared.nav}`}>
      <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
      <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <NavAuthActions />
      <MobileNavMenu links={links} />
    </header>

    <main className={`${shared.container} ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="privacy-title">
        <div className={styles.heroLabel}><span>PRIVACY AT MIVAN</span><span>POLICY / 2026</span></div>
        <div className={styles.heroGrid}>
          <div>
            <h1 id="privacy-title">Your data works for you. <em>And only you.</em></h1>
            <p className={styles.intro}>Mivan uses taste, diet and optional health signals to make food guidance personal. This page explains exactly what we collect and keeps every choice in your hands.</p>
          </div>
          <div className={styles.heroSeal}>
            <span className={styles.shield} aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m12 3 7 3v6c0 5-7 8-7 8s-7-3-7-8V6l7-3Z"/><path d="m9.3 12 1.8 1.8 3.8-4"/></svg></span>
            <strong>Private by design</strong>
            <small>Health data encrypted</small>
          </div>
        </div>
        <dl className={styles.dates}>
          <div><dt>Last updated</dt><dd><time dateTime="2026-09-22">22 September 2026</time></dd></div>
          <div><dt>Effective</dt><dd><time dateTime="2026-10-01">1 October 2026</time></dd></div>
          <div><dt>Questions</dt><dd><a href="mailto:info@mivanfood.com">info@mivanfood.com</a></dd></div>
        </dl>
      </section>

      <section className={styles.sensitive} aria-labelledby="health-data-title">
        <div className={styles.sensitiveHeading}><p className={styles.eyebrow}>OPTIONAL HEALTH DATA</p><h2 id="health-data-title">Connected when you want it. Disconnected when you don’t.</h2></div>
        <div className={styles.sensitiveCopy}><p>A smartwatch connection is always optional. Disconnecting stops new readings immediately, and deleting the connection removes the stored history from it.</p><p>Health signals are used only for your recommendations. They are never shown to restaurants or used to target advertising.</p><Link href="/settings">Manage my connections</Link></div>
      </section>

      <section className={styles.rights} aria-labelledby="rights-title">
        <div className={styles.rightsHeading}><p className={styles.eyebrow}>YOUR CONTROLS</p><h2 id="rights-title">Your profile belongs to you.</h2><p>Send a request through Settings or email us. We respond within 30 days.</p></div>
        <div className={styles.rightsGrid}>{rights.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className={styles.contact} aria-labelledby="privacy-contact-title">
        <div><p className={styles.eyebrow}>STILL CURIOUS?</p><h2 id="privacy-contact-title">Ask us anything about your data.</h2><p>Our team can explain a recommendation, a connection or a privacy request in plain language.</p></div>
        <Link href="/contact">Contact Mivan</Link>
      </section>
    </main>
    <Footer variant="legal" active="/privacy" />
  </div>;
}
