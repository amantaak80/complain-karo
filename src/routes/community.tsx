import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ThumbsUp,
  MessageCircle,
  Share2,
  BadgeCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Voice Feed — ComplainKaro" },
      {
        name: "description",
        content:
          "A community feed of complaints and how local leaders are responding. Like, comment, and amplify.",
      },
    ],
  }),
  component: CommunityPage,
});

const posts = [
  {
    id: 1,
    author: "Ramesh Patil",
    role: "Sarpanch · Wai",
    verified: true,
    when: "2h",
    status: "in-progress" as const,
    title: "Drainage cleaning started in Ward 4",
    body: "Crew deployed today after 23 complaints last week. Will share before/after photos by Friday.",
    likes: 124,
    comments: 18,
    level: "Local",
  },
  {
    id: 2,
    author: "Priya Sharma",
    role: "Resident",
    verified: false,
    when: "5h",
    status: "open" as const,
    title: "Streetlight near Hanuman temple broken for 10 days",
    body: "Becomes very unsafe for women returning after evening aarti. Requesting urgent fix.",
    likes: 89,
    comments: 12,
    level: "Local",
  },
  {
    id: 3,
    author: "DM Office, Pune",
    role: "District Collector",
    verified: true,
    when: "1d",
    status: "resolved" as const,
    title: "Water tanker schedule restored in Hadapsar",
    body: "Thanks to 340 community reports, supply has been normalised. New schedule published on portal.",
    likes: 502,
    comments: 73,
    level: "State",
  },
  {
    id: 4,
    author: "Anil Kumar",
    role: "Resident",
    verified: false,
    when: "2d",
    status: "open" as const,
    title: "Pothole on NH-48 service road",
    body: "Two bike accidents this week. NHAI has been tagged.",
    likes: 211,
    comments: 41,
    level: "Country",
  },
];

const statusMap = {
  open: {
    label: "Open",
    icon: AlertCircle,
    cls: "bg-destructive/15 text-destructive",
  },
  "in-progress": {
    label: "In progress",
    icon: Clock,
    cls: "bg-primary/15 text-primary",
  },
  resolved: {
    label: "Resolved",
    icon: CheckCircle2,
    cls: "bg-accent/15 text-accent",
  },
};

function CommunityPage() {
  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-3">
        <Link
          to="/"
          className="grid h-9 w-9 place-items-center rounded-full bg-muted"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-xl font-extrabold">Voice Feed</h1>
          <p className="text-xs text-muted-foreground">
            Community complaints & responses
          </p>
        </div>
      </div>

      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        {["For You", "Nearby", "Local", "State", "Country", "Resolved"].map(
          (f, i) => (
            <button
              key={f}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${
                i === 0
                  ? "border-secondary bg-secondary text-secondary-foreground"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              {f}
            </button>
          ),
        )}
      </div>

      <div className="space-y-3">
        {posts.map((p) => {
          const S = statusMap[p.status];
          const SIcon = S.icon;
          return (
            <article
              key={p.id}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <header className="flex items-center gap-3 p-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-secondary-foreground">
                  {p.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-bold">{p.author}</p>
                    {p.verified && (
                      <BadgeCheck className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {p.role} · {p.when}
                  </p>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {p.level}
                </span>
              </header>

              <div className="px-4 pb-3">
                <h3 className="text-sm font-bold leading-snug">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                <div
                  className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${S.cls}`}
                >
                  <SIcon className="h-3 w-3" /> {S.label}
                </div>
              </div>

              <footer className="flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground">
                <button className="flex items-center gap-1.5 transition-colors hover:text-primary">
                  <ThumbsUp className="h-4 w-4" /> {p.likes}
                </button>
                <button className="flex items-center gap-1.5 transition-colors hover:text-secondary">
                  <MessageCircle className="h-4 w-4" /> {p.comments}
                </button>
                <button className="flex items-center gap-1.5 transition-colors hover:text-accent">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </footer>
            </article>
          );
        })}
      </div>
    </div>
  );
}
