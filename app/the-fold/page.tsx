"use client";

import React from "react";
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

  return (
    <div className="relative overflow-hidden bg-[#061D10] text-[#E9FDFF] min-h-screen">
      {/* ─── AMBIENT VIP RADIAL GLOWS ─── */}
      <div className="absolute -top-40 right-1/4 w-[680px] h-[680px] bg-[#ABF67E]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[480px] -left-32 w-[580px] h-[580px] bg-[#2D6C00]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[520px] h-[520px] bg-[#ABF67E]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── SECTION 1: PRESTIGE HERO & BANNER ─── */}
      <section className="relative max-w-[1320px] mx-auto px-6 lg:px-12 pt-14 pb-20 z-10">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Prestige Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={heroFadeVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#ABF67E] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-[#ABF67E] font-bold">
              THE COMMUNITY &bull; PRIVATE EXECUTIVE COHORT
            </span>
            <span className="text-xs text-white/50 font-mono">/ NO. 001-INV</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={heroFadeVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mt-6 tracking-tight leading-[1.08]"
          >
            Welcome to The Fold. <br />
            <span className="text-[#ABF67E] italic font-normal">
              Curated Enterprise &amp; Capital Sovereign.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={heroFadeVariants}
            className="text-base sm:text-lg text-white/80 mt-6 max-w-2xl leading-relaxed"
          >
            The Fold is the private membership and community arm of Hundredfold Innovation Network Ltd. It convenes forward-thinking individuals, business leaders, and investors who share a common commitment to disciplined growth, ethical commerce, and collective economic advancement.
          </motion.p>

          {/* Access Ribbon & Protocol Badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={heroFadeVariants}
            className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10 w-full text-xs text-white/80"
          >
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheckIcon className="w-4 h-4 text-[#ABF67E]" />
              <span>By Board Invitation &amp; Vetting</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <UsersIcon className="w-4 h-4 text-[#ABF67E]" />
              <span>Strict 100 Members per Cohort Limit</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <ClockIcon className="w-4 h-4 text-[#ABF67E]" />
              <span>Cycle 1 Flag-Off: January 2027</span>
            </div>
          </motion.div>
        </div>

        {/* ─── VIP MOSAIC & CONCLAVE SLAB ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: PRO_MAX_EASE }}
            className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl min-h-[380px] lg:min-h-[460px] border border-white/10"
          >
            <img
              src="/images/the_fold_executive_lounge.jpg"
              alt="The Fold Executive Conclave at Hundredfold Asaba Headquarters"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061D10] via-[#061D10]/50 to-transparent flex flex-col justify-end p-8 lg:p-12" />
            <div className="relative z-10 flex flex-col justify-end p-8 lg:p-12 text-white">
              <span className="text-[11px] uppercase tracking-wider text-[#ABF67E] font-mono font-bold mb-2">
                EXECUTIVE CONCLAVE &bull; ASABA HQ
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold max-w-xl leading-snug">
                &ldquo;We assemble not for speculation, but to orchestrate sovereign balance sheets across Africa&apos;s real-economy assets.&rdquo;
              </h2>
              <div className="flex items-center gap-4 mt-4 text-xs text-white/60 font-mono">
                <span>H.I.N COUNCIL DIRECTIVE // 2026–2035</span>
              </div>
            </div>
          </motion.div>

          {/* Right Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1, ease: PRO_MAX_EASE }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="flex-1 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[#ABF67E]">
                  <span className="text-[10px] uppercase font-bold tracking-wider">
                    Cohort Model
                  </span>
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div className="my-6">
                  <div className="font-serif text-5xl font-bold text-white">
                    100<span className="text-[#ABF67E] text-3xl font-sans font-normal ml-1">Cap</span>
                  </div>
                  <p className="text-xs text-white/70 mt-2 leading-relaxed">
                    Strict numerical cap preserving elite governance, high-trust syndicates, and direct executive access across continental corridors.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                <span>Cohort Alpha</span>
                <span className="text-[#ABF67E] font-bold">Jan 2027 Flag-off</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0A2F1B] to-[#123E25] border border-white/15 text-white flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#ABF67E] font-bold block">
                  Admissions Status
                </span>
                <span className="font-serif text-lg font-bold text-white">
                  Reviewing Inquiries
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-[#ABF67E] border border-[#ABF67E]/30">
                Window Active
              </div>
            </div>
          </motion.div>
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
              <h3 className="font-serif text-3xl font-bold text-white">January 2027</h3>
              <span className="text-xs uppercase font-bold text-[#ABF67E] tracking-wider block mt-1">
                Inaugural Flag-Off
              </span>
              <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed">
                Applications and onboarding intake review currently open. Founding cohort members participate in the inaugural Asaba Strategic Retreat.
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
      <section className="relative max-w-[1320px] mx-auto px-6 lg:px-12 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span>CANDIDATE REGISTRY &bull; CYCLE 1</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight">
              Lodge Your Candidate Dossier.
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Admission into The Fold is conducted through a multi-stage review. To initiate confidential review and obtain the 2027 Cohort Alpha Prospectus, submit your credentials.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#ABF67E] shrink-0" />
                <span>Complete Non-Disclosure &amp; SCUML Protocol Compliance</span>
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
