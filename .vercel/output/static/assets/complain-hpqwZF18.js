import { c as d, r as s, j as e, L as u } from "./index-vq8K4LwO.js";
import { C as N } from "./circle-check-BTzKkw14.js";
import { A as v } from "./arrow-left-D2GazdMM.js";
import { M as w, B as C, L as k } from "./map-pin-SAJ4yagn.js";
const S = [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg",
      },
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
  ],
  L = d("camera", S);
const A = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  M = d("send", A);
const V = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ],
  _ = d("video", V),
  $ = [
    { id: "local", label: "Local", icon: w, desc: "Sarpanch · Ward · RWA" },
    { id: "state", label: "State", icon: C, desc: "MLA · Collector" },
    { id: "country", label: "Country", icon: k, desc: "Ministry · MP" },
  ],
  h = [
    "Roads & Potholes",
    "Water Supply",
    "Garbage",
    "Electricity",
    "Corruption",
    "Safety",
    "Healthcare",
    "Other",
  ];
function z() {
  const [p, f] = s.useState("local"),
    [b, g] = s.useState(h[0]),
    [n, c] = s.useState(""),
    [a, i] = s.useState(""),
    [m, o] = s.useState([]),
    [j, x] = s.useState(!1);
  function y(t) {
    (t.preventDefault(), !(!n.trim() || !a.trim()) && x(!0));
  }
  return j
    ? e.jsxs("div", {
        className:
          "flex min-h-[80vh] flex-col items-center justify-center px-6 text-center",
        children: [
          e.jsx("div", {
            className:
              "grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent",
            children: e.jsx(N, { className: "h-10 w-10" }),
          }),
          e.jsx("h2", {
            className: "mt-4 text-2xl font-extrabold",
            children: "Complaint filed",
          }),
          e.jsxs("p", {
            className: "mt-2 max-w-xs text-sm text-muted-foreground",
            children: [
              "Tracking ID ",
              e.jsxs("span", {
                className: "font-mono font-semibold text-foreground",
                children: ["CK-", Math.floor(Math.random() * 9e4) + 1e4],
              }),
              ". You'll get updates in the Voice feed.",
            ],
          }),
          e.jsxs("div", {
            className: "mt-6 flex gap-2",
            children: [
              e.jsx(u, {
                to: "/community",
                className:
                  "rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground",
                children: "Open Voice Feed",
              }),
              e.jsx("button", {
                onClick: () => {
                  (x(!1), c(""), i(""), o([]));
                },
                className:
                  "rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold",
                children: "File another",
              }),
            ],
          }),
        ],
      })
    : e.jsxs("div", {
        className: "px-4 pt-6",
        children: [
          e.jsxs("div", {
            className: "mb-4 flex items-center gap-3",
            children: [
              e.jsx(u, {
                to: "/",
                className:
                  "grid h-9 w-9 place-items-center rounded-full bg-muted",
                children: e.jsx(v, { className: "h-4 w-4" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-xl font-extrabold",
                    children: "File a complaint",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Choose level, describe issue, attach proof",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "grid grid-cols-3 gap-2",
            children: $.map((t) => {
              const r = t.icon,
                l = p === t.id;
              return e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => f(t.id),
                  className: `rounded-2xl border p-3 text-left transition-all ${l ? "border-primary bg-primary/10 shadow-[var(--shadow-saffron)]" : "border-border bg-card hover:bg-muted"}`,
                  children: [
                    e.jsx(r, {
                      className: `h-5 w-5 ${l ? "text-primary" : "text-muted-foreground"}`,
                    }),
                    e.jsx("p", {
                      className: `mt-2 text-sm font-bold ${l ? "text-primary" : ""}`,
                      children: t.label,
                    }),
                    e.jsx("p", {
                      className: "text-[10px] text-muted-foreground",
                      children: t.desc,
                    }),
                  ],
                },
                t.id,
              );
            }),
          }),
          e.jsxs("form", {
            onSubmit: y,
            className: "mt-5 space-y-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-xs font-semibold text-muted-foreground",
                    children: "Category",
                  }),
                  e.jsx("div", {
                    className: "mt-2 flex flex-wrap gap-2",
                    children: h.map((t) =>
                      e.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => g(t),
                          className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${b === t ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                          children: t,
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-xs font-semibold text-muted-foreground",
                    children: "Title",
                  }),
                  e.jsx("input", {
                    value: n,
                    onChange: (t) => c(t.target.value),
                    placeholder: "e.g. Broken streetlight near temple",
                    maxLength: 120,
                    className:
                      "mt-1 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-xs font-semibold text-muted-foreground",
                    children: "Describe the issue",
                  }),
                  e.jsx("textarea", {
                    value: a,
                    onChange: (t) => i(t.target.value),
                    placeholder:
                      "What happened, when, where, and how it's affecting people.",
                    maxLength: 1e3,
                    rows: 5,
                    className:
                      "mt-1 w-full resize-none rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary",
                  }),
                  e.jsxs("p", {
                    className:
                      "mt-1 text-right text-[10px] text-muted-foreground",
                    children: [a.length, "/1000"],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className: "text-xs font-semibold text-muted-foreground",
                    children: "Attach evidence",
                  }),
                  e.jsxs("div", {
                    className: "mt-2 grid grid-cols-2 gap-2",
                    children: [
                      e.jsxs("label", {
                        className:
                          "flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-sm font-semibold hover:bg-muted",
                        children: [
                          e.jsx(L, { className: "h-4 w-4 text-primary" }),
                          " Photo",
                          e.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            multiple: !0,
                            className: "hidden",
                            onChange: (t) =>
                              o((r) => [
                                ...r,
                                ...Array.from(t.target.files ?? []),
                              ]),
                          }),
                        ],
                      }),
                      e.jsxs("label", {
                        className:
                          "flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-sm font-semibold hover:bg-muted",
                        children: [
                          e.jsx(_, { className: "h-4 w-4 text-accent" }),
                          " Video",
                          e.jsx("input", {
                            type: "file",
                            accept: "video/*",
                            multiple: !0,
                            className: "hidden",
                            onChange: (t) =>
                              o((r) => [
                                ...r,
                                ...Array.from(t.target.files ?? []),
                              ]),
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.length > 0 &&
                    e.jsxs("p", {
                      className: "mt-2 text-xs text-muted-foreground",
                      children: [m.length, " file(s) attached"],
                    }),
                ],
              }),
              e.jsxs("button", {
                type: "submit",
                className:
                  "flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary py-3.5 text-sm font-bold text-secondary-foreground shadow-[var(--shadow-civic)] transition-transform active:scale-[0.99]",
                children: [
                  e.jsx(M, { className: "h-4 w-4" }),
                  " Submit complaint",
                ],
              }),
            ],
          }),
        ],
      });
}
export { z as component };
