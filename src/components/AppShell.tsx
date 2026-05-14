import { Outlet } from "@tanstack/react-router";
import { BottomNav } from "./BottomNav";

export function AppShell() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-xl pb-24">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
