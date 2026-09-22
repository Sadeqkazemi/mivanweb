import { AdminShell } from "@/components/AdminShell";
import { Stats } from "@/components/Panel";
import s from "@/components/Panel.module.css";
import { RecordsTable } from "@/components/AdminRecords";
export default function Page() { return <AdminShell active="Restaurants" title="Restaurants" subtitle="2,140 venues · 38 cities"><div className={s.stack}><Stats items={[["Restaurants", "2,140", "↑ 64 this month"], ["Dishes indexed", "198K", "↑ 22%"], ["Avg rating", "4.6", "↑ 0.1"], ["Pending review", "12", "3 new"]]}/><RecordsTable kind="restaurants"/></div></AdminShell>; }
