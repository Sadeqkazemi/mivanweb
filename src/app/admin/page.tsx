import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";

const users = [
  { i: "S", name: "Sara Ahmadi", email: "sara@gmail.com", plan: "Plus", status: "Active", scans: 214, last: "2 min ago" },
  { i: "D", name: "Daniel Rocha", email: "daniel@gmail.com", plan: "Plus", status: "Active", scans: 512, last: "18 min ago" },
  { i: "M", name: "Mina Karimi", email: "mina@gmail.com", plan: "Free", status: "Active", scans: 38, last: "1 hr ago" },
  { i: "O", name: "Omid Tehrani", email: "omid@gmail.com", plan: "Team", status: "Idle", scans: 1043, last: "Yesterday" },
  { i: "L", name: "Lena Brandt", email: "lena@gmail.com", plan: "Free", status: "Suspended", scans: 7, last: "5 days ago" },
];

const statusColor: Record<string, string> = {
  Active: "text-accent-text bg-[#fdece0]",
  Idle: "text-muted bg-[#f4ede2]",
  Suspended: "text-red-600 bg-red-50",
};

const activity = [
  { title: "New restaurant · Saffron House", sub: "added 86 dishes", time: "12 min ago" },
  { title: "1,204 new Gmail sign-ups today", sub: "", time: "today" },
  { title: "AI model v2.4", sub: "deployed to production", time: "3 hrs ago" },
  { title: "1 account flagged for review", sub: "", time: "5 hrs ago" },
];

export default function AdminOverviewPage() {
  return (
    <AdminShell active="Overview" title="Overview" subtitle="Platform health · last 30 days">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total users" value="48,210" sub="↑ 12.4% this month" />
        <StatCard label="Active today" value="9,847" sub="↑ 4.1% vs avg" />
        <StatCard label="Menu scans" value="312K" sub="↑ 22% this month" />
        <StatCard label="MRR" value="$96.4K" sub="↑ 8.7% this month" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-[var(--hairline)]">
            <span className="font-bold text-[13px]">Recent users</span>
            <span className="text-accent-text text-[11.5px] font-semibold">Export</span>
          </div>
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-muted text-[10.5px] uppercase tracking-wide">
                <th className="text-left font-semibold px-4 py-2">User</th>
                <th className="text-left font-semibold px-2 py-2">Plan</th>
                <th className="text-left font-semibold px-2 py-2">Status</th>
                <th className="text-left font-semibold px-2 py-2">Scans</th>
                <th className="text-left font-semibold px-4 py-2">Last active</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email} className="border-t border-[var(--hairline)]">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="btn-gradient w-7 h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center">
                        {u.i}
                      </div>
                      <div>
                        <div className="font-semibold">{u.name}</div>
                        <div className="text-muted text-[10.5px]">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2">{u.plan}</td>
                  <td className="px-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${statusColor[u.status]}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-2">{u.scans}</td>
                  <td className="px-4 text-muted">{u.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <div className="font-bold text-[13px] mb-3">AI engine</div>
            <div className="grid grid-cols-2 gap-3 text-[12px]">
              <div><div className="font-display font-extrabold text-lg">98%</div><div className="text-muted text-[10.5px]">Recommendation accuracy</div></div>
              <div><div className="font-display font-extrabold text-lg">94%</div><div className="text-muted text-[10.5px]">Menu OCR success</div></div>
              <div><div className="font-display font-extrabold text-lg">99.9%</div><div className="text-muted text-[10.5px]">Watch sync uptime</div></div>
              <div><div className="font-display font-extrabold text-lg">240ms</div><div className="text-muted text-[10.5px]">Avg response time</div></div>
            </div>
          </Card>
          <Card>
            <div className="font-bold text-[13px] mb-3">Recent activity</div>
            <div className="flex flex-col gap-3">
              {activity.map((a) => (
                <div key={a.title} className="text-[12px]">
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-muted text-[10.5px]">{a.sub} {a.sub && "·"} {a.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AdminShell>
  );
}
