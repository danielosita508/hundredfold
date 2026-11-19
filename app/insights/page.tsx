import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import InsightsHero from "@/components/insights/InsightsHero";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "News & Insights — Hundredfold Innovation Network Ltd",
  description:
    "Authoritative analysis on African commodity supply chains, disciplined asset acquisition, corporate governance, and commercial dispatches from Hundredfold Innovation Network Ltd.",
};

export default function InsightsPage() {
  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20] min-h-screen">
      {/* ─── SECTION 1: CLEAN SHORTER HERO HEADER ─── */}
      <InsightsHero />

      {/* ─── SECTION 2: MINIMAL POLISHED "COMING SOON" STATE ─── */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24 w-full flex flex-col items-center relative z-10">
        <div className="w-full max-w-3xl rounded-3xl p-8 sm:p-12 lg:p-16 bg-white/85 backdrop-blur-xl border border-white shadow-xl flex flex-col items-center text-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-xs">
            <ClockIcon className="w-7 h-7" />
          </div>

          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#2D6C00] font-bold">
              RESEARCH DESK &bull; INAUGURAL DISPATCHES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] font-semibold tracking-tight">
              Publications Coming Soon
            </h2>
            <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
              Our research desk is preparing inaugural macroeconomic briefings, sector memoranda, and transaction commentaries across African agriculture, real estate, financial markets, and technology infrastructure.
            </p>
          </div>

          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              placeholder="Enter corporate email for first release..."
              required
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-[#DEF2F4] text-sm text-[#00190A] placeholder-[#424842]/60 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#2D6C00]/30"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold tracking-wide shadow-md hover:bg-[#00190A] transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Notify Me</span>
              <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#424842] pt-4 border-t border-[#DEF2F4] w-full">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D6C00]" /> Strict Confidentiality
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-[#2D6C00]" /> Board-Approved Intelligence
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircleIcon className="w-3.5 h-3.5 text-[#2D6C00]" /> No Speculative Marketing
            </span>
          </div>
        </div>

        {/* Quiet links to core sections */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="/investments"
            className="text-xs uppercase font-bold tracking-wider text-[#2D6C00] hover:text-[#00190A] flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Our Investments</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[#DEF2F4]">&bull;</span>
          <Link
            href="/the-fold"
            className="text-xs uppercase font-bold tracking-wider text-[#2D6C00] hover:text-[#00190A] flex items-center gap-1.5 transition-colors"
          >
            <span>The Fold Private Network</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
