import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import shared from "../home.module.css";
import styles from "./features.module.css";

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];
const scanResults = [
  ["Grilled fish & herbs", "Low sodium · high protein", "92%"],
  ["Lentil & barley soup", "Plant-based · high fiber", "87%"],
  ["Saffron rice & chicken", "Above your sodium target", "54%"],
];
const flow = [
  ["01", "Scan", "Take one photo of any restaurant menu, in any language."],
  ["02", "Understand", "Mivan reads every dish against your taste, diet and health profile."],
  ["03", "Choose", "See a clear ranking and order with confidence in seconds."],
];

export default function FeaturesPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/features" ? "page" : undefined} className={href === "/features" ? styles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <MobileNavMenu links={links} activeHref="/features" />
      </header>

      <main className={`${shared.container} ${styles.page}`}>
        <section className={styles.hero} aria-labelledby="features-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>PERSONAL FOOD INTELLIGENCE</p>
            <h1 id="features-title">Every meal,<br /><span>understood.</span></h1>
            <p className={styles.heroText}>Mivan connects your taste, health and real-time body signals to help you choose the right food — at home or anywhere in the world.</p>
              <div className={styles.heroActions}><Link href="/login" className={`${shared.button} ${shared.primary}`}>Build my food profile</Link></div>
            <div className={styles.heroTrust}><span><i />Private health profile</span><span><i />Works in 120+ cities</span></div>
          </div>

          <div className={styles.heroStage} aria-label="A live Mivan recommendation built from taste and smartwatch health signals">
            <div className={styles.stageTop}><span>LIVE MIVAN PROFILE</span><strong><i />SYNCED</strong></div>
            <div className={styles.stageSignal}><small>STRESS SIGNAL</small><strong>78</strong><span>Recovery mode</span></div>
            <div className={styles.stageMeal}>
              <div className={styles.stageMealImage}><Image src="/images/food-salmon-greens.webp" alt="Salmon with seasonal greens" fill priority sizes="(max-width: 700px) 70vw, 310px" /></div>
              <div className={styles.stageMealCopy}><div><small>BEST MATCH NOW</small><b>94%</b></div><strong>Salmon &amp; seasonal greens</strong><p>Omega-3 rich · protein-forward · balanced</p><div><span>Low sodium</span><span>High protein</span></div></div>
            </div>
            <div className={styles.stageFoot}><span>TASTE</span><b>+</b><span>HEALTH</span><b>+</b><span>LIVE SIGNALS</span></div>
          </div>
        </section>

        <section className={styles.proof} aria-label="Mivan product coverage">
          <div><strong>120+</strong><span>Cities covered</span></div><div><strong>98%</strong><span>Profile match accuracy</span></div><div><strong>4</strong><span>Smartwatch platforms</span></div><div><strong>24/7</strong><span>Daily guidance</span></div>
        </section>

        <section className={styles.featureSection} aria-labelledby="feature-grid-title">
          <div className={styles.sectionIntro}><div><p className={styles.kicker}>ONE PROFILE, FOUR SUPERPOWERS</p><h2 id="feature-grid-title">Built around your real day.</h2></div><p>Mivan follows the context that changes what your body needs: the menu in front of you, your health priorities, your current signals and the city around you.</p></div>
          <div className={styles.bento}>
            <article id="menu-intelligence" className={`${styles.featureCard} ${styles.scanCard}`}>
              <div className={styles.cardHeading}><span className={styles.cardNumber}>01</span><div><p>MENU INTELLIGENCE</p><h3>Scan once. Know every option.</h3></div></div>
              <p className={styles.cardText}>Mivan reads the whole menu, flags conflicts and ranks every dish for your profile.</p>
              <div className={styles.scanPanel}><div className={styles.scanPanelHead}><div><small>SAFFRON HOUSE</small><strong>Dinner menu</strong></div><span><i />12 analyzed</span></div>{scanResults.map(([name, tag, score], index) => <div className={styles.scanRow} key={name}><b>{String(index + 1).padStart(2, "0")}</b><div><strong>{name}</strong><small>{tag}</small><i><span style={{width:score}} /></i></div><em className={index === 2 ? styles.warn : undefined}>{score}</em></div>)}</div>
            </article>

            <article className={`${styles.featureCard} ${styles.healthCard}`}>
              <div className={styles.cardHeading}><span className={styles.cardNumber}>02</span><div><p>BODY SIGNALS</p><h3>Your day changes. Your food should too.</h3></div></div>
              <p className={styles.cardText}>Stress, sleep and activity become useful guidance at the moment you choose a meal.</p>
              <div className={styles.healthDial}><div><strong>78</strong><small>STRESS</small></div></div>
              <div className={styles.healthStatus}><span><i />Apple Watch connected</span><strong>Recovery meal suggested</strong></div>
            </article>

            <article className={`${styles.featureCard} ${styles.tasteCard}`}>
              <div className={styles.tasteImage}><Image src="/images/food-herb-lentil-plate.webp" alt="A herb lentil plate personalized by Mivan" fill sizes="(max-width: 700px) 90vw, 430px" /></div>
              <div className={styles.tasteCopy}><div className={styles.cardHeading}><span className={styles.cardNumber}>03</span><div><p>TASTE DNA</p><h3>Mivan learns what “delicious” means to you.</h3></div></div><div className={styles.tasteTags}><span>Herby</span><span>Warm spice</span><span>Fresh</span><span>Low sugar</span></div></div>
            </article>

            <article className={`${styles.featureCard} ${styles.travelCard}`}>
              <div className={styles.cardHeading}><span className={styles.cardNumber}>04</span><div><p>TRAVEL MODE</p><h3>Your profile works in every city.</h3></div></div>
              <p className={styles.cardText}>Keep the same confidence when the language, menu and routine are completely new.</p>
              <div className={styles.route}><span>DXB</span><i /><b>✦</b><i /><span>LON</span></div>
              <div className={styles.travelMeta}><div><strong>120+</strong><small>cities</small></div><div><strong>Any</strong><small>menu language</small></div><div><strong>One</strong><small>private profile</small></div></div>
            </article>
          </div>
        </section>

        <section className={styles.flowSection} aria-labelledby="flow-title">
          <div className={styles.flowIntro}><p className={styles.kicker}>FROM PHOTO TO CONFIDENCE</p><h2 id="flow-title">Three seconds of effort.<br />A much better order.</h2><p>There is no calorie spreadsheet and no menu research. Mivan turns one photo into a decision you can trust.</p></div>
          <div className={styles.flowList}>{flow.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </section>

        <section className={styles.integrations} aria-labelledby="integrations-title">
          <div className={styles.integrationVisual} aria-hidden="true">
            <div className={styles.watchBackdrop} />
            <div className={styles.watchFace}><span>LIVE SIGNAL</span><strong>72</strong><small>recovery score</small><i /></div>
            <div className={styles.watchPulse}><span>HEART RATE</span><strong>84 <small>bpm</small></strong><i><b /></i></div>
            <div className={styles.watchSync}><i /> Synced just now</div>
          </div>
          <div className={styles.integrationCopy}>
            <p className={styles.kicker}>HEALTH ECOSYSTEM</p>
            <h2 id="integrations-title">The watch you already wear.</h2>
            <p>Bring your daily signals into Mivan without changing your routine. Activity, recovery and stress become practical food guidance when you need it.</p>
            <div className={styles.watchLogos}><span>Apple Watch</span><span>Wear OS</span><span>Fitbit</span><span>Garmin</span></div>
          </div>
        </section>
        <section className={styles.finalCta} aria-labelledby="feature-cta-title"><div><p>READY WHEN YOU ARE</p><h2 id="feature-cta-title">Your profile. Every city. Every meal.</h2></div><div><Link href="/pricing" className={`${shared.button} ${styles.finalPrimary}`}>View plans</Link></div></section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
