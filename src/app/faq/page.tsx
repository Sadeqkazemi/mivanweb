"use client";
import { useState } from "react";
import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow } from "@/components/Section";
import { GradientPill } from "@/components/Buttons";

const groups = [
  {
    title: "Getting started",
    items: [
      { q: "Is Mivan free?", a: "Yes — the Free plan gives you a full taste & health profile and daily recommendations at home, with no card required." },
      { q: "Which phones are supported?", a: "Mivan runs on the latest iOS and Android — any phone from the last few years works well." },
      { q: "How long does setup take?", a: "About two minutes: a short taste & health quiz, then you're ready for your first recommendation." },
    ],
  },
  {
    title: "Health & data",
    items: [
      { q: "Is my health data safe?", a: "Your health data is encrypted in transit and at rest, and we never sell it. You can export or delete it anytime." },
      { q: "Which conditions can Mivan handle?", a: "Diabetes, low-sodium diets, Mediterranean diets, and common allergies, among others — with more added regularly." },
      { q: "Which smartwatches work?", a: "Apple Watch, Wear OS, Fitbit and Garmin are all supported today." },
    ],
  },
  {
    title: "Billing",
    items: [
      { q: "Can I cancel anytime?", a: "Absolutely. Plus is month-to-month and you can cancel from Settings in one tap." },
      { q: "Do you offer team plans?", a: "Yes — the Team plan supports up to 10 members with trip- and expense-friendly billing." },
    ],
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[var(--hairline)] py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold text-[13px]">{q}</span>
        <span className="text-accent-text font-bold text-[16px]">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-muted text-[12.5px] leading-relaxed mt-2">{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            Questions, answered
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto">
            Everything you might want to know about Mivan. Still stuck? Reach out any time.
          </p>
        </Section>

        <Section className="max-w-2xl">
          {groups.map((g) => (
            <div key={g.title} className="mb-8">
              <div className="text-label text-[11px] font-bold uppercase tracking-wide mb-2">
                {g.title}
              </div>
              {g.items.map((it, idx) => (
                <FaqItem key={it.q} q={it.q} a={it.a} defaultOpen={idx === 0 && g.title === "Getting started"} />
              ))}
            </div>
          ))}
        </Section>

        <Section className="text-center">
          <div className="font-bold text-[15px] mb-1">Still have a question?</div>
          <p className="text-muted text-[12.5px] mb-4">Our team usually replies within a day.</p>
          <GradientPill href="/contact">Contact us</GradientPill>
        </Section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
