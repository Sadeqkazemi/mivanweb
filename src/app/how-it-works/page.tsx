import { Footer } from "@/components/Footer";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { NavAuthActions } from "@/components/NavAuthActions";
import Image from "next/image";
import Link from "next/link";
import shared from "../home.module.css";
import styles from "./how-it-works.module.css";

const links = [["Features", "/features"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"]];

const journey = [
  ["01", "Build your profile", "Taste · diet · health"],
  ["02", "Read your day", "Stress · sleep · activity"],
  ["03", "Understand the menu", "Any dish · any language"],
  ["04", "Choose with confidence", "One clear match"],
];

const intelligence = [
  ["Taste memory", "Learns the flavors, textures and cuisines you enjoy, then gets sharper with every choice."],
  ["Health context", "Turns conditions, allergies and nutrition targets into practical guidance for every dish."],
  ["Moment awareness", "Uses current stress, recovery and activity to adjust what fits your body right now."],
];

export default function HowItWorksPage() {
  return (
    <div className={shared.landing}>
      <header className={`${shared.container} ${shared.nav}`}>
        <Link href="/" className={shared.brand} aria-label="Mivan home"><Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority /></Link>
        <nav className={shared.navLinks} aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === "/how-it-works" ? "page" : undefined} className={href === "/how-it-works" ? styles.active : undefined}>{label}</Link>)}</nav>
        <NavAuthActions />
        <MobileNavMenu links={links} activeHref="/how-it-works" />
      </header>

      <main className={`${shared.container} ${styles.page}`}>
        <section className={styles.hero} aria-labelledby="how-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>HOW MIVAN WORKS</p>
            <h1 id="how-title">From knowing you<br />to <span>knowing your meal.</span></h1>
            <p className={styles.heroText}>One private profile brings together your taste, health and daily signals. Mivan turns that context into a clear food decision wherever you are.</p>
            <div className={styles.heroActions}>
              <Link href="/login" className={`${shared.button} ${shared.primary}`}>Create my profile</Link>
            </div>
            <div className={styles.heroNote}><span>2 min</span> to build your first profile · private by design</div>
          </div>

          <div className={styles.heroEngine} aria-label="A Mivan recommendation assembled from taste, health and live signals">
            <div className={styles.engineTop}><span>YOUR MIVAN ENGINE</span><strong><i /> LIVE</strong></div>
            <div className={styles.engineSignals}>
              <div><small>TASTE</small><strong>Herby &amp; bright</strong><span>24 signals</span></div>
              <div><small>HEALTH</small><strong>Low sodium</strong><span>3 priorities</span></div>
              <div><small>RIGHT NOW</small><strong>Recovery</strong><span>Stress 78</span></div>
            </div>
            <div className={styles.engineLine}><i /><span>CONTEXT COMBINED</span><i /></div>
            <div className={styles.engineResult}>
              <div className={styles.resultImage}><Image src="/images/food-herb-lentil-plate.webp" alt="Herb lentil plate selected by Mivan" fill priority sizes="(max-width: 700px) 80vw, 280px" /></div>
              <div><div className={styles.resultScore}>93%</div><small>BEST FIT NOW</small><strong>Herb lentil plate</strong><p>High fiber · plant-forward · steady energy</p></div>
            </div>
          </div>
        </section>

        <section id="journey" className={styles.journey} aria-label="The Mivan journey">
          {journey.map(([number, title, detail]) => <div key={number}><span>{number}</span><div><strong>{title}</strong><small>{detail}</small></div></div>)}
        </section>

        <section className={styles.chapter} aria-labelledby="profile-title">
          <div className={styles.chapterCopy}>
            <span className={styles.stepNumber}>01</span>
            <p className={styles.kicker}>YOUR FOUNDATION</p>
            <h2 id="profile-title">Start with what makes you, you.</h2>
            <p>In a two-minute conversation, Mivan learns the tastes you seek out and the ingredients your body needs you to avoid. There are no calorie spreadsheets to maintain.</p>
            <ul><li>Taste and texture preferences</li><li>Diet, allergies and conditions</li><li>Personal nutrition priorities</li></ul>
          </div>
          <div className={`${styles.productPanel} ${styles.profilePanel} ${styles.mobileRemove}`} aria-label="Mivan taste profile setup">
            <div className={styles.panelTop}><span>TASTE MAP</span><strong>01 / 03</strong></div>
            <h3>Which flavors feel like home?</h3>
            <p>Choose as many as you like.</p>
            <div className={styles.flavorGrid}><span className={styles.selected}>Fresh herbs <b>✓</b></span><span>Smoky</span><span className={styles.selected}>Warm spice <b>✓</b></span><span>Creamy</span><span>Citrus</span><span className={styles.selected}>Savory <b>✓</b></span></div>
            <div className={styles.priorityRow}><div><small>HEALTH PRIORITY</small><strong>Low sodium</strong></div><span>Added</span></div>
            <div className={styles.panelProgress}><i><b /></i><span>Profile taking shape</span></div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.signalChapter}`} aria-labelledby="signals-title">
          <div className={`${styles.productPanel} ${styles.signalPanel}`} aria-label="Live smartwatch signals interpreted by Mivan">
            <div className={styles.signalWatch}><div><span>STRESS</span><strong>78</strong><small>elevated</small></div></div>
            <div className={styles.signalList}><div><span><i /> HEART RATE</span><strong>84 <small>bpm</small></strong></div><div><span><i /> ACTIVITY</span><strong>6.4k <small>steps</small></strong></div><div><span><i /> RECOVERY</span><strong>72 <small>/ 100</small></strong></div></div>
            <div className={styles.signalInsight}><span>LIVE INSIGHT</span><strong>Prioritize steady energy and calming nutrients.</strong></div>
          </div>
          <div className={`${styles.chapterCopy} ${styles.mobileRemove}`}>
            <span className={styles.stepNumber}>02</span>
            <p className={styles.kicker}>YOUR DAY, UNDERSTOOD</p>
            <h2 id="signals-title">The right meal changes with the moment.</h2>
            <p>When you connect your smartwatch, Mivan reads the shape of your day. A stressful afternoon and a recovery morning should not lead to the same recommendation.</p>
            <div className={styles.watchSupport}>
              <div className={styles.watchSupportHead}><span>4</span><div><small>SMARTWATCH PLATFORMS</small><strong>One view of your day</strong></div></div>
              <div className={styles.watchSupportBrands}>
                <span><i aria-hidden="true" />Apple Watch</span>
                <span><i aria-hidden="true" />Wear OS</span>
                <span><i aria-hidden="true" />Fitbit</span>
                <span><i aria-hidden="true" />Garmin</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.chapter} aria-labelledby="menu-title">
          <div className={`${styles.chapterCopy} ${styles.mobileRemove}`}>
            <span className={styles.stepNumber}>03</span>
            <p className={styles.kicker}>FROM MENU TO MATCH</p>
            <h2 id="menu-title">Point. Scan. See what fits.</h2>
            <p>Take one photo of a menu in any language. Mivan understands each dish, checks it against your profile and current needs, then gives you a clear ranked answer.</p>
            <div className={styles.scanFacts}><span><b>12</b> dishes read</span><span><b>3 sec</b> to rank</span><span><b>1</b> best match</span></div>
          </div>
          <div className={`${styles.productPanel} ${styles.menuPanel}`} aria-label="Restaurant menu ranked for a Mivan profile">
            <div className={styles.menuHead}><div><small>SAFFRON HOUSE</small><strong>Dinner menu</strong></div><span><i /> Analysis complete</span></div>
            <div className={styles.bestMatch}><div className={styles.bestImage}><Image src="/images/food-salmon-greens.webp" alt="Salmon and seasonal greens" fill sizes="150px" /></div><div><small>BEST MATCH</small><strong>Salmon &amp; seasonal greens</strong><p>Low sodium · high protein</p></div><b>94%</b></div>
            <div className={styles.menuOption}><span>02</span><div><strong>Lentil &amp; barley soup</strong><small>Plant-based · high fiber</small></div><b>87%</b></div>
            <div className={styles.menuOption}><span>03</span><div><strong>Saffron rice &amp; chicken</strong><small>Above your sodium target</small></div><b className={styles.mediumScore}>54%</b></div>
          </div>
        </section>

        <section className={`${styles.confidence} ${styles.mobileRemove}`} aria-labelledby="confidence-title">
          <div className={styles.confidenceIntro}><p className={styles.kicker}>WHY THE ANSWER GETS BETTER</p><h2 id="confidence-title">Three kinds of intelligence.<br />One useful decision.</h2><p>Mivan does not judge a meal in isolation. It understands the person, the moment and the food together.</p></div>
          <div className={styles.intelligenceGrid}>{intelligence.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className={styles.privacyLine}><span>✓</span><div><strong>Your health profile stays private.</strong><p>Encrypted in transit and at rest. Never sold to advertisers.</p></div><Link href="/privacy">Read our privacy promise</Link></div>
        </section>

        <section className={styles.finalCta} aria-labelledby="start-title">
          <div><p>YOUR FIRST MATCH IS TWO MINUTES AWAY</p><h2 id="start-title">Tell Mivan who you are.<br />We’ll handle the menu.</h2></div>
          <div><Link href="/features" className={`${shared.button} ${styles.finalPrimary}`}>Explore features</Link></div>
        </section>
      </main>
      <Footer variant="app" />
    </div>
  );
}
