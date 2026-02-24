"use client";

import React from "react";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-24 items-center justify-between px-10 bg-white border-b border-slate-100">
      <h2 className="text-3xl font-bold text-slate-800">Business Overview</h2>

      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <Bell className="h-6 w-6 text-slate-400 hover:text-slate-600 transition-colors" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white"></span>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
            alt="User profile"
            className="h-12 w-12 rounded-full border-2 border-slate-200"
          />
        </div>
      </div>
    </header>
  );
}
