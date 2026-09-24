import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactForm } from "./ContactForm";
import shared from "../home.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Mivan",
  description: "Talk to Mivan about your account, health signals, restaurant partnerships or press.",
};

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

const routes = [
  ["Support", "Account, app and billing"],
  ["Health", "Diet and allergen questions"],
  ["Partners", "Restaurants and menus"],
  ["Press", "Stories and media requests"],
];

export default function ContactPage() {
  return <div className={shared.landing}>
    <header className={`${shared.container} ${shared.nav}`}>
      <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
      <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <NavAuthActions />
      <MobileNavMenu links={links} />
    </header>

    <main className={`${shared.container} ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="contact-title">
        <div className={styles.heroLabel}><span>CONTACT MIVAN</span><span>HELLO / 01</span></div>
        <div className={styles.heroContent}>
          <div>
            <h1 id="contact-title">A real person is one message away.</h1>
            <p>Questions, feedback or a partnership idea — tell us what you need and we will route it to the right person.</p>
          </div>
          <div className={styles.availability}><i aria-hidden="true"/><div><strong>Team online</strong><small>Replies within 24 hours</small></div></div>
        </div>
        <dl className={styles.facts}>
          <div><dt>Reply time</dt><dd>Under 24 hours</dd></div>
          <div><dt>Languages</dt><dd>English · Persian</dd></div>
          <div><dt>Hours</dt><dd>Sun–Thu · 9:00–18:00 GST</dd></div>
        </dl>
      </section>

      <section className={styles.contactArea} aria-label="Send a message or find contact details">
        <ContactForm />
        <aside className={styles.sidebar} aria-label="Contact information">
          <section className={styles.direct} aria-labelledby="direct-title">
            <p className={styles.eyebrow}>DIRECT CONTACT</p>
            <h2 id="direct-title">One inbox. The right team.</h2>
            <a href="mailto:info@mivanfood.com">info@mivanfood.com</a>
            <div className={styles.routes}>{routes.map(([title, copy]) => <div key={title}><span>{title}</span><small>{copy}</small></div>)}</div>
          </section>

          <section className={styles.faq}>
            <div><p className={styles.eyebrow}>QUICK ANSWERS</p><h2>It may already be covered.</h2><p>Find clear answers about profiles, scans, wearables and subscriptions.</p></div>
            <Link href="/faq">Visit the FAQ</Link>
          </section>
        </aside>
      </section>

    </main>
    <Footer variant="legal" />
  </div>;
}
