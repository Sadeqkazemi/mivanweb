import { Section } from "./Section";
import { GradientPill } from "./Buttons";

export function CTASection() {
  return (
    <Section className="text-center">
      <h2 className="font-display font-extrabold text-[clamp(20px,3.5vw,28px)] tracking-[-0.03em] mb-3">
        Eat what truly fits you.
      </h2>
      <p className="text-body-text text-[13px] max-w-md mx-auto mb-5">
        Download Mivan free on iPhone and Android and get food that fits your body, taste,
        and day.
      </p>
      <GradientPill href="/download">Get the app</GradientPill>
    </Section>
  );
}
