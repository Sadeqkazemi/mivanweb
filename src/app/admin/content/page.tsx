"use client";
import { useState } from "react";
import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";
import { GradientPill, OutlinePill } from "@/components/Buttons";

type Section = {
  id: string;
  page: string;
  type: "Hero" | "Banner" | "Feature" | "Gallery" | "Card";
  heading: string;
  body: string;
  visible: boolean;
  image: string | null;
};

const pages = ["Home", "Features", "How it works", "Health", "Pricing", "Club", "About", "Download", "Blog", "Contact"];
const blockTypes: Section["type"][] = ["Hero", "Banner", "Feature", "Gallery", "Card"];

const initialSections: Section[] = [
  { id: "1", page: "Home", type: "Hero", heading: "Eat what truly fits you, anywhere.", body: "Mivan learns your taste and health, reads your stress and activity from your Apple Watch, and tells you the right thing to eat.", visible: true, image: null },
  { id: "2", page: "Home", type: "Feature", heading: "Millions travel, and can't find food that fits them.", body: "Every year millions of people travel for work and leisure — and struggle to find food that suits their taste, diet, and health.", visible: true, image: null },
  { id: "3", page: "Features", type: "Feature", heading: "Picks built around your body", body: "A short AI quiz learns your flavors, diet, allergies and conditions.", visible: true, image: null },
  { id: "4", page: "About", type: "Banner", heading: "Help everyone eat what truly fits them.", body: "Modern life loads our days with stress and pressure that quietly shape what our bodies actually need.", visible: true, image: null },
  { id: "5", page: "Contact", type: "Card", heading: "We would love to hear from you", body: "Questions, feedback, partnerships or press — reach the Mivan team here.", visible: false, image: null },
];

function SectionEditor({
  section,
  onClose,
  onSave,
}: {
  section: Section | null;
  onClose: () => void;
  onSave: (s: Section) => void;
}) {
  const [page, setPage] = useState(section?.page ?? pages[0]);
  const [type, setType] = useState<Section["type"]>(section?.type ?? "Hero");
  const [heading, setHeading] = useState(section?.heading ?? "");
  const [body, setBody] = useState(section?.body ?? "");
  const [visible, setVisible] = useState(section?.visible ?? true);
  const [image, setImage] = useState<string | null>(section?.image ?? null);

  return (
    <div onClick={onClose} className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[rgba(21,16,11,0.55)] backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[28px] p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#f4ede2] text-body-text font-bold">
          &times;
        </button>
        <h3 className="font-display font-extrabold text-[18px] mb-4">
          {section ? "Edit section" : "New section"}
        </h3>

        <label className="block mb-3">
          <div className="text-[11px] font-semibold text-label mb-1">Section image</div>
          <label className="flex items-center justify-center h-28 rounded-xl border-2 border-dashed border-[var(--hairline-strong)] cursor-pointer text-muted text-[11.5px] overflow-hidden">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="h-full w-full object-cover" />
            ) : (
              <span>+ Click to upload an image (PNG or JPG)</span>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImage(URL.createObjectURL(file));
              }}
            />
          </label>
          {image && (
            <button onClick={() => setImage(null)} className="text-red-600 text-[11px] font-semibold mt-1">
              Remove image
            </button>
          )}
        </label>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <label className="block">
            <div className="text-[11px] font-semibold text-label mb-1">Page</div>
            <select value={page} onChange={(e) => setPage(e.target.value)} className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-3 py-2.5 text-[12.5px] outline-none focus:border-accent">
              {pages.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <label className="block">
            <div className="text-[11px] font-semibold text-label mb-1">Block type</div>
            <select value={type} onChange={(e) => setType(e.target.value as Section["type"])} className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-3 py-2.5 text-[12.5px] outline-none focus:border-accent">
              {blockTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
        </div>

        <label className="block mb-3">
          <div className="text-[11px] font-semibold text-label mb-1">Heading</div>
          <input value={heading} onChange={(e) => setHeading(e.target.value)} className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-4 py-2.5 text-[12.5px] outline-none focus:border-accent" />
        </label>

        <label className="block mb-3">
          <div className="text-[11px] font-semibold text-label mb-1">Body text</div>
          <textarea rows={3} value={body} onChange={(e) => setBody(e.target.value)} className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-4 py-2.5 text-[12.5px] outline-none focus:border-accent" />
        </label>

        <label className="flex items-center gap-2 mb-4 text-[12px] font-semibold">
          <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} className="accent-[var(--accent)]" />
          Visible on site
        </label>

        <div className="flex justify-end gap-2">
          <OutlinePill onClick={onClose} className="!px-4 !py-2">Cancel</OutlinePill>
          <GradientPill
            onClick={() =>
              onSave({
                id: section?.id ?? String(Date.now()),
                page,
                type,
                heading: heading || "Untitled section",
                body,
                visible,
                image,
              })
            }
            className="!px-4 !py-2"
          >
            Save changes
          </GradientPill>
        </div>
      </div>
    </div>
  );
}

