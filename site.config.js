/**
 * Hundredfold Innovation Network Ltd (H.I.N)
 * Site Configuration & Content Registry
 * 
 * Single source of truth for all brand parameters, navigation,
 * commercial pillars, partnership categories, and contact information.
 * Updated to align with Owner / Leadership Directives (22 Oct 2026).
 */

const siteConfig = {
  // ─── Company Identity ─────────────────────────────────────
  company: {
    name: "Hundredfold Innovation Network Ltd",
    shortName: "H.I.N",
    legalStatus: "Incorporated under Nigerian law (CAC Registered, SCUML Certified)",
    tagline: "Building Businesses. Creating Lasting Value.",
    eyebrow: "INVESTING IN AFRICA'S POTENTIAL",
    approachStatement: "Opportunity With Purpose. Growth With Discipline.",
    whoWeAre: "Hundredfold Innovation Network Ltd is an African business and investment company focused on identifying commercial opportunities, building strategic relationships and developing ventures with long-term potential.",
    foundedYear: 2026,
  },

  // ─── Navigation (7 Core Pages) ───────────────────────────
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Business", href: "/business" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "The Fold", href: "/the-fold" },
    { label: "News & Insights", href: "/insights" },
    { label: "Contact Us", href: "/contact" },
  ],

  // ─── Primary Header CTAs ──────────────────────────────────
  headerCtas: {
    primary: { label: "Partner With Us", href: "/partnerships" },
    secondary: { label: "The Fold", href: "/the-fold" },
  },

  // ─── Contact & Office ─────────────────────────────────────
  contact: {
    email: "hundrefoldinnovationgroup@gmail.com", // [CONFIRM: or corporate domain email]
    corporateEmail: "corporate@hundredfoldinnovation.com",
    partnershipsEmail: "partners@hundredfoldinnovation.com",
    theFoldEmail: "thefold@hundredfoldinnovation.com",
    phone: "+234-902-707-7073",
    whatsappNumber: "2349027077073",
    address: "Asaba, Delta State, Nigeria", // [CONFIRM full street address]
    workingHours: "Monday – Friday: 9:00 AM – 5:00 PM (WAT)",
  },

  // ─── Social Media ─────────────────────────────────────────
  social: {
    facebook: "https://facebook.com/100foldgroup",
    instagram: "https://instagram.com/100foldgroup",
    linkedin: "https://linkedin.com/company/100foldgroup", // [CONFIRM]
  },

  // ─── Domain Configuration ─────────────────────────────────
  domain: "hundredfoldinnovation.com", // or hundredfold.com

  // ─── Four Strategic Business Pillars ──────────────────────
  businessPillars: [
    {
      id: "agro-trading",
      name: "Agro-Trading",
      eyebrow: "COMMODITY SUPPLY CHAINS",
      summary: "Participating in agricultural commodity trading through sourcing relationships, supply-chain coordination, buyer-supplier partnerships and commercially viable trading opportunities.",
      whatWeDo: "Coordinate procurement, logistics, and trading of essential agricultural commodities connecting rural production with commercial off-takers.",
      whyItMatters: "Agriculture is the economic foundation of Africa, offering predictable cash flow and high volume demand as the continent's population expands.",
      howWeApproachIt: "Rigorous vetting of suppliers, pre-contracted off-taker agreements, disciplined quality inspection, and structured financing cycles.",
      potentialPartners: ["Commercial farmers", "Agricultural cooperatives", "Aggregators", "Food processors", "Commodity exporters"],
      futureModules: ["Commodities traded", "Sourcing regions", "Supply partners", "Verified transaction experience"],
      ctaLabel: "Partner in Agro-Trading",
      ctaHref: "/partnerships?category=agro",
    },
    {
      id: "asset-acquisition",
      name: "Asset Acquisition & Ownership",
      eyebrow: "PRODUCTIVE CAPITAL",
      summary: "Exploring ownership of productive assets, including real estate, as part of our disciplined long-term commercial strategy.",
      whatWeDo: "Identify, acquire, and manage high-utility tangible assets and commercial property with clear yield and appreciation potential.",
      whyItMatters: "Tangible assets provide balance-sheet strength, hedge against currency devaluation, and produce recurring baseline revenues.",
      howWeApproachIt: "Prudent valuation, strategic geographic positioning, clean title verification, and asset classes that serve fundamental commercial needs.",
      potentialPartners: ["Property owners", "Institutional co-investors", "Asset managers", "Commercial developers"],
      futureModules: ["Asset criteria", "Acquisition approach", "Ownership structures", "Verified projects"],
      ctaLabel: "Discuss Asset Opportunities",
      ctaHref: "/partnerships?category=assets",
    },
    {
      id: "strategic-partnerships",
      name: "Strategic Partnerships",
      eyebrow: "COLLABORATIVE VALUE",
      summary: "Seeking relationships with businesses, institutions, suppliers and investors where complementary capabilities create mutually beneficial commercial opportunities.",
      whatWeDo: "Structure joint alliances, co-investment vehicles, and distribution networks that leverage combined capital and operational strengths.",
      whyItMatters: "Complex commercial ventures scale faster and manage risk better when aligned with trusted, established operators.",
      howWeApproachIt: "Clear alignment of objectives, defined governance, equitable risk-reward sharing, and mutual accountability.",
      potentialPartners: ["Established enterprises", "Financial institutions", "Logistics providers", "Technical specialists"],
      futureModules: ["Partnership criteria", "Collaboration models", "Approved case studies"],
      ctaLabel: "Propose a Strategic Partnership",
      ctaHref: "/partnerships?category=strategic",
    },
    {
      id: "business-ventures",
      name: "Business Ventures & Enterprise Development",
      eyebrow: "ENTERPRISE INCUBATION",
      summary: "Developing, partnering with and selectively supporting promising businesses, including emerging African enterprises, based on strategic fit and commercial merit.",
      whatWeDo: "Provide strategic capital, governance guidance, operational support, and commercial access to scalable African businesses.",
      whyItMatters: "Catalyzing indigenous enterprise accelerates employment, diversifies the economy, and generates substantial commercial returns.",
      howWeApproachIt: "Strict venture selection criteria, milestone-based support, commercial viability over hype, and active board-level advisory.",
      potentialPartners: ["Growth-stage founders", "Business owners seeking expansion capital", "Enterprise incubators"],
      futureModules: ["Venture selection criteria", "Support models", "Verified portfolio companies"],
      ctaLabel: "Submit a Venture Proposal",
      ctaHref: "/partnerships?category=venture",
    },
  ],

  // ─── Four Guiding Operating Principles ───────────────────
  operatingPrinciples: [
    {
      name: "Integrity",
      description: "Conducting every commercial transaction with total transparency and ethical governance.",
    },
    {
      name: "Due Diligence",
      description: "Thorough research and disciplined risk assessment precede every capital allocation.",
    },
    {
      name: "Execution",
      description: "Focused operational delivery and rigorous follow-through across all ventures.",
    },
    {
      name: "Long-Term Value",
      description: "Building sustainable, generative assets that endure beyond short-term market cycles.",
    },
  ],

  // ─── Five Foundational Pillars (Phase 2 Directive) ────────
  fivePillars: [
    {
      id: "unity",
      name: "Unity",
      description: "Harnessing collective strength and pooled network resources to unlock institutional opportunities that no single enterprise can capture alone.",
    },
    {
      id: "discipline",
      name: "Discipline",
      description: "Uncompromising operational rigor, measured risk management, and steadfast adherence to verified commercial execution standards.",
    },
    {
      id: "governance",
      name: "Governance",
      description: "Ethical stewardship, statutory compliance (CAC & SCUML), and transparent board oversight embedded in every transaction.",
    },
    {
      id: "strategic-investment",
      name: "Strategic Investment",
      description: "Targeted capital allocation into high-utility, generative commercial sectors that address foundational African market demands.",
    },
    {
      id: "long-term-wealth",
      name: "Long-Term Wealth",
      description: "Building enduring generational assets, balance-sheet resilience, and compounding value that outlasts short-term market fluctuations.",
    },
  ],

  // ─── Four Core Values (Phase 2 Directive) ─────────────────
  coreValues: [
    {
      name: "Integrity",
      description: "Uncompromising honesty, transparent dealings, and rigorous moral accountability in every commercial transaction.",
    },
    {
      name: "Purpose",
      description: "Intentional commercial action—ensuring every capital allocation serves genuine market needs and creates real economic utility.",
    },
    {
      name: "Christ-Driven",
      description: "Governed by servant leadership, biblical stewardship principles, ethical excellence, and faith-inspired diligence.",
    },
    {
      name: "Community",
      description: "Fostering collective elevation, collaborative partnerships, and shared prosperity across our network and continent.",
    },
  ],

  // ─── Africapitalism Philosophy (Phase 2 Directive) ────────
  africapitalism: {
    title: "The Africapitalism Philosophy",
    quote: "The private sector holds the master key to unlocking Africa's boundless economic potential through disciplined, long-term commercial investments.",
    summary: "At Hundredfold Innovation Network Ltd, our core investment thesis is anchored in Africapitalism—the economic philosophy that Africa's economic transformation must be spearheaded by the private sector through long-term investments in strategic sectors that create both competitive economic returns and enduring social wealth.",
    principles: [
      {
        title: "Private Sector Leadership",
        description: "Mobilizing indigenous capital and operational capability to build resilient enterprises that solve structural African challenges.",
      },
      {
        title: "Dual-Value Creation",
        description: "Simultaneously generating robust balance-sheet yields and expanding local supply chains, employment, and regional trade.",
      },
      {
        title: "Long-Term Generational Horizon",
        description: "Rejecting extractive short-termism in favor of patient capital and generative assets structured to endure for decades.",
      },
    ],
  },

  // ─── Core Corporate Values ────────────────────────────────
  values: [
    { name: "Integrity", description: "Uncompromising honesty and ethical conduct in all dealings." },
    { name: "Enterprise", description: "Bold initiative, commercial innovation, and value creation." },
    { name: "Accountability", description: "Total responsibility to our partners, stakeholders, and community." },
    { name: "Excellence", description: "High standards of execution, diligence, and professionalism." },
    { name: "Collaboration", description: "Collective power—believing greater outcomes are achieved together." },
    { name: "Long-Term Thinking", description: "Building institutions and assets structured to endure." },
  ],

  // ─── Partnerships Routes ──────────────────────────────────
  partnershipRoutes: [
    {
      id: "commercial-supply-chain",
      title: "Commercial & Supply-Chain Partnerships",
      description: "Suppliers, aggregators, and off-takers in agriculture, logistics, and commodity trading.",
    },
    {
      id: "joint-ventures",
      title: "Joint Ventures & Business Development",
      description: "Established operators looking to co-develop commercial projects or scale existing operations.",
    },
    {
      id: "asset-real-estate",
      title: "Asset & Real Estate Opportunities",
      description: "Landowners, asset managers, and developers with prime productive asset opportunities.",
    },
    {
      id: "emerging-ventures",
      title: "Emerging African Business Ventures",
      description: "Founders and enterprise leaders seeking strategic collaboration, expansion capital, or commercial backing.",
    },
  ],

  // ─── News & Insights Editorial Categories ─────────────────
  editorialCategories: [
    { slug: "agro-trading", name: "Agro-trading and African supply chains" },
    { slug: "asset-ownership", name: "Asset ownership and real estate" },
    { slug: "business-partnerships", name: "Business partnerships and enterprise development" },
    { slug: "financial-literacy", name: "Financial literacy and responsible investment" },
    { slug: "corporate-announcements", name: "Hundredfold corporate announcements" },
  ],

  // ─── The Fold (Community Wing) ────────────────────────────
  theFold: {
    name: "The Fold",
    tagline: "Welcome to The Fold.",
    vision: "The private community and membership wing of Hundredfold Innovation Network Ltd, convening forward-thinking individuals and investors committed to collective economic advancement and commercial literacy.",
    cycle1FlagOff: "January 2027",
    admissionsStatus: "Reviewing Member Enquiries",
    pillars: [
      "Collective Strength & Structured Networking",
      "Commercial Due Diligence & Economic Literacy",
      "Executive Access to Corporate Initiatives",
    ],
  },

  // ─── Leadership Team (Exact Directive Roster) ──────────────
  team: [
    {
      name: "Daniel.C. Evans",
      role: "Founder & CEO",
      photo: "/assets/team-daniel-evans.jpg",
      bio: "Executive leader and founder guiding Hundredfold's strategic vision, commercial alliances, capital allocation, and corporate governance.",
    },
    {
      name: "Ramson Udoka",
      role: "Executive Director",
      photo: "/assets/team-ramson-udoka.jpg",
      bio: "Commercial operations leader overseeing agricultural commodity trading pipelines, supplier networks, and operational execution.",
    },
    {
      name: "Egwuatu Peter",
      role: "Executive Director",
      photo: "/assets/team-egwuatu-peter.jpg",
      bio: "Strategic investment and enterprise development executive focusing on venture due diligence, valuation, and capital stewardship.",
    },
    {
      name: "Samuel Ajuebor",
      role: "Executive Director",
      photo: "/assets/team-samuel-ajuebor.jpg",
      bio: "Corporate operations and governance officer managing stakeholder coordination, institutional alliances, and compliance frameworks.",
    },
    {
      name: "Godson Eregare",
      role: "Executive Director",
      photo: "/assets/team-godson-eregare.jpg",
      bio: "Enterprise expansion and community network strategist stewarding private partnership cohorts and commercial initiatives.",
    },
  ],

  // ─── Legal & Compliance ───────────────────────────────────
  compliance: {
    cacRegistered: true,
    cacText: "Registered with the Corporate Affairs Commission (CAC)",
    scumlCertified: true,
    scumlText: "Certified by the Special Control Unit Against Money Laundering (SCUML)",
    regulatoryStatement: "Hundredfold Innovation Network Ltd is incorporated under Nigerian law, registered with the Corporate Affairs Commission (CAC), and certified by the Special Control Unit Against Money Laundering (SCUML).",
    riskDisclosure: "Hundredfold Innovation Network Ltd is an African business and investment company. Commercial ventures, asset acquisitions and trading activities involve business risks. Commercial distributions depend on Board resolutions and verified operational performance. No fixed or guaranteed returns are offered.",
    privacyNote: "Secure file validation and privacy protection applied. Hundredfold will never request bank account details, BVN, or sensitive financial documents at the initial enquiry stage.",
  },

  // ─── SEO Metadata ─────────────────────────────────────────
  seo: {
    defaultTitle: "Hundredfold Innovation Network — Building Businesses. Creating Lasting Value.",
    defaultDescription: "Hundredfold Innovation Network Ltd is an African business and investment company focused on agro-trading, asset acquisition, strategic partnerships, and emerging commercial ventures.",
    ogImage: "/assets/og-image.jpg",
  },
};

module.exports = siteConfig;
module.exports.default = siteConfig;
module.exports.siteConfig = siteConfig;
