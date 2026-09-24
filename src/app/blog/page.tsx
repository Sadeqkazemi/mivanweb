import { Footer } from "@/components/Footer";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import { Journal } from "./Journal";
import styles from "./blog.module.css";

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

export default function BlogPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/blog" ? "page" : undefined} className={href === "/blog" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <MobileNavMenu links={links} activeHref="/blog" />
      </header>

      <main className={`${shared.container} ${styles.page}`}>
        <section className={styles.hero} aria-labelledby="journal-title">
          <div className={styles.heroTitle}><p className={styles.kicker}>THE MIVAN JOURNAL</p><h1 id="journal-title">Ideas for eating well in a <span>changing world.</span></h1></div>
          <div className={styles.heroIntro}><p>Clear, useful thinking on nutrition, travel, recovery and the technology that connects them.</p><div className={styles.heroTopics}><span>Nutrition</span><span>Travel</span><span>Product</span><span>Research</span></div></div>
        </section>

        <Journal />

        <section className={styles.closing} aria-labelledby="blog-cta-title">
          <div><p className={styles.kicker}>PUT THE IDEAS TO WORK</p><h2 id="blog-cta-title">Turn what you know into a meal that fits.</h2></div>
          <Link href="/features">Explore Mivan features</Link>
        </section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
