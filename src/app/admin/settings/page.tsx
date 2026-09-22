"use client";
import { useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import { Card } from "@/components/Section";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-10 h-6 rounded-full relative transition-colors shrink-0 ${on ? "btn-gradient" : "bg-[#e7ddcd]"}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-4" : ""}`} />
    </button>
  );
}

const platform = [
  { name: "New user sign-ups", desc: "Allow public registration", on: true },
  { name: "Restaurant auto-approve", desc: "Publish without review", on: false },
  { name: "Maintenance mode", desc: "Take the app offline", on: false },
];

const aiSettings = [
  { name: "Auto-deploy models", desc: "Ship passing builds to prod", on: false },
  { name: "Allergen safety lock", desc: "Always block flagged dishes", on: true },
  { name: "Collect watch data", desc: "For recovery suggestions", on: true },
];

const team = [
  { i: "A", name: "Aria Admin", email: "aria@mivan.ai", role: "Super admin" },
  { i: "R", name: "Rui Costa", email: "rui@mivan.ai", role: "Operations" },
  { i: "N", name: "Nora Lima", email: "nora@mivan.ai", role: "Content" },
];

export default function AdminSettingsPage() {
  const [reveal, setReveal] = useState(false);
  return (
    <AdminShell active="Settings" title="Settings" subtitle="Platform configuration & team">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="font-bold text-[13px] mb-4">Platform</div>
          <div className="flex flex-col gap-3">
            {platform.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div>
                  <div className="text-[12.5px] font-semibold">{p.name}</div>
                  <div className="text-muted text-[11px]">{p.desc}</div>
                </div>
                <Toggle defaultOn={p.on} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="font-bold text-[13px] mb-4">AI engine</div>
          <div className="flex flex-col gap-3">
            {aiSettings.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div>
                  <div className="text-[12.5px] font-semibold">{p.name}</div>
                  <div className="text-muted text-[11px]">{p.desc}</div>
                </div>
                <Toggle defaultOn={p.on} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[13px]">Team members</span>
          <button className="btn-gradient text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
            Invite member
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {team.map((t) => (
            <div key={t.email} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="btn-gradient w-8 h-8 rounded-full text-white text-[12px] font-bold flex items-center justify-center">
                  {t.i}
                </div>
                <div>
                  <div className="text-[12.5px] font-semibold">{t.name}</div>
                  <div className="text-muted text-[11px]">{t.email}</div>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-label">{t.role}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="font-bold text-[13px] mb-3">API keys</div>
        <div className="flex items-center justify-between">
          <code className="text-[12px] text-muted">
            {reveal ? "sk_live_8f2ac91b7e0d4f3a" : "sk_live_••••••••••••4f3a"}
          </code>
          <div className="flex gap-2">
            <button onClick={() => setReveal(!reveal)} className="text-accent-text text-[11.5px] font-semibold">
              {reveal ? "Hide" : "Reveal"}
            </button>
            <button className="text-red-600 text-[11.5px] font-semibold">Revoke</button>
          </div>
        </div>
      </Card>
    </AdminShell>
  );
}
