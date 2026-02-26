"use client";

import React from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  Globe,
  FileText,
  Upload,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center py-12 px-6">
      {/* Header */}
      <div className="w-full max-w-[800px] flex items-center justify-between mb-12">
        <div className="h-10 w-10 bg-[#1e2a5e] rounded-xl flex items-center justify-center">
          <div className="h-5 w-5 bg-white rounded-sm transform rotate-45" />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500">
            Already have an account?
          </span>
          <Link
            href="/auth/login"
            className="bg-[#1e2a5e] text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-[#1e2a5e]/20 hover:bg-[#1a2552] transition-all"
          >
            Log in
          </Link>
        </div>
      </div>

      <div className="w-full max-w-[800px] space-y-12">
        <div className="text-left">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">
            Register Your Business
          </h1>
          <p className="text-base text-slate-400 mt-2 font-medium">
            Join our platform and reach more customers with our enterprise
            tools.
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Basic Information */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-[#1e2a5e]">
                <User className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Basic Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Services"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Category
                </label>
                <div className="relative">
                  <select className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 appearance-none text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all cursor-pointer">
                    <option>Hotel</option>
                    <option>Restaurant</option>
                    <option>Spa</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="business@example.com"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Business Details */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-[#1e2a5e]">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Business Details
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="123 Business Way"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.yourbusiness.com"
                    className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Business Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your services..."
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Verification */}
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-[#1e2a5e]">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Verification</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                  Trade License Number
                </label>
                <input
                  type="text"
                  placeholder="TX-12345678"
                  className="w-full bg-[#fdf8f8] border border-slate-100 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e]/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                    Trade License Document
                  </label>
                  <div className="border-2 border-dashed border-slate-100 rounded-[28px] p-8 flex flex-col items-center justify-center gap-3 bg-slate-50/30 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#1e2a5e] shadow-sm transition-colors">
                      <Upload className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                      Upload PDF or JPG
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-800 uppercase tracking-widest block ml-1">
                    Owner/Manager ID
                  </label>
                  <div className="border-2 border-dashed border-slate-100 rounded-[28px] p-8 flex flex-col items-center justify-center gap-3 bg-slate-50/30 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-[#1e2a5e] shadow-sm transition-colors">
                      <Upload className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                      Upload Passport/ID
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-4">
            <label className="flex items-center gap-3 cursor-pointer group px-2">
              <input
                type="checkbox"
                className="h-5 w-5 rounded-lg border-2 border-slate-200 text-[#1e2a5e] focus:ring-[#1e2a5e] cursor-pointer"
              />
              <span className="text-sm font-bold text-slate-500">
                I agree to the{" "}
                <Link href="#" className="text-[#1e2a5e] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#1e2a5e] hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#1e2a5e] hover:bg-[#1a2552] text-white py-5 rounded-[24px] text-lg font-bold shadow-2xl shadow-[#1e2a5e]/30 transition-all active:scale-[0.98]"
            >
              Create Account
            </button>

            <div className="text-center">
              <p className="text-sm font-bold text-slate-400">
                Need help?{" "}
                <Link href="#" className="text-[#1e2a5e] hover:underline">
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
