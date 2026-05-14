import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import {
  A as ArrowLeft,
  P as Phone,
  T as TriangleAlert,
  b as Shield,
  c as Ambulance,
  d as Flame,
  e as Heart,
  f as Baby,
  g as PhoneCall,
  Z as Zap,
  h as TramFront,
} from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const contacts = [
  {
    name: "All-in-one Emergency",
    number: "112",
    icon: TriangleAlert,
    tone: "bg-destructive text-destructive-foreground",
    desc: "National emergency response",
  },
  {
    name: "Police",
    number: "100",
    icon: Shield,
    tone: "bg-secondary text-secondary-foreground",
    desc: "Crime, safety, theft",
  },
  {
    name: "Ambulance",
    number: "102",
    icon: Ambulance,
    tone: "bg-accent text-accent-foreground",
    desc: "Medical emergency",
  },
  {
    name: "Fire",
    number: "101",
    icon: Flame,
    tone: "bg-primary text-primary-foreground",
    desc: "Fire & rescue",
  },
  {
    name: "Women Helpline",
    number: "1091",
    icon: Heart,
    tone: "bg-pink-500 text-white",
    desc: "Women in distress",
  },
  {
    name: "Child Helpline",
    number: "1098",
    icon: Baby,
    tone: "bg-blue-500 text-white",
    desc: "Children in need",
  },
  {
    name: "Senior Citizen",
    number: "14567",
    icon: PhoneCall,
    tone: "bg-amber-600 text-white",
    desc: "Elder support",
  },
  {
    name: "Disaster Mgmt",
    number: "108",
    icon: Zap,
    tone: "bg-orange-600 text-white",
    desc: "NDRF & disaster",
  },
  {
    name: "Railway",
    number: "139",
    icon: TramFront,
    tone: "bg-emerald-700 text-white",
    desc: "Railway help",
  },
];
function EmergencyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "px-4 pt-6",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "mb-4 flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
            to: "/",
            className: "grid h-9 w-9 place-items-center rounded-full bg-muted",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, {
              className: "h-4 w-4",
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
                className: "text-xl font-extrabold",
                children: "Emergency",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Tap a card to call instantly",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", {
        href: "tel:112",
        className:
          "mb-4 flex items-center gap-3 rounded-3xl bg-destructive p-4 text-destructive-foreground shadow-[var(--shadow-civic)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className:
              "grid h-14 w-14 place-items-center rounded-2xl bg-white/20",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {
              className: "h-7 w-7",
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs uppercase tracking-widest opacity-80",
                children: "Single Emergency Number",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-3xl font-black leading-none",
                children: "Call 112",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "grid grid-cols-2 gap-3",
        children: contacts.map((c) => {
          const Icon = c.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${c.number}`,
              className:
                "rounded-2xl border border-border bg-card p-3 transition-transform active:scale-[0.98]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: `grid h-11 w-11 place-items-center rounded-xl ${c.tone}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                    className: "h-5 w-5",
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "mt-3 text-sm font-bold",
                  children: c.name,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: c.desc,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className:
                    "mt-2 text-lg font-extrabold tracking-wide text-foreground",
                  children: c.number,
                }),
              ],
            },
            c.number,
          );
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        className:
          "mt-6 rounded-2xl border border-dashed border-border bg-muted/40 p-3 text-center text-[11px] text-muted-foreground",
        children:
          "Numbers shown are official India emergency helplines. Stay calm and speak clearly.",
      }),
    ],
  });
}
export { EmergencyPage as component };
