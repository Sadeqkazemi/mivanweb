import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";

const signups = [
  { m: "Jan", v: 22 }, { m: "Feb", v: 26 }, { m: "Mar", v: 29 },
  { m: "Apr", v: 33 }, { m: "May", v: 35 }, { m: "Jun", v: 38 },
];

const cities = [
  { name: "Lisbon", v: 9240 },
  { name: "Madrid", v: 7810 },
  { name: "Porto", v: 5120 },
  { name: "Barcelona", v: 4690 },
  { name: "Paris", v: 3980 },
];

const funnel = [
  { name: "Visited site", pct: 100 },
  { name: "Signed up", pct: 46 },
  { name: "Built profile", pct: 38 },
  { name: "Scanned a menu", pct: 29 },
  { name: "Upgraded to Plus", pct: 12 },
];

export default function AdminAnalyticsPage() {
  const maxSignup = Math.max(...signups.map((s) => s.v));
  const maxCity = Math.max(...cities.map((c) => c.v));

  return (
    <AdminShell active="Analytics" title="Analytics" subtitle="Growth & engagement · last 6 months">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="MRR" value="$96.4K" sub="↑ 8.7%" />
        <StatCard label="New sign-ups" value="38.2K" sub="↑ 12.4%" />
        <StatCard label="Menu scans" value="312K" sub="↑ 22%" />
        <StatCard label="Free → Plus" value="12%" sub="↑ 1.3%" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="font-bold text-[13px] mb-4">Sign-ups by month <span className="text-muted font-normal text-[11px]">(in thousands)</span></div>
          <div className="flex items-end gap-3 h-32">
            {signups.map((s) => (
              <div key={s.m} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full btn-gradient rounded-t-md"
                  style={{ height: `${(s.v / maxSignup) * 100}%` }}
                />
                <span className="text-[10px] text-muted">{s.m}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="font-bold text-[13px] mb-4">Top cities</div>
          <div className="flex flex-col gap-2.5">
            {cities.map((c) => (
              <div key={c.name} className="flex items-center gap-3 text-[12px]">
                <span className="w-16 shrink-0 font-semibold">{c.name}</span>
                <div className="flex-1 h-2 rounded-full bg-[#f4ede2] overflow-hidden">
                  <div className="h-full btn-gradient" style={{ width: `${(c.v / maxCity) * 100}%` }} />
                </div>
                <span className="w-14 text-right text-muted">{c.v.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="font-bold text-[13px] mb-4">Conversion funnel</div>
        <div className="flex flex-col gap-2.5">
          {funnel.map((f) => (
            <div key={f.name} className="flex items-center gap-3 text-[12px]">
              <span className="w-32 shrink-0 font-semibold">{f.name}</span>
              <div className="flex-1 h-2 rounded-full bg-[#f4ede2] overflow-hidden">
                <div className="h-full btn-gradient" style={{ width: `${f.pct}%` }} />
              </div>
              <span className="w-10 text-right font-bold text-accent-text">{f.pct}%</span>
            </div>
          ))}
        </div>
      </Card>
    </AdminShell>
  );
}
