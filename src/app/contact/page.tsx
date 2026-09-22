import { NavAuthActions } from "@/components/NavAuthActions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactForm } from "./ContactForm";
import shared from "../home.module.css";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact | Mivan", description: "Contact Mivan for support, health and allergen questions, restaurant partnerships or press." };
const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
const contacts = [["General", "hello@mivan.ai"], ["Account & billing", "help@mivan.ai"], ["Restaurants", "partners@mivan.ai"], ["Press", "press@mivan.ai"]];
export default function ContactPage() {
  return <div className={shared.landing}>
    <header className={`${shared.container} ${shared.nav}`}>
      <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
      <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <NavAuthActions />
      <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
    </header>
    <main className={`${shared.container} ${styles.page}`}>
      <header className={styles.heading}><div><p className={styles.eyebrow}>Contact</p><h1>Tell us what you need</h1></div><dl className={styles.facts}><div><dt>Reply time</dt><dd>Under 24 hours</dd></div><div><dt>Languages</dt><dd>English, Persian</dd></div></dl></header>
      <div className={styles.layout}><ContactForm /><aside className={styles.sidebar} aria-label="Contact information">
        <dl className={styles.emails}>{contacts.map(([label,email]) => <div key={email}><dt>{label}</dt><dd><a href={`mailto:${email}`}>{email}</a></dd></div>)}</dl>
        <section className={styles.office} aria-labelledby="office-title"><div className={styles.map} role="img" aria-label="Office map placeholder"><span>office map</span></div><div className={styles.officeCopy}><h2 id="office-title">Mivan HQ</h2><address>Downtown Dubai, Burj Khalifa Blvd, Office 210, Dubai, UAE</address><p>Sun–Thu, 9:00–18:00 GST</p></div></section>
        <section className={styles.faq}><h2>Looking for a quick answer?</h2><p>Sixteen common questions are already answered.</p><Link href="/faq">Read the FAQ →</Link></section>
      </aside></div>
    </main><Footer variant="legal" />
  </div>;
}
