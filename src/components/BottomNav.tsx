import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Siren, FileText, Sparkles, Users } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/emergency", label: "SOS", icon: Siren },
  { to: "/quick", label: "Quick", icon: Sparkles },
  { to: "/complain", label: "File", icon: FileText },
  { to: "/community", label: "Voice", icon: Users },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-lg">
      <ul className="mx-auto flex max-w-xl items-stretch justify-between px-2 py-1.5">
        {items.map((it) => {
          const active = pathname === it.to;
          const Icon = it.icon;
          return (
            <li key={it.to} className="flex-1">
              <Link
                to={it.to}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl transition-all ${
                    active ? "bg-primary/15 text-primary scale-110" : ""
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
                </span>
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
