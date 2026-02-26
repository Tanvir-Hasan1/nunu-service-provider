"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VerifyCodePage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6">
      <div className="w-full max-w-[480px] bg-white rounded-[32px] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-50">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Verify Code
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium leading-relaxed">
            We Sent OTP code to your email <br />
            <span className="text-slate-600 font-bold">
              Superflyservice@gmail.com
            </span>{" "}
            Enter the code below to verify
          </p>
        </div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          {/* OTP Inputs */}
          <div className="flex justify-center gap-4">
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputRefs.current[i] = el)}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl text-center text-2xl font-black text-slate-800 focus:outline-none focus:ring-4 focus:ring-[#1e2a5e]/5 focus:border-[#1e2a5e] transition-all"
              />
            ))}
          </div>

          {/* Next Button */}
          <div className="space-y-6">
            <Link href="/auth/reset-password" title="Next" className="block">
              <button
                type="button"
                className="w-full bg-[#1e2a5e] hover:bg-[#1a2552] text-white py-4 rounded-2xl text-base font-bold shadow-xl shadow-[#1e2a5e]/20 transition-all active:scale-[0.98]"
              >
                Next
              </button>
            </Link>

            <div className="text-center space-y-4">
              <p className="text-xs font-bold text-slate-400">
                Don't receive OTP?{" "}
                <button
                  type="button"
                  className="text-[#e16b4f] hover:text-[#d15b3f] transition-colors"
                >
                  Resend again
                </button>
              </p>

              <Link
                href="/auth/login"
                className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors pt-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
