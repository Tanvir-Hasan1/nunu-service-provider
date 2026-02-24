"use client";

import React from "react";
import { Check, Eye, X } from "lucide-react";
import { cn } from "@/lib/utils";

const bookings = [
  {
    id: "#BK-1029",
    customer: {
      name: "Eleanor Shellstrop",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    },
    date: "Feb 26, 2026",
    time: "19:30 PM",
    guests: 4,
    service: "Dinner Table",
    status: "Confirmed",
    payment: "Unpaid",
  },
  {
    id: "#BK-1030",
    customer: {
      name: "Julian Casablancas",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    },
    date: "Feb 14, 2026",
    time: "20:00 PM",
    guests: 2,
    service: "Spa Session",
    status: "Pending",
    payment: "Unpaid",
  },
  {
    id: "#BK-1031",
    customer: {
      name: "Michael Scott",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    },
    date: "Feb 20, 2026",
    time: "18:15 PM",
    guests: 8,
    service: "Dinner Table",
    status: "Confirmed",
    payment: "Unpaid",
  },
  {
    id: "#BK-1032",
    customer: {
      name: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    },
    date: "Feb 25, 2026",
    time: "12:30 PM",
    guests: 1,
    service: "Lunch Table",
    status: "Cancelled",
    payment: "Unpaid",
  },
  {
    id: "#BK-1032",
    customer: {
      name: "Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    },
    date: "Feb 25, 2026",
    time: "12:30 PM",
    guests: 1,
    service: "Lunch Table",
    status: "Complete",
    payment: "Paid",
  },
];

export function BookingsTable() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 mb-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Booking ID
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Customer Name
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400 text-center md:text-left">
                Date & Time
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400 text-center">
                Guests
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Service
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400 text-center">
                Status
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Payment
              </th>
              <th className="pb-6 text-xs font-semibold uppercase tracking-wider text-slate-400 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {bookings.map((booking, idx) => (
              <tr
                key={idx}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-5 font-bold text-sky-500 text-sm whitespace-nowrap">
                  {booking.id}
                </td>
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.customer.avatar}
                      alt={booking.customer.name}
                      className="h-10 w-10 rounded-full border-2 border-slate-100"
                    />
                    <span className="font-bold text-slate-700 text-sm">
                      {booking.customer.name}
                    </span>
                  </div>
                </td>
                <td className="py-5 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700 text-sm">
                      {booking.date}
                    </span>
                    <span className="text-xs text-slate-400">
                      {booking.time}
                    </span>
                  </div>
                </td>
                <td className="py-5 text-center font-bold text-slate-700 text-sm">
                  {booking.guests}
                </td>
                <td className="py-5 text-slate-500 text-sm">
                  {booking.service}
                </td>
                <td className="py-5">
                  <div className="flex justify-center">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                        booking.status === "Confirmed" &&
                          "bg-emerald-50 text-emerald-500",
                        booking.status === "Pending" &&
                          "bg-amber-50 text-amber-500",
                        booking.status === "Cancelled" &&
                          "bg-rose-50 text-rose-500",
                        booking.status === "Complete" &&
                          "bg-sky-500 text-white",
                      )}
                    >
                      {booking.status}
                    </span>
                  </div>
                </td>
                <td className="py-5">
                  <span
                    className={cn(
                      "text-sm font-bold",
                      booking.payment === "Paid"
                        ? "text-emerald-500"
                        : "text-slate-300",
                    )}
                  >
                    {booking.payment}
                  </span>
                </td>
                <td className="py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                      <Check className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-sky-500 hover:text-white transition-all">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-rose-500 hover:text-white transition-all">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
