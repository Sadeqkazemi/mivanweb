import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const blocks = [
  {
    eyebrow: "Personalized",
    title: "Picks built around your body",
    body: "A short AI quiz learns your flavors, diet, allergies and conditions. Every recommendation is ranked for you — not the average person.",
    points: ["Taste & flavor profile", "Diabetes, low-sodium & more", "Allergy-safe by default"],
    imgLabel: "app screen — daily picks",
  },
  {
    eyebrow: "Menu scan",
    title: "Snap any menu, know what fits",
    body: "Point your camera at a restaurant menu. Mivan reads every dish and ranks it against your profile, so you order with confidence in any city.",
    points: ["Reads the whole menu", "Ranks every dish for you", "Flags allergens instantly"],
    imgLabel: "app screen — menu scan results",
    reverse: true,
  },
  {
    eyebrow: "Apple Watch",
    title: "Stress-aware recovery",
    body: "When your watch shows rising stress or a heavy day, Mivan suggests food and drinks that help you bounce back — right for your body in that moment.",
    points: ["Reads stress, heart rate & sleep", "Recovery suggestions", "Works while you travel"],
    imgLabel: "app screen — watch recovery",
  },
  {
    eyebrow: "Everywhere",
    title: "Right food in any city",
    body: "At home, traveling, or reading a menu you have never seen — Mivan works across 120+ cities and every major smartwatch.",
    points: ["120+ cities covered", "Apple Watch, Wear OS, Fitbit, Garmin", "Offline-friendly profiles"],
    imgLabel: "app screen — discover map",
    reverse: true,
  },
  {
    eyebrow: "Mivan Club",
    title: "Get rewarded for eating well",
    body: "Earn points for healthy choices and redeem them for Plus, partner vouchers and more.",
    points: ["Points for every healthy pick", "Gold & Platinum tiers", "Partner rewards"],
    imgLabel: "app screen — club & rewards",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>Features</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            Everything Mivan does for you
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto">
            One companion for taste, health and recovery — in your pocket, wherever the day
            takes you.
          </p>
        </Section>

        {blocks.map((b) => (
          <Section key={b.title}>
            <div
              className={`grid md:grid-cols-2 gap-8 items-center ${
                b.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ImageSlot className="h-64" label={b.imgLabel} />
              <div>
                <Eyebrow>{b.eyebrow}</Eyebrow>
                <h2 className="font-display font-extrabold text-[19px] tracking-[-0.03em] mb-2">
                  {b.title}
                </h2>
                <p className="text-body-text text-[13px] leading-relaxed mb-4">{b.body}</p>
                <ul className="space-y-2 text-[12.5px] font-medium">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="text-accent-text font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
