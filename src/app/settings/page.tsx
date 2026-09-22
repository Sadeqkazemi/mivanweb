"use client";
import { useState } from "react";
import { AppShell, WatchLiveBadge } from "@/components/AppShell";
import { Card } from "@/components/Section";
import { GradientPill, OutlinePill } from "@/components/Buttons";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-10 h-6 rounded-full relative transition-colors shrink-0 ${on ? "btn-gradient" : "bg-[#e7ddcd]"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-4" : ""}`}
      />
    </button>
  );
}

const dietary = [
  { name: "Low-sodium", desc: "Prioritise low-salt dishes", on: true },
  { name: "Diabetes-aware", desc: "Flag high-sugar dishes", on: true },
  { name: "Plant-forward", desc: "Prefer plant-based picks", on: false },
];

const notifications = [
  { name: "Recovery suggestions", desc: "When your watch shows stress", on: true },
  { name: "Daily picks", desc: "Morning recommendation", on: true },
  { name: "Club & rewards", desc: "Points and offers", on: false },
];

export default function SettingsPage() {
  return (
    <AppShell active="Settings">
      <div className="p-6 md:p-8 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display font-extrabold text-[22px] tracking-[-0.02em]">
              Settings
            </h1>
            <p className="text-muted text-[12.5px]">Manage your account and preferences</p>
          </div>
          <WatchLiveBadge />
        </div>

        <Card className="mb-6">
          <div className="font-bold text-[13px] mb-4">Connected devices</div>
          <div className="flex items-center justify-between py-2 border-b border-[var(--hairline)]">
            <div>
              <div className="text-[12.5px] font-semibold">Apple Watch</div>
              <div className="text-muted text-[11px]">Syncing stress, heart rate & sleep</div>
            </div>
            <span className="text-[11px] font-bold text-accent-text">Connected</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="text-[12.5px] font-semibold">Fitbit</div>
              <div className="text-muted text-[11px]">Not connected</div>
            </div>
            <OutlinePill className="!px-3 !py-1.5 !text-[11px]">Connect</OutlinePill>
          </div>
        </Card>

        <Card className="mb-6">
          <div className="font-bold text-[13px] mb-4">Dietary preferences</div>
          <div className="flex flex-col gap-3">
            {dietary.map((d) => (
              <div key={d.name} className="flex items-center justify-between">
                <div>
                  <div className="text-[12.5px] font-semibold">{d.name}</div>
                  <div className="text-muted text-[11px]">{d.desc}</div>
                </div>
                <Toggle defaultOn={d.on} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="mb-6">
          <div className="font-bold text-[13px] mb-4">Notifications</div>
          <div className="flex flex-col gap-3">
            {notifications.map((n) => (
              <div key={n.name} className="flex items-center justify-between">
                <div>
                  <div className="text-[12.5px] font-semibold">{n.name}</div>
                  <div className="text-muted text-[11px]">{n.desc}</div>
                </div>
                <Toggle defaultOn={n.on} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="font-bold text-[13px] mb-3">Current plan</div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-[13px] font-semibold">Mivan Plus · $9/mo</div>
              <div className="text-muted text-[11px]">Renews 12 July 2026</div>
            </div>
            <div className="flex gap-2">
              <OutlinePill className="!px-3 !py-1.5 !text-[11px]">Manage billing</OutlinePill>
              <GradientPill className="!px-3 !py-1.5 !text-[11px]">Upgrade to Team</GradientPill>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
