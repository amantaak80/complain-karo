import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import {
  L as Landmark,
  B as Building2,
  M as MapPin,
  A as ArrowLeft,
  a as Sparkles,
  W as WandSparkles,
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
function classify(text) {
  const t = text.toLowerCase();
  if (
    /(modi|parliament|gst|aadhaar|passport|cbi|income tax|railway|highway nh|airport|defence|ministry)/.test(
      t,
    )
  )
    return {
      level: "Country",
      authority: "Central Ministry / MP",
      reason: "Issue involves a national-level body or policy.",
    };
  if (
    /(state|cm |mla|collector|police station|hospital|board|electricity board|transport|highway sh)/.test(
      t,
    )
  )
    return {
      level: "State",
      authority: "MLA / District Collector",
      reason: "Issue falls under state government jurisdiction.",
    };
  return {
    level: "Local",
    authority: "Sarpanch / Ward Officer / RWA",
    reason: "Issue looks community or municipality scoped.",
  };
}
function QuickPage() {
  const [text, setText] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  function analyze() {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(classify(text));
      setLoading(false);
    }, 900);
  }
  const Icon =
    result?.level === "Country"
      ? Landmark
      : result?.level === "State"
        ? Building2
        : MapPin;
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
                children: "Quick Complain",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Just type. We'll route it.",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className:
          "rounded-3xl p-4 text-secondary-foreground shadow-[var(--shadow-civic)]",
        style: {
          background: "var(--gradient-saffron)",
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className:
              "flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-90",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, {
                className: "h-4 w-4",
              }),
              " AI Triage",
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "mt-1 text-sm opacity-95",
            children:
              "Describe your complaint in plain Hindi or English. We'll suggest who should handle it.",
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
        value: text,
        onChange: (e) => setText(e.target.value),
        rows: 5,
        maxLength: 800,
        placeholder:
          "e.g. There's a huge pothole near our gully and last week my uncle slipped on it...",
        className:
          "mt-4 w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary",
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        onClick: analyze,
        disabled: loading || !text.trim(),
        className:
          "mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-saffron)] transition-transform active:scale-[0.99] disabled:opacity-50",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, {
            className: `h-4 w-4 ${loading ? "animate-spin" : ""}`,
          }),
          loading ? "Analyzing..." : "Analyze with AI",
        ],
      }),
      result &&
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className:
            "mt-5 overflow-hidden rounded-3xl border border-border bg-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className:
                "flex items-center gap-3 border-b border-border bg-muted/40 p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className:
                    "grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                    className: "h-6 w-6",
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                      children: "Suggested level",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "text-lg font-extrabold",
                      children: result.level,
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "space-y-3 p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                      children: "Route to",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "text-sm font-bold",
                      children: result.authority,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className:
                        "text-[11px] font-semibold uppercase tracking-widest text-muted-foreground",
                      children: "Why",
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "text-sm text-foreground",
                      children: result.reason,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
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
export { QuickPage as component };
