import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import {
  A as ArrowLeft,
  C as CircleCheck,
  k as Clock,
  l as CircleAlert,
  m as BadgeCheck,
  n as ThumbsUp,
  o as MessageCircle,
  p as Share2,
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
const posts = [
  {
    id: 1,
    author: "Ramesh Patil",
    role: "Sarpanch · Wai",
    verified: true,
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
    verified: false,
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
    verified: true,
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
    verified: false,
    when: "2d",
    status: "open",
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
    icon: CircleAlert,
    cls: "bg-destructive/15 text-destructive",
  },
  "in-progress": {
    label: "In progress",
    icon: Clock,
    cls: "bg-primary/15 text-primary",
  },
  resolved: {
    label: "Resolved",
    icon: CircleCheck,
    cls: "bg-accent/15 text-accent",
  },
};
function CommunityPage() {
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
                children: "Voice Feed",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Community complaints & responses",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "mb-3 flex gap-2 overflow-x-auto pb-1",
        children: [
          "For You",
          "Nearby",
          "Local",
          "State",
          "Country",
          "Resolved",
        ].map((f, i) =>
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold ${i === 0 ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-card text-muted-foreground"}`,
              children: f,
            },
            f,
          ),
        ),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "space-y-3",
        children: posts.map((p) => {
          const S = statusMap[p.status];
          const SIcon = S.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className:
                "overflow-hidden rounded-3xl border border-border bg-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("header", {
                  className: "flex items-center gap-3 p-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                      className:
                        "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-secondary-foreground",
                      children: p.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2),
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: "flex-1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center gap-1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                              className: "text-sm font-bold",
                              children: p.author,
                            }),
                            p.verified &&
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                BadgeCheck,
                                { className: "h-4 w-4 text-accent" },
                              ),
                          ],
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                          className: "text-[11px] text-muted-foreground",
                          children: [p.role, " · ", p.when],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                      className:
                        "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground",
                      children: p.level,
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "px-4 pb-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                      className: "text-sm font-bold leading-snug",
                      children: p.title,
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                      className: "mt-1 text-sm text-muted-foreground",
                      children: p.body,
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                      className: `mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${S.cls}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SIcon, {
                          className: "h-3 w-3",
                        }),
                        " ",
                        S.label,
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", {
                  className:
                    "flex items-center justify-between border-t border-border px-4 py-2 text-xs text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                      className:
                        "flex items-center gap-1.5 transition-colors hover:text-primary",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, {
                          className: "h-4 w-4",
                        }),
                        " ",
                        p.likes,
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                      className:
                        "flex items-center gap-1.5 transition-colors hover:text-secondary",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, {
                          className: "h-4 w-4",
                        }),
                        " ",
                        p.comments,
                      ],
                    }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
                      className:
                        "flex items-center gap-1.5 transition-colors hover:text-accent",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, {
                          className: "h-4 w-4",
                        }),
                        " Share",
                      ],
                    }),
                  ],
                }),
              ],
            },
            p.id,
          );
        }),
      }),
    ],
  });
}
export { CommunityPage as component };
