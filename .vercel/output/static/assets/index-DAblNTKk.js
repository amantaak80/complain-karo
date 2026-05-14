import {
  c as r,
  j as e,
  L as s,
  a as d,
  S as l,
  F as i,
  U as m,
} from "./index-vq8K4LwO.js";
import { M as x, B as h, L as p } from "./map-pin-SAJ4yagn.js";
const u = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  a = r("arrow-right", u);
const g = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  j = r("shield-check", g);
function N() {
  return e.jsxs("div", {
    className: "space-y-6 px-4 pt-6",
    children: [
      e.jsxs("header", {
        className: "flex items-center justify-between",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-[var(--shadow-civic)]",
                children: e.jsx(j, { className: "h-5 w-5" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-lg font-bold leading-none",
                    children: "ComplainKaro",
                  }),
                  e.jsx("p", {
                    className: "text-[11px] text-muted-foreground",
                    children: "Aapki awaaz, hamari zimmedari",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-semibold",
            children: "RK",
          }),
        ],
      }),
      e.jsxs("section", {
        className:
          "relative overflow-hidden rounded-3xl p-5 text-secondary-foreground shadow-[var(--shadow-civic)]",
        style: { background: "var(--gradient-saffron)" },
        children: [
          e.jsx("div", {
            className:
              "absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl",
          }),
          e.jsx("p", {
            className:
              "text-xs font-semibold uppercase tracking-widest opacity-80",
            children: "In an emergency?",
          }),
          e.jsx("h2", {
            className: "mt-1 text-2xl font-extrabold leading-tight",
            children: "Help is one tap away.",
          }),
          e.jsx("p", {
            className: "mt-2 max-w-[18rem] text-sm opacity-90",
            children:
              "Police, ambulance, fire, women & child helplines — all numbers, one screen.",
          }),
          e.jsxs(s, {
            to: "/emergency",
            className:
              "mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.02]",
            children: [e.jsx(d, { className: "h-4 w-4" }), " Open Emergency"],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "grid grid-cols-2 gap-3",
        children: [
          e.jsxs(s, {
            to: "/quick",
            className:
              "group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-saffron)]",
            children: [
              e.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary",
                children: e.jsx(l, { className: "h-5 w-5" }),
              }),
              e.jsx("h3", {
                className: "mt-3 text-sm font-bold",
                children: "Quick Complain",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "AI routes it to the right authority.",
              }),
            ],
          }),
          e.jsxs(s, {
            to: "/complain",
            className:
              "group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-civic)]",
            children: [
              e.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary",
                children: e.jsx(i, { className: "h-5 w-5" }),
              }),
              e.jsx("h3", {
                className: "mt-3 text-sm font-bold",
                children: "File a Complaint",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Local, State or National level.",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        children: [
          e.jsxs("div", {
            className: "mb-2 flex items-center justify-between px-1",
            children: [
              e.jsx("h3", {
                className: "text-sm font-bold",
                children: "File by level",
              }),
              e.jsxs(s, {
                to: "/complain",
                className:
                  "flex items-center gap-1 text-xs font-semibold text-primary",
                children: ["View all ", e.jsx(a, { className: "h-3 w-3" })],
              }),
            ],
          }),
          e.jsx("div", {
            className: "space-y-2",
            children: [
              {
                icon: x,
                title: "Local",
                desc: "Sarpanch, ward officer, RWA",
                tone: "bg-primary/10 text-primary",
              },
              {
                icon: h,
                title: "State",
                desc: "MLA, district collector",
                tone: "bg-accent/10 text-accent",
              },
              {
                icon: p,
                title: "Country",
                desc: "Central ministries, MP",
                tone: "bg-secondary/10 text-secondary",
              },
            ].map(({ icon: c, title: t, desc: n, tone: o }) =>
              e.jsxs(
                s,
                {
                  to: "/complain",
                  className:
                    "flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-muted",
                  children: [
                    e.jsx("div", {
                      className: `grid h-11 w-11 place-items-center rounded-xl ${o}`,
                      children: e.jsx(c, { className: "h-5 w-5" }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-semibold",
                          children: t,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: n,
                        }),
                      ],
                    }),
                    e.jsx(a, { className: "h-4 w-4 text-muted-foreground" }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("section", {
        className: "rounded-3xl border border-border bg-card p-4",
        children: [
          e.jsxs("div", {
            className: "flex items-start gap-3",
            children: [
              e.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent",
                children: e.jsx(m, { className: "h-5 w-5" }),
              }),
              e.jsxs("div", {
                className: "flex-1",
                children: [
                  e.jsx("h3", {
                    className: "text-sm font-bold",
                    children: "Voice of the Community",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "See what neighbours are reporting and how leaders are responding.",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(s, {
            to: "/community",
            className:
              "mt-3 flex items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90",
            children: ["Open Voice Feed ", e.jsx(a, { className: "h-4 w-4" })],
          }),
        ],
      }),
    ],
  });
}
export { N as component };
