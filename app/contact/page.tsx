"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import siteConfig from "@/lib/site-config";
import ContactForm from "@/components/contact/ContactForm";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BuildingIcon,
  Building2Icon,
  CheckCircleIcon,
  WhatsAppIcon,
  HandshakeIcon,
  SproutIcon,
  WealthIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: PRO_MAX_EASE,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.1,
      },
    },
  };
  return (
    <div className="w-full bg-[#E9FDFF] min-h-screen text-[#0c1e20] selection:bg-[#ABF67E] selection:text-[#0A2F1B] relative overflow-hidden">
      {/* ─── Ambient Glow Orbs ─────────────────────────────────── */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#2D6C00]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-80 right-10 w-[500px] h-[500px] rounded-full bg-[#d2e6e8]/40 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-[#ABF67E]/10 blur-[130px] pointer-events-none -z-10" />

      <main className="w-full pt-10 sm:pt-14 pb-20">
        <div className="relative w-full max-w-[1320px] mx-auto px-6 lg:px-12">

          {/* ─── Section 1: Header & Executive Overview ─────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex flex-col items-start gap-4 max-w-4xl mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ABF67E]/40 text-[#205100]">
              <span className="w-2 h-2 rounded-full bg-[#2D6C00] animate-pulse" />
              <span className="font-sans text-xs uppercase tracking-wider font-bold">
                Headquarters &amp; Institutional Enquiries
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#00190A] tracking-tight font-medium leading-[1.1]">
              Direct Channels to Executive Governance
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#424842] max-w-2xl leading-relaxed">
              Engage directly with our institutional investment committees, sovereign partnership coordinators, and corporate governance secretariat across pan-African jurisdictions.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-[#424842] font-sans text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
                <span className="font-medium">CAC RC-1984201</span>
              </div>
              <span className="text-[#c1c8c0] font-light hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#2D6C00]" />
                <span className="font-medium">SCUML Statutory Certified</span>
              </div>
              <span className="text-[#c1c8c0] font-light hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-[#2D6C00]" />
                <span className="font-medium">Response Protocol: ≤ 24 Working Hours</span>
              </div>
            </div>
          </motion.div>

          {/* ─── Section 2: Headquarters & Regional Diplomatic Liaisons ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Main Headquarters Slab (Asaba) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="lg:col-span-7 bg-white/75 backdrop-blur-[16px] rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2F1B] text-[#ffffff] font-sans text-xs uppercase tracking-wider font-semibold">
                    <BuildingIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
                    Global Headquarters
                  </span>
                  <span className="font-sans text-xs text-[#2D6C00] font-bold uppercase tracking-wider">
                    Operational Nexus
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] mb-3">
                  Asaba Headquarters
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#424842] mb-6 leading-relaxed">
                  Plot 14, Commercial Boulevard, GRA Phase 2, Asaba, Delta State, Nigeria.
                </p>

                {/* Strategic Relevance Callout Card */}
                <div className="bg-[#def2f4]/70 rounded-xl p-5 mb-8 border border-[#c1c8c0]/30">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#2D6C00] font-bold block mb-1">
                    Strategic Significance
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#0c1e20] leading-relaxed">
                    Prime geostrategic positioning adjacent to the Niger River trade corridors, regional agrarian processing nodes, and the fast-growing Onitsha-Asaba industrial twin-basin.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-sans text-xs uppercase tracking-wider text-[#424842] font-bold">
                      Direct Telephony
                    </span>
                    <a
                      className="font-sans text-base text-[#00190A] font-semibold hover:text-[#2D6C00] transition-colors"
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="font-sans text-xs text-[#424842]">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="font-sans text-xs uppercase tracking-wider text-[#424842] font-bold">
                      Official Registries
                    </span>
                    <a
                      className="font-sans text-sm text-[#00190A] font-semibold hover:text-[#2D6C00] transition-colors break-all"
                      href={`mailto:${siteConfig.contact.corporateEmail}`}
                    >
                      {siteConfig.contact.corporateEmail}
                    </a>
                    <a
                      className="font-sans text-xs text-[#424842] hover:text-[#00190A] transition-colors break-all"
                      href={`mailto:${siteConfig.contact.partnershipsEmail}`}
                    >
                      {siteConfig.contact.partnershipsEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#c1c8c0]/30 bg-[#e9fdff]/60 -mx-8 -mb-8 lg:-mx-10 lg:-mb-10 p-6 lg:p-8 rounded-b-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building2Icon className="w-5 h-5 text-[#2D6C00]" />
                  <span className="font-sans text-xs sm:text-sm text-[#0c1e20] font-medium">
                    Stewardship Chamber &amp; Executive Council Chambers
                  </span>
                </div>
                <span className="font-sans text-xs text-[#2D6C00] font-bold uppercase tracking-wider">
                  Active
                </span>
              </div>
            </motion.div>

            {/* Regional Liaisons (Lagos & Abuja) & Map Anchor */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Lagos Liaison Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="bg-white/75 backdrop-blur-[16px] rounded-2xl p-7 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#2D6C00] font-bold">
                      Capital Markets Liaison
                    </span>
                    <h3 className="font-serif text-2xl text-[#00190A] mt-1 font-medium">
                      Lagos Corporate Office
                    </h3>
                  </div>
                  <span className="p-2.5 rounded-full bg-[#def2f4] text-[#00190A]">
                    <WealthIcon className="w-5 h-5 text-[#2D6C00]" />
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#424842] mb-4 leading-relaxed">
                  Ahmadu Bello Way, Victoria Island, Lagos State, Nigeria. Capital syndicate coordination and international banking interface.
                </p>
                <div className="flex flex-wrap items-center justify-between text-xs font-sans text-[#0c1e20] pt-2 border-t border-[#c1c8c0]/20">
                  <span className="font-medium">Direct: {siteConfig.contact.phone}</span>
                  <a
                    className="text-[#2D6C00] font-bold hover:underline"
                    href={`mailto:${siteConfig.contact.corporateEmail}`}
                  >
                    corporate@hundredfoldinnovation.com
                  </a>
                </div>
              </motion.div>

              {/* Abuja Liaison Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="bg-white/75 backdrop-blur-[16px] rounded-2xl p-7 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-[#2D6C00] font-bold">
                      Public Policy &amp; Intergovernmental
                    </span>
                    <h3 className="font-serif text-2xl text-[#00190A] mt-1 font-medium">
                      Abuja Policy Bureau
                    </h3>
                  </div>
                  <span className="p-2.5 rounded-full bg-[#def2f4] text-[#00190A]">
                    <ShieldCheckIcon className="w-5 h-5 text-[#2D6C00]" />
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#424842] mb-4 leading-relaxed">
                  Maitama Diplomatic Zone, Federal Capital Territory, Abuja, Nigeria. Sovereign alignment, regulatory harmonisation, and federal infrastructure advisory.
                </p>
                <div className="flex flex-wrap items-center justify-between text-xs font-sans text-[#0c1e20] pt-2 border-t border-[#c1c8c0]/20">
                  <span className="font-medium">Direct: {siteConfig.contact.phone}</span>
                  <a
                    className="text-[#2D6C00] font-bold hover:underline"
                    href={`mailto:${siteConfig.contact.corporateEmail}`}
                  >
                    corporate@hundredfoldinnovation.com
                  </a>
                </div>
              </motion.div>

              {/* Headquarters Location Map Visualizer */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 group h-44"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_Tr5cC9r1bpnGdMcZeHt4wFdkOL7pToGL6bn6voZC7qCcO9GqxFf72ImU1Vwt-Z4KNjGO-TckeuIL3KVd9SGDZNcapRJ9U3Pvfnxm8n6Q3NVjkB2K56d5Mm-foSSg1o4sKW6I9ddv694epk4QngFoHSAWe8vntniXYbhUmwCaZ5O6D3MgVjNK-feFzILv_QzrACSl9JLILCRafGpdETN6B4WEbpPT4KZlNV76Gwe5')",
                  }}
                />
                <div className="absolute inset-0 bg-[#0A2F1B]/25 group-hover:bg-[#0A2F1B]/15 transition-colors pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 bg-white/95 backdrop-blur-[12px] p-3 rounded-xl flex items-center justify-between border border-white/80 shadow-md">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-[#2D6C00]" />
                    <span className="font-sans text-xs font-bold text-[#00190A]">
                      Asaba H.I.N Master Facility
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#424842]">
                    6°11&apos;47&quot;N 6°43&apos;21&quot;E
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ─── Section 3: Statutory Registrations & Compliance Protocols (Trust Panel) ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="bg-white/80 backdrop-blur-[20px] rounded-2xl p-8 lg:p-12 mb-20 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#c1c8c0]/30">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-[#2D6C00] font-bold">
                  Institutional Accountability &amp; Integrity
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] mt-1 font-medium">
                  Statutory Registrations &amp; Compliance Protocols
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-lg bg-[#def2f4] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2D6C00]" />
                  <span className="font-sans text-xs font-bold text-[#00190A] uppercase tracking-wider">
                    Fully Verified Entity
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Item 1: CAC */}
              <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#e3f7f9]/50 hover:bg-[#def2f4] transition-colors border border-white/50">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-lg bg-white text-[#2D6C00] shadow-xs">
                    <ShieldCheckIcon className="w-5 h-5 text-[#2D6C00]" />
                  </span>
                  <span className="font-mono text-xs text-[#424842] font-semibold">
                    RC-1984201
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#00190A] font-semibold">
                  Corporate Affairs Commission
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Duly incorporated under the Companies and Allied Matters Act (CAMA) of the Federal Republic of Nigeria as Hundredfold Innovation Network Ltd.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[#2D6C00] font-sans text-xs font-bold">
                  <CheckCircleIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>Active • Good Standing</span>
                </div>
              </div>

              {/* Item 2: SCUML */}
              <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#e3f7f9]/50 hover:bg-[#def2f4] transition-colors border border-white/50">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-lg bg-white text-[#2D6C00] shadow-xs">
                    <CheckCircleIcon className="w-5 h-5 text-[#2D6C00]" />
                  </span>
                  <span className="font-mono text-xs text-[#424842] font-semibold">
                    SCUML Certified
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#00190A] font-semibold">
                  SCUML / EFCC Clearance
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Full statutory certification by the Special Control Unit Against Money Laundering under statutory oversight of the Economic and Financial Crimes Commission.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[#2D6C00] font-sans text-xs font-bold">
                  <CheckCircleIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>AML / CFT Compliant Tier-1</span>
                </div>
              </div>

              {/* Item 3: NDPR */}
              <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#e3f7f9]/50 hover:bg-[#def2f4] transition-colors border border-white/50">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-lg bg-white text-[#2D6C00] shadow-xs">
                    <ClockIcon className="w-5 h-5 text-[#2D6C00]" />
                  </span>
                  <span className="font-mono text-xs text-[#424842] font-semibold">
                    NDPR / NDPA 2023
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#00190A] font-semibold">
                  Data Sovereignty &amp; NDPR
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#424842] leading-relaxed">
                  Strict adherence to the Nigeria Data Protection Act (NDPA) and NDPR protocols. Zero commercial profiling, encrypted communications, and ring-fenced data vaulting.
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-[#2D6C00] font-sans text-xs font-bold">
                  <CheckCircleIcon className="w-4 h-4 text-[#2D6C00]" />
                  <span>Audited &amp; Ring-Fenced</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Section 4: Frosted Glass Corporate Engagement Form & Context ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
            {/* Form Explanatory Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#def2f4] text-[#00190A] w-fit font-sans text-xs uppercase tracking-wider font-bold">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
                <span>Encrypted Engagement Channel</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] tracking-tight font-medium">
                Initiate Institutional Dialogue
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#424842] leading-relaxed">
                Hundredfold Innovation Network Ltd engages with sovereign funds, institutional financiers, licensed co-operatives, commercial landholders, and prospective portfolio partners under formal review frameworks.
              </p>

              <div className="bg-white/70 backdrop-blur-[16px] rounded-2xl p-6 flex flex-col gap-5 border border-white/60 shadow-sm">
                <div className="flex items-start gap-3">
                  <HandshakeIcon className="w-5 h-5 text-[#2D6C00] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-serif text-lg text-[#00190A] font-semibold block">
                      Institutional Discretion
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#424842] mt-0.5 leading-relaxed">
                      All transmissions are routed to designated council secretariats under strict bilateral non-disclosure protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#c1c8c0]/20">
                  <ClockIcon className="w-5 h-5 text-[#2D6C00] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-serif text-lg text-[#00190A] font-semibold block">
                      Statutory Review Timeline
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#424842] mt-0.5 leading-relaxed">
                      Formal acquisition proposals, landholding dossiers, and capital briefs receive preliminary assessment within 24 to 48 business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Credibility Badge Card */}
              <div className="relative rounded-2xl overflow-hidden h-44 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1WN079hFecc5ngIx3sPrz9YuIAlQ4-QjWbvDShPUD8gGz2tbMpMBKGDU8SLpbkDS9ozbiFlSqS9xiKMeNMVWlKucBebxjXBj4g9yR0BQ2UUCyikKUVwrJnYehugRe5Zy7sRmz3JlQJZmQYq8UtYixkD6xxJiZ08bJXt0arQzcKnskDB8f8i7Q19k4_jyrIdwdIqOzpKs8_XKdFoZ3dLENlesKZfnB9IVXEgbXNrEK')",
                  }}
                />
                <div className="absolute inset-0 bg-[#00190A]/40 flex items-end p-5">
                  <span className="text-white font-sans text-xs sm:text-sm font-semibold tracking-wide">
                    Delta State • Federal Republic of Nigeria • Pan-African Capital Hub
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* ─── Section 5: Direct Department Desks Directory ────── */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-[#2D6C00] font-bold">
                  Specialised Operational Bureaus
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#00190A] tracking-tight mt-1 font-medium">
                  Direct Department Contacts
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#424842] max-w-md leading-relaxed">
                Circumvent general registries by routing sector-specific proposals directly to the lead investment directorate.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Desk 1: Agribusiness Desk */}
              <motion.div
                variants={fadeInVariants}
                className="bg-white/75 backdrop-blur-[16px] rounded-2xl p-8 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 hover:-translate-y-1 transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="p-3 rounded-xl bg-[#def2f4] text-[#2D6C00]">
                      <SproutIcon className="w-6 h-6 text-[#2D6C00]" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ABF67E]/40 text-[#205100] font-sans text-xs font-bold">
                      Sector Desk 01
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#00190A] font-semibold mb-2">
                    Agribusiness Desk
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#424842] mb-6 leading-relaxed">
                    Handles commercial outgrower syndicates, staple crop value chains, cold-chain storage infrastructure, and agricultural commerce partnerships across Delta State and the South-South corridor.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#def2f4] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#424842] font-sans text-xs sm:text-sm">
                    <MailIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                    <a
                      className="hover:text-[#00190A] font-medium transition-colors break-all"
                      href={`mailto:${siteConfig.contact.corporateEmail}`}
                    >
                      {siteConfig.contact.corporateEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#424842] font-sans text-xs sm:text-sm">
                    <PhoneIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                    <span className="font-mono">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </motion.div>

              {/* Desk 2: Real Estate Desk */}
              <motion.div
                variants={fadeInVariants}
                className="bg-white/75 backdrop-blur-[16px] rounded-2xl p-8 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 hover:-translate-y-1 transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="p-3 rounded-xl bg-[#def2f4] text-[#2D6C00]">
                      <BuildingIcon className="w-6 h-6 text-[#2D6C00]" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ABF67E]/40 text-[#205100] font-sans text-xs font-bold">
                      Sector Desk 02
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#00190A] font-semibold mb-2">
                    Real Estate Desk
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#424842] mb-6 leading-relaxed">
                    Manages productive land acquisitions, logistics corridors along the Asaba-Benin-Lagos artery, and verified real estate titling partnerships.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#def2f4] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#424842] font-sans text-xs sm:text-sm">
                    <MailIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                    <a
                      className="hover:text-[#00190A] font-medium transition-colors break-all"
                      href={`mailto:${siteConfig.contact.corporateEmail}`}
                    >
                      {siteConfig.contact.corporateEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#424842] font-sans text-xs sm:text-sm">
                    <PhoneIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                    <span className="font-mono">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </motion.div>

              {/* Desk 3: Investor Relations Desk */}
              <motion.div
                variants={fadeInVariants}
                className="bg-white/75 backdrop-blur-[16px] rounded-2xl p-8 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.06)] border border-white/60 hover:-translate-y-1 transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="p-3 rounded-xl bg-[#def2f4] text-[#2D6C00]">
                      <WealthIcon className="w-6 h-6 text-[#2D6C00]" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ABF67E]/40 text-[#205100] font-sans text-xs font-bold">
                      Sector Desk 03
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#00190A] font-semibold mb-2">
                    Investor Relations Desk
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#424842] mb-6 leading-relaxed">
                    Dedicated liaison for private family offices, institutional co-investors, Diaspora syndicates, and prospective cohort participants seeking disciplined capital deployment.
                  </p>
                </div>
                <div className="pt-6 border-t border-[#def2f4] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#424842] font-sans text-xs sm:text-sm">
                    <MailIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                    <a
                      className="hover:text-[#00190A] font-medium transition-colors break-all"
                      href={`mailto:${siteConfig.contact.partnershipsEmail}`}
                    >
                      {siteConfig.contact.partnershipsEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#424842] font-sans text-xs sm:text-sm">
                    <PhoneIcon className="w-4 h-4 text-[#2D6C00] shrink-0" />
                    <span className="font-mono">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
