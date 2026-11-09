"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/lib/site-config";
import PortfolioTabs from "@/components/about/PortfolioTabs";
import ContactForm from "@/components/contact/ContactForm";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingIcon,
  TargetIcon,
  CrossIcon,
  UnityIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
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

  const coreValuesList = [
    {
      name: "Integrity",
      icon: ShieldCheckIcon,
      tag: "Value 01",
      description:
        "Total transparency, anti-corruption discipline, and unwavering adherence to statutory compliance.",
    },
    {
      name: "Purpose",
      icon: TargetIcon,
      tag: "Value 02",
      description:
        "Intentional commercial action—ensuring capital allocations serve genuine economic utility and real market demand.",
    },
    {
      name: "Christ-Driven",
      icon: CrossIcon,
      tag: "Value 03",
      description:
        "Governed by servant leadership, biblical stewardship principles, and ethical commercial diligence.",
    },
    {
      name: "Community",
      icon: UnityIcon,
      tag: "Value 04",
      description:
        "Shared prosperity—achieving greater economic outcomes through collaborative partnerships and indigenous enterprise.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#E9FDFF] text-[#0C1E20]">

      {/* ─── SECTION 1: EDITORIAL HERO BANNER (Heirs Holdings Style with Photographic Backdrop) ─── */}
      <section className="relative w-full overflow-hidden min-h-[440px] lg:min-h-[500px] pt-32 lg:pt-36 pb-16 lg:pb-20 flex flex-col justify-end bg-[#0A2F1B]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/african_business_ventures.jpg"
            alt="Hundredfold Pan-African Enterprise"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Dark Cinematic Vignette & Gradient Overlay (Heirs Holdings Style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/75 z-[1]" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight font-semibold leading-[1.08] drop-shadow-md"
            >
              Building Businesses. <br />
              Creating Lasting Value.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInVariants}
              className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed mt-2 drop-shadow-xs"
            >
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying high-impact commercial opportunities, building strategic relationships, and developing ventures with long-term potential.
            </motion.p>

            {/* Sovereign & Regulatory Badges */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6"
            >
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md shadow-xs border border-white/20 text-white">
                <BuildingIcon className="w-5 h-5 text-[#ABF67E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase font-bold tracking-wider">
                    Sovereign Focus
                  </span>
                  <span className="text-sm font-bold text-white">
                    Pan-African Base
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md shadow-xs border border-white/20 text-white">
                <ShieldCheckIcon className="w-5 h-5 text-[#ABF67E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase font-bold tracking-wider">
                    Statutory Rigour
                  </span>
                  <span className="text-sm font-bold text-white">
                    Institutional Governance
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md shadow-xs border border-white/20 text-white">
                <TargetIcon className="w-5 h-5 text-[#ABF67E]" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/70 uppercase font-bold tracking-wider">
                    Mandate Horizon
                  </span>
                  <span className="text-sm font-bold text-white">
                    Multi-Generational Value
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: THE INTERACTIVE PORTFOLIO & SECTOR TABS (Exact Heirs Holdings Feature) ─── */}
      <PortfolioTabs />

      {/* ─── SECTION 3: OPERATING THESIS (Africapitalism — Second Logo Color #ABF67E & Centralized) ─── */}
      <section id="philosophy" className="relative w-full px-6 lg:px-12 py-20 lg:py-24 bg-gradient-to-b from-[#ABF67E]/20 via-[#DEF2F4]/40 to-white/60 border-y border-[#ABF67E]/30 overflow-hidden">
        {/* Ambient glow matching second logo color */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#ABF67E]/20 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-[1360px] mx-auto">
          {/* Centralized Writeup */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: PRO_MAX_EASE }}
            className="max-w-3xl mx-auto text-center mb-14 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ABF67E] text-[#0A2F1B] text-xs uppercase font-extrabold tracking-wider shadow-xs mb-4">
              <span>OUR OPERATING THESIS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#00190A] tracking-tight">
              Sound Commercial Judgment. <br />
              Disciplined Growth.
            </h2>
            <p className="text-base sm:text-lg text-[#424842] mt-3 max-w-2xl leading-relaxed">
              We anchor our operational thesis in Africapitalism—the conviction that Africa&apos;s economic transformation is led by the private sector through disciplined, long-term capital allocation in productive sectors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={cardScrollVariants}
              className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#ABF67E] text-[#0A2F1B] w-fit inline-block">01</span>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">Opportunity Evaluation</h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  We evaluate opportunities on fundamental market demand, tangible economic utility, and verified cash-flow pathways—rejecting speculation.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardScrollVariants}
              className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#ABF67E] text-[#0A2F1B] w-fit inline-block">02</span>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">Risk Assessment</h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Every commercial initiative undergoes disciplined stress-testing against market volatility, regulatory boundaries, and real supply-chain conditions.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardScrollVariants}
              className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#ABF67E] text-[#0A2F1B] w-fit inline-block">03</span>
                <h3 className="font-serif text-xl font-bold text-[#00190A]">Long-Term Compounding</h3>
                <p className="text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Prioritizing productive, cash-generating assets designed to compound value over multi-year horizons and build sovereign balance-sheet strength.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: CORE VALUES (2x2 Glass Bento Grid) ─── */}
      <section className="w-full px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 mb-3 shadow-xs">
                <span className="text-xs uppercase tracking-wider font-bold text-[#2D6C00]">
                  OUR CORE VALUES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-semibold">
                Principles Guiding Commercial Action
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424842] max-w-md">
              Our foundational values ensure ethical alignment, resilience under macroeconomic shifts, and responsible stewardship for all stakeholders.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {coreValuesList.map((val) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.name}
                  variants={cardScrollVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.25 } }}
                  className="p-8 lg:p-10 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#ABF67E]/30 text-[#2D6C00] flex items-center justify-center shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] uppercase tracking-widest text-[#424842] font-mono font-bold px-3 py-1 rounded-full bg-[#DEF2F4]">
                        {val.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#00190A] tracking-tight">
                      {val.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#def2f4] mt-6 flex items-center gap-2 text-xs font-semibold text-[#2D6C00]">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Hundredfold Foundational Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: BOARD OF DIRECTORS & EXECUTIVE LEADERSHIP ─── */}
      <section id="leadership" className="w-full px-6 lg:px-12 py-16 lg:py-24 bg-white/40">
        <div className="max-w-[1360px] mx-auto flex flex-col gap-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/30 mb-3 shadow-xs">
                <span className="text-xs uppercase tracking-wider font-bold text-[#2D6C00]">
                  GOVERNANCE &amp; STEWARDSHIP
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-semibold">
                Governed for Longevity
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424842] max-w-lg leading-relaxed">
              Hundredfold Innovation Network Ltd is guided by executive leadership committed to institutional standards of corporate governance, transparency, and accountability.
            </p>
          </div>

          {/* 5 Leadership Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerGridVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {siteConfig.team.map((member) => {
              const initials = member.name
                .split(" ")
                .filter(Boolean)
                .map((n) => n[0])
                .join("")
                .slice(0, 2);

              return (
                <motion.div
                  key={member.name}
                  variants={cardScrollVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -5, transition: { duration: 0.25 } }}
                  className="flex flex-col rounded-3xl bg-white/85 backdrop-blur-xl border border-white shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] hover:shadow-[0_16px_40px_-6px_rgba(45,108,0,0.12)] overflow-hidden transition-all duration-300"
                >
                  {/* Portrait Slab with Monogram Emblem */}
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#0A2F1B] via-[#00190A] to-[#123E25] flex flex-col items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#ABF67E_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-[#ABF67E]/40 flex items-center justify-center text-white font-serif text-2xl font-bold tracking-wider shadow-inner">
                      {initials}
                    </div>

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#ABF67E] text-[10px] uppercase font-bold tracking-wider">
                      Executive Leadership
                    </div>
                  </div>

                  {/* Bio Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow gap-4">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ABF67E]/30 text-[#2D6C00] text-[10px] uppercase tracking-wider font-bold mb-2">
                        {member.role}
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#00190A]">
                        {member.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#424842] mt-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#def2f4] flex items-center justify-between text-xs text-[#2D6C00] font-medium">
                      <span className="flex items-center gap-1">
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                        Executive Board
                      </span>
                      <span className="text-[#424842] font-mono text-[11px]">Strategic Hub</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ─── SECTION 6: INTEGRATED CONTACT US & HEADQUARTERS SECRETARIAT ─── */}
      <section
        id="contact"
        className="w-full px-6 lg:px-12 py-20 lg:py-28 bg-[#def2f4]/60 border-t border-[#c1c8c0]/40 scroll-mt-24"
      >
        <div className="max-w-[1360px] mx-auto">

          {/* Section Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ABF67E]/40 text-[#205100]">
              <span className="w-2 h-2 rounded-full bg-[#2D6C00] animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-wider font-bold">
                HEADQUARTERS &amp; EXECUTIVE ENQUIRIES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00190A] tracking-tight font-medium leading-[1.1]">
              Direct Channels to Executive Governance
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#424842] max-w-2xl leading-relaxed">
              Engage directly with our institutional investment committees, sovereign partnership coordinators, and corporate secretariat.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-[#424842] font-sans text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
                <span className="font-medium">Direct Institutional Channels</span>
              </div>
              <span className="text-[#c1c8c0] font-light hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#2D6C00]" />
                <span className="font-medium">Response Protocol: ≤ 24 Working Hours</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Left = Official Secretariat Info, Right = Interactive Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Headquarters Information Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2F1B] text-white font-sans text-xs uppercase tracking-wider font-semibold">
                      <BuildingIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                      Corporate Base
                    </span>
                    <span className="font-sans text-xs text-[#2D6C00] font-bold uppercase tracking-wider">
                      Operational Nexus
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#00190A] font-semibold mb-2">
                    Global Headquarters
                  </h3>
                  <p className="text-sm sm:text-base text-[#424842] leading-relaxed">
                    Plot 14, Commercial Boulevard, GRA Phase 2, Nigeria.
                  </p>
                </div>

                {/* Direct Communications */}
                <div className="pt-4 border-t border-[#def2f4] space-y-4 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#424842]">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-base font-semibold text-[#00190A] hover:text-[#2D6C00] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="text-xs text-[#424842]">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#424842]">
                      Corporate Secretariat
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.corporateEmail}`}
                      className="text-sm font-semibold text-[#00190A] hover:text-[#2D6C00] transition-colors"
                    >
                      {siteConfig.contact.corporateEmail}
                    </a>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#424842]">
                      Partnerships Desk
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.partnershipsEmail}`}
                      className="text-sm font-semibold text-[#00190A] hover:text-[#2D6C00] transition-colors"
                    >
                      {siteConfig.contact.partnershipsEmail}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Action Desk */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/2349027077073?text=${encodeURIComponent(
                      "Hello Hundredfold Executive Secretariat, I am reaching out to discuss commercial partnerships."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0A2F1B] hover:bg-[#003017] text-white font-semibold text-sm shadow-md transition-all min-h-[48px]"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#ABF67E]" />
                    <span>WhatsApp Executive Desk</span>
                  </a>
                </div>
              </div>

              {/* Verified Accreditations Pill */}
              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-md border border-white flex items-center justify-between text-xs text-[#00190A]">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>Incorporated Statutory Entity</span>
                </div>
                <span className="text-[#2D6C00] font-bold">Good Standing</span>
              </div>

            </div>

            {/* Right: Embedded Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION 7: INSTITUTIONAL COMMITMENT & CTA BANNER ─── */}
      <section className="w-full px-6 lg:px-12 pt-8 pb-20">
        <div className="max-w-[1360px] mx-auto p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-[#0A2F1B] via-[#00190A] to-[#0A2F1B] text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/15">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ABF67E] text-xs uppercase font-bold tracking-wider">
              <span>OUR COMMITMENT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
              Building Enduring Value with Africa&apos;s Brightest Minds.
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Whether you are an agricultural aggregator, an institutional investor, or an enterprise founder, we invite you to explore disciplined commercial growth with Hundredfold.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#ABF67E] text-[#00190A] text-sm font-bold shadow-lg hover:bg-[#8ee459] transition-all group"
            >
              <span>Partner With Us</span>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/the-fold"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>Explore The Fold</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
