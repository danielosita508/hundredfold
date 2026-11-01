"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { submitProposal, FormActionResponse } from "@/app/actions/submitForms";
import {
  ShieldCheckIcon,
  ArrowRightIcon,
  SpinnerIcon,
  CheckCircleIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const initialState: FormActionResponse = {
  success: false,
  message: "",
};

export default function ProposalForm({
  defaultCategory = "",
}: {
  defaultCategory?: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitProposal,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="w-full">
      {/* Success Notification Banner */}
      {state.success ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-white shadow-xl space-y-6 text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#ABF67E]/30 border-2 border-[#2D6C00] flex items-center justify-center mx-auto text-[#2D6C00] shadow-sm">
            <CheckCircleIcon className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00190A]">
              Transmission Received
            </h3>
            <p className="text-sm sm:text-base text-[#424842] max-w-xl mx-auto leading-relaxed">
              {state.message}
            </p>
          </div>

          {state.referenceId && (
            <div className="inline-block px-4 py-2 rounded-xl bg-[#DEF2F4] border border-white font-mono text-xs text-[#00190A]">
              Reference ID:{" "}
              <span className="font-bold text-[#2D6C00]">{state.referenceId}</span>
            </div>
          )}

          <div className="pt-4 border-t border-[#def2f4] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-[#DEF2F4] hover:bg-[#cdebee] text-[#00190A] font-bold transition-colors min-h-[44px]"
            >
              Submit Another Proposal
            </button>

            <a
              href="https://wa.me/2349027077073?text=Hello%20Hundredfold%20Executive%20Desk,%20I%20have%20submitted%20a%20formal%20commercial%20proposal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#2D6C00]/40 text-[#00190A] hover:bg-[#ABF67E]/20 font-bold transition-colors min-h-[44px] shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#2D6C00]" />
              <span>Notify Desk on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form ref={formRef} action={formAction} className="space-y-8">
          {/* General Form Error Alert */}
          {state.message && !state.success && (
            <div className="p-4 rounded-xl bg-red-50/90 backdrop-blur-md border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
              <span className="text-red-600 font-bold">&bull;</span>
              <span>{state.message}</span>
            </div>
          )}

          {/* 10-Field Frosted Glass Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Full Legal Name (Mandatory) */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Full Legal Name <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Dr. Ngozi Adeleke"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {state.errors?.fullName && (
                <p className="text-red-500 text-xs">{state.errors.fullName[0]}</p>
              )}
            </div>

            {/* 2. Organization Name (Mandatory) */}
            <div className="space-y-2">
              <label
                htmlFor="organizationName"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Organisation / Enterprise Name <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  required
                  placeholder="e.g. Equator Grain Corridors PLC"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {state.errors?.organizationName && (
                <p className="text-red-500 text-xs">
                  {state.errors.organizationName[0]}
                </p>
              )}
            </div>

            {/* 3. Official Role / Designation */}
            <div className="space-y-2">
              <label
                htmlFor="role"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Your Role / Designation <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  placeholder="e.g. Managing Director / Partner"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {(state.errors?.role || state.errors?.organizationType) && (
                <p className="text-red-500 text-xs">
                  {(state.errors.role || state.errors.organizationType)?.[0]}
                </p>
              )}
            </div>

            {/* 4. Official Email (Mandatory) */}
            <div className="space-y-2">
              <label
                htmlFor="workEmail"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Work Email Address <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  required
                  placeholder="partner@enterprise.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {state.errors?.workEmail && (
                <p className="text-red-500 text-xs">{state.errors.workEmail[0]}</p>
              )}
            </div>

            {/* 5. Direct Phone / WhatsApp */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Phone / WhatsApp Number <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+234 (0) 800 000 0000"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {state.errors?.phone && (
                <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>
              )}
            </div>

            {/* 6. Partnership Category (Dropdown, Mandatory - 4 Approved Routes) */}
            <div className="space-y-2">
              <label
                htmlFor="partnershipCategory"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Partnership Category <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <select
                  id="partnershipCategory"
                  name="partnershipCategory"
                  required
                  defaultValue={defaultCategory || "Commercial & supply-chain"}
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] focus:outline-none cursor-pointer"
                >
                  <option value="Commercial & supply-chain">
                    Commercial &amp; Supply-Chain (Agro-Trading)
                  </option>
                  <option value="Joint ventures">
                    Joint Ventures &amp; Strategic Operations
                  </option>
                  <option value="Asset & real estate">
                    Asset &amp; Real Estate Opportunities
                  </option>
                  <option value="Emerging African ventures">
                    Emerging African Business Ventures
                  </option>
                </select>
              </div>
              {state.errors?.partnershipCategory && (
                <p className="text-red-500 text-xs">
                  {state.errors.partnershipCategory[0]}
                </p>
              )}
            </div>

            {/* 7. Operational Location / Geographic Scope */}
            <div className="space-y-2">
              <label
                htmlFor="operationalLocation"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Operational Location / Geographic Scope <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="text"
                  id="operationalLocation"
                  name="operationalLocation"
                  required
                  placeholder="e.g. Asaba, Delta State; Lagos; or Nationwide"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {state.errors?.operationalLocation && (
                <p className="text-red-500 text-xs">
                  {state.errors.operationalLocation[0]}
                </p>
              )}
            </div>

            {/* 8. Expected Contribution / Collaboration Scale */}
            <div className="space-y-2">
              <label
                htmlFor="collaborationScale"
                className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
              >
                Expected Contribution / Capabilities <span className="text-[#2D6C00]">*</span>
              </label>
              <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
                <input
                  type="text"
                  id="collaborationScale"
                  name="collaborationScale"
                  required
                  placeholder="e.g. Sourcing network, land parcel, co-capital, tech platform"
                  className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none"
                />
              </div>
              {state.errors?.collaborationScale && (
                <p className="text-red-500 text-xs">
                  {state.errors.collaborationScale[0]}
                </p>
              )}
            </div>
          </div>

          {/* 9. Preferred Next Step & Timeline */}
          <div className="space-y-2">
            <label
              htmlFor="timelineReadiness"
              className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
            >
              Preferred Next Step &amp; Readiness <span className="text-[#2D6C00]">*</span>
            </label>
            <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
              <select
                id="timelineReadiness"
                name="timelineReadiness"
                required
                defaultValue="intro-call"
                className="w-full px-4 py-3.5 rounded-xl bg-transparent font-sans text-sm text-[#00190A] focus:outline-none cursor-pointer"
              >
                <option value="intro-call">
                  Introductory Call with Commercial Team
                </option>
                <option value="detailed-review">
                  Detailed Proposal Document Review
                </option>
                <option value="office-meeting">
                  Executive Meeting at Asaba Headquarters
                </option>
                <option value="exploratory">
                  Exploratory / Feasibility Discussion
                </option>
              </select>
            </div>
            {state.errors?.timelineReadiness && (
              <p className="text-red-500 text-xs">
                {state.errors.timelineReadiness[0]}
              </p>
            )}
          </div>

          {/* 10. Proposal Summary (Mandatory) */}
          <div className="space-y-2">
            <label
              htmlFor="proposalSummary"
              className="block text-xs font-bold uppercase tracking-wider text-[#00190A]"
            >
              Proposal Summary <span className="text-[#2D6C00]">*</span>
            </label>
            <div className="relative rounded-xl bg-white/70 backdrop-blur-md border border-white/80 shadow-xs focus-within:ring-2 focus-within:ring-[#2D6C00]/40 transition-all">
              <textarea
                id="proposalSummary"
                name="proposalSummary"
                rows={5}
                required
                placeholder="Summarise the business opportunity, transaction structure, commodity volumes, asset specifications, or strategic objectives..."
                className="w-full p-4 rounded-xl bg-transparent font-sans text-sm text-[#00190A] placeholder-[#424842]/60 focus:outline-none resize-none"
              />
            </div>
            {state.errors?.proposalSummary && (
              <p className="text-red-500 text-xs">
                {state.errors.proposalSummary[0]}
              </p>
            )}
          </div>

          {/* Action Bar & Privacy Note */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-[#def2f4]">
            <div className="flex items-center gap-2 text-xs text-[#424842]">
              <ShieldCheckIcon className="w-4 h-4 text-[#2D6C00]" />
              <span>Protected by standard SCUML &amp; Bilateral NDA protocols</span>
            </div>

            <button
              type="submit"
              disabled={isPending}
              id="submit-proposal-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0A2F1B] text-white text-sm font-semibold shadow-xl hover:bg-[#00190A] transition-all disabled:opacity-50 group cursor-pointer"
            >
              {isPending ? (
                <>
                  <SpinnerIcon className="w-4 h-4 text-[#ABF67E] animate-spin" />
                  <span>Transmitting Proposal...</span>
                </>
              ) : (
                <>
                  <span>Transmit Formal Proposal</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ABF67E]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
