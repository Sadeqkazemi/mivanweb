import { NavAuthActions } from "@/components/NavAuthActions";
import { MobileNavMenu } from "@/components/MobileNavMenu";
import { UserCtaBanner } from "@/components/UserCtaBanner";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GoogleG } from "@/components/Buttons";
import styles from "./home.module.css";

const stats = [
  { value: "120+", label: "Cities covered" },
  { value: "98%", label: "Match accuracy" },
  { value: "24/7", label: "Live guidance" },
  { value: "3M+", label: "Meals matched" },
];

const steps = [
  {
    n: 1,
    title: "Tell us your taste & health",
    body: "A short AI quiz learns your flavors, diet, allergies and conditions — like diabetes or low-sodium needs.",
  },
  {
    n: 2,
    title: "We read your day",
    body: "Your Apple Watch shares stress, heart rate and activity, so recommendations fit how your body actually feels.",
  },
  {
    n: 3,
    title: "Get the right pick",
    body: "Personalized food and drinks wherever you are — at home, traveling, or reading a menu you've never seen.",
  },
];

const menuScan = [
  { name: "Grilled fish & herbs", tag: "low-sodium · high protein", score: "92%" },
  { name: "Lentil & barley soup", tag: "high fiber · plant-based", score: "87%" },
  { name: "Saffron rice & chicken", tag: "salty for your diet", score: "54%" },
  { name: "Fried sugar pastry", tag: "high sugar", score: "21%" },
];

const picks = [
  { name: "Miso magnesium bowl", tag: "Calms stress · gut-friendly", score: "91%", image: "/images/food-miso-magnesium-bowl-v2.webp" },
  { name: "Salmon & greens", tag: "Low-sodium · high protein", score: "88%", image: "/images/food-salmon-greens.webp" },
  { name: "Herb lentil plate", tag: "High fiber · plant-based", score: "86%", image: "/images/food-herb-lentil-plate.webp" },
  { name: "Green tea & dates", tag: "Recovery · light energy", score: "84%", image: "/images/food-green-tea-dates.webp" },
];

const reviews = [
  {
    quote:
      "I travel constantly and used to dread ordering abroad. I scan the menu and Mivan just tells me what works for my gut. Game changer.",
    name: "Daniel R.",
    role: "Frequent traveler",
  },
  {
    quote:
      "On stressful days my watch picks it up and Mivan suggests something calming. I actually feel better after eating now.",
    name: "Mina K.",
    role: "Product designer",
  },
  {
    quote:
      "With diabetes, eating out was always a gamble. Mivan ranks every dish for me. I finally trust what I order.",
    name: "Omid T.",
    role: "Consultant",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    tag: "Personalized picks at home.",
    features: ["Taste & health profile", "Daily recommendations", "5 menu scans / month"],
    cta: "Get started",
  },
  {
    name: "Plus",
    price: "$9",
    tag: "Full power, everywhere you go.",
    features: [
      "Everything in Free",
      "Unlimited menu scans",
      "Apple Watch recovery",
      "Mivan Club rewards",
    ],
    cta: "Start Plus",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    tag: "For frequent-travel teams.",
    features: ["Everything in Plus", "Up to 10 members", "Trip & expense friendly"],
    cta: "Contact sales",
  },
];

const navLinks = [
  ["Features", "/features"], ["How it works", "#how-it-works"],
  ["Pricing", "#pricing"], ["About", "/about"], ["Blog", "/blog"],
];

function WatchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 2h6l1 4.1A5.9 5.9 0 0 1 18 10.5v3a5.9 5.9 0 0 1-2 4.4L15 22H9l-1-4.1a5.9 5.9 0 0 1-2-4.4v-3a5.9 5.9 0 0 1 2-4.4L9 2Z" />
      <rect x="8" y="7" width="8" height="10" rx="3" />
      <path d="m10.1 12 1.3 1.4 2.8-3" />
    </svg>
  );
}

function MealIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.5 12.2c-1.3-1.7.9-2.4.9-4.1 0-1-.6-1.6-1-2.1M16 12.2c-1.3-1.7.9-2.4.9-4.1 0-1-.6-1.6-1-2.1M22.5 12.2c-1.3-1.7.9-2.4.9-4.1 0-1-.6-1.6-1-2.1" />
      <path d="M6 15.5h20c-.5 6.3-4.1 10-10 10s-9.5-3.7-10-10Z" />
      <path d="M9 26h14" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M7 12h10M9 9.5h6M9 14.5h6" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.landing}>
      <header className={`${styles.container} ${styles.nav}`}>
        <Link href="/" className={styles.brand} aria-label="Mivan home">
          <Image src="/images/mivan-logo.png" alt="Mivan" width={92} height={44} priority />
        </Link>
        <nav aria-label="Main navigation" className={styles.navLinks}>
          {navLinks.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
        </nav>
        <NavAuthActions />
        <MobileNavMenu links={navLinks} />
      </header>
      <main className={styles.container}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <h1 id="hero-title">Eat what truly <span>fits you</span>,<br />anywhere.</h1>
          <p className={styles.heroCopy}>Mivan learns your taste and health, reads your stress and activity from your Apple Watch, and tells you the right thing to eat — at home, traveling, or from a photo of any menu.</p>
          <div className={styles.heroActions}>
            <Link href="/login" className={`${styles.button} ${styles.primary}`}><GoogleG size={20} />Continue with Google</Link>
            <a href="#how-it-works" className={`${styles.button} ${styles.outline}`}>See how it works</a>
          </div>
          <div className={styles.heroVisual} aria-label="A personalized Mivan meal recommendation paired with live smartwatch wellness data">
            <Image
              className={styles.heroBanner}
              src="/images/mivan-hero-wellness-banner.webp"
              alt="Miso wellness bowl beside a smartwatch with an orange recovery ring"
              fill
              sizes="(max-width: 750px) calc(100vw - 32px), 1100px"
              priority
            />
            <div className={styles.watchBadge}><span className={styles.watchIcon}><WatchIcon /></span><span><small>Live signal</small>Stress 78</span></div>
            <div className={styles.mealBadge}><span className={styles.mealIcon}><MealIcon /></span><div><small>Today’s best match</small><strong>Miso magnesium bowl</strong><span>91% match · calms stress</span></div></div>
          </div>
          <div className={styles.brands} aria-label="Supported smartwatches">
            <span className={styles.brandLead}><small>WORKS WITH</small><strong>Your watch, your choice</strong></span>
            <span className={styles.brandDevice}><i>AW</i>Apple Watch</span>
            <span className={styles.brandDevice}><i>W</i>Wear OS</span>
            <span className={styles.brandDevice}><i>F</i>Fitbit</span>
            <span className={styles.brandDevice}><i>G</i>Garmin</span>
          </div>
        </section>

        <section className={`${styles.section} ${styles.why}`} aria-labelledby="why-title">
          <div className={styles.whyIntro}>
            <div className={styles.whyStory}>
              <div>
                <p className={styles.eyebrow}>Why Mivan</p>
                <h2 id="why-title" className={styles.title}>Millions travel, and can’t find food that <span>fits them.</span></h2>
              </div>
              <div className={styles.whyJourney} aria-label="Mivan turns local context and live health signals into a personalized meal match">
                <div className={styles.whyJourneyTop}><span>ANYWHERE YOU LAND</span><strong>Your match travels with you</strong></div>
                <div className={styles.whyRoute} aria-hidden="true">
                  <span className={styles.whyCity}>DXB</span><i /><span className={styles.whyPulse}>✦</span><i /><span className={styles.whyMatch}><MealIcon />91% MATCH</span>
                </div>
              </div>
            </div>
            <div className={styles.whyCopy}>
              <p className={styles.whyCopyLabel}>FOOD SHOULD FIT THE PERSON</p>
              <h3>Your needs don’t stop at the border.</h3>
              <p>Every year millions of people travel for work and leisure — and struggle to find food that suits their taste, diet, and health in an unfamiliar place. Meanwhile, modern life loads our days with stress and pressure that quietly shape what our bodies actually need.</p>
              <p>Mivan was built to close that gap. We learn your palate, understand your conditions and diet, read your day through your smartwatch, and recommend the right meal for your exact location and moment — even from a photo of a menu you’ve never seen.</p>
              <div className={styles.whySignals}><span>Taste</span><span>Health</span><span>Live signals</span></div>
            </div>
          </div>
          <div className={styles.stats}>{stats.map((s, index) => <div className={styles.stat} key={s.label}><div className={styles.statTop}><span>{String(index + 1).padStart(2, "0")}</span><i /></div><strong>{s.value}</strong><small>{s.label}</small></div>)}</div>
        </section>

        <section id="how-it-works" className={styles.section} aria-labelledby="steps-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>How it works</p><h2 id="steps-title" className={styles.title}>Three steps to the right meal.</h2></div>
          <div className={`${styles.threeGrid} ${styles.swipeRail}`}>{steps.map(s => <article className={styles.step} key={s.n}><div className={styles.stepNumber}>{s.n}</div><h3>{s.title}</h3><p>{s.body}</p></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.scan}`} aria-labelledby="scan-title">
          <div className={styles.scanCopy}>
            <div className={styles.scanIcon}><ScanIcon /></div>
            <p className={styles.eyebrow}>Menu intelligence</p>
            <h2 id="scan-title" className={styles.title}>One photo.<br /><span>Your best choice.</span></h2>
            <p>Point your camera at any restaurant menu. Mivan understands every dish, compares it with your taste and health profile, and ranks the options in seconds.</p>
            <div className={styles.scanBenefits}><span>Any language</span><span>Personalized ranking</span><span>Instant result</span></div>
              <Link href="/login" className={`${styles.button} ${styles.primary}`}>Scan your first menu</Link>
          </div>
          <div className={styles.menu}>
            <div className={styles.menuHeader}>
              <div><span className={styles.menuLabel}>AI MENU ANALYSIS</span><h3>Saffron House</h3><p>Dubai · Dinner menu</p></div>
              <div className={styles.menuScanState}><i /><span><strong>Complete</strong><small>12 dishes scanned</small></span></div>
            </div>
            <div className={styles.menuInsight}><div><small>TOP RECOMMENDATION</small><strong>Built around you</strong></div><span>Health + taste matched</span></div>
            <div className={styles.menuList}>
              {menuScan.map((m, i) => <div className={`${styles.menuRow} ${i === 0 ? styles.menuRowBest : ""}`} key={m.name}>
                <span className={styles.menuRank}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.menuDish}>
                  <div className={styles.menuDishTop}><strong>{m.name}</strong><span className={`${styles.score} ${i === 2 ? styles.medium : i === 3 ? styles.low : ""}`}>{m.score}</span></div>
                  <p>{m.tag}</p>
                  <div className={`${styles.matchBar} ${i === 2 ? styles.mediumBar : i === 3 ? styles.lowBar : ""}`} aria-hidden="true"><i style={{width:m.score}} /></div>
                </div>
              </div>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.watch}`} aria-labelledby="watch-title">
          <div className={styles.watchCopy}><p className={styles.eyebrow}>Apple Watch</p><h2 id="watch-title" className={styles.title}>Hard day? We notice<br />— and help you<br />recover.</h2><p>When your watch shows rising stress or a heavy workload, Mivan suggests food and drinks that help you bounce back — right for your body in that moment.</p><div className={styles.watchTags}><span>Stress</span><span>Activity</span><span>Sleep</span></div></div>
          <div className={styles.recovery}>
            <div className={styles.recoveryTop}><div className={styles.ring} aria-hidden="true" /><div><p className={styles.smallLabel}>Right now</p><h3>Tense</h3><small>stress 78 · busy</small></div></div>
            <p className={styles.smallLabel}>Recovery suggestion</p>
            <div className={styles.recoveryMeal}><div className={styles.recoveryPhoto}><Image src="/images/food-chamomile-oat-bowl.webp" alt="Chamomile and oat bowl with pear and seeds" fill sizes="48px" /></div><div><h3>Chamomile &amp; oat bowl</h3><small>eases stress · 89%</small></div></div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="picks-title">
          <div className={styles.picksHeading}><h2 id="picks-title" className={styles.title}>Picks built around your body.</h2><p className={styles.smallLabel}>Today’s menu</p></div>
          <div className={`${styles.picksGrid} ${styles.swipePicks}`}>{picks.map(p => <article key={p.name} className={styles.pick}><div className={styles.pickImage}><Image src={p.image} alt={p.name} fill sizes="(max-width: 700px) 78vw, 260px" /></div><div className={styles.pickCopy}><div><strong>{p.name}</strong><span>{p.score}</span></div><p>{p.tag}</p></div></article>)}</div>
        </section>

        <section className={styles.section} aria-labelledby="reviews-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Reviews</p><h2 id="reviews-title" className={styles.title}>Loved by people on the move.</h2></div>
          <div className={`${styles.threeGrid} ${styles.reviewRail}`}>{reviews.map(r => <article className={styles.review} key={r.name}><div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{r.quote}”</blockquote><div className={styles.reviewPerson}><div className={styles.stripe} aria-hidden="true" /><div><strong>{r.name}</strong><br /><span>{r.role}</span></div></div></article>)}</div>
        </section>

        <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Pricing</p><h2 id="pricing-title" className={styles.title}>Start free. Upgrade<br />when you travel more.</h2></div>
          <div className={`${styles.threeGrid} ${styles.swipeRail}`}>{plans.map(p => <article key={p.name} className={`${styles.plan} ${p.popular ? styles.popular : ""}`}>
            {p.popular && <div className={styles.popularBadge}>Most popular</div>}
            <h3 className={styles.planName}>{p.name}</h3><div className={styles.price}><strong>{p.price}</strong><span>/mo</span></div><p>{p.tag}</p>
            <ul>{p.features.map(f => <li key={f}><span aria-hidden="true">✓</span>{f}</li>)}</ul>
            <Link href={p.name === "Team" ? "/contact" : "/login"} className={`${styles.button} ${styles.outline}`}>{p.cta}</Link>
          </article>)}</div>
        </section>

        <UserCtaBanner />

        <section className={styles.mobileClosingBanner} aria-labelledby="mobile-closing-title">
          <p className={styles.eyebrow}>Your Mivan</p>
          <h2 id="mobile-closing-title">Better choices,<br />ready when you are.</h2>
          <p>One profile brings your taste, health and daily signals together wherever you eat.</p>
          <Link href="/login" className={styles.mobileClosingAction}>Sign in to Mivan</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
