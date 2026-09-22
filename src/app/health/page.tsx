import { AppShell, WatchLiveBadge } from "@/components/AppShell";
import { Card } from "@/components/Section";

const vitals = [
  { label: "Sleep", value: "6h 10m", sub: "Below your 7h goal", trend: "↓ 50m" },
  { label: "Stress", value: "78", sub: "Resting 64 · above today", trend: "↑ 8" },
  { label: "HR bpm", value: "82", sub: "Heart rate", trend: "" },
  { label: "Activity", value: "9,240", sub: "steps · 78% of goal", trend: "↑ High" },
];

export default function HealthPage() {
  return (
    <AppShell active="My health">
      <div className="p-6 md:p-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display font-extrabold text-[22px] tracking-[-0.02em]">
              My health
            </h1>
            <p className="text-muted text-[12.5px]">
              What Mivan knows about your body · Monday, Jun 29 · 8:24 AM
            </p>
          </div>
          <WatchLiveBadge />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-[11px] text-muted mb-1">Readiness</div>
                <div className="font-display font-extrabold text-3xl text-accent-text">72</div>
                <div className="text-[11px] text-muted">Today · Balanced</div>
              </div>
            </div>
            <div className="font-bold text-[14px] mt-3 mb-1">You&rsquo;re a little tense today.</div>
            <p className="text-muted text-[12px] leading-relaxed">
              Sleep ran short and stress is up since yesterday. Mivan is leaning toward
              calming, low-sodium plates and easing back on caffeine.
            </p>
            <div className="text-accent-text text-[12px] font-semibold mt-3">
              See today&rsquo;s meals →
            </div>
          </Card>
          <Card>
            <div className="text-[11px] text-muted mb-2">Recovery</div>
            <div className="font-display font-extrabold text-2xl">HRV 48</div>
            <div className="text-[12px] font-semibold text-accent-text mb-2">Fair</div>
            <div className="text-muted text-[11.5px]">Take it easy after lunch</div>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {vitals.map((v) => (
            <Card key={v.label}>
              <div className="text-[10.5px] text-muted mb-1">{v.label}</div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold text-lg">{v.value}</span>
                {v.trend && <span className="text-[10.5px] text-accent-text font-bold">{v.trend}</span>}
              </div>
              <div className="text-muted text-[10.5px]">{v.sub}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <div className="font-bold text-[13px] mb-3">Today&rsquo;s guidance · Eat to recover</div>
            <ul className="space-y-2 text-[12.5px]">
              {["Lighter dinner, a little earlier", "Magnesium-rich: greens & nuts", "Cap caffeine after 2 PM"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-accent-text font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="text-accent-text text-[12px] font-semibold mt-3">
              See matching meals →
            </div>
          </Card>
          <Card>
            <div className="font-bold text-[13px] mb-1">Nutrition today</div>
            <div className="text-[12px] text-muted mb-3">1,180 / 1,900 kcal · On track for a lighter, calming day</div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[["Protein", "96g"], ["Carbs", "142g"], ["Fat", "52g"]].map(([l, v]) => (
                <div key={l}>
                  <div className="font-bold text-[14px]">{v}</div>
                  <div className="text-muted text-[10.5px]">{l}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[13px]">Taste profile</span>
              <span className="text-accent-text text-[11px] font-semibold">Edit</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-label">
              {["Savory", "Herby", "Mild spice", "Citrus", "Warm spices", "Less sweet"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-[#f4ede2]">{t}</span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[13px]">Diet & conditions</span>
              <span className="text-accent-text text-[11px] font-semibold">Edit</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-label">
              {["Low-sodium", "Type 2 diabetes", "High protein", "Mediterranean"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-[#f4ede2]">{t}</span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-[13px]">Allergies</span>
              <span className="text-accent-text text-[11px] font-semibold">Edit</span>
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-label mb-2">
              {["Shellfish", "Peanuts"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-[#fdece0] text-accent-text">{t}</span>
              ))}
            </div>
            <div className="text-muted text-[10.5px]">We always flag these on menus.</div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
