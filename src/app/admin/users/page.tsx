import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";
import { GradientPill } from "@/components/Buttons";

const users = [
  { i: "S", name: "Sara Ahmadi", email: "sara@gmail.com", plan: "Plus", status: "Active", scans: 214, last: "2 min ago" },
  { i: "D", name: "Daniel Rocha", email: "daniel@gmail.com", plan: "Plus", status: "Active", scans: 512, last: "18 min ago" },
  { i: "M", name: "Mina Karimi", email: "mina@gmail.com", plan: "Free", status: "Active", scans: 38, last: "1 hr ago" },
  { i: "O", name: "Omid Tehrani", email: "omid@gmail.com", plan: "Team", status: "Idle", scans: 1043, last: "Yesterday" },
  { i: "L", name: "Lena Brandt", email: "lena@gmail.com", plan: "Free", status: "Suspended", scans: 7, last: "5 days ago" },
  { i: "J", name: "Joao Pinto", email: "joao@gmail.com", plan: "Plus", status: "Active", scans: 176, last: "3 min ago" },
  { i: "A", name: "Aria Naderi", email: "aria@gmail.com", plan: "Free", status: "Active", scans: 24, last: "40 min ago" },
  { i: "C", name: "Clara Sousa", email: "clara@gmail.com", plan: "Team", status: "Active", scans: 689, last: "2 hrs ago" },
];

const statusColor: Record<string, string> = {
  Active: "text-accent-text bg-[#fdece0]",
  Idle: "text-muted bg-[#f4ede2]",
  Suspended: "text-red-600 bg-red-50",
};

export default function AdminUsersPage() {
  return (
    <AdminShell active="Users" title="Users" subtitle="48,210 total · 9,847 active today">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total users" value="48,210" sub="↑ 12.4% this month" />
        <StatCard label="Plus subscribers" value="11,920" sub="↑ 9.1%" />
        <StatCard label="Team accounts" value="842" sub="↑ 5.4%" />
        <StatCard label="Suspended" value="37" sub="↓ 2 this week" />
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--hairline)]">
          <span className="font-bold text-[13px]">All users</span>
          <div className="flex gap-2">
            <button className="text-accent-text text-[11.5px] font-semibold">Export</button>
            <GradientPill className="!px-4 !py-2 !text-[11px]">+ Add user</GradientPill>
          </div>
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
    </AdminShell>
  );
}
