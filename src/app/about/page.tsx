import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow, H2, Card } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const stats = [
  { value: "120+", label: "Cities covered" },
  { value: "98%", label: "Match accuracy" },
  { value: "3M+", label: "Meals matched" },
  { value: "24/7", label: "Live guidance" },
];

const values = [
  { title: "Health first", body: "Every recommendation is safe for your conditions and allergies — no exceptions." },
  { title: "Your data, yours", body: "Health data is encrypted and never sold. You stay in control." },
  { title: "Built for real life", body: "Stress, travel and busy days are the norm. Mivan is designed for them." },
];

const team = [
  { role: "Founder & CEO" },
  { role: "Head of Nutrition" },
  { role: "Head of AI" },
  { role: "Head of Design" },
];

export default function AboutPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            Food that fits you, wherever you are
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto">
            Millions travel and struggle to find food that suits their taste, diet and
            health. We built Mivan to close that gap.
          </p>
        </Section>

        <Section className="text-center">
          <Eyebrow>Our mission</Eyebrow>
          <H2>Help everyone eat what truly fits them.</H2>
          <p className="text-body-text text-[13px] leading-relaxed max-w-2xl mx-auto">
            Modern life loads our days with stress and pressure that quietly shape what our
            bodies actually need — and travel makes it even harder to find the right meal.
          </p>
          <p className="text-body-text text-[13px] leading-relaxed max-w-2xl mx-auto mt-3">
            Mivan learns your palate, understands your conditions and diet, reads your day
            through your smartwatch, and recommends the right meal for your exact moment —
            even from a photo of a menu you have never seen.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-2xl text-accent-text">{s.value}</div>
                <div className="text-muted text-[11px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="text-center">
          <Eyebrow>Our values</Eyebrow>
          <H2>What we believe</H2>
          <div className="grid md:grid-cols-3 gap-5 mt-6 text-left">
            {values.map((v) => (
              <Card key={v.title}>
                <div className="font-bold text-[13px] mb-1.5">{v.title}</div>
                <div className="text-muted text-[12px] leading-relaxed">{v.body}</div>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="text-center">
          <Eyebrow>Team</Eyebrow>
          <H2>The people behind Mivan</H2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
            {team.map((t) => (
              <div key={t.role}>
                <ImageSlot className="h-32 mb-3" label="team photo" />
                <div className="font-bold text-[12px]">Team member</div>
                <div className="text-muted text-[11px]">{t.role}</div>
              </div>
            ))}
          </div>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
