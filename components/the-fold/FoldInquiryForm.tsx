"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { submitFoldInquiry, FormActionResponse } from "@/app/actions/submitForms";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  WhatsAppIcon,
  SpinnerIcon,
} from "@/components/ui/Icons";

const initialState: FormActionResponse = {
  success: false,
  message: "",
};

export default function FoldInquiryForm() {
  const [state, formAction, isPending] = useActionState(
    submitFoldInquiry,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl space-y-6 text-center text-white animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#ABF67E]/20 border-2 border-[#ABF67E] flex items-center justify-center mx-auto text-[#ABF67E] shadow-sm">
          <CheckCircleIcon className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Dossier Received by Secretariat
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {state.message}
          </p>
        </div>

        {state.referenceId && (
          <div className="inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/20 font-mono text-xs text-[#ABF67E]">
            Candidate Registration ID:{" "}
            <span className="font-bold text-white">{state.referenceId}</span>
          </div>
        )}

        <p className="text-xs text-white/60 max-w-md mx-auto">
          The formal Cycle 1 Prospectus and executive interview schedule will be communicated to your work email.
        </p>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold transition-colors min-h-[44px] cursor-pointer"
          >
            Submit Another Dossier
          </button>

          <a
            href={`https://wa.me/2349027077073?text=${encodeURIComponent(
              `Hello The Fold Secretariat, I have submitted my candidate expression of interest for Cycle 1 (Ref: ${state.referenceId || "Direct"}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ABF67E] text-[#00190A] hover:bg-[#8ee459] font-bold transition-colors min-h-[44px] shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#00190A]" />
            <span>Connect with Secretariat on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="p-8 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl space-y-6 text-white"
    >
      <div className="space-y-2 border-b border-white/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
          <ShieldCheckIcon className="w-4 h-4 text-[#ABF67E]" />
          <span>Strict Executive Confidentiality &bull; Admissions Registry</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Request Cohort Dossier &amp; Vetting Criteria
        </h3>
        <p className="text-white/70 text-xs sm:text-sm">
          Please submit your profile. Admittance is strictly merit-based and governed by cohort availability (strict 100 seats).
        </p>
      </div>

      {/* General Form Error Alert */}
      {state.message && !state.success && (
        <div className="p-4 rounded-xl bg-red-950/60 backdrop-blur-md border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5">
          <span className="text-red-400 font-bold">&bull;</span>
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fold-fullName"
            className="block text-xs font-bold uppercase tracking-wider text-white"
          >
            Principal / Delegate Full Name <span className="text-[#ABF67E]">*</span>
          </label>
          <input
            type="text"
            id="fold-fullName"
            name="fullName"
            required
            placeholder="e.g. Dr. Daniel Evans"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#ABF67E]/40 focus:border-[#ABF67E] transition-all"
          />
          {state.errors?.fullName && (
            <p className="text-red-400 text-xs">{state.errors.fullName[0]}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="fold-email"
            className="block text-xs font-bold uppercase tracking-wider text-white"
          >
            Confidential Work Email <span className="text-[#ABF67E]">*</span>
          </label>
          <input
            type="email"
            id="fold-email"
            name="email"
            required
            placeholder="principal@enterprise.com"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#ABF67E]/40 focus:border-[#ABF67E] transition-all"
          />
          {state.errors?.email && (
            <p className="text-red-400 text-xs">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="fold-phone"
            className="block text-xs font-bold uppercase tracking-wider text-white"
          >
            Direct Telephone / WhatsApp <span className="text-[#ABF67E]">*</span>
          </label>
          <input
            type="tel"
            id="fold-phone"
            name="phone"
            required
            placeholder="+234 (0) 800 000 0000"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#ABF67E]/40 focus:border-[#ABF67E] transition-all"
          />
          {state.errors?.phone && (
            <p className="text-red-400 text-xs">{state.errors.phone[0]}</p>
          )}
        </div>

        {/* Profile Type */}
        <div className="space-y-2">
          <label
            htmlFor="fold-profileType"
            className="block text-xs font-bold uppercase tracking-wider text-white"
          >
            Applicant Profile <span className="text-[#ABF67E]">*</span>
          </label>
          <select
            id="fold-profileType"
            name="profileType"
            defaultValue="private-operator"
            className="w-full px-4 py-3 rounded-xl bg-[#0A2F1B] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ABF67E]/40 focus:border-[#ABF67E] transition-all cursor-pointer"
          >
            <option value="private-operator">
              Private Business Operator / Founder
            </option>
            <option value="family-office">Single / Multi-Family Office</option>
            <option value="institutional-manager">
              Institutional Asset Manager / DFI
            </option>
            <option value="corporate-executive">
              Corporate / Sovereign Enterprise Executive
            </option>
          </select>
          {state.errors?.profileType && (
            <p className="text-red-400 text-xs">{state.errors.profileType[0]}</p>
          )}
        </div>
      </div>

      {/* Voucher Code */}
      <div className="space-y-2">
        <label
          htmlFor="fold-voucherCode"
          className="block text-xs font-bold uppercase tracking-wider text-white"
        >
          Board Sponsor / Voucher Code (Optional)
        </label>
        <input
          type="text"
          id="fold-voucherCode"
          name="voucherCode"
          placeholder="HIN-FOLD-XXXX"
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 uppercase font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ABF67E]/40 focus:border-[#ABF67E] transition-all"
        />
        {state.errors?.voucherCode && (
          <p className="text-red-400 text-xs">{state.errors.voucherCode[0]}</p>
        )}
      </div>

      {/* Primary Sector Interest */}
      <div className="space-y-2">
        <label
          htmlFor="fold-interestNotes"
          className="block text-xs font-bold uppercase tracking-wider text-white"
        >
          Primary Investment Interest or Sector Focus
        </label>
        <textarea
          id="fold-interestNotes"
          name="interestNotes"
          rows={3}
          placeholder="Outline your interest in agribusiness, trade pipelines, logistics infrastructure, or capital co-deployment."
          className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#ABF67E]/40 focus:border-[#ABF67E] transition-all resize-none"
        />
        {state.errors?.interestNotes && (
          <p className="text-red-400 text-xs">{state.errors.interestNotes[0]}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ABF67E] text-[#00190A] text-sm font-bold shadow-xl hover:bg-[#8ee459] transition-all disabled:opacity-50 group cursor-pointer"
        >
          {isPending ? (
            <>
              <SpinnerIcon className="w-4 h-4 text-[#00190A] animate-spin" />
              <span>Transmitting Candidate Dossier...</span>
            </>
          ) : (
            <>
              <span>Request Cohort Dossier &amp; Vetting Criteria</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-white/60">
        <span className="flex items-center gap-1.5">
          <ShieldCheckIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
          CAC Incorporated &bull; SCUML Protocol Certified
        </span>
        <span className="font-mono text-[11px] text-[#ABF67E]">Cycle 1 &bull; Jan 2027</span>
      </div>
    </form>
  );
}
