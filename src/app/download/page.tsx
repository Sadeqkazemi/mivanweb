import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import shared from "../home.module.css";
import featureStyles from "../features/features.module.css";
import styles from "./download.module.css";
const badges = [
  { title: "Free to start", body: "No card needed for the Free plan." },
  { title: "Health data encrypted", body: "Your data is encrypted and never sold." },
  { title: "Every smartwatch", body: "Apple Watch, Wear OS, Fitbit, Garmin." },
  { title: "120+ cities", body: "Right picks wherever you travel." },
];

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
export default function DownloadPage() {
 return <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/download" ? "page" : undefined} className={href === "/download" ? featureStyles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <MobileNavMenu links={links} activeHref="/download" />
      </header>
      <main className={shared.container}>
        <section id="download-app" className={styles.hero} aria-labelledby="download-title">
          <div className={styles.copy}><p className={shared.eyebrow}>Download</p><h1 id="download-title">Get Mivan free<br />today</h1><p className={styles.intro}>Available on iPhone and Android. Set up your profile in two minutes and start eating what truly fits you.</p>
            <div className={styles.stores}>
              <button type="button" disabled title="App Store link has not been configured" className={styles.store}><i aria-hidden="true" /><span><small>Download on the</small><strong>App Store</strong></span></button>
              <button type="button" disabled title="Google Play link has not been configured" className={styles.store}><i aria-hidden="true" /><span><small>Get it on</small><strong>Google Play</strong></span></button>
            </div>
            <div className={styles.qrRow}><div className={styles.qr} role="img" aria-label="QR code placeholder">QR</div><p>Scan to install on your phone in seconds.</p></div>
          </div>
          <div className={`${shared.stripe} ${styles.phone}`} role="img" aria-label="App home screen placeholder"><span>app home screen</span></div>
        </section>
        <section className={styles.badges} aria-label="App benefits">{badges.map(badge => <article className={styles.badge} key={badge.title}><h2>{badge.title}</h2><p>{badge.body}</p></article>)}</section>
        <section className={`${shared.cta} ${featureStyles.cta} ${styles.cta}`} aria-labelledby="cta-title"><h2 id="cta-title" className={shared.title}>Eat what truly fits you.</h2><p>Download Mivan free on iPhone and Android and get food that fits your body, taste, and day.</p><a href="#download-app" className={`${shared.button} ${shared.outline}`}>Get the app</a></section>
      </main><Footer variant="app" />
    </div>;
}
