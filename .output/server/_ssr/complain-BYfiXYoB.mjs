import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import {
  C as CircleCheck,
  A as ArrowLeft,
  M as MapPin,
  B as Building2,
  L as Landmark,
  i as Camera,
  V as Video,
  j as Send,
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
const levels = [
  {
    id: "local",
    label: "Local",
    icon: MapPin,
    desc: "Sarpanch · Ward · RWA",
  },
  {
    id: "state",
    label: "State",
    icon: Building2,
    desc: "MLA · Collector",
  },
  {
    id: "country",
    label: "Country",
    icon: Landmark,
    desc: "Ministry · MP",
  },
];
const categories = [
  "Roads & Potholes",
  "Water Supply",
  "Garbage",
  "Electricity",
  "Corruption",
  "Safety",
  "Healthcare",
  "Other",
];
function ComplainPage() {
  const [level, setLevel] = reactExports.useState("local");
  const [category, setCategory] = reactExports.useState(categories[0]);
  const [title, setTitle] = reactExports.useState("");
  const [details, setDetails] = reactExports.useState("");
  const [files, setFiles] = reactExports.useState([]);
  const [submitted, setSubmitted] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;
    setSubmitted(true);
  }
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className:
        "flex min-h-[80vh] flex-col items-center justify-center px-6 text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className:
            "grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, {
            className: "h-10 w-10",
          }),
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
          className: "mt-4 text-2xl font-extrabold",
          children: "Complaint filed",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
          className: "mt-2 max-w-xs text-sm text-muted-foreground",
          children: [
            "Tracking ID ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
              className: "font-mono font-semibold text-foreground",
              children: ["CK-", Math.floor(Math.random() * 9e4) + 1e4],
            }),
            ". You'll get updates in the Voice feed.",
          ],
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mt-6 flex gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
              to: "/community",
              className:
                "rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground",
              children: "Open Voice Feed",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              onClick: () => {
                setSubmitted(false);
                setTitle("");
                setDetails("");
                setFiles([]);
              },
              className:
                "rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold",
              children: "File another",
            }),
          ],
        }),
      ],
    });
  }
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
                children: "File a complaint",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Choose level, describe issue, attach proof",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "grid grid-cols-3 gap-2",
        children: levels.map((l) => {
          const Icon = l.icon;
          const active = level === l.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setLevel(l.id),
              className: `rounded-2xl border p-3 text-left transition-all ${active ? "border-primary bg-primary/10 shadow-[var(--shadow-saffron)]" : "border-border bg-card hover:bg-muted"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                  className: `h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: `mt-2 text-sm font-bold ${active ? "text-primary" : ""}`,
                  children: l.label,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                  className: "text-[10px] text-muted-foreground",
                  children: l.desc,
                }),
              ],
            },
            l.id,
          );
        }),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
        onSubmit,
        className: "mt-5 space-y-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                className: "text-xs font-semibold text-muted-foreground",
                children: "Category",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: categories.map((c) =>
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setCategory(c),
                      className: `rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${category === c ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                      children: c,
                    },
                    c,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                className: "text-xs font-semibold text-muted-foreground",
                children: "Title",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                value: title,
                onChange: (e) => setTitle(e.target.value),
                placeholder: "e.g. Broken streetlight near temple",
                maxLength: 120,
                className:
                  "mt-1 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary",
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                className: "text-xs font-semibold text-muted-foreground",
                children: "Describe the issue",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
                value: details,
                onChange: (e) => setDetails(e.target.value),
                placeholder:
                  "What happened, when, where, and how it's affecting people.",
                maxLength: 1e3,
                rows: 5,
                className:
                  "mt-1 w-full resize-none rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                className: "mt-1 text-right text-[10px] text-muted-foreground",
                children: [details.length, "/1000"],
              }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                className: "text-xs font-semibold text-muted-foreground",
                children: "Attach evidence",
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "mt-2 grid grid-cols-2 gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                    className:
                      "flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-sm font-semibold hover:bg-muted",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, {
                        className: "h-4 w-4 text-primary",
                      }),
                      " Photo",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        className: "hidden",
                        onChange: (e) =>
                          setFiles((p) => [
                            ...p,
                            ...Array.from(e.target.files ?? []),
                          ]),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                    className:
                      "flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-border bg-card p-3 text-sm font-semibold hover:bg-muted",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Video, {
                        className: "h-4 w-4 text-accent",
                      }),
                      " Video",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
                        type: "file",
                        accept: "video/*",
                        multiple: true,
                        className: "hidden",
                        onChange: (e) =>
                          setFiles((p) => [
                            ...p,
                            ...Array.from(e.target.files ?? []),
                          ]),
                      }),
                    ],
                  }),
                ],
              }),
              files.length > 0 &&
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                  className: "mt-2 text-xs text-muted-foreground",
                  children: [files.length, " file(s) attached"],
                }),
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
            type: "submit",
            className:
              "flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary py-3.5 text-sm font-bold text-secondary-foreground shadow-[var(--shadow-civic)] transition-transform active:scale-[0.99]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, {
                className: "h-4 w-4",
              }),
              " Submit complaint",
            ],
          }),
        ],
      }),
    ],
  });
}
export { ComplainPage as component };
