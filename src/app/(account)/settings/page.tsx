"use client";
import { useEffect, useState, type FormEvent } from "react";
import { AppShell, PanelHeader } from "@/components/AppShell";
import { PanelCard, Switch } from "@/components/Panel";
import { authClient } from "@/lib/auth-client";
import s from "@/components/Panel.module.css";
type Profile = { name: string; email: string; phone: string; location: string; lowSodium: boolean; diabetesAware: boolean; plantForward: boolean; dailyPicks: boolean; clubUpdates: boolean };
export default function SettingsPage() {
 const [profile,setProfile]=useState<Profile|null>(null), [notice,setNotice]=useState(""), [busy,setBusy]=useState(false);
 useEffect(()=>{fetch("/api/profile").then(async r=>{if(!r.ok) throw new Error();setProfile(await r.json());}).catch(()=>setNotice("Could not load your profile. Reload to retry."));},[]);
 async function save(e:FormEvent){e.preventDefault();if(!profile)return;setBusy(true);setNotice("");
 try{const {name,phone,location,lowSodium,diabetesAware,plantForward,dailyPicks,clubUpdates}=profile;
 const r=await fetch("/api/profile",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,phone,location,lowSodium,diabetesAware,plantForward,dailyPicks,clubUpdates})});
 if(!r.ok)throw new Error();await authClient.getSession({query:{disableCookieCache:true}});setNotice("Your profile has been saved.");}catch{setNotice("Could not save. Please try again.");}finally{setBusy(false);}}
 return <AppShell active="Settings"><PanelHeader title="Settings" subtitle="Manage your account and preferences" active="Settings"/>{notice&&<p role="status">{notice}</p>}{profile?<form onSubmit={save}><fieldset disabled={busy} style={{border:0,padding:0,margin:0}}><div className={s.grid3}><PanelCard><h2>Profile</h2><p>{profile.email}</p>{(["name","phone","location"] as const).map(key=><label className={s.field} key={key}>{key}<input className={s.input} value={profile[key]} required={key==="name"} maxLength={key==="name"?100:key==="phone"?30:120} onChange={e=>setProfile({...profile,[key]:e.target.value})}/></label>)}</PanelCard><PanelCard><h2>Dietary preferences</h2>{([["lowSodium","Low-sodium"],["diabetesAware","Diabetes-aware"],["plantForward","Plant-forward"]] as const).map(([key,label])=><div className={s.listRow} key={key}><b>{label}</b><Switch label={label} on={profile[key]} onChange={value=>setProfile({...profile,[key]:value})}/></div>)}<p className={s.muted}>Preferences are saved to your account. Recommendations are not connected yet.</p></PanelCard><PanelCard><h2>Notifications</h2>{([["dailyPicks","Daily picks"],["clubUpdates","Club & rewards"]] as const).map(([key,label])=><div className={s.listRow} key={key}><b>{label}</b><Switch label={label} on={profile[key]} onChange={value=>setProfile({...profile,[key]:value})}/></div>)}<p className={s.muted}>Delivery is not enabled yet.</p><h2>Connected devices</h2><p>No devices connected.</p><h2>Current plan</h2><p>Free · No active paid subscription</p></PanelCard></div><button className={s.button} style={{marginTop:24}} disabled={busy}>{busy?"Saving…":"Save changes"}</button></fieldset></form>:!notice&&<p role="status">Loading profile…</p>}</AppShell>;
}
