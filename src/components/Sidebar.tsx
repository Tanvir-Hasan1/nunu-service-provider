"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarRange,
  UtensilsCrossed,
  Tag,
  BarChart3,
  UserCircle2,
  Star,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Booking management", icon: CalendarRange, href: "/bookings" },
  { name: "Menu / Services", icon: UtensilsCrossed, href: "/services" },
  { name: "Promotions", icon: Tag, href: "/promotions" },
  { name: "Analytics", icon: BarChart3, href: "/analytics" },
  { name: "Loyalty Program", icon: UserCircle2, href: "/loyalty" },
  { name: "Reviews", icon: Star, href: "/reviews" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex bg-[#1e2a5e] h-screen w-64 flex-col text-white">
      <div className="flex h-24 items-center px-8">
        <h1 className="text-3xl font-bold tracking-tight">Logo</h1>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#38bdf8] text-black"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 shrink-0",
                  isActive
                    ? "text-black"
                    : "text-slate-400 group-hover:text-white",
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-6 border-t border-white/10">
        <button className="flex w-full items-center rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
          <LogOut className="mr-3 h-5 w-5 shrink-0 text-slate-400" />
          Logout
        </button>
      </div>
    </div>
  );
}
