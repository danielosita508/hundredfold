export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface BusinessPillar {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  whatWeDo: string;
  whyItMatters: string;
  howWeApproachIt: string;
  potentialPartners: string[];
  futureModules?: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface OperatingPrinciple {
  name: string;
  description: string;
}

export interface FivePillar {
  id: string;
  name: string;
  description: string;
}

export interface CoreValue {
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}

export interface AfricapitalismPrinciple {
  title: string;
  description: string;
}

export interface Africapitalism {
  title: string;
  quote: string;
  summary: string;
  principles: AfricapitalismPrinciple[];
}

export interface SiteConfig {
  company: {
    name: string;
    shortName: string;
    legalStatus: string;
    tagline: string;
    eyebrow: string;
    approachStatement: string;
    whoWeAre: string;
    foundedYear: number;
  };
  navigation: NavItem[];
  headerCtas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  contact: {
    email: string;
    corporateEmail?: string;
    partnershipsEmail?: string;
    theFoldEmail?: string;
    phone: string;
    whatsappNumber: string;
    address: string;
    workingHours: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  domain: string;
  fivePillars: FivePillar[];
  businessPillars: BusinessPillar[];
  operatingPrinciples: OperatingPrinciple[];
  coreValues: CoreValue[];
  africapitalism: Africapitalism;
  team: TeamMember[];
  compliance: {
    cacRegistered: boolean;
    cacText: string;
    scumlCertified: boolean;
    scumlText: string;
    regulatoryStatement: string;
    riskDisclosure: string;
    privacyNote: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}
