import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Siren,
  Sparkles,
  FileText,
  Users,
  MapPin,
  Building2,
  Landmark,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ComplainKaro — File complaints fearlessly" },
      {
        name: "description",
        content:
          "India's civic voice app. Emergency contacts, AI-triaged complaints, and a community feed where leaders respond.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="space-y-6 px-4 pt-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-[var(--shadow-civic)]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">ComplainKaro</h1>
            <p className="text-[11px] text-muted-foreground">
              Aapki awaaz, hamari zimmedari
            </p>
          </div>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-semibold">
          RK
        </div>
      </header>

      {/* Hero / SOS card */}
      <section
        className="relative overflow-hidden rounded-3xl p-5 text-secondary-foreground shadow-[var(--shadow-civic)]"
        style={{ background: "var(--gradient-saffron)" }}
      >
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
        <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
          In an emergency?
        </p>
        <h2 className="mt-1 text-2xl font-extrabold leading-tight">
          Help is one tap away.
        </h2>
        <p className="mt-2 max-w-[18rem] text-sm opacity-90">
          Police, ambulance, fire, women & child helplines — all numbers, one
          screen.
        </p>
        <Link
          to="/emergency"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.02]"
        >
          <Siren className="h-4 w-4" /> Open Emergency
        </Link>
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-2 gap-3">
        <Link
          to="/quick"
          className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-saffron)]"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="mt-3 text-sm font-bold">Quick Complain</h3>
          <p className="text-xs text-muted-foreground">
            AI routes it to the right authority.
          </p>
        </Link>
        <Link
          to="/complain"
          className="group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-civic)]"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary">
            <FileText className="h-5 w-5" />
          </div>
          <h3 className="mt-3 text-sm font-bold">File a Complaint</h3>
          <p className="text-xs text-muted-foreground">
            Local, State or National level.
          </p>
        </Link>
      </section>

      {/* Levels */}
      <section>
        <div className="mb-2 flex items-center justify-between px-1">
          <h3 className="text-sm font-bold">File by level</h3>
          <Link
            to="/complain"
            className="flex items-center gap-1 text-xs font-semibold text-primary"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-2">
          {[
            {
              icon: MapPin,
              title: "Local",
              desc: "Sarpanch, ward officer, RWA",
              tone: "bg-primary/10 text-primary",
            },
            {
              icon: Building2,
              title: "State",
              desc: "MLA, district collector",
              tone: "bg-accent/10 text-accent",
            },
            {
              icon: Landmark,
              title: "Country",
              desc: "Central ministries, MP",
              tone: "bg-secondary/10 text-secondary",
            },
          ].map(({ icon: Icon, title, desc, tone }) => (
            <Link
              key={title}
              to="/complain"
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-muted"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl ${tone}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* Community teaser */}
      <section className="rounded-3xl border border-border bg-card p-4">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
            <Users className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold">Voice of the Community</h3>
            <p className="text-xs text-muted-foreground">
              See what neighbours are reporting and how leaders are responding.
            </p>
          </div>
        </div>
        <Link
          to="/community"
          className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
        >
          Open Voice Feed <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
