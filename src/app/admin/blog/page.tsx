"use client";
import { useState } from "react";
import { AdminShell, StatCard } from "@/components/AdminShell";
import { Card } from "@/components/Section";
import { GradientPill, OutlinePill } from "@/components/Buttons";

type Post = {
  id: string;
  title: string;
  category: string;
  status: "Draft" | "Published" | "Scheduled";
  views: number;
  date: string;
};

const initialPosts: Post[] = [
  { id: "1", title: "How stress quietly changes what your body needs", category: "Research", status: "Published", views: 12480, date: "Jun 12, 2026" },
  { id: "2", title: "Eating well in a city you've never visited", category: "Travel", status: "Published", views: 8210, date: "May 28, 2026" },
  { id: "3", title: "Low-sodium does not mean low-flavor", category: "Nutrition", status: "Published", views: 6940, date: "May 14, 2026" },
  { id: "4", title: "Introducing stress-aware recovery picks", category: "Product", status: "Published", views: 4310, date: "Apr 30, 2026" },
  { id: "5", title: "What 3 million matched meals taught us", category: "Research", status: "Draft", views: 0, date: "—" },
];

const categories = ["Nutrition", "Travel", "Product", "Research"];

const statusColor: Record<string, string> = {
  Published: "text-accent-text bg-[#fdece0]",
  Draft: "text-muted bg-[#f4ede2]",
  Scheduled: "text-amber-700 bg-amber-50",
};

function PostEditor({
  post,
  onClose,
  onSave,
}: {
  post: Post | null;
  onClose: () => void;
  onSave: (p: Post) => void;
}) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [category, setCategory] = useState(post?.category ?? categories[0]);
  const [status, setStatus] = useState<Post["status"]>(post?.status ?? "Draft");
  const [cover, setCover] = useState<string | null>(null);
  const [content, setContent] = useState("");

  return (
    <div onClick={onClose} className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[rgba(21,16,11,0.55)] backdrop-blur-sm">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[28px] p-6 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#f4ede2] text-body-text font-bold">
          &times;
        </button>
        <h3 className="font-display font-extrabold text-[18px] mb-4">
          {post ? "Edit post" : "New post"}
        </h3>

        <label className="block mb-3">
          <div className="text-[11px] font-semibold text-label mb-1">Cover image</div>
          <label className="flex items-center justify-center h-28 rounded-xl border-2 border-dashed border-[var(--hairline-strong)] cursor-pointer text-muted text-[11.5px] overflow-hidden">
            {cover ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={cover} alt="cover" className="h-full w-full object-cover" />
            ) : (
              <span>+ Click to upload a cover image (PNG or JPG)</span>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setCover(URL.createObjectURL(file));
              }}
            />
          </label>
        </label>

        <label className="block mb-3">
          <div className="text-[11px] font-semibold text-label mb-1">Title</div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-4 py-2.5 text-[12.5px] outline-none focus:border-accent"
          />
        </label>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <label className="block">
            <div className="text-[11px] font-semibold text-label mb-1">Category</div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-3 py-2.5 text-[12.5px] outline-none focus:border-accent"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <div className="text-[11px] font-semibold text-label mb-1">Status</div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Post["status"])}
              className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-3 py-2.5 text-[12.5px] outline-none focus:border-accent"
            >
              <option>Draft</option>
              <option>Published</option>
              <option>Scheduled</option>
            </select>
          </label>
        </div>

        <label className="block mb-4">
          <div className="text-[11px] font-semibold text-label mb-1">Content</div>
          <textarea
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-[13px] border border-[var(--hairline-strong)] px-4 py-2.5 text-[12.5px] outline-none focus:border-accent"
          />
        </label>

        <div className="flex justify-end gap-2">
          <OutlinePill onClick={onClose} className="!px-4 !py-2">Cancel</OutlinePill>
          <GradientPill
            onClick={() =>
              onSave({
                id: post?.id ?? String(Date.now()),
                title: title || "Untitled post",
                category,
                status,
                views: post?.views ?? 0,
                date: post?.date ?? "Just now",
              })
            }
            className="!px-4 !py-2"
          >
            {post ? "Save changes" : "Create post"}
          </GradientPill>
        </div>
      </div>
    </div>
  );
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [editing, setEditing] = useState<Post | null | undefined>(undefined);

  const published = posts.filter((p) => p.status === "Published").length;
  const drafts = posts.filter((p) => p.status === "Draft").length;
  const totalViews = posts.reduce((s, p) => s + p.views, 0);

  function savePost(p: Post) {
    setPosts((prev) => {
      const exists = prev.some((x) => x.id === p.id);
      return exists ? prev.map((x) => (x.id === p.id ? p : x)) : [p, ...prev];
    });
    setEditing(undefined);
  }

  return (
    <AdminShell active="Blog" title="Blog" subtitle="Manage the Mivan Journal">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total posts" value={String(posts.length)} sub="Across all categories" />
        <StatCard label="Published" value={String(published)} sub="Live on the site" />
        <StatCard label="Drafts" value={String(drafts)} sub="Not yet published" />
        <StatCard label="Total views" value={totalViews.toLocaleString()} />
      </div>

      <Card className="p-0 overflow-hidden mb-6">
        <div className="flex items-center justify-between p-4 border-b border-[var(--hairline)]">
          <span className="font-bold text-[13px]">All posts</span>
          <GradientPill onClick={() => setEditing(null)} className="!px-4 !py-2 !text-[11px]">
            + New post
          </GradientPill>
        </div>
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-muted text-[10.5px] uppercase tracking-wide">
              <th className="text-left font-semibold px-4 py-2">Post</th>
              <th className="text-left font-semibold px-2 py-2">Category</th>
              <th className="text-left font-semibold px-2 py-2">Status</th>
              <th className="text-left font-semibold px-2 py-2">Views</th>
              <th className="text-left font-semibold px-2 py-2">Date</th>
              <th className="text-left font-semibold px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-t border-[var(--hairline)]">
                <td className="px-4 py-2.5 font-semibold max-w-xs">{p.title}</td>
                <td className="px-2 text-muted">{p.category}</td>
                <td className="px-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10.5px] font-bold ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-2">{p.views.toLocaleString()}</td>
                <td className="px-2 text-muted">{p.date}</td>
                <td className="px-4">
                  <button onClick={() => setEditing(p)} className="text-accent-text font-semibold mr-3">
                    Edit
                  </button>
                  <button
                    onClick={() => setPosts((prev) => prev.filter((x) => x.id !== p.id))}
                    className="text-red-600 font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="font-bold text-[13px] mb-3">Categories</div>
          <div className="flex flex-col gap-2">
            {categories.map((c) => (
              <div key={c} className="flex items-center justify-between text-[12px]">
                <span>{c}</span>
                <span className="text-muted">{posts.filter((p) => p.category === c).length} posts</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="font-bold text-[13px] mb-3">Top performing</div>
          <div className="flex flex-col gap-2 text-[12px]">
            {[...posts].sort((a, b) => b.views - a.views).slice(0, 3).map((p) => (
              <div key={p.id} className="flex items-center justify-between">
                <span className="truncate max-w-[70%]">{p.title}</span>
                <span className="font-bold text-accent-text">{p.views.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {editing !== undefined && (
        <PostEditor post={editing} onClose={() => setEditing(undefined)} onSave={savePost} />
      )}
    </AdminShell>
  );
}
