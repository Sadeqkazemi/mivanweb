"use client";
import { useState } from "react";
import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";

function Toggle({
  on,
  onChange,
  disabled = false,
}: {
  on: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`w-10 h-6 rounded-full relative transition-colors shrink-0 ${
        on && !disabled ? "btn-gradient" : "bg-[#e7ddcd]"
      } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
          on ? "translate-x-4" : ""
        }`}
      />
    </button>
  );
}

const capabilities = [
  { key: "rec", name: "Dish recommendations", desc: "Personalized suggestions from taste profile" },
  { key: "ocr", name: "Menu OCR", desc: "Reads dishes & prices from photographed menus" },
  { key: "allergen", name: "Allergen detection", desc: "Flags ingredients against user allergy profile" },
  { key: "taste", name: "Taste matching", desc: "Scores dishes against learned flavor preferences" },
] as const;

const deployments = [
  { v: "v2.4", status: "Production", time: "3 hrs ago" },
  { v: "v2.3", status: "Rolled back", time: "2 days ago" },
  { v: "v2.2", status: "Archived", time: "1 week ago" },
  { v: "v2.1", status: "Archived", time: "3 weeks ago" },
];

export default function AdminAIPage() {
  const [master, setMaster] = useState(true);
  const [caps, setCaps] = useState<Record<string, boolean>>({
    rec: true,
    ocr: true,
    allergen: true,
    taste: true,
  });

  return (
    <AdminShell active="AI engine" title="AI engine" subtitle="Model v2.4 · production">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Accuracy" value="98%" sub="↑ 0.6%" />
        <StatCard label="Avg latency" value="240 ms" sub="↓ 18 ms" />
        <StatCard label="Daily inferences" value="3.1M" sub="↑ 14%" />
        <StatCard label="Watch sync uptime" value="99.9%" sub="stable" />
      </div>

      <Card className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <div>
            <div className="font-bold text-[13.5px]">AI engine</div>
            <div className="text-muted text-[11.5px]">Master switch for all intelligence features</div>
          </div>
          <Toggle on={master} onChange={() => setMaster(!master)} />
        </div>
        <div className="mt-4 flex flex-col gap-3 divide-y divide-[var(--hairline)]">
          {capabilities.map((c) => (
            <div key={c.key} className="flex items-center justify-between pt-3 first:pt-0">
              <div>
                <div className="text-[12.5px] font-semibold">{c.name}</div>
                <div className="text-muted text-[11px]">{c.desc}</div>
              </div>
              <Toggle
                on={caps[c.key] && master}
                disabled={!master}
                onChange={() => setCaps((prev) => ({ ...prev, [c.key]: !prev[c.key] }))}
              />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="font-bold text-[13px] mb-3">Model performance</div>
          <div className="flex flex-col gap-2.5 text-[12px]">
            {[
              ["Recommendation accuracy", "98%"],
              ["Menu OCR success", "94%"],
              ["Allergen detection", "99%"],
              ["Taste match precision", "92%"],
              ["Avg response time", "240 ms"],
            ].map(([l, v]) => (
              <div key={l} className="flex items-center justify-between">
                <span className="text-muted">{l}</span>
                <span className="font-bold">{v}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-[13px]">Deployments</span>
            <button className="btn-gradient text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
              Retrain model
            </button>
          </div>
          <div className="flex flex-col gap-2.5 text-[12px]">
            {deployments.map((d) => (
              <div key={d.v} className="flex items-center justify-between">
                <span className="font-semibold">Model {d.v} · {d.status}</span>
                <span className="text-muted text-[11px]">{d.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AdminShell>
  );
}
