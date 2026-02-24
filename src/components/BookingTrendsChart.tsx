"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 240 },
  { name: "Feb", value: 260 },
  { name: "Mar", value: 290 },
  { name: "Apr", value: 310 },
  { name: "May", value: 270 },
  { name: "Jun", value: 320 },
  { name: "Jul", value: 300 },
  { name: "Aug", value: 330 },
  { name: "Sep", value: 310 },
  { name: "Oct", value: 340 },
  { name: "Nov", value: 350 },
  { name: "Dec", value: 380 },
];

export function BookingTrendsChart() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 flex flex-col h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-8">Booking Trends</h3>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300]}
            />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            <Bar
              dataKey="value"
              fill="#1e2a5e"
              radius={[4, 4, 0, 0]}
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
