import type { Metadata } from "next";
import { EB_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import siteConfig from "@/lib/site-config";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.company.shortName}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [
    "Hundredfold Innovation Network",
    "African Business and Investment",
    "Agro-Trading",
    "Asset Acquisition",
    "Commercial Partnerships Nigeria",
    "The Fold Community",
    "Enterprise Development Delta State",
  ],
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.company.name,
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#E9FDFF] text-[#0C1E20] antialiased selection:bg-[#ABF67E] selection:text-[#0A2F1B]">
        {/* Institutional Trust Top Strip */}
        <TopBar />

        {/* Global Floating Glass Navbar (Stitch Design) */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Executive Dark-Green Footer (Stitch Design) */}
        <Footer />
      </body>
    </html>
  );
}
