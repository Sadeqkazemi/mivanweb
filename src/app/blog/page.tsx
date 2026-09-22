import Link from "next/link";
import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow, Card } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const posts = [
  { slug: "low-sodium-flavor", cat: "Nutrition", title: "Low-sodium does not mean low-flavor", excerpt: "Practical swaps that keep low-sodium meals exciting.", meta: "4 min read · May 2026" },
  { slug: "stress-aware-picks", cat: "Product", title: "Introducing stress-aware recovery picks", excerpt: "How your watch data now shapes what Mivan recommends.", meta: "3 min read · May 2026" },
  { slug: "3-million-meals", cat: "Research", title: "What 3 million matched meals taught us", excerpt: "Patterns across a huge dataset of real recommendations.", meta: "7 min read · April 2026" },
];

const topics = ["All", "Research", "Product", "Nutrition", "Travel"];

export default function BlogPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            The Mivan Journal
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto mb-6">
            Notes on eating well, traveling smart, and the science of food that fits your
            body.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-[11px] font-semibold">
            {topics.map((t) => (
              <span
                key={t}
                className={`px-3 py-1.5 rounded-full border ${
                  t === "All" ? "btn-gradient text-white border-transparent" : "border-[var(--hairline-strong)] text-label"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </Section>

        <Section>
          <Link href="/blog/stress-cortisol-cravings">
            <Card className="p-0 overflow-hidden md:flex">
              <ImageSlot className="h-56 md:h-auto md:w-1/2" label="featured article image" />
              <div className="p-6 md:w-1/2">
                <div className="text-accent-text text-[10px] font-bold uppercase tracking-wide mb-2">
                  Research · Featured
                </div>
                <div className="font-display font-extrabold text-[18px] tracking-[-0.02em] mb-2">
                  How stress quietly changes what your body needs
                </div>
                <p className="text-muted text-[12.5px] leading-relaxed mb-3">
                  We dug into the science of stress, cortisol and cravings — and what it
                  means for the meals that actually help you recover.
                </p>
                <div className="text-muted-2 text-[11px]">8 min read · June 2026</div>
              </div>
            </Card>
          </Link>
        </Section>

        <Section>
          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <Card className="p-0 overflow-hidden h-full">
                  <ImageSlot className="h-36" label="article image" />
                  <div className="p-4">
                    <div className="text-accent-text text-[10px] font-bold uppercase tracking-wide mb-1.5">
                      {p.cat}
                    </div>
                    <div className="font-bold text-[13.5px] mb-1.5 leading-snug">{p.title}</div>
                    <div className="text-muted text-[12px] leading-relaxed mb-2">{p.excerpt}</div>
                    <div className="text-muted-2 text-[10.5px]">{p.meta}</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
