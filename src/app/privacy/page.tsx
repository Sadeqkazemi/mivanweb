import { NavAuthActions } from "@/components/NavAuthActions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import styles from "./privacy.module.css";

export const metadata: Metadata = { title: "Privacy Policy | Mivan", description: "What Mivan holds, why we hold it, and how to take your data back." };
const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
const categories = [
  ["Account", "Name, email, and authentication details from Gmail sign-in or a password account.", "Run your account"],
  ["Taste & diet", "Dishes you save, rate, order or skip; dietary preferences; allergies; and menu photos you scan.", "Match your meals"],
  ["Health", "Heart rate, sleep, activity and stress signals from a smartwatch or health account you choose to connect.", "Fit your day"],
  ["Device & usage", "Device model, app version, approximate location when you ask for nearby restaurants, and basic screen analytics.", "Keep the app working"],
];
const rights = [["Access", "See everything we hold about you."], ["Export", "Take your data out in a portable file."], ["Correct", "Fix a wrong preference, allergy or signal."], ["Delete", "Erase your account and its data."], ["Withdraw consent", "Stop health syncing at any time."], ["Object", "Ask us to restrict automated processing."]];
const policy = [
  { title: "How we use your data", content: <><p>We use what we collect to match dishes to your taste and diet, flag allergens you need to avoid, read menus you photograph, operate your account and subscription, and provide support.</p><p>We also improve accuracy using aggregated, de-identified data that cannot be traced back to you.</p></> },
  { title: "AI processing", content: <p>Recommendations, menu scanning, allergen detection and taste adaptation are produced by automated models. Outputs are suggestions, not medical advice. You can see why a dish was suggested, correct a wrong signal, and switch individual AI features off in Settings without losing your account.</p> },
  { title: "Who else sees it", content: <><p>We do not sell personal data. It is shared only with:</p><ul><li><strong>Service providers</strong> who host, secure and support the product under contract.</li><li><strong>Restaurants</strong> — only the details needed to fulfil an order you place.</li><li><strong>Authorities</strong> where the law requires it, limited to what is legally necessary.</li></ul></> },
  { title: "How long we keep it", content: <><p>Account and preference data is kept while your account is active. When you delete your account we remove personal data within 30 days, except records we must retain for accounting or legal obligations.</p><div className={styles.retention}><span>Health readings · 24 months</span><span>Deleted account · 30 days</span></div></> },
  { title: "Security", content: <p>We use encryption in transit and at rest, role-based access controls, two-factor authentication for staff accounts, and regular reviews of who can reach production data. No system is perfectly secure, so we monitor for breaches and will notify affected users and regulators as required.</p> },
  { title: "Children", content: <p>Mivan is not intended for anyone under 16. If we learn that we hold data from a child, we delete it.</p> },
  { title: "Changes to this policy", content: <p>When we make material changes we update the date at the top of this page and notify you in the app before they take effect.</p> },
];

export default function PrivacyPage() {
  return <div className={shared.landing}>
    <header className={`${shared.container} ${shared.nav}`}>
      <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
      <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <NavAuthActions />
      <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
    </header>
    <main className={`${shared.container} ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="privacy-title">
        <div><p className={styles.eyebrow}>Privacy</p><h1 id="privacy-title">Your body’s data stays yours</h1><p className={styles.intro}>Mivan reads taste, diet and health signals to find your meal. Here is exactly what we hold, why we hold it, and how to take it back.</p></div>
        <dl className={styles.dates}><div><dt>Last updated</dt><dd><time dateTime="2026-09-22">22 September 2026</time></dd></div><div><dt>Effective</dt><dd><time dateTime="2026-10-01">1 October 2026</time></dd></div></dl>
      </section>
      <section className={styles.benefits} aria-label="Our privacy commitments">
        {[["Never sold", "No personal or health data is sold, rented, or used for advertising."], ["Encrypted throughout", "Health readings are encrypted in transit and at rest, with staff access logged."], ["Yours to take back", "Export or delete everything from Settings. Deletion completes within 30 days."]].map(([title, copy], i) => <article key={title}><span className={styles.icon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{i === 0 ? <path d="m12 3 7 3v6c0 5-7 8-7 8s-7-3-7-8V6l7-3Z" /> : i === 1 ? <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></> : <path d="M5 12h14m-6-6 6 6-6 6" />}</svg></span><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
      <section className={styles.collection} aria-labelledby="collection-title"><h2 id="collection-title">What we hold, and why</h2><p className={styles.subtitle}>Four categories. Nothing outside them is collected.</p><div className={styles.categories}>{categories.map(([title, copy, purpose], i) => <article key={title} className={i === 2 ? styles.health : undefined}><h3><span>0{i + 1}</span>{title}{i === 2 && <small>Optional</small>}</h3><p>{copy}</p><span className={styles.purpose}>{purpose}</span></article>)}</div></section>
      <section className={styles.sensitive}><div><p className={styles.eyebrow}>Sensitive data</p><h2>Health and wearable signals</h2></div><div><p>Connecting a smartwatch is optional and reversible. Disconnecting stops new readings immediately; deleting the connection removes the history we stored from it.</p><p>These readings are used only to generate your recommendations. They are never sold, shared with restaurants, or used to target advertising.</p><Link href="/settings" className={`${shared.button} ${styles.whiteButton}`}>Manage connections</Link></div></section>
      <section className={styles.policy} aria-labelledby="policy-title"><h2 id="policy-title">The full policy</h2>{policy.map(({ title, content }, i) => <article key={title}><h3><span>0{i + 1}</span>{title}</h3><div>{content}</div></article>)}</section>
      <section className={styles.rights} aria-labelledby="rights-title"><div className={styles.rightsHeading}><div><p className={styles.eyebrow}>Your rights</p><h2 id="rights-title">What you can ask for</h2></div><p>Six requests, handled from <Link href="/settings">Settings</Link> or by email to <a href="mailto:privacy@mivan.ai">privacy@mivan.ai</a>. We respond within 30 days.</p></div><div className={styles.rightsGrid}>{rights.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className={styles.contact}><div><h2>Questions about your data?</h2><p>Write to <a href="mailto:privacy@mivan.ai">privacy@mivan.ai</a>, or Mivan, Downtown Dubai, Burj Khalifa Blvd, Office 210, Dubai, UAE.</p></div><div className={styles.actions}><Link href="/contact" className={`${shared.button} ${shared.primary}`}>Contact us</Link><Link href="/terms" className={`${shared.button} ${shared.outline}`}>Read the Terms</Link></div></section>
    </main><Footer variant="legal" active="/privacy" />
  </div>;
}
