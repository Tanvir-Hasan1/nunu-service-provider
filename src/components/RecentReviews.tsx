"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "David Martinez",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    rating: 5,
    text: "Exceptional service and amazing food. Will definitely come back!",
  },
  {
    name: "Lisa Anderson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    rating: 4,
    text: "Great atmosphere and friendly staff. The food was delicious.",
  },
  {
    name: "James Taylor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    rating: 5,
    text: "Perfect for special occasions. Highly recommend!",
  },
];

export function RecentReviews() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 h-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-sm font-bold text-slate-800">Recent Reviews</h3>
        <button className="text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-slate-50/50">
            <div className="flex items-center mb-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-8 w-8 rounded-full mr-3"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-800">
                  {review.name}
                </h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              {review.text}
            </p>
            <button className="text-[10px] font-bold text-sky-500 hover:underline">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
