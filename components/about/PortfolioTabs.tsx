"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SproutIcon,
  BuildingIcon,
  HandshakeIcon,
  UsersIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/Icons";

export interface TabItem {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  summary: string;
  bullets: string[];
  image: string;
  caption: string;
  ctaText: string;
  ctaHref: string;
  isContactTab?: boolean;
}

const TABS: TabItem[] = [
  {
    id: "highlights",
    label: "HIGHLIGHTS",
    eyebrow: "PORTFOLIO HIGHLIGHTS",
    headline: "We invest in sectors that drive enduring, real-economy growth across Africa.",
    summary:
      "Hundredfold Innovation Network Ltd anchors capital in generative, tangible commercial opportunities across agricultural value chains, productive assets, and scalable pan-African ventures.",
    bullets: [
      "Rigorous institutional underwriting and governance discipline",
      "Focus on cash-generating, sovereign economic utility",
      "Collaborative syndicate models for shared prosperity",
    ],
    image: "/images/hero_corporate_asaba.jpg",
    caption: "Hundredfold Executive Platform • Pan-African Nexus",
    ctaText: "Discover Our Strategy",
    ctaHref: "#philosophy",
  },
  {
    id: "agro-trading",
    label: "AGRICULTURE",
    eyebrow: "COMMODITY VALUE CHAINS",
    headline: "Participating in high-demand agricultural commodity trade routes.",
    summary:
      "Deploying structured supply-chain coordination, direct producer sourcing, and institutional off-taker integration to capture steady commercial margins in food staples and cash crops.",
    bullets: [
      "Direct aggregation links across prime agrarian basins",
      "Strict moisture, grading, and quality compliance protocols",
      "Commercially disciplined contracts with verified processors",
    ],
    image: "/images/agri_business_showcase.jpg",
    caption: "Agriculture Corridor • Sourcing & Aggregation",
    ctaText: "View Agriculture Scope",
    ctaHref: "/business#agro-trading",
  },
  {
    id: "asset-acquisition",
    label: "REAL ESTATE",
    eyebrow: "PRODUCTIVE CAPITAL & REAL ASSETS",
    headline: "Acquiring tangible land, logistics nodes, and commercial assets.",
    summary:
      "Focusing on durable, unencumbered real property and productive enterprise infrastructure that preserve purchasing power and generate multi-generational balance sheet resilience.",
    bullets: [
      "Rigorous title diligence and statutory land verification",
      "High-utility locations tied to trade corridors and ports",
      "Inflation-resilient long-term balance sheet compounding",
    ],
    image: "/images/commercial_real_estate.jpg",
    caption: "Real Estate • Productive Commercial Infrastructure",
    ctaText: "Explore Real Estate Strategy",
    ctaHref: "/business#asset-acquisition",
  },
  {
    id: "finance",
    label: "FINANCE",
    eyebrow: "CAPITAL STEWARDSHIP & STRATEGIC INVESTMENT",
    headline: "Deploying disciplined capital across real-economy African opportunities.",
    summary:
      "Aligning patient capital, structured investments, and balance-sheet resilience to support sustainable commercial expansion and generational wealth preservation.",
    bullets: [
      "Clear fiduciary alignment and defined governance terms",
      "Disciplined capital stewardship and risk-adjusted returns",
      "Transparent statutory reporting and ethical deployment",
    ],
    image: "/images/strategic_partnerships.jpg",
    caption: "Finance • Institutional Capital Stewardship",
    ctaText: "Explore Finance Scope",
    ctaHref: "/business#finance",
  },
  {
    id: "technology",
    label: "TECHNOLOGY",
    eyebrow: "DIGITAL INFRASTRUCTURE & INNOVATION",
    headline: "Backing scalable digital infrastructure and high-utility technology.",
    summary:
      "Empowering African enterprise, connectivity, and commerce through investments in high-utility software, fintech infrastructure, and technology systems.",
    bullets: [
      "Modern digital tools driving operational efficiency",
      "Fintech infrastructure and enterprise software scaling",
      "Robust data governance, privacy, and scalable architectures",
    ],
    image: "/images/african_business_ventures.jpg",
    caption: "Technology • Digital Infrastructure & Enterprise Systems",
    ctaText: "Explore Technology Scope",
    ctaHref: "/business#technology",
  },
  {
    id: "the-fold",
    label: "THE FOLD",
    eyebrow: "PRIVATE BUSINESS ECOSYSTEM",
    headline: "A curated network of visionary founders, aggregators, and investors.",
    summary:
      "The Fold connects vetted African entrepreneurs and capital allocators through closed-door knowledge sharing, joint commercial deals, and mutual trade opportunities.",
    bullets: [
      "Peer-level access to high-conviction deal pipelines",
      "Quarterly executive roundtables and mastermind sessions",
      "Cross-border commercial liaisons across key trade zones",
    ],
    image: "/images/the_fold_executive_lounge.jpg",
    caption: "The Fold • Private Executive Network Lounge",
    ctaText: "Explore The Fold",
    ctaHref: "/the-fold",
  },
  {
    id: "governance",
    label: "GOVERNANCE",
    eyebrow: "FIDUCIARY ARCHITECTURE",
    headline: "Institutional integrity, independent oversight, and statutory rigour.",
    summary:
      "Guided by strict adherence to regulatory standards, anti-money laundering frameworks, and ethical corporate stewardship designed for inter-generational longevity.",
    bullets: [
      "Duly incorporated and statutory AML-certified framework",
      "Independent board governance and audit committees",
      "Zero-tolerance stance on corruption and compliance breaches",
    ],
    image: "/images/insights_the_fold_governance.jpg",
    caption: "Corporate Governance • Institutional Standards",
    ctaText: "View Leadership Team",
    ctaHref: "#leadership",
  },
  {
    id: "contact",
    label: "EXECUTIVE CONTACT",
    eyebrow: "DIRECT SECRETARIAT",
    headline: "Direct, confidential channels to our executive leadership desk.",
    summary:
      "Our secretariat welcomes inquiries from prospective partners, institutional co-investors, and qualified enterprise operators seeking commercial collaboration.",
    bullets: [
      "Guaranteed priority response protocol: ≤ 24 working hours",
      "Direct telephony, WhatsApp executive desk, and email",
      "Plot 14, Commercial Boulevard, GRA Phase 2, Nigeria",
    ],
    image: "/images/african_business_ventures.jpg",
    caption: "Executive Headquarters & Secretariat Access",
    ctaText: "Open Contact Form",
    ctaHref: "#contact",
    isContactTab: true,
  },
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<string>("highlights");

  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section className="w-full bg-white border-y border-[#c1c8c0]/30 py-8 lg:py-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* ─── Tab Sub-Navigation Bar (Exact Heirs Holdings Aesthetic) ─── */}
        <div className="border-b border-[#0A2F1B]/15 overflow-x-auto no-scrollbar scroll-smooth">
          <nav
            className="flex items-center gap-2 sm:gap-4 md:gap-8 min-w-max pb-0"
            aria-label="Portfolio & Focus Areas"
          >
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-4 px-3 sm:px-4 text-xs sm:text-[13px] uppercase font-bold tracking-wider transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#00190A]"
                      : "text-[#424842]/75 hover:text-[#00190A]"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="portfolioActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#2D6C00]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* ─── Tab Content Display ─── */}
        <div className="pt-10 lg:pt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              
              {/* Left Column: Text, Highlights & Action */}
              <div className="lg:col-span-7 flex flex-col items-start gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-[11px] uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6C00]" />
                  <span>{currentTab.eyebrow}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-medium leading-[1.15]">
                  {currentTab.headline}
                </h3>

                <p className="text-base sm:text-lg text-[#424842] leading-relaxed max-w-2xl">
                  {currentTab.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-3 pt-2 w-full max-w-2xl">
                  {currentTab.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#0c1e20]"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-[#2D6C00] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Link */}
                <div className="pt-4">
                  <Link
                    href={currentTab.ctaHref}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0A2F1B] hover:bg-[#00190A] text-white text-sm font-semibold tracking-wide transition-all shadow-md group"
                  >
                    <span>{currentTab.ctaText}</span>
                    <ArrowRightIcon className="w-4 h-4 text-[#ABF67E] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Impact Visual Showcase */}
              <div className="lg:col-span-5 w-full">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-[0_12px_40px_-8px_rgba(10,47,27,0.12)] border border-white/60 group">
                  <Image
                    src={currentTab.image}
                    alt={currentTab.headline}
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Subtle Caption Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-between text-xs">
                    <span className="font-medium text-white/95 truncate">
                      {currentTab.caption}
                    </span>
                    <span className="text-[#ABF67E] font-bold shrink-0 ml-2">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

