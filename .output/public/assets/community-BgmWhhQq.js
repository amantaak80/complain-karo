import { c as t, j as e, L as c } from "./index-vq8K4LwO.js";
import { A as l } from "./arrow-left-D2GazdMM.js";
import { C as n } from "./circle-check-BTzKkw14.js";
const i = [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
        key: "3c2336",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  d = t("badge-check", i);
const m = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  x = t("circle-alert", m);
const h = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ],
  u = t("clock", h);
const p = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  y = t("message-circle", p);
const f = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  b = t("share-2", f);
const g = [
    [
      "path",
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        key: "emmmcr",
      },
    ],
    ["path", { d: "M7 10v12", key: "1qc93n" }],
  ],
  N = t("thumbs-up", g),
  v = [
    {
      id: 1,
      author: "Ramesh Patil",
      role: "Sarpanch · Wai",
      verified: !0,
      when: "2h",
      status: "in-progress",
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
      verified: !1,
      when: "5h",
      status: "open",
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
      verified: !0,
      when: "1d",
      status: "resolved",
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
      verified: !1,
      when: "2d",
      status: "open",
      title: "Pothole on NH-48 service road",
      body: "Two bike accidents this week. NHAI has been tagged.",
      likes: 211,
      comments: 41,
      level: "Country",
    },
  ],
  j = {
    open: { label: "Open", icon: x, cls: "bg-destructive/15 text-destructive" },
    "in-progress": {
      label: "In progress",
      icon: u,
      cls: "bg-primary/15 text-primary",
    },
    resolved: { label: "Resolved", icon: n, cls: "bg-accent/15 text-accent" },
  };
function _() {
  return e.jsxs("div", {
    className: "px-4 pt-6",
    children: [
      e.jsxs("div", {
        className: "mb-4 flex items-center gap-3",
        children: [
          e.jsx(c, {
            to: "/",
            className: "grid h-9 w-9 place-items-center rounded-full bg-muted",
            children: e.jsx(l, { className: "h-4 w-4" }),
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "text-xl font-extrabold",
                children: "Voice Feed",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Community complaints & responses",
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "mb-3 flex gap-2 overflow-x-auto pb-1",
        children: [
          "For You",
          "Nearby",
          "Local",
          "State",
          "Country",
          "Resolved",
        ].map((s, r) =>
          e.jsx(
            "button",
            {
              className: `whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${r === 0 ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-card text-muted-foreground"}`,
              children: s,
            },
            s,
          ),
        ),
      }),
      e.jsx("div", {
        className: "space-y-3",
        children: v.map((s) => {
          const r = j[s.status],
            a = r.icon;
          return e.jsxs(
            "article",
            {
              className:
                "overflow-hidden rounded-3xl border border-border bg-card",
              children: [
                e.jsxs("header", {
                  className: "flex items-center gap-3 p-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-secondary-foreground",
                      children: s.author
                        .split(" ")
                        .map((o) => o[0])
                        .join("")
                        .slice(0, 2),
                    }),
                    e.jsxs("div", {
                      className: "flex-1",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1",
                          children: [
                            e.jsx("p", {
                              className: "text-sm font-bold",
                              children: s.author,
                            }),
                            s.verified &&
                              e.jsx(d, { className: "h-4 w-4 text-accent" }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "text-[11px] text-muted-foreground",
                          children: [s.role, " · ", s.when],
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className:
                        "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground",
                      children: s.level,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "px-4 pb-3",
                  children: [
                    e.jsx("h3", {
                      className: "text-sm font-bold leading-snug",
                      children: s.title,
                    }),
                    e.jsx("p", {
                      className: "mt-1 text-sm text-muted-foreground",
                      children: s.body,
                    }),
                    e.jsxs("div", {
                      className: `mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.cls}`,
                      children: [
                        e.jsx(a, { className: "h-3 w-3" }),
                        " ",
                        r.label,
                      ],
                    }),
                  ],
                }),
                e.jsxs("footer", {
                  className:
                    "flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground",
                  children: [
                    e.jsxs("button", {
                      className:
                        "flex items-center gap-1.5 transition-colors hover:text-primary",
                      children: [
                        e.jsx(N, { className: "h-4 w-4" }),
                        " ",
                        s.likes,
                      ],
                    }),
                    e.jsxs("button", {
                      className:
                        "flex items-center gap-1.5 transition-colors hover:text-secondary",
                      children: [
                        e.jsx(y, { className: "h-4 w-4" }),
                        " ",
                        s.comments,
                      ],
                    }),
                    e.jsxs("button", {
                      className:
                        "flex items-center gap-1.5 transition-colors hover:text-accent",
                      children: [e.jsx(b, { className: "h-4 w-4" }), " Share"],
                    }),
                  ],
                }),
              ],
            },
            s.id,
          );
        }),
      }),
    ],
  });
}
export { _ as component };
