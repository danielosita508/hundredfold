"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export interface SectorItem {
  id: string;
  name: string;
  categoryLabel: string;
  color: string;
  hoverColor: string;
  lightBg: string;
  textColor: string;
  accentColor: string;
  tagline: string;
  focusItems: string[];
  description: string;
  href: string;
}

export const SECTORS: SectorItem[] = [
  {
    id: "agro-trading",
    name: "AGRO-TRADING",
    categoryLabel: "Agriculture & Commodity Supply Chains",
    color: "#1E5208", // Forest Green
    hoverColor: "#2A6E0C",
    lightBg: "#F0FDF4",
    textColor: "#14532D",
    accentColor: "#ABF67E",
    tagline: "Sovereign Agrarian Corridors & Commodity Supply",
    focusItems: ["Commodity Trading"],
    description:
      "Sourcing staple agricultural commodities at scale across rural basins, connecting domestic production with industrial off-takers across Nigeria and West Africa.",
    href: "/investments#agriculture",
  },
  {
    id: "real-estate",
    name: "REAL ESTATE",
    categoryLabel: "Productive Assets & Real Estate",
    color: "#C25E00", // Warm Terracotta / Amber
    hoverColor: "#D97706",
    lightBg: "#FFFBEB",
    textColor: "#78350F",
    accentColor: "#FDE68A",
    tagline: "Tangible Sovereign Assets & Land Banking",
    focusItems: ["Commercial Land"],
    description:
      "Acquiring and developing prime commercial land, warehousing logistics, and physical assets that generate steady recurring income and hedge against currency volatility.",
    href: "/investments#real-estate",
  },
  {
    id: "finance",
    name: "FINANCE",
    categoryLabel: "Capital Stewardship & Co-Investment",
    color: "#0F2B48", // Deep Corporate Navy
    hoverColor: "#1E3A8A",
    lightBg: "#EFF6FF",
    textColor: "#1E3A8A",
    accentColor: "#93C5FD",
    tagline: "Disciplined Capital Stewardship & Syndicates",
    focusItems: ["Co-Investments"],
    description:
      "Deploying patient capital and structuring co-investment syndicates that provide structured liquidity and governance-first capital to proven commercial operators.",
    href: "/investments#finance",
  },
  {
    id: "technology",
    name: "TECHNOLOGY",
    categoryLabel: "Digital Infrastructure & Enterprise Systems",
    color: "#0284C7", // Cyan / Slate Blue
    hoverColor: "#0369A1",
    lightBg: "#F0F9FF",
    textColor: "#075985",
    accentColor: "#7DD3FC",
    tagline: "Digital Infrastructure & Commodity Digitization",
    focusItems: ["Digital Systems"],
    description:
      "Investing in foundational digital tools, enterprise software, and supply-chain digitization platforms that accelerate African trade velocity and operational transparency.",
    href: "/investments#technology",
  },
  {
    id: "the-fold",
    name: "THE FOLD",
    categoryLabel: "Community, Literacy & Collective Advancement",
    color: "#581C87", // Royal Purple
    hoverColor: "#6B21A8",
    lightBg: "#FAF5FF",
    textColor: "#581C87",
    accentColor: "#D8B4FE",
    tagline: "Governed Cohorts & Commercial Literacy",
    focusItems: ["Private Syndicate"],
    description:
      "Convening forward-thinking business leaders, entrepreneurs, and investors committed to commercial literacy, ethical commerce, and governed collective economic strength.",
    href: "/the-fold",
  },
  {
    id: "enterprise-dev",
    name: "ENTERPRISE",
    categoryLabel: "Strategic Ventures & Business Alliances",
    color: "#991B1B", // Rich Crimson
    hoverColor: "#B91C1C",
    lightBg: "#FEF2F2",
    textColor: "#991B1B",
    accentColor: "#FECACA",
    tagline: "Joint Ventures & Indigenous African Scaling",
    focusItems: ["Joint Ventures"],
    description:
      "Forming high-conviction joint ventures and institutional partnerships with indigenous African companies poised for continental expansion and operational leadership.",
    href: "/investments",
  },
];

