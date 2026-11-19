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
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DEF2F4] shadow-2xl space-y-6 text-center text-[#00190A] animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#ABF67E]/30 border-2 border-[#2D6C00] flex items-center justify-center mx-auto text-[#2D6C00] shadow-sm">
          <CheckCircleIcon className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#00190A]">
            Application Received!
          </h3>
          <p className="text-[#424842] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {state.message}
          </p>
        </div>

        {state.referenceId && (
          <div className="inline-block px-4 py-2 rounded-xl bg-[#E9FDFF] border border-[#DEF2F4] font-mono text-xs text-[#2D6C00]">
            Registration Reference:{" "}
            <span className="font-bold text-[#00190A]">{state.referenceId}</span>
          </div>
        )}

        <p className="text-xs text-[#556358] max-w-md mx-auto">
          We will review your submission and reach out to your email with next steps.
        </p>

        <div className="pt-4 border-t border-[#DEF2F4] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-full bg-[#0A2F1B] hover:bg-[#00190A] text-white font-semibold transition-colors min-h-[44px] cursor-pointer shadow-sm"
          >
            Submit Another Application
          </button>

          <a
            href={`https://wa.me/2349027077073?text=${encodeURIComponent(
              `Hello The Fold, I have submitted my membership application (Ref: ${state.referenceId || "Direct"}).`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ABF67E] text-[#00190A] hover:bg-[#8ee459] font-bold transition-colors min-h-[44px] shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#00190A]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DEF2F4] shadow-2xl space-y-6 text-[#00190A]"
    >
      <div className="space-y-1.5 border-b border-[#DEF2F4] pb-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D6C00] block">
          MEMBERSHIP
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#00190A]">
          Join The Fold
        </h3>
        <p className="text-[#556358] text-xs sm:text-sm">
          Fill in your details below to join our private investment network. Strictly limited to 100 members per cohort.
        </p>
      </div>

      {/* General Form Error Alert */}
      {state.message && !state.success && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
          <span className="text-red-500 font-bold">&bull;</span>
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fold-fullName"
            className="block text-xs font-semibold text-[#00190A]"
          >
            Full Name <span className="text-[#2D6C00]">*</span>
          </label>
          <input
            type="text"
            id="fold-fullName"
            name="fullName"
            required
            placeholder="e.g. Daniel Evans"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FDFF] border border-[#DEF2F4] text-[#00190A] placeholder-[#8A9E92] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6C00]/20 focus:border-[#2D6C00] transition-all"
          />
          {state.errors?.fullName && (
            <p className="text-red-500 text-xs">{state.errors.fullName[0]}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="fold-email"
            className="block text-xs font-semibold text-[#00190A]"
          >
            Work Email <span className="text-[#2D6C00]">*</span>
          </label>
          <input
            type="email"
            id="fold-email"
            name="email"
            required
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FDFF] border border-[#DEF2F4] text-[#00190A] placeholder-[#8A9E92] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6C00]/20 focus:border-[#2D6C00] transition-all"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-xs">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="fold-phone"
            className="block text-xs font-semibold text-[#00190A]"
          >
            Phone / WhatsApp <span className="text-[#2D6C00]">*</span>
          </label>
          <input
            type="tel"
            id="fold-phone"
            name="phone"
            required
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FDFF] border border-[#DEF2F4] text-[#00190A] placeholder-[#8A9E92] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6C00]/20 focus:border-[#2D6C00] transition-all"
          />
          {state.errors?.phone && (
            <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>
          )}
        </div>

        {/* Profile Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="fold-profileType"
            className="block text-xs font-semibold text-[#00190A]"
          >
            I am a... <span className="text-[#2D6C00]">*</span>
          </label>
          <select
            id="fold-profileType"
            name="profileType"
            defaultValue="private-operator"
            className="w-full px-4 py-3 rounded-xl bg-[#F8FDFF] border border-[#DEF2F4] text-[#00190A] text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6C00]/20 focus:border-[#2D6C00] transition-all cursor-pointer"
          >
            <option value="private-operator">
              Business Owner / Founder
            </option>
            <option value="family-office">
              Private Investor / Family Office
            </option>
            <option value="corporate-executive">
              Corporate Executive
            </option>
            <option value="institutional-manager">
              Fund / Asset Manager
            </option>
          </select>
          {state.errors?.profileType && (
            <p className="text-red-500 text-xs">{state.errors.profileType[0]}</p>
          )}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0A2F1B] hover:bg-[#00190A] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 group cursor-pointer"
        >
          {isPending ? (
            <>
              <SpinnerIcon className="w-4 h-4 text-[#ABF67E] animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <span>Submit Application</span>
              <ArrowRightIcon className="w-4 h-4 text-[#ABF67E] group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#DEF2F4] text-xs text-[#556358]">
        <span className="flex items-center gap-1.5">
          <ShieldCheckIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
          Strictly Confidential &bull; Private Network
        </span>
        <span className="font-mono text-[11px] text-[#2D6C00] font-bold">Cohort 1 Open</span>
      </div>
    </form>
  );
}