"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  UsersIcon,
  GovernanceIcon,
} from "@/components/ui/Icons";

const PRO_MAX_EASE = [0.16, 1, 0.3, 1] as const;

export default function FactsBand() {
  const shouldReduceMotion = useReducedMotion();

  const facts = [
    {
      icon: GovernanceIcon,
      valueNode: (
        <span className="font-poppins font-bold text-3xl sm:text-4xl text-[#00190A] flex items-baseline">
          <AnimatedNumber value={100} duration={1.6} />
          <span className="text-[#2D6C00] ml-0.5">%</span>
        </span>
      ),
      label: "Committee & Board Oversight",
      description: "Dual-tier approval required on every single investment deployed.",
    },
    {
      icon: ShieldCheckIcon,
      valueNode: (
        <span className="font-poppins font-bold text-3xl sm:text-4xl text-[#00190A] tracking-tight">
          CAC <span className="text-sm font-semibold text-[#2D6C00]">Registered</span>
        </span>
      ),
      label: "Statutory Incorporation",
      description: "Corporate Affairs Commission statutory registry compliance.",
    },
    {
      icon: CheckCircleIcon,
      valueNode: (
        <span className="font-poppins font-bold text-3xl sm:text-4xl text-[#00190A] tracking-tight">
          SCUML <span className="text-sm font-semibold text-[#2D6C00]">Certified</span>
        </span>
      ),
      label: "Anti-Money Laundering Rigour",
      description: "EFCC Special Control Unit regulatory framework adherence.",
    },
    {
      icon: UsersIcon,
      valueNode: (
        <span className="font-poppins font-bold text-3xl sm:text-4xl text-[#00190A] flex items-baseline">
          <AnimatedNumber value={100} duration={1.8} />
          <span className="text-sm font-semibold text-[#2D6C00] ml-1">Cap</span>
        </span>
      ),
      label: "The Fold Membership",
      description: "Strict sovereign cohort capacity ensuring close syndicate synergy.",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#F6FEFE] border-b border-[#DEF2F4]/80">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: PRO_MAX_EASE,
              }}
            >
              <SpotlightCard className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#DEF2F4] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col h-full justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#DEF2F4] text-[#2D6C00] flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#2D6C00] uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className="mb-1.5">{item.valueNode}</div>
                    <h3 className="font-poppins text-sm font-semibold text-[#00190A] tracking-tight">
                      {item.label}
                    </h3>
                    <p className="text-xs text-[#525E54] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
