"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { AdminShell } from "@/components/AdminShell";
import { PanelCard, Stats, Status, Modal } from "@/components/Panel";
import s from "@/components/Panel.module.css";
type Block = {
    id: number;
    page: string;
    name: string;
    type: string;
    size: string;
    heading: string;
    body: string;
    visible: boolean;
    image: string;
};
const pages = ["Home", "Features", "How it works", "Health", "Pricing", "Club", "About", "Download", "Blog", "Contact"];
const seed = [
    ["Home", "Hero — Eat what truly fits you", "Hero", "1920×1080", "Eat what truly fits you, anywhere.", "Mivan learns your taste and health, reads your stress and activity from your Apple Watch, …", "/images/admin-hero-preview.svg"],
    ["Home", "Watch sync showcase", "Feature", "1200×900", "Your watch already knows. Now your plate does too.", "Live sync with Apple Watch turns stress and recovery data into dinner picks.", "/images/admin-watch-preview.svg"],
    ["Home", "Menu scan feature", "Feature", "1200×900", "Snap a menu. Know what to order.", "Point your camera at a restaurant menu. Mivan reads every dish and ranks it against your profile.", ""],
    ["Home", "Bottom CTA banner", "Banner", "1600×600", "Create your free account", "Sign up with Google and start getting food that fits your body.", ""],
    ["Features", "Features page hero", "Hero", "1920×800", "Everything Mivan does for you", "From taste learning to allergen alerts — the full feature set.", ""],
    ["Features", "Feature grid images", "Gallery", "800×600", "Feature cards", "One image per feature card in the grid.", ""],
    ["How it works", "How it works steps", "Banner", "1600×600", "Scan, match, eat", "Three steps from a paper menu to a plan that fits your numbers.", ""],
    ["Health", "Health & watch hero", "Hero", "1920×800", "Food that listens to your body", "Apple Watch integration: stress, sleep and activity shape every recommendation.", "/images/admin-watch-preview.svg"],
    ["Pricing", "Pricing hero", "Banner", "1600×600", "One plan. Every meal handled.", "Mivan Plus unlocks unlimited scans, watch sync and stress-aware picks.", ""],
    ["Club", "Club hero", "Hero", "1920×800", "The Mivan Club", "Points, streaks and rewards for eating what fits you.", ""],
    ["About", "Our story", "Feature", "1200×800", "Built by people who got tired of guessing", "We started Mivan after one too many menus left us confused at the table.", ""],
    ["Download", "App store banner", "Hero", "1920×800", "Carry Mivan everywhere you eat", "Free on iOS and Android. Plus syncs across every device you own.", ""],
    ["Download", "Phone mockup", "Card", "1080×1920", "App screenshot", "Vertical screenshot shown inside the phone frame.", ""],
    ["Blog", "Blog post covers", "Gallery", "1200×675", "Article cover images", "Cover image shown on the blog index and at the top of each post.", ""],
    ["Contact", "Contact banner", "Banner", "1600×500", "Talk to us", "Questions, feedback or partnership — we answer within a day.", ""]
].map(([page, name, type, size, heading, body, image], id) => ({ id, page, name, type, size, heading, body, image, visible: page !== "Contact" }));
export default function Page() {
    const [blocks, setBlocks] = useState<Block[]>(seed);
    const [filter, setFilter] = useState("All pages");
    const [editing, setEditing] = useState<Block | null>(null);
    const [removed, setRemoved] = useState<Block | null>(null);
    const [detailsSaved, setDetailsSaved] = useState(false);
    const [extras, setExtras] = useState([["App Store", "apps.apple.com/mivan"], ["Tax ID", "IR-1402-558831"]]);
    const [media, setMedia] = useState([{ name: "hero-plate.jpg", url: "/images/admin-hero-preview.svg" }, { name: "watch-sync.jpg", url: "/images/admin-watch-preview.svg" }]);
    const upload = useRef<HTMLInputElement>(null);
    return <AdminShell active="Content" title="Content" subtitle="Edit site sections & place images on every page"><div className={s.stack}><Stats items={[["Sections", String(blocks.length), `Across ${new Set(blocks.map(b => b.page)).size} pages`], ["Visible", String(blocks.filter(b => b.visible).length), "Showing on the site"], ["Hidden", String(blocks.filter(b => !b.visible).length), "Not yet live"], ["Images placed", String(media.length), "In media library"]]}/><PanelCard className={s.tableCard}><form onSubmit={e => { e.preventDefault(); setDetailsSaved(true); }}><div className={`${s.row} ${s.tableHeader}`}><div><h2>Site details</h2><p className={s.muted}>Contact info shown in the footer & contact page</p></div><button className={s.button}>Save changes</button></div><div style={{ padding: 26 }}><div className={s.eyebrow}>Contact</div><div className={s.fields}>{[["Business name", "Mivan"], ["Public email", "hello@mivan.app"], ["Support email", "support@mivan.app"], ["Phone", "+98 21 9100 0000"], ["WhatsApp", "+98 912 100 0000"], ["Working hours", "Sat–Thu, 9:00–18:00"]].map(([l, v]) => <label className={s.field} key={l}>{l}<input className={s.input} defaultValue={v}/></label>)}<label className={`${s.field} ${s.full}`}>Address<textarea className={s.input} defaultValue="No. 12, Mirdamad Blvd, Tehran, Iran"/></label></div><div style={{ borderTop: "1px solid #eee", marginTop: 26, paddingTop: 26 }}><div className={s.eyebrow}>Social links</div><div className={s.grid4} style={{ marginTop: 20 }}>{[["Instagram", "@mivan.app"], ["Telegram", "@mivan"], ["X (Twitter)", "@mivan"], ["LinkedIn", "company/mivan"]].map(([l, v]) => <label className={s.field} key={l}>{l}<input className={s.input} defaultValue={v}/></label>)}</div></div><div style={{ borderTop: "1px solid #eee", marginTop: 26, paddingTop: 26 }}><div className={s.row}><div><div className={s.eyebrow}>Other details</div><p className={s.muted}>Anything else tied to the site — tax ID, license, app links</p></div><button type="button" className={`${s.button} ${s.outline}`} onClick={() => setExtras([...extras, ["", ""]])}>+ Add field</button></div>{extras.map(([key, value], i) => <div className={s.toolbar} key={i} style={{ marginTop: 12, flexWrap: "nowrap" }}><input className={s.input} aria-label={`Field ${i + 1} name`} value={key} onChange={e => setExtras(extras.map((x, j) => j === i ? [e.target.value, x[1]] : x))} style={{ flex: 1 }}/><input className={s.input} aria-label={`Field ${i + 1} value`} value={value} onChange={e => setExtras(extras.map((x, j) => j === i ? [x[0], e.target.value] : x))} style={{ flex: 2 }}/><button type="button" className={`${s.button} ${s.outline}`} aria-label={`Remove field ${i + 1}`} onClick={() => setExtras(extras.filter((_, j) => j !== i))}>×</button></div>)}</div>{detailsSaved && <p role="status" className={s.notice}>Details saved in this preview. The public site has not been changed.</p>}</div></form></PanelCard><PanelCard className={s.tableCard}><div className={`${s.row} ${s.tableHeader}`}><h2>Site sections</h2><div className={s.toolbar}><select className={s.search} aria-label="Filter sections by page" value={filter} onChange={e => setFilter(e.target.value)}>{["All pages", ...pages].map(p => <option key={p}>{p}</option>)}</select><button className={s.button} onClick={() => setEditing({ id: Date.now(), page: "Home", name: "", type: "Hero", size: "1920×800", heading: "", body: "", image: "", visible: true })}>+ New section</button></div></div><div style={{ padding: "0 14px 20px" }}>{pages.filter(p => filter === "All pages" || filter === p).map(page => { const items = blocks.filter(b => b.page === page); return items.length ? <div key={page} style={{ marginTop: 26 }}><div className={s.toolbar} style={{ padding: "0 10px" }}><h2 style={{ fontSize: 16 }}>{page}</h2><span className={s.pill}>{items.length} sections</span><div style={{ flex: 1, height: 1, background: "#eee" }}/></div>{items.map(b => <div key={b.id} className={s.sectionRow}><div className={s.sectionPreview}><div className={s.stripe}>{b.image ? <img src={b.image} alt={`${b.name} preview`} style={{ width: "100%", height: "100%", objectFit: "cover" }}/> : "+"}</div><small>{b.size} px</small></div><div className={s.sectionText}><div className={s.toolbar}><h3>{b.name}</h3><span className={`${s.pill} ${s.orangePill}`}>{b.type}</span><span className={`${s.pill} ${s.orangePill}`}>Image: {b.size} px</span></div><b style={{ fontSize: 13 }}>{b.heading}</b><p>{b.body}</p></div><div className={s.toolbar}><button aria-label={`Toggle visibility of ${b.name}`} onClick={() => setBlocks(blocks.map(x => x.id === b.id ? { ...x, visible: !x.visible } : x))}><Status value={b.visible ? "Visible" : "Hidden"}/></button><button className={s.link} onClick={() => setEditing(b)}>Edit</button><button className={s.link} onClick={() => { setRemoved(b); setBlocks(blocks.filter(x => x.id !== b.id)); }}>Delete</button></div></div>)}</div> : null; })}{removed && <p className={s.notice}>Section removed from preview. <button className={s.link} onClick={() => { setBlocks([...blocks, removed]); setRemoved(null); }}>Undo</button></p>}</div></PanelCard><PanelCard><div className={s.row}><div><h2>Media library</h2><p className={s.muted}>Reusable images you can drop into any section</p></div><button className={`${s.button} ${s.dark}`} onClick={() => upload.current?.click()}>+ Upload images</button><input ref={upload} hidden type="file" accept="image/*" multiple onChange={e => { for (const file of Array.from(e.target.files ?? [])) {
        const reader = new FileReader();
        reader.onload = () => setMedia(prev => [...prev, { name: file.name, url: String(reader.result) }]);
        reader.readAsDataURL(file);
    } }}/></div><div className={s.mediaGrid}>{media.map((m, i) => <div className={s.media} key={`${m.name}-${i}`}><img src={m.url} alt={m.name}/><small>{m.name}</small><button aria-label={`Remove ${m.name}`} onClick={() => setMedia(media.filter((_, j) => i !== j))}>×</button></div>)}</div></PanelCard></div>{editing && <BlockEditor key={editing.id} block={editing} media={media} close={() => setEditing(null)} save={b => { setBlocks(blocks.some(x => x.id === b.id) ? blocks.map(x => x.id === b.id ? b : x) : [...blocks, b]); setEditing(null); }}/>}</AdminShell>;
}
function BlockEditor({ block, media, close, save }: {
    block: Block;
    media: {
        name: string;
        url: string;
    }[];
    close: () => void;
    save: (b: Block) => void;
}) { const [image, setImage] = useState(block.image); return <Modal title={block.name ? "Edit section" : "New section"} onClose={close}><form onSubmit={e => { e.preventDefault(); const f = new FormData(e.currentTarget); save({ ...block, name: String(f.get("name")), page: String(f.get("page")), type: String(f.get("type")), size: String(f.get("size")), heading: String(f.get("heading")), body: String(f.get("body")), visible: f.get("visible") === "on", image }); }}>{[["name", "Section name", block.name], ["heading", "Heading", block.heading], ["size", "Image dimensions", block.size]].map(([name, label, value]) => <label className={s.field} key={name}>{label}<input name={name} className={s.input} defaultValue={value} required/></label>)}<div className={s.grid2}><label className={s.field}>Page<select name="page" defaultValue={block.page} className={s.input}>{pages.map(p => <option key={p}>{p}</option>)}</select></label><label className={s.field}>Type<select name="type" defaultValue={block.type} className={s.input}>{["Hero", "Feature", "Banner", "Gallery", "Card"].map(p => <option key={p}>{p}</option>)}</select></label></div><label className={s.field}>Body<textarea name="body" className={s.input} defaultValue={block.body}/></label><label className={s.field}>Library image<select value={image} onChange={e => setImage(e.target.value)} className={s.input}><option value="">No image</option>{media.map((m, i) => <option key={i} value={m.url}>{m.name}</option>)}</select></label><label className={s.field}>Upload image<input type="file" accept="image/*" onChange={e => { const file = e.target.files?.[0]; if (file) {
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
} }}/></label>{image && <img src={image} alt="Section preview" style={{ height: 120, width: "100%", objectFit: "contain" }}/>}<label><input type="checkbox" name="visible" defaultChecked={block.visible}/> Visible on site</label><p className={s.muted}>Changes stay in this preview; publishing is not connected.</p><button className={s.button}>Save changes</button></form></Modal>; }
