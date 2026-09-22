import { AdminShell } from "@/components/AdminShell";
import { Stats } from "@/components/Panel";
import s from "@/components/Panel.module.css";
import { RecordsTable } from "@/components/AdminRecords";
export default function Page() { return <AdminShell active="Menus & dishes" title="Menus & dishes" subtitle="198K dishes · ranked by the AI engine"><div className={s.stack}><Stats items={[["Dishes", "198,420", "↑ 4,210 this week"], ["Auto-tagged", "96%", "↑ 2%"], ["Flagged unhealthy", "8,940", "review queue"], ["OCR success", "94%", "↑ 1.4%"]]}/><RecordsTable kind="dishes"/></div></AdminShell>; }
