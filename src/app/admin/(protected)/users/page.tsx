import { AdminShell } from "@/components/AdminShell";
import { Stats } from "@/components/Panel";
import s from "@/components/Panel.module.css";
import { RecordsTable } from "@/components/AdminRecords";
export default function Page() { return <AdminShell active="Users" title="Users" subtitle="48,210 total · 9,847 active today"><div className={s.stack}><Stats items={[["Total users", "48,210", "↑ 12.4% this month"], ["Plus subscribers", "11,920", "↑ 9.1%"], ["Team accounts", "842", "↑ 5.4%"], ["Suspended", "37", "↓ 2 this week"]]}/><RecordsTable /></div></AdminShell>; }
