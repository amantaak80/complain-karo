import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import {
  c as createRouter,
  a as createRootRouteWithContext,
  u as useRouter,
  L as Link,
  O as Outlet,
  H as HeadContent,
  S as Scripts,
  b as createFileRoute,
  l as lazyRouteComponent,
  d as useRouterState,
} from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import {
  H as House,
  S as Siren,
  a as Sparkles,
  F as FileText,
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
const appCss = "/assets/styles-C7ytnlTh.css";
const items = [
  { to: "/", label: "Home", icon: House },
  { to: "/emergency", label: "SOS", icon: Siren },
  { to: "/quick", label: "Quick", icon: Sparkles },
  { to: "/complain", label: "File", icon: FileText },
  { to: "/community", label: "Voice", icon: Users },
];
function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", {
    className:
      "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-lg",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
      className:
        "mx-auto flex max-w-xl items-stretch justify-between px-2 py-1.5",
      children: items.map((it) => {
        const active = pathname === it.to;
        const Icon = it.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "flex-1",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, {
              to: it.to,
              className: `flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className: `grid h-9 w-9 place-items-center rounded-xl transition-all ${active ? "bg-primary/15 text-primary scale-110" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {
                    className: "h-5 w-5",
                    strokeWidth: active ? 2.5 : 2,
                  }),
                }),
                it.label,
              ],
            }),
          },
          it.to,
        );
      }),
    }),
  });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "mt-6",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ComplainKaro — Your voice, heard." },
      {
        name: "description",
        content:
          "File complaints to local, state, and national authorities. Emergency contacts, AI triage, and a community voice feed for India.",
      },
      { property: "og:title", content: "ComplainKaro — Your voice, heard." },
      {
        property: "og:description",
        content: "Civic complaints made simple, safe, and visible.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("head", {
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("body", {
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {}),
        ],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "mx-auto max-w-xl pb-24",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {}),
      ],
    }),
  });
}
const $$splitComponentImporter$4 = () => import("./quick-OBKHxUrH.mjs");
const Route$4 = createFileRoute("/quick")({
  head: () => ({
    meta: [
      {
        title: "Quick Complain — AI triage",
      },
      {
        name: "description",
        content:
          "Type once. AI decides if your complaint is local, state or national and routes it to the right authority.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
const $$splitComponentImporter$3 = () => import("./emergency-jkPwYwcE.mjs");
const Route$3 = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      {
        title: "Emergency Helplines — ComplainKaro",
      },
      {
        name: "description",
        content:
          "All India emergency helpline numbers: police, ambulance, fire, women, child and disaster help — one tap to call.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
const $$splitComponentImporter$2 = () => import("./complain-BYfiXYoB.mjs");
const Route$2 = createFileRoute("/complain")({
  head: () => ({
    meta: [
      {
        title: "File a Complaint — ComplainKaro",
      },
      {
        name: "description",
        content:
          "File a complaint at local, state or country level. Attach photos and videos as evidence.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
const $$splitComponentImporter$1 = () => import("./community-CDV_EhPS.mjs");
const Route$1 = createFileRoute("/community")({
  head: () => ({
    meta: [
      {
        title: "Voice Feed — ComplainKaro",
      },
      {
        name: "description",
        content:
          "A community feed of complaints and how local leaders are responding. Like, comment, and amplify.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
const $$splitComponentImporter = () => import("./index-BNareJda.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ComplainKaro — File complaints fearlessly",
      },
      {
        name: "description",
        content:
          "India's civic voice app. Emergency contacts, AI-triaged complaints, and a community feed where leaders respond.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
const QuickRoute = Route$4.update({
  id: "/quick",
  path: "/quick",
  getParentRoute: () => Route$5,
});
const EmergencyRoute = Route$3.update({
  id: "/emergency",
  path: "/emergency",
  getParentRoute: () => Route$5,
});
const ComplainRoute = Route$2.update({
  id: "/complain",
  path: "/complain",
  getParentRoute: () => Route$5,
});
const CommunityRoute = Route$1.update({
  id: "/community",
  path: "/community",
  getParentRoute: () => Route$5,
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5,
});
const rootRouteChildren = {
  IndexRoute,
  CommunityRoute,
  ComplainRoute,
  EmergencyRoute,
  QuickRoute,
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
  return router;
};
export { getRouter };
