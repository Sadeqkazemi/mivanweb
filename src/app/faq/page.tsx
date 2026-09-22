import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { HelpCentre } from "./HelpCentre";
import shared from "../home.module.css";
import styles from "./faq.module.css";
export const metadata = { title: "Help Centre | Mivan", description: "Answers to 16 questions about getting started, health and data, using Mivan, billing and restaurants." };
const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
export default function FAQPage() {
  return <div className={shared.landing}>
    <header className={`${shared.container} ${shared.nav} ${styles.nav}`}><Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link><nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</nav><NavAuthActions /><details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</nav></details></header>
    <main className={`${shared.container} ${styles.page}`}><HelpCentre /><section className={styles.support}><div><p className={styles.eyebrow}>Still stuck</p><h2>Talk to a human</h2><p className={styles.supportCopy}>Support answers in English and Persian, usually within a day. Health and allergen questions are handled by our nutrition team.</p></div><div className={styles.actions}><Link href="/contact" className={`${shared.button} ${shared.primary}`}>Contact us</Link><a href="mailto:hello@mivan.ai" className={`${shared.button} ${styles.email}`}>hello@mivan.ai</a></div></section></main><Footer variant="full" active="/faq" />
  </div>;
}