export default function InvestmentPhilosophy() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSectorId, setActiveSectorId] = useState<string>("agro-trading");

  // SVG wheel geometry
  const cx = 270;
  const cy = 270;
  const rOuter = 248;
  const rMid = 196; // colored outer rim boundary
  const rInner = 92; // inner slice boundary
  const rCenter = 88; // center circle boundary

  const totalSlices = SECTORS.length;
  const sliceAngle = 360 / totalSlices;

  // Helper to create annular arc paths
  const getSlicePath = (index: number, r1: number, r2: number) => {
    // Start at -90deg (12 o'clock)
    const startAngle = -90 + index * sliceAngle;
    const endAngle = startAngle + sliceAngle;

    const rad1 = (startAngle * Math.PI) / 180;
    const rad2 = (endAngle * Math.PI) / 180;

    const x1 = cx + r2 * Math.cos(rad1);
    const y1 = cy + r2 * Math.sin(rad1);
    const x2 = cx + r2 * Math.cos(rad2);
    const y2 = cy + r2 * Math.sin(rad2);

    const x3 = cx + r1 * Math.cos(rad2);
    const y3 = cy + r1 * Math.sin(rad2);
    const x4 = cx + r1 * Math.cos(rad1);
    const y4 = cy + r1 * Math.sin(rad1);

    const largeArcFlag = sliceAngle > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${r2} ${r2} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${r1} ${r1} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  // Helper to compute center point of inner slice for text placing
  const getSliceCenterPoint = (index: number, radius: number) => {
    const midAngle = -90 + (index + 0.5) * sliceAngle;
    const rad = (midAngle * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
      angle: midAngle,
    };
  };

  return (
    <section
      id="philosophy"
      className="relative w-full py-16 sm:py-20 lg:py-28 px-6 lg:px-12 bg-white text-[#0C1E20] scroll-mt-20 overflow-hidden border-t border-[#c1c8c0]/25"
    >
      <div className="max-w-[1360px] mx-auto">
        
        {/* Header Label / Eyebrow (Matching Heirs Holdings Style) */}
        <div className="w-full text-center mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00]"
          >
            INVESTMENT PHILOSOPHY
          </motion.span>
        </div>

        {/* Two-Column Grid: Radial Portfolio Wheel (Left) & Philosophy Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ─── LEFT COLUMN: The Circular Sector Wheel Diagram ─── */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* SVG Interactive Wheel Container */}
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] aspect-square flex items-center justify-center">
              
              <svg
                viewBox="0 0 540 540"
                className="w-full h-full drop-shadow-xl select-none"
                style={{ touchAction: "manipulation" }}
              >
                <defs>
                  {/* Subtle inner slice shadow */}
                  <filter id="hubGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.12" />
                  </filter>
                  <filter id="africaGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#1E5208" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* Slices Rendering */}
                {SECTORS.map((sector, idx) => {
                  const isSelected = sector.id === activeSectorId;
                  const innerSlicePath = getSlicePath(idx, rInner, rMid);
                  const outerArcPath = getSlicePath(idx, rMid, rOuter);
                  const centerPt = getSliceCenterPoint(idx, 146);
                  const rimCenterPt = getSliceCenterPoint(idx, 222);

                  return (
                    <g
                      key={sector.id}
                      onClick={() => setActiveSectorId(sector.id)}
                      onMouseEnter={() => setActiveSectorId(sector.id)}
                      className="cursor-pointer transition-transform duration-300 group"
                      role="button"
                      tabIndex={0}
                      aria-label={`${sector.name} sector: ${sector.tagline}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveSectorId(sector.id);
                        }
                      }}
                    >
                      {/* Inner Slice (White / Off-White background with division details) */}
                      <path
                        d={innerSlicePath}
                        fill={isSelected ? sector.lightBg : "#FFFFFF"}
                        stroke="#E2E8F0"
                        strokeWidth="1.5"
                        className="transition-colors duration-300 group-hover:brightness-95"
                      />

                      {/* Outer Colored Rim Arc */}
                      <path
                        d={outerArcPath}
                        fill={isSelected ? sector.hoverColor : sector.color}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:brightness-110"
                      />

                      {/* Outer Sector Name Label */}
                      <text
                        x={rimCenterPt.x}
                        y={rimCenterPt.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        transform={`rotate(${rimCenterPt.angle > 0 && rimCenterPt.angle < 180 ? rimCenterPt.angle - 90 : rimCenterPt.angle + 90}, ${rimCenterPt.x}, ${rimCenterPt.y})`}
                        fill="#FFFFFF"
                        fontSize="10.5"
                        fontWeight="700"
                        letterSpacing="1.5"
                        className="pointer-events-none uppercase font-sans tracking-widest"
                      >
                        {sector.name}
                      </text>

                      {/* Inner Slice Content Label (Clean single writeup fitting neatly inside the circle) */}
                      <g
                        transform={`translate(${centerPt.x}, ${centerPt.y})`}
                        className="pointer-events-none"
                      >
                        <text
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill={isSelected ? sector.color : "#1E293B"}
                          fontSize="9.5"
                          fontWeight={isSelected ? "700" : "600"}
                          className="font-sans transition-colors duration-200"
                        >
                          {sector.focusItems[0]}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Thin Radial Separator Lines from Hub to Outer Edge */}
                {SECTORS.map((_, idx) => {
                  const angle = -90 + idx * sliceAngle;
                  const rad = (angle * Math.PI) / 180;
                  const x1 = cx + rInner * Math.cos(rad);
                  const y1 = cy + rInner * Math.sin(rad);
                  const x2 = cx + rOuter * Math.cos(rad);
                  const y2 = cy + rOuter * Math.sin(rad);

                  return (
                    <line
                      key={`sep-${idx}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      className="pointer-events-none"
                    />
                  );
                })}

                {/* ─── Center Hub Medallion: Globe + Pan-African Continent + HIN Identity ─── */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={rCenter}
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="2"
                  filter="url(#hubGlow)"
                  className="pointer-events-none"
                />

                {/* Center Outer Accent Ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={rCenter - 5}
                  fill="#F8FAFC"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  className="pointer-events-none"
                />

                {/* ─── Official Hundredfold Logo Centered Directly in the Middle of the Medallion ─── */}
                <image
                  href="/images/logo_v2.png"
                  x={cx - 38}
                  y={cy - 48}
                  width={76}
                  height={76}
                  preserveAspectRatio="xMidYMid meet"
                  className="pointer-events-none drop-shadow-md"
                />

                {/* Central Brand Wordmark Centered Below the Logo */}
                <text
                  x={cx}
                  y={cy + 38}
                  textAnchor="middle"
                  fill="#00190A"
                  fontSize="9.5"
                  fontWeight="800"
                  letterSpacing="1.4"
                  className="font-sans uppercase pointer-events-none font-bold"
                >
                  HUNDREDFOLD
                </text>
              </svg>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Hundredfold Investment Philosophy Narrative ─── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Core Brand Statement */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: PRO_MAX_EASE }}
              className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal"
            >
              At Hundredfold, we believe sustainable wealth is created by bridging the gap between African commercial opportunity and disciplined institutional execution. We evaluate ventures based on real market fundamentals, verified off-taker demand, and clear cash-flow pathways.
            </motion.p>

            {/* Value Creation Subheading */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: PRO_MAX_EASE }}
              className="mt-6 text-base sm:text-lg text-[#0F172A] font-medium"
            >
              Our three core tenets:
            </motion.p>

            {/* Three Value Creation Tenets (Staggered Cleanly on Viewport Entrance) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.12,
                    delayChildren: shouldReduceMotion ? 0 : 0.05,
                  },
                },
              }}
              className="mt-5 space-y-4 w-full"
            >
              {/* 1. Opportunity Evaluation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 18 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: PRO_MAX_EASE },
                  },
                }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#1E5208] mt-2.5 shrink-0" />
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  <strong className="text-[#0F172A] font-semibold">Opportunity Evaluation:</strong>{" "}
                  We evaluate opportunities based on fundamental market demand, clear cash-flow pathways, and operational viability across key sovereign sectors.
                </p>
              </motion.div>

              {/* 2. Disciplined Risk Assessment */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 18 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: PRO_MAX_EASE },
                  },
                }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#1E5208] mt-2.5 shrink-0" />
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  <strong className="text-[#0F172A] font-semibold">Disciplined Risk Assessment:</strong>{" "}
                  We reject speculative hype. Every venture undergoes rigorous stress-testing against market volatility, statutory standards, and real-world supply chain dynamics.
                </p>
              </motion.div>

              {/* 3. Long-Term Value Creation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 18 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: PRO_MAX_EASE },
                  },
                }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#1E5208] mt-2.5 shrink-0" />
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  <strong className="text-[#0F172A] font-semibold">Long-Term Value Creation:</strong>{" "}
                  We prioritize productive, cash-generating tangible assets and scalable commercial platforms engineered to compound enduring value across economic cycles.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Button matching brand green with lemon green underline */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.35, ease: PRO_MAX_EASE }}
              className="mt-8 sm:mt-10 pt-4"
            >
              <Link
                href="#sectors"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#2D6C00] hover:text-[#00190A] underline underline-offset-8 decoration-2 decoration-[#9BE564] hover:decoration-[#2D6C00] transition-all group"
              >
                <span>EXPLORE SECTORS</span>
                <ArrowRightIcon className="w-4 h-4 text-[#2D6C00] group-hover:text-[#00190A] group-hover:translate-x-1.5 transition-all duration-200" />
              </Link>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
