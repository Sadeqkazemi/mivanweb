import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Journal } from "./Journal";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
export default function BlogPage() {
 return <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/blog" ? "page" : undefined} className={href === "/blog" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <details className={shared.mobileMenu}><summary aria-label="Toggle navigation">☰</summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/blog" ? "page" : undefined}>{label}</Link>)}</nav></details>
      </header>
      <main className={shared.container}>
        <section className={featureStyles.hero} aria-labelledby="journal-title"><p className={shared.eyebrow}>Blog</p><h1 id="journal-title">The Mivan Journal</h1><p className={featureStyles.intro}>Notes on eating well, traveling smart, and the science of food that fits your body.</p></section>
        <Journal />
        <section className={`${shared.cta} ${featureStyles.cta}`} aria-labelledby="download-title"><h2 id="download-title" className={shared.title}>Eat what truly fits you.</h2><p>Download Mivan free on iPhone and Android and get food that fits your body, taste, and day.</p><Link href="/download" className={`${shared.button} ${shared.outline}`}>Get the app</Link></section>
      </main><Footer variant="app" />
    </div>;
}
