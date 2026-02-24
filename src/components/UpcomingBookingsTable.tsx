"use client";

import React from "react";
import { cn } from "@/lib/utils";

const bookings = [
  {
    customer: "Sarah Jenkins",
    date: "Oct 24, 2023",
    time: "19:00",
    guests: 4,
    status: "Confirmed",
  },
  {
    customer: "David Miller",
    date: "Oct 24, 2023",
    time: "20:30",
    guests: 2,
    status: "Confirmed",
  },
  {
    customer: "Michael Ross",
    date: "Oct 25, 2023",
    time: "18:15",
    guests: 6,
    status: "Pending",
  },
  {
    customer: "Elena Gilbert",
    date: "Oct 25, 2023",
    time: "21:00",
    guests: 3,
    status: "Confirmed",
  },
  {
    customer: "Robert Vance",
    date: "Oct 26, 2023",
    time: "12:30",
    guests: 2,
    status: "Confirmed",
  },
];

export function UpcomingBookingsTable() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 h-full overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold text-slate-800">Upcoming Bookings</h3>
        <button className="text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-50">
              <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Customer
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Date
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Time
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Guests
              </th>
              <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {bookings.map((booking, idx) => (
              <tr
                key={idx}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-4 text-sm font-bold text-slate-800">
                  {booking.customer}
                </td>
                <td className="py-4 text-sm text-slate-500">{booking.date}</td>
                <td className="py-4 text-sm text-slate-500">{booking.time}</td>
                <td className="py-4 text-sm text-slate-500">
                  {booking.guests}
                </td>
                <td className="py-4">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-lg px-3 py-1 text-xs font-bold",
                      booking.status === "Confirmed"
                        ? "bg-sky-50 text-sky-500"
                        : "bg-amber-50 text-amber-500",
                    )}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
