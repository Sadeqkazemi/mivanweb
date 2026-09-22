import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow, Card } from "@/components/Section";
import { GradientPill } from "@/components/Buttons";
import { ImageSlot } from "@/components/ImageSlot";

const contacts = [
  { title: "Email us", value: "hello@mivan.ai", note: "We reply within a day." },
  { title: "Support", value: "help@mivan.ai", note: "Account & billing help." },
  { title: "Press", value: "press@mivan.ai", note: "Media & partnerships." },
];

export default function ContactPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            We would love to hear from you
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto">
            Questions, feedback, partnerships or press — reach the Mivan team here.
          </p>
        </Section>

        <Section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="font-bold text-[14px] mb-4">Send us a message</div>
              <form className="flex flex-col gap-3">
                <input placeholder="Full name" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
                <input placeholder="Email" type="email" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
                <input placeholder="Subject" className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
                <textarea placeholder="Message" rows={4} className="rounded-[13px] border border-[var(--hairline-strong)] px-4 py-3 text-[12.5px] outline-none focus:border-accent" />
                <GradientPill className="mt-1">Send message</GradientPill>
              </form>
            </Card>
            <div className="flex flex-col gap-4">
              {contacts.map((c) => (
                <Card key={c.title}>
                  <div className="font-bold text-[13px] mb-1">{c.title}</div>
                  <div className="text-accent-text text-[13px] font-semibold">{c.value}</div>
                  <div className="text-muted text-[11.5px] mt-1">{c.note}</div>
                </Card>
              ))}
              <Card>
                <div className="font-bold text-[13px] mb-1">Visit us</div>
                <div className="text-muted text-[12px] mb-3">
                  Downtown Dubai, Burj Khalifa Blvd, Office 210, Dubai, UAE
                </div>
                <ImageSlot className="h-32" label="office map" />
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
