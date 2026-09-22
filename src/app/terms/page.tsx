import { NavAuthActions } from "@/components/NavAuthActions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import styles from "./terms.module.css";
import { TermsContents } from "./TermsContents";

export const metadata: Metadata = { title: "Terms of Service | Mivan", description: "Terms covering the Mivan app, website and restaurant tools. Version 2.0, effective 1 October 2026." };
const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
const sections = [
  { id: "accepting", label: "Accepting the terms", title: "Accepting the terms", body: <p>By creating an account or using Mivan you agree to these terms and to our <Link href="/privacy">Privacy Policy</Link>. If you use Mivan for a restaurant or company, you confirm you are authorised to accept these terms on its behalf.</p> },
  { id: "account", label: "Your account", title: "Your account", body: <><p>You must be at least 16 years old. Keep your credentials private, give accurate dietary and allergy information, and tell us promptly if you suspect unauthorised access. You are responsible for activity under your account.</p><p>Restaurant and admin accounts carry additional role restrictions and require two-factor authentication.</p></> },
  { id: "service", label: "The service", title: "What the service provides", body: <p>Mivan recommends dishes, reads menus, flags allergens, and adapts to your taste and health signals. Features may change, improve or be withdrawn as the product develops. We aim for continuous availability but do not guarantee uninterrupted service.</p> },
  { id: "medical", label: "Not medical advice", title: "Not medical advice", body: <div className={styles.notice}><p>Mivan is a wellness product, not a medical device. Recommendations, nutrition figures and allergen flags are informational and can be incomplete or wrong, particularly where a restaurant changes a recipe without telling us.</p><p>Always confirm allergens directly with the restaurant, and consult a qualified professional about any medical condition, medication or treatment.</p></div> },
  { id: "payment", label: "Plans and payment", title: "Plans and payment", body: <><p>Mivan offers a free tier and paid subscriptions billed monthly or annually.</p><dl className={styles.payment}><div><dt>Renewal</dt><dd>Automatic until cancelled; cancelling stops the next renewal and keeps access to the end of the paid period.</dd></div><div><dt>Price changes</dt><dd>At least 30 days’ notice before they apply to you.</dd></div><div><dt>App stores</dt><dd>Purchases made through the App Store or Google Play also follow that store’s refund rules.</dd></div></dl></> },
  { id: "orders", label: "Orders", title: "Orders and restaurant partners", body: <p>Restaurants are independent businesses responsible for their menus, prices, preparation and delivery. Where Mivan passes an order along, the contract for the food is between you and the restaurant. Restaurant partners are responsible for the accuracy of the menu, ingredient and allergen data they publish through the admin tools.</p> },
  { id: "acceptable-use", label: "Acceptable use", title: "Acceptable use", body: <><p>You agree not to:</p><ol className={styles.restrictions}>{["Scrape, copy or resell Mivan data, menus or recommendations.", "Reverse engineer the service or interfere with its security.", "Upload unlawful, misleading or infringing content.", "Use another person’s account or misrepresent who you are."].map((text, i) => <li key={text}><span aria-hidden="true">({String.fromCharCode(97 + i)})</span>{text}</li>)}</ol></> },
  { id: "content", label: "Content and IP", title: "Content and intellectual property", body: <><p>You keep ownership of the photos, reviews and menu scans you upload, and grant Mivan a licence to host and process them in order to operate the service. We may remove content that breaches these terms.</p><p>The Mivan name, logo, interface, models and content are owned by Mivan and protected by law. Your account grants a personal, non-transferable right to use the service, not to own any part of it.</p></> },
  { id: "liability", label: "Liability", title: "Disclaimers and liability", body: <p>Mivan is provided as is. To the extent permitted by law we are not liable for indirect or consequential loss, and our total liability is limited to the amount you paid in the 12 months before the claim. Nothing here limits liability that cannot lawfully be limited.</p> },
  { id: "ending", label: "Ending the agreement", title: "Ending the agreement", body: <><p>You can delete your account at any time in Settings. We may suspend or close accounts that breach these terms, create risk for other users, or are used fraudulently. The sections on intellectual property, liability and governing law survive termination.</p><p>These terms are governed by the laws of the United Arab Emirates, with disputes heard in the courts of Dubai. We may update them and will notify you in the app before material changes take effect; continuing to use Mivan means accepting the updated version.</p></> },
];

export default function TermsPage() {
  return <div className={shared.landing}>
    <header className={`${shared.container} ${shared.nav}`}>
      <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
      <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <NavAuthActions />
      <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav></details>
    </header>
    <main className={`${shared.container} ${styles.page}`}>
      <header className={styles.heading}><div><p className={styles.eyebrow}>Legal agreement · Mivan FZ-LLC</p><h1>Terms of Service</h1></div><dl className={styles.version}><div><dt>Version</dt><dd>2.0</dd></div><div><dt>Updated</dt><dd><time dateTime="2026-09-22">22 Sep 2026</time></dd></div><div><dt>Effective</dt><dd><time dateTime="2026-10-01">1 Oct 2026</time></dd></div></dl></header>
      <p className={styles.intro}>These terms cover the Mivan app, website and restaurant tools. Creating an account,<br className={styles.desktopBreak} /> or using the service on behalf of a restaurant, means accepting them.</p>
      <div className={styles.layout}>
        <TermsContents items={sections.map(({ id, label }) => ({ id, label }))} />
        <div className={styles.document}>{sections.map(({id, title, body}, i) => <section key={id} id={id} aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}><span>{i + 1}.</span> {title}</h2>{body}</section>)}
          <div className={styles.contact}><p>Questions? <a href="mailto:legal@mivan.ai">legal@mivan.ai</a><br />Mivan, Downtown Dubai, Burj Khalifa Blvd, Office 210, Dubai, UAE.</p><Link href="/contact" className={`${shared.button} ${shared.primary}`}>Contact us</Link></div>
        </div>
      </div>
    </main><Footer variant="legal" active="/terms" />
  </div>;
}
