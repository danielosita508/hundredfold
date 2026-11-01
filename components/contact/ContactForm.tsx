"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { submitContact, FormActionResponse } from "@/app/actions/submitForms";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SpinnerIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const initialState: FormActionResponse = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
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
      <div className="bg-white/80 backdrop-blur-[20px] rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.08)] border border-white/60 space-y-6 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#ABF67E]/30 border-2 border-[#2D6C00] flex items-center justify-center mx-auto text-[#0A2F1B] shadow-sm">
          <CheckCircleIcon className="w-8 h-8 text-[#2D6C00]" />
        </div>

        <div className="space-y-2">
          <span className="font-sans text-xs uppercase tracking-wider text-[#2D6C00] font-bold">
            Executive Registry Logged
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#00190A]">
            Memorandum Dispatched to Secretariat
          </h3>
          <p className="font-sans text-[#424842] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {state.message}
          </p>
        </div>

        {state.referenceId && (
          <div className="inline-block px-5 py-2.5 rounded-xl bg-[#def2f4] border border-[#c1c8c0]/40 font-mono text-xs text-[#00190A]">
            Dispatch Tracking Code:{" "}
            <span className="font-bold text-[#2D6C00]">{state.referenceId}</span>
          </div>
        )}

        <div className="pt-6 border-t border-[#c1c8c0]/30 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-sans">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white border border-[#c1c8c0] hover:bg-[#def2f4] text-[#00190A] font-semibold transition-colors min-h-[44px] cursor-pointer"
          >
            Submit Another Memorandum
          </button>

          <a
            href={`https://wa.me/2349027077073?text=${encodeURIComponent(
              `Hello Hundredfold Executive Secretariat, I submitted correspondence tracking code: ${state.referenceId || "Direct"}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0A2F1B] hover:bg-[#003017] text-white font-semibold shadow-md transition-all min-h-[44px]"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#ABF67E]" />
            <span>Fast-Track on WhatsApp Desk</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-[20px] rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_-4px_rgba(10,47,27,0.08)] border border-white/60">
      <form
        ref={formRef}
        action={formAction}
        className="flex flex-col gap-6"
        id="hin-contact-form"
      >
        <div className="border-b border-[#c1c8c0]/30 pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ABF67E]/25 text-[#205100] font-sans text-xs uppercase tracking-wider font-bold mb-2">
            <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
            <span>Corporate Engagement Portal</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#00190A]">
            Transmit Formal Memorandum
          </h3>
          <p className="font-sans text-[#424842] text-xs sm:text-sm mt-1">
            Institutional communications receive priority governance review within
            statutory protocols.
          </p>
        </div>

        {/* General Form Error Alert */}
        {state.message && !state.success && (
          <div className="p-4 rounded-xl bg-red-50/90 backdrop-blur-md border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
            <span className="text-red-600 font-bold">&bull;</span>
            <span>{state.message}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="font-sans text-xs font-bold uppercase tracking-wider text-[#00190A]"
            >
              Full Name <span className="text-[#2D6C00]">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Dr. Ngozi Adeyemi"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0c1e20] font-sans text-sm border border-[#c1c8c0]/70 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2D6C00]/40 focus:border-[#2D6C00] shadow-xs transition-all placeholder:text-[#424842]/50"
            />
            {state.errors?.fullName && (
              <p className="text-red-500 text-xs">{state.errors.fullName[0]}</p>
            )}
          </div>

          {/* Entity / Institutional Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="entityName"
              className="font-sans text-xs font-bold uppercase tracking-wider text-[#00190A]"
            >
              Entity / Institutional Name <span className="text-[#2D6C00]">*</span>
            </label>
            <input
              id="entityName"
              name="entityName"
              type="text"
              required
              placeholder="e.g. Pan-African Agrifund Ltd"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0c1e20] font-sans text-sm border border-[#c1c8c0]/70 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2D6C00]/40 focus:border-[#2D6C00] shadow-xs transition-all placeholder:text-[#424842]/50"
            />
            {state.errors?.entityName && (
              <p className="text-red-500 text-xs">{state.errors.entityName[0]}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Institutional Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-sans text-xs font-bold uppercase tracking-wider text-[#00190A]"
            >
              Institutional Email <span className="text-[#2D6C00]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="n.adeyemi@agrifund.org"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0c1e20] font-sans text-sm border border-[#c1c8c0]/70 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2D6C00]/40 focus:border-[#2D6C00] shadow-xs transition-all placeholder:text-[#424842]/50"
            />
            {state.errors?.email && (
              <p className="text-red-500 text-xs">{state.errors.email[0]}</p>
            )}
          </div>

          {/* Direct Phone Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="font-sans text-xs font-bold uppercase tracking-wider text-[#00190A]"
            >
              Direct Contact Number <span className="text-[#2D6C00]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+234 800 000 0000"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0c1e20] font-sans text-sm border border-[#c1c8c0]/70 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2D6C00]/40 focus:border-[#2D6C00] shadow-xs transition-all placeholder:text-[#424842]/50"
            />
            {state.errors?.phone && (
              <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>
            )}
          </div>
        </div>

        {/* Communication Category */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="font-sans text-xs font-bold uppercase tracking-wider text-[#00190A]"
          >
            Communication Category / Department Desk <span className="text-[#2D6C00]">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue="investor_relations"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0c1e20] font-sans text-sm border border-[#c1c8c0]/70 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2D6C00]/40 focus:border-[#2D6C00] shadow-xs transition-all cursor-pointer"
          >
            <option value="Investor Relations & Capital Placement">
              Investor Relations &amp; Institutional Capital Placement
            </option>
            <option value="Landholding & Real Estate Development">
              Landholding &amp; Real Estate Development Proposal
            </option>
            <option value="Agribusiness & Sovereign Value Chain">
              Agribusiness &amp; Sovereign Value Chain Partnership
            </option>
            <option value="The Fold Fellowship Inquiries">
              The Fold • Founders Fellowship &amp; Cohort Inquiries
            </option>
            <option value="Media & Strategic Communications">
              Media, Press &amp; Strategic Communications
            </option>
            <option value="General Corporate Secretariat">
              General Corporate Governance Secretariat
            </option>
          </select>
          {state.errors?.subject && (
            <p className="text-red-500 text-xs">{state.errors.subject[0]}</p>
          )}
        </div>

        {/* Detailed Memorandum */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="font-sans text-xs font-bold uppercase tracking-wider text-[#00190A]"
          >
            Detailed Memorandum / Executive Brief <span className="text-[#2D6C00]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Outline project scope, proposed capital allocation, jurisdictional coordinates, or relevant governance details..."
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#0c1e20] font-sans text-sm border border-[#c1c8c0]/70 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2D6C00]/40 focus:border-[#2D6C00] shadow-xs transition-all placeholder:text-[#424842]/50 resize-none"
          />
          {state.errors?.message && (
            <p className="text-red-500 text-xs">{state.errors.message[0]}</p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            defaultChecked
            className="mt-1 w-4 h-4 rounded text-[#2D6C00] accent-[#2D6C00] focus:ring-[#2D6C00]/40 border-gray-300"
          />
          <label
            htmlFor="consent"
            className="font-sans text-xs text-[#424842] leading-relaxed select-none"
          >
            I acknowledge that this communication is subject to H.I.N's Anti-Money
            Laundering protocol and personal data protection under the Nigeria Data
            Protection Act (NDPA 2023).
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg bg-[#0A2F1B] hover:bg-[#003017] text-white font-sans text-sm font-semibold shadow-[0_4px_16px_rgba(10,47,27,0.18)] hover:shadow-[0_6px_20px_rgba(45,108,0,0.25)] transition-all cursor-pointer disabled:opacity-50"
          >
            {isPending ? (
              <>
                <SpinnerIcon className="w-4 h-4 text-white animate-spin" />
                <span>Transmitting Memorandum...</span>
              </>
            ) : (
              <>
                <span>Submit Formal Enquiry</span>
                <ArrowRightIcon className="w-4 h-4 text-[#ABF67E]" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
