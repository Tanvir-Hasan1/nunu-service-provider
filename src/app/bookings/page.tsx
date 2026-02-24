"use client";

import React from "react";
import { BookingsHeader } from "@/components/BookingsHeader";
import { BookingsTable } from "@/components/BookingsTable";
import { Pagination } from "@/components/Pagination";

export default function BookingsPage() {
  return (
    <div className="min-h-screen p-10">
      <div className="max-w-[1400px] mx-auto">
        <BookingsHeader />
        <BookingsTable />
        <Pagination />
      </div>
    </div>
  );
}
