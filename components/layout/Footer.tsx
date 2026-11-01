import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/lib/site-config";
import { ShieldCheckIcon, MapPinIcon, MailIcon, PhoneIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A2F1B] text-white border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">

          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Hundredfold Innovation Network"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl text-white font-semibold tracking-tight">
                  Hundredfold Innovation Network
                </span>
                <span className="text-[11px] text-[#ABF67E] uppercase tracking-wider font-bold">
                  Building Businesses. Creating Lasting Value.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/75 max-w-md leading-relaxed">
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.
            </p>

            {/* Direct Coordinates */}
            <div className="flex flex-col gap-2 mt-2 text-xs sm:text-sm text-emerald-100/80">
              <div className="flex items-center gap-2 text-[#ABF67E]">
                <MapPinIcon className="w-4 h-4 shrink-0" />
                <span>Headquarters: Asaba, Delta State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 shrink-0 text-emerald-300" />
                <a href={`mailto:${siteConfig.contact.corporateEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.corporateEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 shrink-0 text-emerald-300" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Business (4 Strategic Pillars) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
              Commercial Focus
            </span>
            <Link href="/business#agro-trading" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Agro-Trading Supply Chains
            </Link>
            <Link href="/business#asset-acquisition" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Asset Acquisition & Real Estate
            </Link>
            <Link href="/business#strategic-partnerships" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Strategic Partnerships
            </Link>
            <Link href="/business#business-ventures" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Business Ventures & Incubation
            </Link>
            <Link href="/partnerships" className="text-xs text-[#ABF67E] hover:underline font-semibold mt-1">
              Submit Commercial Proposal &rarr;
            </Link>
          </div>

          {/* Column 3: The Fold & Network */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
              The Fold & Network
            </span>
            <Link href="/the-fold" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              The Fold Community Wing
            </Link>
            <Link href="/the-fold#cohort" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Cycle 1 Cohort (Jan 2027)
            </Link>
            <Link href="/about" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              About Hundredfold
            </Link>
            <Link href="/about#philosophy" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Africapitalism Philosophy
            </Link>
            <Link href="/insights" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              News & Sector Insights
            </Link>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
              Governance & Integrity
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-200">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
              <span>CAC Incorporated</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-200">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-[#ABF67E]" />
              <span>SCUML Certified</span>
            </div>
            <Link href="/contact" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
              Executive Office Enquiries
            </Link>
            <a
              href="https://facebook.com/100foldgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-100/75 hover:text-white transition-colors"
            >
              Social: @100foldgroup
            </a>
          </div>

        </div>

        {/* Statutory Regulatory & Risk Disclosure (Mandatory from docs/content.md) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-emerald-100/70">
          <div className="flex flex-col gap-2 max-w-3xl leading-relaxed">
            <p>
              <strong className="text-white">Regulatory Disclosure:</strong> {siteConfig.compliance.riskDisclosure}
            </p>
            <p className="text-[11px] text-emerald-200/60">
              &copy; {siteConfig.company.foundedYear} Hundredfold Innovation Network Ltd (H.I.N). All Rights Reserved. Asaba, Delta State, Nigeria.
            </p>
          </div>

          <div className="flex items-center gap-5 shrink-0 text-xs font-semibold text-emerald-200/80">
            <Link href="/about" className="hover:text-white transition-colors">
              Governance
            </Link>
            <Link href="/partnerships" className="hover:text-white transition-colors">
              Partnerships
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
