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
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo_v2.png"
                  alt="Hundredfold Innovation Network"
                  width={40}
                  height={40}
                  quality={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl text-white font-semibold tracking-tight">
                  Hundredfold
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#ABF67E]">
                  Innovation Network Ltd
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-lg">
              Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.
            </p>

            {/* Circular Social Media Buttons (Reduced Size) */}
            <div className="flex items-center gap-2.5 pt-1">
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
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ABF67E] hover:text-[#0A2F1B] border border-white/15 flex items-center justify-center transition-all duration-300 text-white shadow-xs"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
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

          {/* Right Side: Quick Links (Navbar Links) */}
          <div className="flex flex-col gap-3 min-w-[200px] shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ABF67E]">
              Quick Links
            </span>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/investments" className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors">
                Investments
              </Link>
              <Link href="/partnerships" className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors">
                Partnerships
              </Link>
              <Link href="/the-fold" className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors">
                The Fold
              </Link>
              <Link href="/insights" className="text-xs sm:text-sm text-emerald-100/75 hover:text-white transition-colors">
                Insights
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
