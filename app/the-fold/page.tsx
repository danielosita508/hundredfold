"use client";

import React from "react";
import Image from "next/image";
import siteConfig from "@/lib/site-config";
import FoldInquiryForm from "@/components/the-fold/FoldInquiryForm";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  ClockIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function TheFoldPage() {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <div className="relative overflow-hidden bg-[#061D10] text-[#E9FDFF] min-h-screen">
      {/* ─── AMBIENT VIP RADIAL GLOWS ─── */}
      <div className="absolute -top-40 right-1/4 w-[680px] h-[680px] bg-[#ABF67E]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[480px] -left-32 w-[580px] h-[580px] bg-[#2D6C00]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[520px] h-[520px] bg-[#ABF67E]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── SECTION 1: PRESTIGE HERO (Transcorp Style Sharp Panoramic Backdrop) ─── */}
      <section
        id="overview"
        className="relative w-full min-h-[75vh] lg:min-h-[82vh] flex flex-col justify-between pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-black"
      >
        {/* Full-Bleed Photographic Backdrop (Zero Blur / Zero Filter) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/the_fold_executive_lounge.jpg"
            alt="The Fold Executive Conclave at Hundredfold Headquarters"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Crisp Directional Gradient Overlay (Dark text backdrop on left, 100% bright & sharp on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent z-10 pointer-events-none" />

        {/* Hero Title Container Layered on Top (z-20, positioned comfortably down from navbar) */}
        <div className="w-full max-w-[1360px] mx-auto px-6 lg:px-12 relative z-20 pt-28 sm:pt-36 lg:pt-44 xl:pt-48 flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: PRO_MAX_EASE }}
            className="font-poppins text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] max-w-[550px] text-white drop-shadow-md text-left"
          >
            Welcome to The Fold
          </motion.h1>

          {/* Hundredfold Brand Green Accent Divider */}
          <div className="my-6 h-[2px] w-[220px] bg-[#9BE564]" />

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: PRO_MAX_EASE }}
            className="font-poppins text-[13px] md:text-[14px] font-normal leading-[1.65] max-w-[480px] text-white/90 drop-shadow-sm text-left"
          >
            The private membership and collaborative syndicate network of Hundredfold Innovation Network Ltd, uniting vetted enterprise leaders and capital allocators across African commercial frontiers.
          </motion.p>
        </div>
      </section>

      {/* ─── SECTION 2: 85% / 15% PROFIT DISTRIBUTION & HIGHLIGHT CALLOUTS ─── */}
      <section className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10">

        {/* Prominent Profit Distribution Banner */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A2F1B] via-white/5 to-[#0A2F1B] border border-[#ABF67E]/30 shadow-2xl mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/20 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
                <TrendingUpIcon className="w-4 h-4 text-[#ABF67E]" />
                <span>COMMERCIAL DISTRIBUTION STRUCTURE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold tracking-tight">
                The 85% / 15% Profit Distribution Model
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                In line with our corporate mandate and governance constitution, commercial returns generated from approved trading activities, asset performance, and syndicates are allocated under a transparent, performance-verified framework:
              </p>

              <div className="flex flex-col gap-2.5 pt-2 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                  <span><strong className="text-[#ABF67E]">85% Direct Member Allocation:</strong> Distributed directly to participating cohort members based on audited operational yields and board resolutions.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                  <span><strong className="text-[#ABF67E]">15% Network Reserve Stewardship:</strong> Retained by the company for operational management, statutory audit, risk buffering, and infrastructure reinvestment.</span>
                </div>
              </div>
            </div>

            {/* Split Visual Indicator */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-bold text-white/70">Surplus Distribution Split</span>
                <span className="text-xs font-mono text-[#ABF67E]">MEMART Compliant</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-white">Cohort Members</span>
                    <span className="text-[#ABF67E] font-serif text-2xl font-bold">85%</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#ABF67E] h-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-white/80">Management &amp; Reserve</span>
                    <span className="text-white/80 font-serif text-2xl font-bold">15%</span>
                  </div>
                  <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-white/40 h-full w-[15%]" />
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed italic">
                * Distributions follow Board approvals and verified operational audits. No fixed or guaranteed returns are offered, upholding regulatory compliance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* VIP Callout 3 Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            variants={cardScrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/20 text-[#ABF67E] flex items-center justify-center">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#ABF67E] bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  STRICT CAP
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">100 Members</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Per Cohort Matrix
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Strict numerical ceiling preserving high-trust relations, confidentiality, and active peer-level engagement without mass dilution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Governance</span>
              <span className="text-[#ABF67E] font-bold">High-Conviction Cohort</span>
            </div>
          </motion.div>

          <motion.div
            variants={cardScrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/20 text-[#ABF67E] flex items-center justify-center">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#ABF67E] bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  CYCLE 1
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Cycle 1</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Active Executive Cohort
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Applications and onboarding intake review currently open. Founding cohort members participate in the inaugural Strategic Executive Retreat.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Onboarding Window</span>
              <span className="text-[#ABF67E] font-bold">Open for Enquiry</span>
            </div>
          </motion.div>

          <motion.div
            variants={cardScrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-10 h-10 rounded-xl bg-[#ABF67E]/20 text-[#ABF67E] flex items-center justify-center">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#ABF67E] bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  MANDATE
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">Hundredfold Vision</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Shared Economic Power
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Pooled network capacity unlocking high-utility commercial ventures across agro-trading, asset ownership, and scalable enterprise.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Focus Sectors</span>
              <span className="text-[#ABF67E] font-bold">Agriculture &bull; Real Assets</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 3: THREE CORE PILLARS OF THE FOLD ─── */}
      <section className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#ABF67E] font-bold">
              COMMUNITY ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
              Three Sovereign Pillars of The Fold
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-md">
            Structured to anchor capital into tangible assets, ethical commerce, and compounding inter-generational growth.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerGridVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Pillar 1 */}
          <motion.div
            variants={cardScrollVariants}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>PILLAR // 01</span>
                <BuildingIcon className="w-5 h-5 text-[#ABF67E]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Collective Strength &amp; Networking
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Uniting forward-thinking entrepreneurs, professionals, and investors into an organized commercial network capable of undertaking ventures beyond single-party scope.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#ABF67E] flex items-center gap-1.5 font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Network Scale &amp; Syndication</span>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            variants={cardScrollVariants}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>PILLAR // 02</span>
                <ShieldCheckIcon className="w-5 h-5 text-[#ABF67E]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Due Diligence &amp; Economic Literacy
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Continuous education in commercial due diligence, asset valuation, risk analysis, and financial literacy. We navigate African macroeconomic realities with disciplined acumen.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#ABF67E] flex items-center gap-1.5 font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Continuous Commercial Literacy</span>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            variants={cardScrollVariants}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>PILLAR // 03</span>
                <TrendingUpIcon className="w-5 h-5 text-[#ABF67E]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Exclusive Corporate Access
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                Priority visibility into company updates, approved trading activities, and collaborative commercial initiatives across our four business pillars.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#ABF67E] flex items-center gap-1.5 font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              <span>Priority Enterprise Access</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SECTION 4: CANDIDATE REGISTRY INTAKE FORM ─── */}
      <section id="join" className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span>CANDIDATE REGISTRY &bull; CYCLE 1</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight">
              Lodge Your Candidate Dossier.
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Admission into The Fold is conducted through a multi-stage review. To initiate confidential review and obtain the Cohort Alpha Prospectus, submit your credentials.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Complete Non-Disclosure &amp; Institutional Governance Compliance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Strict 100-member cohort ceiling maintained at all times</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Executive Secretariat review within 5 business days</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/70">
              <span className="font-bold text-white block mb-1">Direct Board Voucher?</span>
              <span>If you hold a referral from an executive board member, please enter your referral identifier in the form.</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <FoldInquiryForm />
          </div>

        </div>
      </section>
    </div>
  );
}
