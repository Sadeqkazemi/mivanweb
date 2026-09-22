import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";
import { GradientPill } from "@/components/Buttons";

const dishes = [
  { name: "Grilled fish & herbs", restaurant: "Saffron House", tags: ["Low-sodium", "High protein"], status: "Live" },
  { name: "Lentil & barley soup", restaurant: "Saffron House", tags: ["High fiber", "Vegan"], status: "Live" },
  { name: "Saffron rice & chicken", restaurant: "Saffron House", tags: ["High sodium"], status: "Live" },
  { name: "Fried sugar pastry", restaurant: "Cafe Aurora", tags: ["High sugar"], status: "Review" },
  { name: "Miso magnesium bowl", restaurant: "Green Bowl Co.", tags: ["Calming", "Gut-friendly"], status: "Live" },
  { name: "Salmon & greens", restaurant: "Tagus Grill", tags: ["Low-sodium", "Omega-3"], status: "Live" },
];

const statusColor: Record<string, string> = {
  Live: "text-accent-text bg-[#fdece0]",
  Review: "text-amber-700 bg-amber-50",
};

export default function AdminMenusPage() {
  return (
    <AdminShell active="Menus & dishes" title="Menus & dishes" subtitle="198K dishes · ranked by the AI engine">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Dishes" value="198,420" sub="↑ 4,210 this week" />
        <StatCard label="Auto-tagged" value="96%" sub="↑ 2%" />
        <StatCard label="Flagged unhealthy" value="8,940" sub="review queue" />
        <StatCard label="OCR success" value="94%" sub="↑ 1.4%" />
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--hairline)]">
          <span className="font-bold text-[13px]">All dishes</span>
          <GradientPill className="!px-4 !py-2 !text-[11px]">+ Add dish</GradientPill>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-muted text-[10.5px] uppercase tracking-wide">
              <th className="text-left font-semibold px-4 py-2">Dish</th>
              <th className="text-left font-semibold px-2 py-2">Restaurant</th>
              <th className="text-left font-semibold px-2 py-2">Health tags</th>
              <th className="text-left font-semibold px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((d) => (
              <tr key={d.name} className="border-t border-[var(--hairline)]">
                <td className="px-4 py-2.5 font-semibold">{d.name}</td>
                <td className="px-2 text-muted">{d.restaurant}</td>
                <td className="px-2">
                  <div className="flex gap-1.5">
                    {d.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-[#f4ede2] text-[10.5px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${statusColor[d.status]}`}>
                    {d.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminShell>
  );
}
