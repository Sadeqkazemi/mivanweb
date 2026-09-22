import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow, H2, Card } from "@/components/Section";
import { GradientPill } from "@/components/Buttons";

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
    features: ["Everything in Free", "Unlimited menu scans", "Apple Watch recovery", "Mivan Club rewards"],
    cta: "Start Plus",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    tag: "For frequent-travel teams.",
    features: ["Everything in Plus", "Up to 10 members", "Trip & expense friendly"],
    cta: "Get started",
  },
];

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes. The Free plan gives you a full taste & health profile and daily recommendations at home, with no card required.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Plus is month-to-month and you can cancel from Settings in one tap.",
  },
  {
    q: "Do you offer team billing?",
    a: "Yes — the Team plan supports up to 10 members with trip- and expense-friendly billing.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            Start free. Upgrade when you travel more
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto">
            Personalized picks are free forever. Unlock unlimited scans and recovery when
            you are on the move.
          </p>
        </Section>

        <Section>
          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <Card key={p.name} className={p.popular ? "border-accent ring-1 ring-accent relative" : ""}>
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

        <Section className="text-center">
          <Eyebrow>Pricing questions</Eyebrow>
          <H2>&nbsp;</H2>
          <div className="grid md:grid-cols-3 gap-5 text-left mt-2">
            {faqs.map((f) => (
              <Card key={f.q}>
                <div className="font-bold text-[13px] mb-2">{f.q}</div>
                <div className="text-muted text-[12px] leading-relaxed">{f.a}</div>
              </Card>
            ))}
          </div>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
