import { AppShell, WatchLiveBadge } from "@/components/AppShell";
import { Card } from "@/components/Section";

const tiers = [
  { name: "Bronze", pts: "0 pts", perk: "Earn & track points" },
  { name: "Silver", pts: "1,000 pts", perk: "5% partner discounts" },
  { name: "Gold", pts: "3,000 pts", perk: "Priority support + bonus points", you: true },
  { name: "Platinum", pts: "6,000 pts", perk: "Free nutritionist calls" },
];

const rewards = [
  { name: "$5 partner voucher", desc: "Redeem at partner restaurants", cost: "500", btn: "Redeem" },
  { name: "1 month of Plus", desc: "Unlimited scans & recovery picks", cost: "1,200", btn: "Redeem" },
  { name: "Nutritionist call", desc: "20-minute 1:1 session", cost: "2,000", btn: "Redeem" },
];

const earn = [
  { name: "Scan a menu", pts: "+20 pts" },
  { name: "Follow a recovery pick", pts: "+50 pts" },
  { name: "7-day healthy streak", pts: "+100 pts" },
];

const activity = [
  { name: "Scanned Saffron House menu", date: "Jun 27", pts: "+20 pts" },
  { name: "Followed recovery pick", date: "Jun 26", pts: "+50 pts" },
  { name: "Redeemed partner voucher", date: "Jun 20", pts: "-500 pts" },
];

export default function ClubPage() {
  return (
    <AppShell active="Mivan Club">
      <div className="p-6 md:p-8 max-w-5xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display font-extrabold text-[22px] tracking-[-0.02em]">
              Mivan Club
            </h1>
            <p className="text-muted text-[12.5px]">Your membership, rewards & perks</p>
          </div>
          <WatchLiveBadge />
        </div>

        <Card className="btn-gradient text-white border-0 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wide mb-1">★ Gold member</div>
              <div className="font-display font-extrabold text-2xl">Sara Adeli</div>
              <div className="text-[11.5px] opacity-90">Member · •••• 4821 · since 2024</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] opacity-90 mb-1">Points balance</div>
              <div className="font-display font-extrabold text-3xl">1,240</div>
              <div className="text-[11px] opacity-90">260 pts to Platinum</div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card><div className="font-display font-extrabold text-xl">8,920</div><div className="text-muted text-[11px]">Lifetime earned</div></Card>
          <Card><div className="font-display font-extrabold text-xl">12 🔥</div><div className="text-muted text-[11px]">Day streak</div></Card>
          <Card><div className="font-display font-extrabold text-xl">6</div><div className="text-muted text-[11px]">Rewards claimed</div></Card>
        </div>

        <div className="font-bold text-[13px] mb-3">Membership tiers</div>
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {tiers.map((t) => (
            <Card key={t.name} className={t.you ? "border-accent ring-1 ring-accent" : ""}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[13px]">{t.name}</span>
                {t.you && <span className="text-[10px] font-bold text-accent-text">YOU</span>}
              </div>
              <div className="text-muted text-[11px] mb-2">{t.pts}</div>
              <div className="text-[11.5px] text-body-text">{t.perk}</div>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-[13px]">Rewards</span>
          <span className="text-muted text-[11.5px]">You have 1,240 pts to spend</span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {rewards.map((r) => (
            <Card key={r.name}>
              <div className="font-bold text-[13px] mb-1.5">{r.name}</div>
              <div className="text-muted text-[11.5px] leading-relaxed mb-3">{r.desc}</div>
              <div className="flex items-center justify-between">
                <span className="text-accent-text font-bold text-[12px]">★ {r.cost} pts</span>
                <button className="btn-gradient text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                  {r.btn}
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="font-bold text-[13px] mb-3">Ways to earn</div>
            <div className="flex flex-col gap-2">
              {earn.map((e) => (
                <div key={e.name} className="flex items-center justify-between text-[12px]">
                  <span>{e.name}</span>
                  <span className="font-bold text-accent-text">{e.pts}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div className="font-bold text-[13px] mb-3">Recent activity</div>
            <div className="flex flex-col gap-2">
              {activity.map((a) => (
                <div key={a.name} className="flex items-center justify-between text-[12px]">
                  <div>
                    <div>{a.name}</div>
                    <div className="text-muted text-[10.5px]">{a.date}</div>
                  </div>
                  <span className={`font-bold ${a.pts.startsWith("-") ? "text-muted" : "text-accent-text"}`}>{a.pts}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
