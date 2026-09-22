import Link from "next/link";
import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Card } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const related = [
  { cat: "Nutrition", title: "Low-sodium does not mean low-flavor", meta: "4 min read" },
  { cat: "Product", title: "Introducing stress-aware recovery picks", meta: "3 min read" },
  { cat: "Research", title: "What 3 million matched meals taught us", meta: "7 min read" },
];

export default function BlogPostPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section>
          <Link href="/blog" className="text-accent-text text-[12px] font-semibold">
            ← The Mivan Journal
          </Link>
          <div className="mt-5 max-w-2xl">
            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wide text-accent-text mb-3">
              <span>Research</span>
              <span>·</span>
              <span>Featured</span>
            </div>
            <h1 className="font-display font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.03em] mb-3">
              How stress quietly changes what your body needs
            </h1>
            <p className="text-body-text text-[14px] leading-relaxed mb-5">
              We dug into the science of stress, cortisol and cravings — and what it
              actually means for the meals that help you recover.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="btn-gradient w-9 h-9 rounded-full text-white font-bold flex items-center justify-center text-[13px]">
                L
              </div>
              <div>
                <div className="text-[12px] font-bold">Dr. Lena Faris</div>
                <div className="text-muted text-[11px]">Head of Nutrition Science · Mivan</div>
              </div>
              <div className="text-muted-2 text-[11px] ml-auto">June 12, 2026 · 8 min read</div>
            </div>
          </div>
        </Section>

        <Section className="max-w-2xl">
          <ImageSlot className="h-72 mb-6" label="article hero image" />
          <div className="prose text-[13.5px] leading-relaxed text-body-text space-y-4">
            <p>
              When we talk about eating well, we usually talk about food in isolation —
              calories, macros, ingredients. But your body never eats in isolation. The
              same plate lands differently on a calm Sunday than on a deadline-soaked
              Tuesday, and the difference comes down to one quiet variable: stress.
            </p>
            <p>
              Over the last year, our research team looked at how physiological stress
              signals — heart rate, HRV, sleep debt — line up with the meals people
              actually reach for, and which of those meals leave them feeling better
              afterward.
            </p>
            <h2 className="font-display font-extrabold text-[17px] tracking-[-0.02em] text-ink pt-2">
              The cortisol-craving loop
            </h2>
            <p>
              When stress rises, your body releases cortisol to keep you alert. Helpful in
              short bursts — but sustained cortisol nudges you toward fast energy: salt,
              sugar, and refined carbs. It is not a lack of willpower. It is biology asking
              for a shortcut.
            </p>
            <p>
              The problem is that those shortcuts spike and crash, which raises stress
              again. The loop tightens. Breaking it is less about restriction and more
              about giving the body what it is actually short on.
            </p>
            <Card className="bg-[#f4ede2] border-0 text-[14px] font-semibold text-ink italic">
              &ldquo;On high-stress days, people who ate magnesium- and protein-rich meals
              reported 31% better recovery the next morning.&rdquo;
            </Card>
            <h2 className="font-display font-extrabold text-[17px] tracking-[-0.02em] text-ink pt-2">
              What actually helps
            </h2>
            <p>Three patterns showed up again and again in the data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Steady protein.</strong> It blunts the spike-and-crash cycle and keeps you fuller, longer.</li>
              <li><strong>Magnesium-rich greens and nuts.</strong> Linked to calmer evenings and deeper sleep.</li>
              <li><strong>Earlier, lighter dinners.</strong> Recovery starts the night before, not the morning after.</li>
            </ul>
            <p>
              None of this requires a new diet. It requires the right plate at the right
              moment — which is exactly the signal your smartwatch already carries. That is
              the idea behind Mivan&rsquo;s stress-aware recovery picks: meals chosen for
              the body you have today, not the body you had yesterday.
            </p>
          </div>
          <div className="flex gap-2 mt-6 text-[11px] font-semibold text-label">
            <span className="px-3 py-1 rounded-full bg-[#f4ede2]">Stress</span>
            <span className="px-3 py-1 rounded-full bg-[#f4ede2]">Recovery</span>
            <span className="px-3 py-1 rounded-full bg-[#f4ede2]">Nutrition science</span>
          </div>
        </Section>

        <Section className="text-center">
          <div className="text-label text-[11px] font-bold uppercase tracking-wide mb-4">
            Keep reading
          </div>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {related.map((r) => (
              <Card key={r.title}>
                <div className="text-accent-text text-[10px] font-bold uppercase tracking-wide mb-1.5">
                  {r.cat}
                </div>
                <div className="font-bold text-[13px] mb-1.5 leading-snug">{r.title}</div>
                <div className="text-muted-2 text-[11px]">{r.meta}</div>
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
