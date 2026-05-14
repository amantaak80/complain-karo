import { c as u, r as o, j as e, L as i, S as p } from "./index-vq8K4LwO.js";
import { L as x, B as h, M as f } from "./map-pin-SAJ4yagn.js";
import { A as y } from "./arrow-left-D2GazdMM.js";
const g = [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6",
      },
    ],
    ["path", { d: "m14 7 3 3", key: "1r5n42" }],
    ["path", { d: "M5 6v4", key: "ilb8ba" }],
    ["path", { d: "M19 14v4", key: "blhpug" }],
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M7 8H3", key: "zfb6yr" }],
    ["path", { d: "M21 16h-4", key: "1cnmox" }],
    ["path", { d: "M11 3H9", key: "1obp7u" }],
  ],
  b = u("wand-sparkles", g);
function j(t) {
  const a = t.toLowerCase();
  return /(modi|parliament|gst|aadhaar|passport|cbi|income tax|railway|highway nh|airport|defence|ministry)/.test(
    a,
  )
    ? {
        level: "Country",
        authority: "Central Ministry / MP",
        reason: "Issue involves a national-level body or policy.",
      }
    : /(state|cm |mla|collector|police station|hospital|board|electricity board|transport|highway sh)/.test(
          a,
        )
      ? {
          level: "State",
          authority: "MLA / District Collector",
          reason: "Issue falls under state government jurisdiction.",
        }
      : {
          level: "Local",
          authority: "Sarpanch / Ward Officer / RWA",
          reason: "Issue looks community or municipality scoped.",
        };
}
function k() {
  const [t, a] = o.useState(""),
    [s, l] = o.useState(null),
    [r, n] = o.useState(!1);
  function d() {
    t.trim() &&
      (n(!0),
      l(null),
      setTimeout(() => {
        (l(j(t)), n(!1));
      }, 900));
  }
  const c = s?.level === "Country" ? x : s?.level === "State" ? h : f;
  return e.jsxs("div", {
    className: "px-4 pt-6",
    children: [
      e.jsxs("div", {
        className: "mb-4 flex items-center gap-3",
        children: [
          e.jsx(i, {
            to: "/",
            className: "grid h-9 w-9 place-items-center rounded-full bg-muted",
            children: e.jsx(y, { className: "h-4 w-4" }),
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "text-xl font-extrabold",
                children: "Quick Complain",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Just type. We'll route it.",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "rounded-3xl p-4 text-secondary-foreground shadow-[var(--shadow-civic)]",
        style: { background: "var(--gradient-saffron)" },
        children: [
          e.jsxs("div", {
            className:
              "flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-90",
            children: [e.jsx(p, { className: "h-4 w-4" }), " AI Triage"],
          }),
          e.jsx("p", {
            className: "mt-1 text-sm opacity-95",
            children:
              "Describe your complaint in plain Hindi or English. We'll suggest who should handle it.",
          }),
        ],
      }),
      e.jsx("textarea", {
        value: t,
        onChange: (m) => a(m.target.value),
        rows: 5,
        maxLength: 800,
        placeholder:
          "e.g. There's a huge pothole near our gully and last week my uncle slipped on it...",
        className:
          "mt-4 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary",
      }),
      e.jsxs("button", {
        onClick: d,
        disabled: r || !t.trim(),
        className:
          "mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-saffron)] transition-transform active:scale-[0.99] disabled:opacity-50",
        children: [
          e.jsx(b, { className: `h-4 w-4 ${r ? "animate-spin" : ""}` }),
          r ? "Analyzing..." : "Analyze with AI",
        ],
      }),
      s &&
        e.jsxs("div", {
          className:
            "mt-5 overflow-hidden rounded-3xl border border-border bg-card",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center gap-3 border-b border-border bg-muted/40 p-4",
              children: [
                e.jsx("div", {
                  className:
                    "grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary",
                  children: e.jsx(c, { className: "h-6 w-6" }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                      children: "Suggested level",
                    }),
                    e.jsx("p", {
                      className: "text-lg font-extrabold",
                      children: s.level,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-3 p-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                      children: "Route to",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold",
                      children: s.authority,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                      children: "Why",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-foreground",
                      children: s.reason,
                    }),
                  ],
                }),
                e.jsx(i, {
                  to: "/complain",
                  className:
                    "mt-2 flex items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground",
                  children: "Continue & file",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
export { k as component };
