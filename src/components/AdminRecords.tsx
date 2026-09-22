"use client";
import { useState } from "react";
import { PanelCard, Modal, Status } from "./Panel";
import s from "./Panel.module.css";
export type RecordRow = {
    name: string;
    email?: string;
    plan?: string;
    status: string;
    scans?: string;
    last?: string;
    city?: string;
    cuisine?: string;
    dishes?: string;
    rating?: string;
    restaurant?: string;
    tags?: string;
};
export const sampleUsers: RecordRow[] = [{ name: "Sara Ahmadi", email: "sara@gmail.com", plan: "Plus", status: "Active", scans: "214", last: "2 min ago" }, { name: "Daniel Rocha", email: "daniel@gmail.com", plan: "Plus", status: "Active", scans: "512", last: "18 min ago" }, { name: "Mina Karimi", email: "mina@gmail.com", plan: "Free", status: "Active", scans: "38", last: "1 hr ago" }, { name: "Omid Tehrani", email: "omid@gmail.com", plan: "Team", status: "Idle", scans: "1,043", last: "Yesterday" }, { name: "Lena Brandt", email: "lena@gmail.com", plan: "Free", status: "Suspended", scans: "7", last: "5 days ago" }, { name: "Joao Pinto", email: "joao@gmail.com", plan: "Plus", status: "Active", scans: "176", last: "3 min ago" }, { name: "Aria Naderi", email: "aria@gmail.com", plan: "Free", status: "Active", scans: "24", last: "40 min ago" }, { name: "Clara Sousa", email: "clara@gmail.com", plan: "Team", status: "Active", scans: "689", last: "2 hrs ago" }];
export const sampleRestaurants: RecordRow[] = [["Saffron House", "Lisbon", "Persian", "86", "Live", "4.8"], ["Green Bowl Co.", "Lisbon", "Healthy", "42", "Live", "4.6"], ["Tagus Grill", "Lisbon", "Seafood", "58", "Live", "4.5"], ["Cafe Aurora", "Porto", "Cafe", "36", "Review", "4.2"], ["Sushi Nami", "Madrid", "Japanese", "120", "Live", "4.9"], ["Lisboa Vegana", "Lisbon", "Plant-based", "30", "Draft", "—"]].map(([name, city, cuisine, dishes, status, rating]) => ({ name, city, cuisine, dishes, status, rating }));
export const sampleDishes: RecordRow[] = [["Grilled fish & herbs", "Saffron House", "Low-sodium,High protein", "Live"], ["Lentil & barley soup", "Saffron House", "High fiber,Vegan", "Live"], ["Saffron rice & chicken", "Saffron House", "High sodium", "Live"], ["Fried sugar pastry", "Cafe Aurora", "High sugar", "Review"], ["Miso magnesium bowl", "Green Bowl Co.", "Calming,Gut-friendly", "Live"], ["Salmon & greens", "Tagus Grill", "Low-sodium,Omega-3", "Live"]].map(([name, restaurant, tags, status]) => ({ name, restaurant, tags, status }));
export function RecordsTable({ kind = "users", recent = false }: {
    kind?: "users" | "restaurants" | "dishes";
    recent?: boolean;
}) {
    const [rows, setRows] = useState(kind === "users" ? (recent ? sampleUsers.slice(0, 5) : sampleUsers) : kind === "restaurants" ? sampleRestaurants : sampleDishes);
    const [query, setQuery] = useState("");
    const [adding, setAdding] = useState(false);
    const filtered = rows.filter(r => Object.values(r).join(" ").toLowerCase().includes(query.toLowerCase()));
    const columns = kind === "users" ? ["User", "Plan", "Status", "Scans", "Last active"] : kind === "restaurants" ? ["Restaurant", "City", "Cuisine", "Dishes", "Status", "Rating"] : ["Dish", "Restaurant", "Health tags", "Status"];
    const fields = kind === "users" ? ["name", "email", "plan"] : kind === "restaurants" ? ["name", "city", "cuisine"] : ["name", "restaurant", "tags"];
    function exportRows() { const keys = Object.keys(rows[0] ?? {}); const csv = [keys, ...filtered.map(r => keys.map(k => String(r[k as keyof RecordRow] ?? "")))].map(r => r.map(v => '"' + String(v).replaceAll('"', '""') + '"').join(",")).join("\n"); const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" })); const a = document.createElement("a"); a.href = url; a.download = `mivan-${kind}-preview.csv`; a.click(); URL.revokeObjectURL(url); }
    return <><PanelCard className={s.tableCard}><div className={`${s.row} ${s.tableHeader}`}><h2>{recent ? "Recent users" : `All ${kind}`}</h2><div className={s.toolbar}><input className={s.search} aria-label={`Search ${kind}`} placeholder={`Search ${kind === "restaurants" ? "venues" : kind}`} value={query} onChange={e => setQuery(e.target.value)}/>{!recent && <button className={s.button} onClick={() => setAdding(true)}>Add {kind === "dishes" ? "dish" : kind === "users" ? "user" : "restaurant"}</button>}{kind === "users" && <button className={`${s.button} ${s.dark}`} onClick={exportRows}>Export</button>}</div></div><div className={s.tableScroll}><table className={s.table}><thead><tr>{columns.map(c => <th key={c}>{c}</th>)}</tr></thead><tbody>{filtered.map((r, i) => <tr key={`${r.name}-${i}`}><td><div className={s.person}>{kind === "users" ? <span className={`${s.miniAvatar} ${i === 0 ? s.accent : ""}`}>{r.name[0]}</span> : kind === "restaurants" ? <div className={`${s.stripe} ${s.thumb}`}/> : null}<div><b>{r.name}</b>{r.email && <small>{r.email}</small>}</div></div></td>{kind === "users" ? <><td><span className={`${s.pill} ${r.plan === "Plus" ? s.orangePill : r.plan === "Team" ? s.blackPill : ""}`}>{r.plan}</span></td><td><Status value={r.status}/></td><td><b>{r.scans}</b></td><td className={s.muted}>{r.last}</td></> : kind === "restaurants" ? <><td className={s.muted}>{r.city}</td><td className={s.muted}>{r.cuisine}</td><td><b>{r.dishes}</b></td><td><Status value={r.status}/></td><td><b>{r.rating}</b></td></> : <><td className={s.muted}>{r.restaurant}</td><td><div className={s.toolbar}>{r.tags?.split(",").map(t => <span className={s.pill} style={{ background: t.includes("sugar") ? "#f6e9e6" : t.includes("sodium") && !t.includes("Low") ? "#f6f0e0" : "#e8efea", color: t.includes("sugar") ? "#b96858" : "#547c5a", padding: "3px 9px" }} key={t}>{t}</span>)}</div></td><td><Status value={r.status}/></td></>}</tr>)}{!filtered.length && <tr><td colSpan={columns.length}>No matching {kind}.</td></tr>}</tbody></table></div></PanelCard>{adding && <Modal title={`Add ${kind === "dishes" ? "dish" : kind === "users" ? "user" : "restaurant"}`} onClose={() => setAdding(false)}><form onSubmit={e => { e.preventDefault(); const data = new FormData(e.currentTarget); const row: RecordRow = { name: String(data.get("name")), status: "Draft", scans: "0", last: "Just now", dishes: "0", rating: "—" }; for (const f of fields)
        row[f as keyof RecordRow] = String(data.get(f)); setRows([...rows, row]); setAdding(false); }}>{fields.map(f => <label key={f} className={s.field}>{f[0].toUpperCase() + f.slice(1)}<input className={s.input} name={f} required type={f === "email" ? "email" : "text"}/></label>)}<p className={s.muted}>Adds a record to this preview only.</p><button className={s.button}>Add record</button></form></Modal>}</>;
}
