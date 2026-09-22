import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow, H2, Card } from "@/components/Section";
import { GradientPill, OutlinePill, GoogleG } from "@/components/Buttons";
import { ImageSlot } from "@/components/ImageSlot";

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
  { name: "Miso magnesium bowl", tag: "Calms stress · gut-friendly", score: "91%" },
  { name: "Salmon & greens", tag: "Low-sodium · high protein", score: "88%" },
  { name: "Herb lentil plate", tag: "High fiber · plant-based", score: "86%" },
  { name: "Green tea & dates", tag: "Recovery · light energy", score: "84%" },
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

export default function Home() {
  return (
    <>
      <PublicNav />
      <main>
        {/* HERO */}
        <Section className="text-center pt-[clamp(40px,8vw,72px)]">
          <h1 className="font-display font-extrabold text-[clamp(33.1px,9vw,77.8px)] leading-[0.92] tracking-[-0.04em] max-w-3xl mx-auto">
            Eat what truly <span className="grad-word">fits you</span>, anywhere.
          </h1>
          <p className="text-body-text text-[clamp(12.2px,1.9vw,15.1px)] leading-relaxed max-w-xl mx-auto mt-5">
            Mivan learns your taste and health, reads your stress and activity from your
            Apple Watch, and tells you the right thing to eat — at home, traveling, or from
            a photo of any menu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            <GradientPill>
              <GoogleG /> Continue with Google
            </GradientPill>
            <OutlinePill href="/how-it-works">See how it works</OutlinePill>
          </div>

          <div className="relative mt-12 max-w-3xl mx-auto">
            <ImageSlot className="h-[280px] md:h-[420px] rounded-[34px]" label="hero photo" />
            <Card className="absolute -left-2 md:left-4 bottom-6 w-[190px] animate-floaty hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="btn-gradient w-9 h-9 rounded-lg shrink-0" />
                <div className="text-left">
                  <div className="text-[11px] font-bold leading-tight">Miso magnesium bowl</div>
                  <div className="text-[10px] text-muted">91% match · calms stress</div>
                </div>
              </div>
            </Card>
            <Card className="absolute -right-2 md:right-4 top-6 w-fit animate-floaty hidden sm:block">
              <div className="flex items-center gap-2 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Watch live · stress 78
              </div>
            </Card>
          </div>

          <div className="mt-14">
            <div className="text-muted-2 text-[10px] font-semibold uppercase tracking-widest mb-4">
              Works with every smartwatch
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-label text-[12px] font-semibold">
              <span>Apple Watch</span>
              <span>Wear OS</span>
              <span>Fitbit</span>
              <span>Garmin</span>
            </div>
          </div>
        </Section>

        {/* WHY MIVAN */}
        <Section className="text-center">
          <Eyebrow>Why Mivan</Eyebrow>
          <H2>Millions travel, and can&rsquo;t find food that fits them.</H2>
          <p className="text-body-text text-[13px] leading-relaxed max-w-2xl mx-auto">
            Every year millions of people travel for work and leisure — and struggle to find
            food that suits their taste, diet, and health in an unfamiliar place. Meanwhile,
            modern life loads our days with stress and pressure that quietly shape what our
            bodies actually need.
          </p>
          <p className="text-body-text text-[13px] leading-relaxed max-w-2xl mx-auto mt-3">
            Mivan was built to close that gap. We learn your palate, understand your
            conditions and diet, read your day through your smartwatch, and recommend the
            right meal for your exact location and moment — even from a photo of a menu
            you&rsquo;ve never seen.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-2xl text-accent-text">
                  {s.value}
                </div>
                <div className="text-muted text-[11px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <H2>Three steps to the right meal.</H2>
          <div className="grid md:grid-cols-3 gap-5 mt-8 text-left">
            {steps.map((s) => (
              <Card key={s.n}>
                <div className="btn-gradient w-8 h-8 rounded-full text-white text-[13px] font-bold flex items-center justify-center mb-3">
                  {s.n}
                </div>
                <div className="font-bold text-[13px] mb-1.5">{s.title}</div>
                <div className="text-muted text-[12px] leading-relaxed">{s.body}</div>
              </Card>
            ))}
          </div>
        </Section>

        {/* MENU SCAN */}
        <Section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Eyebrow>Menu scan</Eyebrow>
              <H2>Snap any menu. Know what fits you.</H2>
              <p className="text-body-text text-[13px] leading-relaxed mb-5">
                Point your camera at a restaurant menu. Mivan reads every dish and ranks it
                against your diet, conditions and taste — so you order with confidence in
                any city.
              </p>
              <GradientPill>Try it free</GradientPill>
            </div>
            <Card>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-[12px]">Saffron House — menu</span>
                <span className="text-[10px] text-muted font-semibold">12 SCANNED</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {menuScan.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between border-b border-[var(--hairline)] pb-2 last:border-0"
                  >
                    <div>
                      <div className="text-[12px] font-semibold">{m.name}</div>
                      <div className="text-[10.5px] text-muted">{m.tag}</div>
                    </div>
                    <span className="text-[12px] font-bold text-accent-text">{m.score}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* APPLE WATCH */}
        <Section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <div className="flex gap-4 text-[11px] font-semibold text-muted mb-4">
                <span className="text-accent-text">Stress</span>
                <span>Activity</span>
                <span>Sleep</span>
              </div>
              <div className="text-[11px] text-muted mb-1">Right now</div>
              <div className="font-bold text-[15px] mb-1">Tense</div>
              <div className="text-[11px] text-muted mb-4">stress 78 · busy</div>
              <div className="rounded-xl bg-[#f4ede2] p-3">
                <div className="text-[10px] text-muted font-semibold mb-1">
                  Recovery suggestion
                </div>
                <div className="text-[12px] font-bold">Chamomile & oat bowl</div>
                <div className="text-[10.5px] text-muted">eases stress · 89%</div>
              </div>
            </Card>
            <div>
              <Eyebrow>Apple Watch</Eyebrow>
              <H2>Hard day? We notice — and help you recover.</H2>
              <p className="text-body-text text-[13px] leading-relaxed">
                When your watch shows rising stress or a heavy workload, Mivan suggests food
                and drinks that help you bounce back — right for your body in that moment.
              </p>
            </div>
          </div>
        </Section>

        {/* TODAY'S MENU */}
        <Section className="text-center">
          <H2>Picks built around your body.</H2>
          <div className="text-muted text-[12px] mb-6">Today&rsquo;s menu</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {picks.map((p) => (
              <Card key={p.name} className="p-3">
                <ImageSlot className="h-24 mb-3" label={p.name.includes("tea") ? "drink photo" : "food photo"} />
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold">{p.name}</span>
                  <span className="text-[11px] font-bold text-accent-text">{p.score}</span>
                </div>
                <div className="text-[10.5px] text-muted mt-0.5">{p.tag}</div>
              </Card>
            ))}
          </div>
        </Section>

        {/* REVIEWS */}
        <Section className="text-center">
          <Eyebrow>Reviews</Eyebrow>
          <H2>Loved by people on the move.</H2>
          <div className="grid md:grid-cols-3 gap-5 mt-6 text-left">
            {reviews.map((r) => (
              <Card key={r.name}>
                <div className="text-accent-text text-[13px] mb-2">★★★★★</div>
                <p className="text-[12px] text-body-text leading-relaxed mb-3">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="text-[12px] font-bold">{r.name}</div>
                <div className="text-[11px] text-muted">{r.role}</div>
              </Card>
            ))}
          </div>
        </Section>

        {/* PRICING */}
        <Section className="text-center">
          <Eyebrow>Pricing</Eyebrow>
          <H2>Start free. Upgrade when you travel more.</H2>
          <div className="grid md:grid-cols-3 gap-5 mt-6 text-left">
            {plans.map((p) => (
              <Card
                key={p.name}
                className={p.popular ? "border-accent ring-1 ring-accent relative" : ""}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-5 btn-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full">
                    Most popular
                  </div>
                )}
                <div className="font-bold text-[14px] mt-2">{p.name}</div>
                <div className="flex items-baseline gap-1 my-2">
                  <span className="font-display font-extrabold text-2xl">{p.price}</span>
                  <span className="text-muted text-[11px]">/mo</span>
                </div>
                <div className="text-muted text-[12px] mb-4">{p.tag}</div>
                <ul className="space-y-2 text-[12px] mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-accent-text font-bold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <GradientPill className="w-full">{p.cta}</GradientPill>
              </Card>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section className="text-center">
          <H2>Create your account in seconds.</H2>
          <p className="text-body-text text-[13px] max-w-md mx-auto mb-5">
            Sign up with Google and start getting food that fits your body, your taste, and
            your day.
          </p>
          <GradientPill>
            <GoogleG /> Continue with Google
          </GradientPill>
          <div className="text-muted-2 text-[11px] mt-3">
            Free to start · health data encrypted · never sold
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
