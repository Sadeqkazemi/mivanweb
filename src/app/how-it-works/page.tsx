import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow, H2, Card } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const steps = [
  {
    n: 1,
    title: "Tell us your taste & health",
    body: "A short AI quiz learns your flavors, diet, allergies and conditions — like diabetes or low-sodium needs. It takes about two minutes.",
    img: "app screen — onboarding quiz",
  },
  {
    n: 2,
    title: "We read your day",
    body: "Connect your Apple Watch and Mivan factors in your stress, heart rate and activity, so picks fit how your body actually feels.",
    img: "app screen — watch sync",
  },
  {
    n: 3,
    title: "Get the right pick",
    body: "Personalized food and drinks wherever you are — at home, traveling, or from a photo of any menu.",
    img: "app screen — recommendation",
  },
];

const underTheHood = [
  { title: "Taste model", body: "Learns the flavors and textures you actually enjoy, and adapts as you rate meals." },
  { title: "Health graph", body: "Maps your conditions, diet and allergies to every dish for a safe, ranked match." },
  { title: "Live signals", body: "Reads your smartwatch in real time to adjust picks for stress, sleep and activity." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            Three steps to the right meal
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto">
            No calorie counting, no guesswork. Set up once and Mivan does the thinking every
            time you eat.
          </p>
        </Section>

        {steps.map((s, i) => (
          <Section key={s.n}>
            <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <ImageSlot className="h-64" label={s.img} />
              <div>
                <div className="btn-gradient w-9 h-9 rounded-full text-white text-[14px] font-bold flex items-center justify-center mb-3">
                  {s.n}
                </div>
                <h2 className="font-display font-extrabold text-[19px] tracking-[-0.03em] mb-2">
                  {s.title}
                </h2>
                <p className="text-body-text text-[13px] leading-relaxed">{s.body}</p>
              </div>
            </div>
          </Section>
        ))}

        <Section className="text-center">
          <Eyebrow>Under the hood</Eyebrow>
          <H2>What makes it accurate</H2>
          <div className="grid md:grid-cols-3 gap-5 mt-6 text-left">
            {underTheHood.map((u) => (
              <Card key={u.title}>
                <div className="font-bold text-[13px] mb-1.5">{u.title}</div>
                <div className="text-muted text-[12px] leading-relaxed">{u.body}</div>
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
