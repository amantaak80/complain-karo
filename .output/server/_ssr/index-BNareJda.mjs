import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import {
  q as ShieldCheck,
  S as Siren,
  a as Sparkles,
  F as FileText,
  r as ArrowRight,
  M as MapPin,
  B as Building2,
  L as Landmark,
  U as Users,
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
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-6 px-4 pt-6",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
        className: "flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground shadow-[var(--shadow-civic)]",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, {
                  className: "h-5 w-5",
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
                    className: "text-lg font-bold leading-none",
                    children: "ComplainKaro",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-[11px] text-muted-foreground",
                    children: "Aapki awaaz, hamari zimmedari",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className:
              "flex h-9 w-9 items-center justify-center rounded-full bg-muted text-sm font-semibold",
            children: "RK",
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
        className:
          "relative overflow-hidden rounded-3xl p-5 text-secondary-foreground shadow-[var(--shadow-civic)]",
        style: {
          background: "var(--gradient-saffron)",
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className:
              "absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className:
              "text-xs font-semibold uppercase tracking-widest opacity-80",
            children: "In an emergency?",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
            className: "mt-1 text-2xl font-extrabold leading-tight",
            children: "Help is one tap away.",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "mt-2 max-w-[18rem] text-sm opacity-90",
            children:
              "Police, ambulance, fire, women & child helplines — all numbers, one screen.",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
            to: "/emergency",
            className:
              "mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-[1.02]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, {
                className: "h-4 w-4",
              }),
              " Open Emergency",
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
        className: "grid grid-cols-2 gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
            to: "/quick",
            className:
              "group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-saffron)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, {
                  className: "h-5 w-5",
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                className: "mt-3 text-sm font-bold",
                children: "Quick Complain",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "AI routes it to the right authority.",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
            to: "/complain",
            className:
              "group rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-civic)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, {
                  className: "h-5 w-5",
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                className: "mt-3 text-sm font-bold",
                children: "File a Complaint",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Local, State or National level.",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "mb-2 flex items-center justify-between px-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                className: "text-sm font-bold",
                children: "File by level",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
                to: "/complain",
                className:
                  "flex items-center gap-1 text-xs font-semibold text-primary",
                children: [
                  "View all ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {
                    className: "h-3 w-3",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "space-y-2",
            children: [
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
            ].map(({ icon: Icon, title, desc, tone }) =>
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/complain",
                  className:
                    "flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-muted",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className: `grid h-11 w-11 place-items-center rounded-xl ${tone}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                        className: "h-5 w-5",
                      }),
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className: "text-sm font-semibold",
                          children: title,
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: desc,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {
                      className: "h-4 w-4 text-muted-foreground",
                    }),
                  ],
                },
                title,
              ),
            ),
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
        className: "rounded-3xl border border-border bg-card p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-start gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {
                  className: "h-5 w-5",
                }),
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "flex-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                    className: "text-sm font-bold",
                    children: "Voice of the Community",
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "See what neighbours are reporting and how leaders are responding.",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
            to: "/community",
            className:
              "mt-3 flex items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90",
            children: [
              "Open Voice Feed ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, {
                className: "h-4 w-4",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { Index as component };