export default function AdminContentPage() {
  const [sections, setSections] = useState(initialSections);
  const [editing, setEditing] = useState<Section | null | undefined>(undefined);
  const [activePage, setActivePage] = useState("All");

  const visibleCount = sections.filter((s) => s.visible).length;
  const hiddenCount = sections.length - visibleCount;
  const imageCount = sections.filter((s) => s.image).length;
  const pageCount = new Set(sections.map((s) => s.page)).size;

  function saveSection(s: Section) {
    setSections((prev) => {
      const exists = prev.some((x) => x.id === s.id);
      return exists ? prev.map((x) => (x.id === s.id ? s : x)) : [s, ...prev];
    });
    setEditing(undefined);
  }

  const filtered = activePage === "All" ? sections : sections.filter((s) => s.page === activePage);
  const grouped = pages
    .map((p) => ({ page: p, items: filtered.filter((s) => s.page === p) }))
    .filter((g) => g.items.length > 0);

  return (
    <AdminShell active="Content" title="Content" subtitle="Edit site sections & place images on every page">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Sections" value={String(sections.length)} sub={`Across ${pageCount} pages`} />
        <StatCard label="Visible" value={String(visibleCount)} sub="Showing on the site" />
        <StatCard label="Hidden" value={String(hiddenCount)} sub="Not yet live" />
        <StatCard label="Images placed" value={String(imageCount)} sub="In media library" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-wrap gap-2">
          {["All", ...pages].map((p) => (
            <button
              key={p}
              onClick={() => setActivePage(p)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border ${
                activePage === p ? "btn-gradient text-white border-transparent" : "border-[var(--hairline-strong)] text-label"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <GradientPill onClick={() => setEditing(null)} className="!px-4 !py-2 !text-[11px] shrink-0">
          + New section
        </GradientPill>
      </div>

      {grouped.length === 0 && (
        <Card className="text-center text-muted text-[12.5px] py-8">
          No sections on this page yet.
        </Card>
      )}

      <div className="flex flex-col gap-6">
        {grouped.map((g) => (
          <div key={g.page}>
            <div className="text-label text-[11px] font-bold uppercase tracking-wide mb-2">
              {g.page} · {g.items.length} sections
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {g.items.map((s) => (
                <Card key={s.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg bg-[#f4ede2] shrink-0 overflow-hidden flex items-center justify-center text-[9px] text-muted">
                    {s.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      "no image"
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-accent-text uppercase">{s.type}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${s.visible ? "bg-[#fdece0] text-accent-text" : "bg-[#f4ede2] text-muted"}`}>
                        {s.visible ? "Visible" : "Hidden"}
                      </span>
                    </div>
                    <div className="font-semibold text-[12.5px] truncate">{s.heading}</div>
                    <div className="text-muted text-[11px] truncate">{s.body}</div>
                    <div className="flex gap-3 mt-1.5">
                      <button onClick={() => setEditing(s)} className="text-accent-text text-[11px] font-semibold">Edit</button>
                      <button onClick={() => setSections((prev) => prev.filter((x) => x.id !== s.id))} className="text-red-600 text-[11px] font-semibold">Delete</button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {editing !== undefined && (
        <SectionEditor section={editing} onClose={() => setEditing(undefined)} onSave={saveSection} />
      )}
    </AdminShell>
  );
}
