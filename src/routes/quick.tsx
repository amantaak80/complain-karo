import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Sparkles, Wand2, MapPin, Building2, Landmark } from "lucide-react";

export const Route = createFileRoute("/quick")({
  head: () => ({
    meta: [
      { title: "Quick Complain — AI triage" },
      { name: "description", content: "Type once. AI decides if your complaint is local, state or national and routes it to the right authority." },
    ],
  }),
  component: QuickPage,
});

type Triage = { level: "Local" | "State" | "Country"; authority: string; reason: string };

function classify(text: string): Triage {
  const t = text.toLowerCase();
  if (/(modi|parliament|gst|aadhaar|passport|cbi|income tax|railway|highway nh|airport|defence|ministry)/.test(t))
    return { level: "Country", authority: "Central Ministry / MP", reason: "Issue involves a national-level body or policy." };
  if (/(state|cm |mla|collector|police station|hospital|board|electricity board|transport|highway sh)/.test(t))
    return { level: "State", authority: "MLA / District Collector", reason: "Issue falls under state government jurisdiction." };
  return { level: "Local", authority: "Sarpanch / Ward Officer / RWA", reason: "Issue looks community or municipality scoped." };
}

function QuickPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<Triage | null>(null);
  const [loading, setLoading] = useState(false);

  function analyze() {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(classify(text));
      setLoading(false);
    }, 900);
  }

  const Icon = result?.level === "Country" ? Landmark : result?.level === "State" ? Building2 : MapPin;

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-3">
        <Link to="/" className="grid h-9 w-9 place-items-center rounded-full bg-muted">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-xl font-extrabold">Quick Complain</h1>
          <p className="text-xs text-muted-foreground">Just type. We'll route it.</p>
        </div>
      </div>

      <div
        className="rounded-3xl p-4 text-secondary-foreground shadow-[var(--shadow-civic)]"
        style={{ background: "var(--gradient-saffron)" }}
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-90">
          <Sparkles className="h-4 w-4" /> AI Triage
        </div>
        <p className="mt-1 text-sm opacity-95">
          Describe your complaint in plain Hindi or English. We'll suggest who should handle it.
        </p>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        maxLength={800}
        placeholder="e.g. There's a huge pothole near our gully and last week my uncle slipped on it..."
        className="mt-4 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
      />

      <button
        onClick={analyze}
        disabled={loading || !text.trim()}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-saffron)] transition-transform active:scale-[0.99] disabled:opacity-50"
      >
        <Wand2 className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>

      {result && (
        <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border bg-muted/40 p-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Suggested level</p>
              <p className="text-lg font-extrabold">{result.level}</p>
            </div>
          </div>
          <div className="space-y-3 p-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Route to</p>
              <p className="text-sm font-bold">{result.authority}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Why</p>
              <p className="text-sm text-foreground">{result.reason}</p>
            </div>
            <Link
              to="/complain"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground"
            >
              Continue & file
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}