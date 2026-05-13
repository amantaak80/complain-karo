import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Building2, Landmark, Camera, Video, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/complain")({
  head: () => ({
    meta: [
      { title: "File a Complaint — ComplainKaro" },
      { name: "description", content: "File a complaint at local, state or country level. Attach photos and videos as evidence." },
    ],
  }),
  component: ComplainPage,
});

const levels = [
  { id: "local", label: "Local", icon: MapPin, desc: "Sarpanch · Ward · RWA" },
  { id: "state", label: "State", icon: Building2, desc: "MLA · Collector" },
  { id: "country", label: "Country", icon: Landmark, desc: "Ministry · MP" },
] as const;

const categories = ["Roads & Potholes", "Water Supply", "Garbage", "Electricity", "Corruption", "Safety", "Healthcare", "Other"];

function ComplainPage() {
  const [level, setLevel] = useState<(typeof levels)[number]["id"]>("local");
  const [category, setCategory] = useState(categories[0]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="mt-4 text-2xl font-extrabold">Complaint filed</h2>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Tracking ID <span className="font-mono font-semibold text-foreground">CK-{Math.floor(Math.random() * 90000) + 10000}</span>. You'll get updates in the Voice feed.
        </p>
        <div className="mt-6 flex gap-2">
          <Link to="/community" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground">
            Open Voice Feed
          </Link>
          <button
            onClick={() => { setSubmitted(false); setTitle(""); setDetails(""); setFiles([]); }}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold"
          >
            File another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-3">
        <Link to="/" className="grid h-9 w-9 place-items-center rounded-full bg-muted">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-xl font-extrabold">File a complaint</h1>
          <p className="text-xs text-muted-foreground">Choose level, describe issue, attach proof</p>
        </div>
      </div>

      {/* Level tabs */}
      <div className="grid grid-cols-3 gap-2">
        {levels.map((l) => {
          const Icon = l.icon;
          const active = level === l.id;
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => setLevel(l.id)}
              className={`rounded-2xl border p-3 text-left transition-all ${
                active
                  ? "border-primary bg-primary/10 shadow-[var(--shadow-saffron)]"
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
              <p className={`mt-2 text-sm font-bold ${active ? "text-primary" : ""}`}>{l.label}</p>
              <p className="text-[10px] text-muted-foreground">{l.desc}</p>
            </button>
          );
        })}
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <div>
          <label className="text-xs font-semibold text-muted-foreground">Category</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  category === c
                    ? "border-secondary bg-secondary text-secondary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Broken streetlight near temple"
            maxLength={120}
            className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground">Describe the issue</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="What happened, when, where, and how it's affecting people."
            maxLength={1000}
            rows={5}
            className="mt-1 w-full resize-none rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary"
          />
          <p className="mt-1 text-right text-[10px] text-muted-foreground">{details.length}/1000</p>
        </div>

        <div>
          <label className="text-xs font-semibold text-muted-foreground">Attach evidence</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-sm font-semibold hover:bg-muted">
              <Camera className="h-4 w-4 text-primary" /> Photo
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => setFiles((p) => [...p, ...Array.from(e.target.files ?? [])])}
              />
            </label>
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-sm font-semibold hover:bg-muted">
              <Video className="h-4 w-4 text-accent" /> Video
              <input
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={(e) => setFiles((p) => [...p, ...Array.from(e.target.files ?? [])])}
              />
            </label>
          </div>
          {files.length > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">{files.length} file(s) attached</p>
          )}
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary py-3.5 text-sm font-bold text-secondary-foreground shadow-[var(--shadow-civic)] transition-transform active:scale-[0.99]"
        >
          <Send className="h-4 w-4" /> Submit complaint
        </button>
      </form>
    </div>
  );
}