"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AppShell, PanelHeader } from "@/components/AppShell";
import { Switch } from "@/components/Panel";
import { authClient } from "@/lib/auth-client";
import s from "@/components/Panel.module.css";

type Profile = {
  name: string;
  email: string;
  phone: string;
  location: string;
  lowSodium: boolean;
  diabetesAware: boolean;
  plantForward: boolean;
  dailyPicks: boolean;
  clubUpdates: boolean;
};

const dietaryOptions = [["lowSodium", "Low-sodium", "Prefer choices with less sodium"], ["diabetesAware", "Diabetes-aware", "Consider sugar and carbohydrate balance"], ["plantForward", "Plant-forward", "Prioritize meals built around plants"]] as const;
const notificationOptions = [["dailyPicks", "Daily picks", "A useful recommendation for the day"], ["clubUpdates", "Club updates", "New rewards and membership news"]] as const;

export default function SettingsPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/profile")
      .then(async response => {
        if (!response.ok) throw new Error();
        setProfile(await response.json());
      })
      .catch(() => setNotice("Could not load your profile. Reload to retry."));
  }, []);

  async function save(event: FormEvent) {
    event.preventDefault();
    if (!profile) return;
    setBusy(true);
    setNotice("");
    try {
      const { name, phone, location, lowSodium, diabetesAware, plantForward, dailyPicks, clubUpdates } = profile;
      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, location, lowSodium, diabetesAware, plantForward, dailyPicks, clubUpdates }),
      });
      if (!response.ok) throw new Error();
      await authClient.getSession({ query: { disableCookieCache: true } });
      setNotice("Your profile has been saved.");
    } catch {
      setNotice("Could not save. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <AppShell active="Settings">
    <PanelHeader title="Settings" subtitle="One place for your profile and preferences" active="Settings" />
    {notice && <p className={s.settingsNotice} role="status">{notice}</p>}
    {profile ? <form className={s.settingsForm} onSubmit={save}>
      <fieldset disabled={busy}>
        <div className={s.settingsPanel}>
          <section className={s.settingsProfile} aria-labelledby="profile-settings-title">
            <div className={s.settingsSectionHeading}><p>ACCOUNT</p><h2 id="profile-settings-title">Your details</h2><span>{profile.email}</span></div>
            <div className={s.settingsFields}>
              {(["name", "phone", "location"] as const).map(key => <label className={s.field} key={key}>
                <span>{key === "name" ? "Name" : key === "phone" ? "Phone" : "Location"}</span>
                <input className={s.input} value={profile[key]} required={key === "name"} maxLength={key === "name" ? 100 : key === "phone" ? 30 : 120} onChange={event => setProfile({ ...profile, [key]: event.target.value })} />
              </label>)}
            </div>
          </section>

          <section className={s.settingsPreferences} aria-labelledby="preference-settings-title">
            <div className={s.settingsSectionHeading}><p>PERSONALIZATION</p><h2 id="preference-settings-title">Food preferences</h2></div>
            <div className={s.preferenceList}>{dietaryOptions.map(([key, label, description]) => <div key={key}>
              <span><strong>{label}</strong><small>{description}</small></span>
              <Switch label={label} on={profile[key]} onChange={value => setProfile({ ...profile, [key]: value })} />
            </div>)}</div>
          </section>

          <section className={s.settingsPreferences} aria-labelledby="notification-settings-title">
            <div className={s.settingsSectionHeading}><p>MESSAGES</p><h2 id="notification-settings-title">Notifications</h2></div>
            <div className={s.preferenceList}>{notificationOptions.map(([key, label, description]) => <div key={key}>
              <span><strong>{label}</strong><small>{description}</small></span>
              <Switch label={label} on={profile[key]} onChange={value => setProfile({ ...profile, [key]: value })} />
            </div>)}</div>
            <div className={s.settingsMeta}><span><small>CONNECTED DEVICE</small><strong>None</strong></span><span><small>CURRENT PLAN</small><strong>Free</strong></span></div>
          </section>
        </div>
        <div className={s.settingsActions}><span>Changes apply to your Mivan account.</span><button className={s.appPrimary} disabled={busy}>{busy ? "Saving…" : "Save changes"}</button></div>
      </fieldset>
    </form> : !notice && <p className={s.settingsLoading} role="status">Loading your profile…</p>}
  </AppShell>;
}
