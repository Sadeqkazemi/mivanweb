import Link from "next/link";
import { AppShell, WatchLiveBadge } from "@/components/AppShell";
import { Card } from "@/components/Section";
import { ImageSlot } from "@/components/ImageSlot";

const picks = [
  { name: "Miso magnesium bowl", tag: "91% · calms stress", kind: "food photo" },
  { name: "Salmon & greens", tag: "88% · low-sodium", kind: "food photo" },
  { name: "Green tea & dates", tag: "84% · recovery", kind: "drink photo" },
];

const scans = [
  { name: "Grilled fish & herbs", tag: "low-sodium · high protein", score: "92%" },
  { name: "Lentil & barley soup", tag: "high fiber · plant-based", score: "87%" },
  { name: "Fried sugar pastry", tag: "high sugar · skip today", score: "21%" },
];

const streaks = [
  { name: "Scan a menu", pts: "+20" },
  { name: "Follow a recovery pick", pts: "+50" },
  { name: "7-day healthy streak", pts: "+100" },
];

export default function DashboardPage() {
  return (
    <AppShell active="Home">
      <div className="p-6 md:p-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display font-extrabold text-[22px] tracking-[-0.02em]">
              Good afternoon, Sara
            </h1>
            <p className="text-muted text-[12.5px]">
              Here&rsquo;s what fits you right now · Dubai
            </p>
          </div>
          <WatchLiveBadge />
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="font-bold text-[13px]">Recommended for your afternoon</div>
          <Link href="/health" className="text-accent-text text-[11.5px] font-semibold">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {picks.map((p) => (
            <Card key={p.name} className="p-3">
              <ImageSlot className="h-24 mb-3" label={p.kind} />
              <div className="text-[12px] font-bold">{p.name}</div>
              <div className="text-[11px] text-accent-text font-semibold">{p.tag}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <div className="text-[11px] text-muted mb-1">Your body right now</div>
            <div className="font-bold text-[15px] mb-1">Tense</div>
            <div className="text-[11px] text-muted">stress 78 · busy day</div>
          </Card>
          <Card>
            <div className="text-[11px] text-muted mb-1">Heart rate</div>
            <div className="font-bold text-[15px]">82 bpm</div>
          </Card>
          <Card>
            <div className="text-[11px] text-muted mb-1">Activity</div>
            <div className="font-bold text-[15px]">High</div>
            <div className="text-[11px] text-muted">Sleep last night · 6h 10m</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-[13px]">Mivan Club</div>
              <Link href="/club" className="text-accent-text text-[11px] font-semibold">
                View →
              </Link>
            </div>
            <div className="font-display font-extrabold text-2xl text-accent-text">1,240</div>
            <div className="text-muted text-[11.5px] mb-4">Gold · 260 to Platinum</div>
            <div className="flex flex-col gap-2">
              {streaks.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-[12px]">
                  <span>{s.name}</span>
                  <span className="font-bold text-accent-text">{s.pts}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-[13px]">Last menu scan · Saffron House</div>
              <span className="text-accent-text text-[11px] font-semibold">Scan in the app</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {scans.map((s) => (
                <div key={s.name} className="flex items-center justify-between border-b border-[var(--hairline)] pb-2 last:border-0">
                  <div>
                    <div className="text-[12px] font-semibold">{s.name}</div>
                    <div className="text-[10.5px] text-muted">{s.tag}</div>
                  </div>
                  <span className="text-[12px] font-bold text-accent-text">{s.score}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
