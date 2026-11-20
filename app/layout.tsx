import type { Metadata } from "next";
import { Poppins, Montserrat, Plus_Jakarta_Sans, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ScrollProgressBar from "@/components/animations/ScrollProgressBar";
import siteConfig from "@/lib/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
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
      className={`${poppins.variable} ${montserrat.variable} ${plusJakartaSans.variable} ${mulish.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#E9FDFF] text-[#0C1E20] antialiased selection:bg-[#ABF67E] selection:text-[#0A2F1B]">
        <SmoothScrollProvider>
          {/* Top Edge Reactive Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* Global Floating Glass Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Global Executive Dark-Green Footer (Stitch Design) */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
