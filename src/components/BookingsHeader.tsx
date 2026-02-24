"use client";

import React from "react";
import { Search, ChevronDown, Calendar } from "lucide-react";

export function BookingsHeader() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Bookings</h2>
          <p className="text-sm text-slate-400">
            Manage and monitor all your table reservations in real-time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative group w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by name or ID"
              className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>

          {/* Status Filter */}
          <div className="relative group min-w-[180px]">
            <select className="appearance-none w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all cursor-pointer">
              <option>Status: Upcoming</option>
              <option>Status: Confirmed</option>
              <option>Status: Pending</option>
              <option>Status: Cancelled</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Date Picker */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">Feb 24 - Mar 30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
