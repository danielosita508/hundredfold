"use client";

import React, { useState } from "react";
import { CheckCircleIcon } from "@/components/ui/Icons";

export default function NewsletterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsLoading(true);
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Title matching Heirs Holdings minimal newsletter layout */}
      <h2 className="font-poppins text-2xl sm:text-3xl lg:text-[2rem] font-normal tracking-[0.06em] text-[#374151] uppercase mb-8 sm:mb-10 text-center">
        Subscribe to Our Newsletter
      </h2>

      {isSubmitted ? (
        <div className="w-full max-w-2xl p-8 bg-white border border-[#DEF2F4] rounded-sm shadow-xs flex flex-col items-center gap-3 text-center">
          <div className="w-10 h-10 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center">
            <CheckCircleIcon className="w-6 h-6" />
          </div>
          <h3 className="font-poppins text-lg font-semibold text-[#00190A]">
            Thank You for Subscribing
          </h3>
          <p className="text-sm text-gray-600 max-w-md">
            Thank you, <span className="font-medium text-[#00190A]">{fullName}</span>. Your email (<span className="font-medium text-[#00190A]">{email}</span>) has been registered to receive Hundredfold corporate intelligence dispatches and inaugural publications.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFullName("");
              setEmail("");
            }}
            className="text-xs uppercase tracking-wider text-[#2D6C00] font-bold hover:underline mt-2 cursor-pointer"
          >
            Register Another Email
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row gap-0 sm:items-stretch shadow-xs"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="flex-1 px-4 py-3.5 bg-white border border-gray-300 text-sm text-[#0C1E20] placeholder-gray-400 focus:outline-none focus:border-[#0A2F1B] rounded-none sm:border-r-0"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3.5 bg-white border border-gray-300 text-sm text-[#0C1E20] placeholder-gray-400 focus:outline-none focus:border-[#0A2F1B] rounded-none sm:border-r-0"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3.5 bg-[#0A2F1B] hover:bg-[#00190A] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer shrink-0 disabled:opacity-70 flex items-center justify-center min-w-[140px]"
            >
              {isLoading ? "Subscribing..." : "SUBSCRIBE"}
            </button>
          </form>

          {/* Legal / Data Collection Clause Disclaimer */}
          <p className="text-xs text-gray-500 max-w-2xl mx-auto mt-4 text-center leading-relaxed font-light">
            By clicking Subscribe, I agree that Hundredfold may use my contact details to send me communications and I consent to the Terms as provided in the Privacy Policy and Data Collection Clause.
          </p>
        </div>
      )}
    </div>
  );
}
