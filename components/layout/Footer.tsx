import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/lib/site-config";
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XTwitterIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/100foldgroup",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/100foldgroup",
      icon: InstagramIcon,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/100foldgroup",
      icon: XTwitterIcon,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/100foldgroup",
      icon: LinkedInIcon,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/2349027077073",
      icon: WhatsAppIcon,
    },
  ];

  return (
    <footer className="w-full bg-[#0A2F1B] text-white border-t border-white/10">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 pb-12 border-b border-white/10">

          {/* Left Side: Brand Overview, Social Media & Direct Contact (Heirs Holdings Style) */}
          <div className="flex-1 max-w-xl flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Hundredfold Innovation Network"
                  width={38}
                  height={38}
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

            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-lg">
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.
            </p>

            {/* Circular Social Media Buttons (Heirs Holdings Style) */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Hundredfold on ${item.name}`}
                    title={item.name}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ABF67E] hover:text-[#0A2F1B] border border-white/15 flex items-center justify-center transition-all duration-300 text-white shadow-xs"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Direct Corporate Contact */}
            <div className="flex flex-col gap-2 pt-1 text-xs sm:text-sm text-emerald-100/80">
              <div className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 shrink-0 text-[#ABF67E]" />
                <a href={`mailto:${siteConfig.contact.corporateEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.corporateEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 shrink-0 text-[#ABF67E]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors font-medium">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Pushed to that end (Commercial Focus & The Fold & Network) */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:gap-20 shrink-0">
            {/* Column 1: Commercial Focus */}
            <div className="flex flex-col gap-3 min-w-[160px]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
                Commercial Focus
              </span>
              <Link href="/business#agro-trading" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                Agriculture
              </Link>
              <Link href="/business#asset-acquisition" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                Real Estate
              </Link>
              <Link href="/business#strategic-partnerships" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                Strategic Partnerships
              </Link>
              <Link href="/business#business-ventures" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                Business Ventures
              </Link>
              <Link href="/partnerships" className="text-xs text-[#ABF67E] hover:underline font-semibold mt-1">
                Submit Proposal &rarr;
              </Link>
            </div>

            {/* Column 2: The Fold & Network */}
            <div className="flex flex-col gap-3 min-w-[160px]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
                The Fold &amp; Network
              </span>
              <Link href="/the-fold" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                The Fold Community Wing
              </Link>
              <Link href="/the-fold#cohort" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                Cycle 1 Cohort
              </Link>
              <Link href="/about" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                About Hundredfold
              </Link>
              <Link href="/about#philosophy" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                Africapitalism Philosophy
              </Link>
              <Link href="/insights" className="text-xs text-emerald-100/75 hover:text-white transition-colors">
                News &amp; Insights
              </Link>
            </div>
          </div>

        </div>

        {/* Simplified Bottom Bar: Clean Copyright & Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-100/70">
          <p className="text-[11px] text-emerald-200/70">
            &copy; {siteConfig.company.foundedYear} Hundredfold Innovation Network Ltd (H.I.N). All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-xs font-medium text-emerald-200/80">
            <Link href="/about" className="hover:text-white transition-colors">
              Governance
            </Link>
            <Link href="/partnerships" className="hover:text-white transition-colors">
              Partnerships
            </Link>
            <Link href="/about#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
