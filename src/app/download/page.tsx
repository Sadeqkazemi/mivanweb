import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Section, Eyebrow, Card } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const badges = [
  { title: "Free to start", body: "No card needed for the Free plan." },
  { title: "Health data encrypted", body: "Your data is encrypted and never sold." },
  { title: "Every smartwatch", body: "Apple Watch, Wear OS, Fitbit, Garmin." },
  { title: "120+ cities", body: "Right picks wherever you travel." },
];

export default function DownloadPage() {
  return (
    <>
      <PublicNav />
      <main>
        <Section className="text-center">
          <Eyebrow>Download</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(26px,5vw,42px)] tracking-[-0.03em] mb-3">
            Get Mivan free today
          </h1>
          <p className="text-body-text text-[13px] max-w-xl mx-auto mb-7">
            Available on iPhone and Android. Set up your profile in two minutes and start
            eating what truly fits you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button className="bg-ink text-white rounded-2xl px-5 py-3 text-left">
              <div className="text-[9px] text-white/70 leading-none">Download on the</div>
              <div className="text-[14px] font-bold leading-tight">App Store</div>
            </button>
            <button className="bg-ink text-white rounded-2xl px-5 py-3 text-left">
              <div className="text-[9px] text-white/70 leading-none">Get it on</div>
              <div className="text-[14px] font-bold leading-tight">Google Play</div>
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center max-w-2xl mx-auto">
            <ImageSlot className="h-72" label="app home screen" />
            <Card className="flex flex-col items-center justify-center h-40">
              <div className="w-24 h-24 bg-[#f4ede2] rounded-lg mb-3 flex items-center justify-center text-[10px] text-muted font-semibold">
                QR
              </div>
              <div className="text-muted text-[12px]">Scan to install on your phone in seconds.</div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {badges.map((b) => (
              <Card key={b.title}>
                <div className="font-bold text-[12.5px] mb-1.5">{b.title}</div>
                <div className="text-muted text-[11.5px] leading-relaxed">{b.body}</div>
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
