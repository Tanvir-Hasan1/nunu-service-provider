"use client";

import React from "react";
import { Header } from "@/components/Header";
import {
  Settings as SettingsIcon,
  MessageSquare,
  Bell,
  Shield,
  ChevronRight,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header title="Settings" />

      <main className="flex-1 flex items-center justify-center p-6 md:p-10 pb-32">
        <div className="w-full max-w-2xl bg-white rounded-[40px] p-12 shadow-sm border border-slate-100 space-y-12">
          <div className="text-center space-y-4">
            <div className="h-20 w-20 bg-sky-50 rounded-[32px] flex items-center justify-center text-sky-500 mx-auto">
              <SettingsIcon className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Settings
            </h1>
            <p className="text-sm font-bold text-slate-400">
              Manage your application preferences and account security.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-sky-200 hover:bg-white transition-all">
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sky-500 shadow-sm border border-slate-100 transition-colors">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">
                    Text Screen Settings
                  </h3>
                  <p className="text-xs font-bold text-slate-400">
                    Configure messaging and text display options.
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-600 transition-all group-hover:translate-x-1" />
            </div>

            <div className="p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-sky-200 hover:bg-white transition-all">
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sky-500 shadow-sm border border-slate-100 transition-colors">
                  <Bell className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">
                    Notification Preferences
                  </h3>
                  <p className="text-xs font-bold text-slate-400">
                    Control how you receive alerts and updates.
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-600 transition-all group-hover:translate-x-1" />
            </div>

            <div className="p-8 bg-slate-50/50 rounded-[32px] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-sky-200 hover:bg-white transition-all">
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-sky-500 shadow-sm border border-slate-100 transition-colors">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">
                    Privacy & Security
                  </h3>
                  <p className="text-xs font-bold text-slate-400">
                    Manage your data and account protection.
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-600 transition-all group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
