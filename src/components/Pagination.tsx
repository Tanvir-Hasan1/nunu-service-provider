"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pagination() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-3">
      <p className="text-sm text-slate-400 font-medium">
        Showing <span className="text-slate-700">1-10</span> of{" "}
        <span className="text-slate-700">256</span> bookings
      </p>

      <div className="flex items-center gap-2">
        <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1">
          <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-500/20">
            1
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-transparent text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all">
            2
          </button>
          <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-transparent text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all">
            3
          </button>
        </div>

        <button className="h-9 w-9 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
