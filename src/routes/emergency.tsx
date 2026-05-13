import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Shield, Ambulance, Flame, Heart, Baby, PhoneCall, AlertTriangle, Train, Zap } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Helplines — ComplainKaro" },
      { name: "description", content: "All India emergency helpline numbers: police, ambulance, fire, women, child and disaster help — one tap to call." },
    ],
  }),
  component: EmergencyPage,
});

const contacts = [
  { name: "All-in-one Emergency", number: "112", icon: AlertTriangle, tone: "bg-destructive text-destructive-foreground", desc: "National emergency response" },
  { name: "Police", number: "100", icon: Shield, tone: "bg-secondary text-secondary-foreground", desc: "Crime, safety, theft" },
  { name: "Ambulance", number: "102", icon: Ambulance, tone: "bg-accent text-accent-foreground", desc: "Medical emergency" },
  { name: "Fire", number: "101", icon: Flame, tone: "bg-primary text-primary-foreground", desc: "Fire & rescue" },
  { name: "Women Helpline", number: "1091", icon: Heart, tone: "bg-pink-500 text-white", desc: "Women in distress" },
  { name: "Child Helpline", number: "1098", icon: Baby, tone: "bg-blue-500 text-white", desc: "Children in need" },
  { name: "Senior Citizen", number: "14567", icon: PhoneCall, tone: "bg-amber-600 text-white", desc: "Elder support" },
  { name: "Disaster Mgmt", number: "108", icon: Zap, tone: "bg-orange-600 text-white", desc: "NDRF & disaster" },
  { name: "Railway", number: "139", icon: Train, tone: "bg-emerald-700 text-white", desc: "Railway help" },
];

function EmergencyPage() {
  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-3">
        <Link to="/" className="grid h-9 w-9 place-items-center rounded-full bg-muted">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <h1 className="text-xl font-extrabold">Emergency</h1>
          <p className="text-xs text-muted-foreground">Tap a card to call instantly</p>
        </div>
      </div>

      <a
        href="tel:112"
        className="mb-4 flex items-center gap-3 rounded-3xl bg-destructive p-4 text-destructive-foreground shadow-[var(--shadow-civic)]"
      >
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
          <Phone className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-widest opacity-80">Single Emergency Number</p>
          <p className="text-3xl font-black leading-none">Call 112</p>
        </div>
      </a>

      <div className="grid grid-cols-2 gap-3">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.number}
              href={`tel:${c.number}`}
              className="rounded-2xl border border-border bg-card p-3 transition-transform active:scale-[0.98]"
            >
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${c.tone}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-bold">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
              <p className="mt-2 text-lg font-extrabold tracking-wide text-foreground">{c.number}</p>
            </a>
          );
        })}
      </div>

      <p className="mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-3 text-center text-[11px] text-muted-foreground">
        Numbers shown are official India emergency helplines. Stay calm and speak clearly.
      </p>
    </div>
  );
}