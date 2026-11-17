"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import siteConfig from "@/lib/site-config";
import ProposalForm from "@/components/forms/ProposalForm";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  BuildingIcon,
  SproutIcon,
  HandshakeIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

function PartnershipsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const shouldReduceMotion = useReducedMotion();

  const heroFadeVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : custom * 0.08,
        ease: PRO_MAX_EASE,
      },
    }),
  };

  const staggerGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardScrollVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: PRO_MAX_EASE,
      },
    },
  };

  const routes = [
    {
      num: "Route 01",
      icon: SproutIcon,
      tag: "Supply Chains",
      title: "Agriculture & Commodity Trade",
      description:
        "Suppliers, aggregators, and off-takers in agriculture, logistics, and commodity trading connecting production corridors with commercial demand.",
      badge: "Agro-Trading",
    },
    {
      num: "Route 02",
      icon: BuildingIcon,
      tag: "Productive Capital",
      title: "Asset & Real Estate Opportunities",
      description:
        "Landowners, asset managers, and commercial developers with prime productive asset opportunities seeking structured institutional co-ownership.",
      badge: "Tangible Yield",
    },
    {
      num: "Route 03",
      icon: HandshakeIcon,
      tag: "Capital Stewardship",
      title: "Finance & Structured Investment",
      description:
        "Institutional co-investors, asset managers, and commercial enterprises seeking structured investment facilities, private credit, and disciplined capital allocation.",
      badge: "Finance & Capital",
    },
    {
      num: "Route 04",
      icon: TrendingUpIcon,
      tag: "Digital Infrastructure",
      title: "Technology & Enterprise Systems",
      description:
        "Tech founders, digital infrastructure operators, and enterprise software teams seeking commercial distribution, strategic capital, and market scale.",
      badge: "Technology Scale",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">
      {/* ─── SECTION 1: HERO & TRUST CAPSULE (Heirs Holdings Style with Photographic Backdrop) ─── */}
      <section className="relative w-full overflow-hidden min-h-[440px] lg:min-h-[500px] pt-32 lg:pt-36 pb-16 lg:pb-20 flex flex-col justify-end bg-[#0A2F1B]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/strategic_partnerships.jpg"
            alt="Hundredfold Strategic Commercial Partnerships"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Cinematic Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/75 z-[1]" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div className="max-w-3xl flex flex-col gap-5">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={heroFadeVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#ABF67E] border border-white/20 self-start"
              >
                <span className="w-2 h-2 rounded-full bg-[#ABF67E] animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider font-bold">
                  COMMERCIAL COLLABORATION &bull; STRATEGIC ALLIANCES
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={heroFadeVariants}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight font-semibold leading-[1.08] drop-shadow-md"
              >
                Good Partnerships Begin <br />
                <span className="text-[#ABF67E]">With Shared Opportunity.</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={heroFadeVariants}
                className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl drop-shadow-xs"
              >
                We believe strong commercial relationships are built on aligned objectives, complementary strengths and mutual accountability. Hundredfold welcomes proposals from businesses, entrepreneurs, suppliers and organisations with opportunities that fit our strategic direction.
              </motion.p>
            </div>

            {/* Metric / Trust Capsule in Frosted Glass */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={heroFadeVariants}
              className="lg:shrink-0 w-full sm:w-auto p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl flex flex-row lg:flex-col gap-6 items-stretch"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">
                  Sovereign Focus
                </span>
                <span className="font-serif text-2xl font-bold text-white mt-1">
                  4 Core Pillars
                </span>
                <span className="text-xs text-[#ABF67E] font-semibold mt-0.5">
                  Agro, Land, Alliances &amp; Ventures
                </span>
              </div>

              <div className="w-px h-auto lg:w-full lg:h-px bg-white/20" />

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/70 font-bold">
                  Engagement SLA
                </span>
                <span className="font-serif text-2xl font-bold text-[#ABF67E] mt-1">
                  5-Day Review
                </span>
                <span className="text-xs text-white/80 mt-0.5">
                  Executive Committee Evaluation
                </span>
              </div>
            </motion.div>
          </div>

          {/* Photographic Interstitial Mosaic */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-14 items-center"
          >
            <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-xl border border-white relative h-64 sm:h-72 lg:h-80 group">
              <img
                src="/images/agri_business_showcase.jpg"
                alt="Agricultural Commercial Operations and Supply Chain Integration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/85 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="flex flex-col text-white">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#ABF67E]">
                    Real-Economy Integration
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-semibold mt-1">
                    Connecting primary agricultural hubs with structured commercial off-takers.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-xl border border-white relative h-64 sm:h-72 lg:h-80 group">
              <img
                src="/images/strategic_partnerships.jpg"
                alt="Hundredfold Institutional Alliances & Commercial Partnerships"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2F1B]/90 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="flex flex-col text-white">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#ABF67E]">
                    Bilateral Agreements
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-semibold mt-1">
                    Structured commercial alliances &amp; joint ventures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: 4 STRUCTURED PARTNERSHIP PATHWAYS ─── */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#2D6C00] font-bold">
              ENGAGEMENT CHANNELS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] tracking-tight font-semibold">
              Structured Partnership Pathways
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#424842] max-w-md">
            Collaborative models designed to align strengths, allocate risk equitably, and build compounding value across our four focus areas.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerGridVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {routes.map((route) => {
            const IconComp = route.icon;
            return (
              <motion.div
                key={route.num}
                variants={cardScrollVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.25 } }}
                className="group relative rounded-3xl p-8 lg:p-10 bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4] text-[#00190A]">
                      {route.num}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#2D6C00] block mb-1">
                    {route.tag}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[#00190A] mb-3">
                    {route.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                    {route.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#def2f4] mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2D6C00] uppercase tracking-wider flex items-center gap-1.5">
                    <span>Structured Channel</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#DEF2F4] text-[#00190A] font-semibold">
                    {route.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── SECTION 3: 10-FIELD B2B PROPOSAL SUBMISSION FORM ─── */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
          className="relative w-full rounded-3xl bg-white/85 backdrop-blur-2xl border border-white shadow-[0_24px_64px_-12px_rgba(10,47,27,0.08)] p-8 md:p-14 lg:p-16 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ABF67E]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col">

            {/* Form Header */}
            <div className="flex flex-col items-center text-center pb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DEF2F4] mb-3">
                <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
                <span className="text-xs uppercase tracking-wider text-[#00190A] font-bold">
                  COMMERCIAL PROPOSAL INTAKE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#00190A] tracking-tight font-semibold mb-3">
                Submit a Commercial Proposal
              </h2>

              <p className="text-sm sm:text-base text-[#424842] max-w-2xl leading-relaxed">
                Connect with our commercial development team. All submissions receive executive evaluation under strict professional confidentiality.
              </p>
            </div>

            {/* The 10-Field Form Component with Frosted Glass Styling */}
            <ProposalForm defaultCategory={categoryParam} />

            {/* Fiduciary Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#def2f4]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/30 flex items-center justify-center text-[#2D6C00] shrink-0">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#00190A]">Strict Confidentiality</span>
                  <span className="text-[11px] text-[#424842]">Standard NDA Coverage</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/30 flex items-center justify-center text-[#2D6C00] shrink-0">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#00190A]">5-Day Review SLA</span>
                  <span className="text-[11px] text-[#424842]">Executive Desk Response</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/30 flex items-center justify-center text-[#2D6C00] shrink-0">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#00190A]">Institutional Standards</span>
                  <span className="text-[11px] text-[#424842]">Statutory &amp; Ethical Compliance</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default function PartnershipsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#E9FDFF] flex items-center justify-center text-sm font-semibold text-[#00190A]">Loading proposal portal...</div>}>
      <PartnershipsContent />
    </Suspense>
  );
}
