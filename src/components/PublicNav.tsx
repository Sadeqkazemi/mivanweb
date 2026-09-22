import Image from "next/image";
import Link from "next/link";
import { NavAuthActions } from "./NavAuthActions";
import styles from "@/app/home.module.css";
const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
export function PublicNav() {
  return <header className={`${styles.container} ${styles.nav}`} style={{marginTop: 10, fontFamily: '"Albert Sans", sans-serif'}}><Link href="/" className={styles.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link><nav className={styles.navLinks} aria-label="Main navigation">{links.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</nav><NavAuthActions /><details className={styles.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</nav></details></header>;
}
