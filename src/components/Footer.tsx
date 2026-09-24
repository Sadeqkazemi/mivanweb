import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const groups = [
  { title: "Product", links: [["How it works", "/how-it-works"], ["Menu scan", "/features"], ["Smartwatch", "/health"], ["Pricing", "/pricing"]] },
  { title: "Account", links: [["Sign in", "/login"], ["Create account", "/login"], ["My dashboard", "/dashboard"], ["Admin panel", "/admin/login"]] },
  { title: "Company", links: [["About", "/about"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Contact", "/contact"]] },
];

const appGroups = [
  { title: "Product", links: [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["Download", "/download"]] },
  { title: "Company", links: [["About", "/about"], ["Blog", "/blog"], ["FAQ", "/faq"], ["Contact", "/contact"]] },
  { title: "Account", links: [["Sign in", "/login"], ["My account", "/dashboard"], ["Admin", "/admin/login"]] },
];

const legalGroups = [appGroups[0], appGroups[1], { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]] }];
export function Footer({ variant = "home", active }: { variant?: "home" | "app" | "legal" | "full"; active?: string }) {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.main}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Mivan home" className={styles.logo}>
            <Image src="/images/mivan-logo.png" alt="Mivan" width={84} height={42} />
          </Link>
          <span className={styles.mobileKicker}>Personal food intelligence</span>
          <p className={styles.description}>Your AI food companion for taste, health, and recovery — {variant !== "home" ? "on iPhone and Android." : "wherever the day takes you."}</p>
          <a className={styles.email} href="mailto:info@mivanfood.com"><span>Talk to Mivan</span>info@mivanfood.com</a>
          {variant !== "legal" && <address className={styles.address}>
            <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
            <span>Downtown Dubai, Burj Khalifa Blvd, Office 210,<br />Dubai, UAE</span>
          </address>}
        </div>
        <div className={`${styles.groups} ${variant === "full" ? styles.fullGroups : ""}`}>
          {(variant === "full" ? [...legalGroups, appGroups[2]] : variant === "legal" ? legalGroups : variant === "app" ? appGroups : groups).map(group => (
            <nav key={group.title} aria-label={`${group.title} footer links`}>
              <h2>{group.title}</h2>
              <ul>{group.links.map(([label, href]) => <li key={label}><Link href={href} aria-current={active === href ? "page" : undefined}>{label}</Link></li>)}</ul>
            </nav>
          ))}
        </div>
        <nav className={styles.mobileLinks} aria-label="Essential footer links">
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className={styles.bottom}><div className={styles.container}><span>© 2026 Mivan</span><span>Made for people on the move</span></div></div>
    </footer>
  );
}
