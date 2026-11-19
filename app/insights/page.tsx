import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import InsightsHero from "@/components/insights/InsightsHero";
import NewsletterForm from "@/components/insights/NewsletterForm";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "News & Insights — Hundredfold Innovation Network Ltd",
  description:
    "Authoritative analysis on African commodity supply chains, disciplined asset acquisition, corporate governance, and commercial dispatches from Hundredfold Innovation Network Ltd.",
};

export default function InsightsPage() {
  return (
    <div className="relative overflow-hidden bg-white text-[#0C1E20] min-h-screen">
      {/* ─── SECTION 1: CLEAN TRANSCORP-STYLE HERO HEADER ─── */}
      <InsightsHero />

      {/* ─── SECTION 2: CLEAN MINIMAL NEWSLETTER SUBSCRIPTION (Matching Heirs Holdings Style) ─── */}
      <section className="w-full bg-white py-20 sm:py-28 px-6 lg:px-12 border-t border-gray-100">
        <NewsletterForm />

        {/* Quiet Corporate Exploration Links */}
        <div className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="/investments"
            className="text-xs uppercase font-bold tracking-wider text-[#2D6C00] hover:text-[#00190A] flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Our Investments</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
          <span className="text-gray-300">&bull;</span>
          <Link
            href="/the-fold"
            className="text-xs uppercase font-bold tracking-wider text-[#2D6C00] hover:text-[#00190A] flex items-center gap-1.5 transition-colors"
          >
            <span>The Fold Private Network</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
