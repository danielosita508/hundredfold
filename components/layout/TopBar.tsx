import React from "react";
import siteConfig from "@/lib/site-config";
import { ShieldCheckIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";

export default function TopBar() {
  return (
    <div className="bg-[#def2f4]/60 backdrop-blur-md border-b border-white/50 text-xs text-[#424842] relative z-40">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-9">
          {/* Regulatory Trust Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/80 text-[#2D6C00] border border-[#2D6C00]/20 shadow-2xs">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-[#2D6C00]" />
              <span>CAC Registered &bull; SCUML Certified</span>
            </span>
            <span className="hidden md:inline-block text-[#c1c8c0]">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#424842] text-[11px]">
              <MapPinIcon className="w-3 h-3 text-[#2D6C00]" />
              <span>Asaba, Delta State, Nigeria</span>
            </span>
          </div>

          {/* Quick Direct Corporate Contact */}
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1 text-[#0c1e20] hover:text-[#2D6C00] font-medium transition-colors duration-150"
              title="Call Hundredfold Executive Desk"
            >
              <PhoneIcon className="w-3 h-3 text-[#2D6C00]" />
              <span className="font-semibold">{siteConfig.contact.phone}</span>
            </a>
            
            <a
              href={`mailto:${siteConfig.contact.corporateEmail || siteConfig.contact.email}`}
              className="hidden sm:flex items-center gap-1 text-[#424842] hover:text-[#2D6C00] transition-colors duration-150"
              title="Direct Email Enquiry"
            >
              <MailIcon className="w-3 h-3 text-[#2D6C00]" />
              <span>{siteConfig.contact.corporateEmail || siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
