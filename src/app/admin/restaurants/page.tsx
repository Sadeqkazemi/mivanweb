import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";
import { GradientPill } from "@/components/Buttons";

const restaurants = [
  { name: "Saffron House", city: "Lisbon", cuisine: "Persian", dishes: 86, status: "Live", rating: "4.8" },
  { name: "Green Bowl Co.", city: "Lisbon", cuisine: "Healthy", dishes: 42, status: "Live", rating: "4.6" },
  { name: "Tagus Grill", city: "Lisbon", cuisine: "Seafood", dishes: 58, status: "Live", rating: "4.5" },
  { name: "Cafe Aurora", city: "Porto", cuisine: "Cafe", dishes: 36, status: "Review", rating: "4.2" },
  { name: "Sushi Nami", city: "Madrid", cuisine: "Japanese", dishes: 120, status: "Live", rating: "4.9" },
  { name: "Lisboa Vegana", city: "Lisbon", cuisine: "Plant-based", dishes: 30, status: "Draft", rating: "—" },
];

const statusColor: Record<string, string> = {
  Live: "text-accent-text bg-[#fdece0]",
  Review: "text-amber-700 bg-amber-50",
  Draft: "text-muted bg-[#f4ede2]",
};

export default function AdminRestaurantsPage() {
  return (
    <AdminShell active="Restaurants" title="Restaurants" subtitle="2,140 venues · 38 cities">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Restaurants" value="2,140" sub="↑ 64 this month" />
        <StatCard label="Dishes indexed" value="198K" sub="↑ 22%" />
        <StatCard label="Avg rating" value="4.6" sub="↑ 0.1" />
        <StatCard label="Pending review" value="12" sub="3 new" />
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--hairline)]">
          <span className="font-bold text-[13px]">All restaurants</span>
          <GradientPill className="!px-4 !py-2 !text-[11px]">+ Add restaurant</GradientPill>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-muted text-[10.5px] uppercase tracking-wide">
              <th className="text-left font-semibold px-4 py-2">Restaurant</th>
              <th className="text-left font-semibold px-2 py-2">City</th>
              <th className="text-left font-semibold px-2 py-2">Cuisine</th>
              <th className="text-left font-semibold px-2 py-2">Dishes</th>
              <th className="text-left font-semibold px-2 py-2">Status</th>
              <th className="text-left font-semibold px-4 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((r) => (
              <tr key={r.name} className="border-t border-[var(--hairline)]">
                <td className="px-4 py-2.5 font-semibold">{r.name}</td>
                <td className="px-2">{r.city}</td>
                <td className="px-2">{r.cuisine}</td>
                <td className="px-2">{r.dishes}</td>
                <td className="px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${statusColor[r.status]}`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-4">{r.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AdminShell>
  );
}
