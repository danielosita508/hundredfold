import { z } from "zod";

/**
 * Approved strategic partnership routes
 */
export const APPROVED_PARTNERSHIP_CATEGORIES = [
  "Commercial & supply-chain",
  "Joint ventures",
  "Asset & real estate",
  "Emerging African ventures",
] as const;

/**
 * Mapping from form values / slugs to approved routes
 */
export const partnershipCategoryMap: Record<string, (typeof APPROVED_PARTNERSHIP_CATEGORIES)[number]> = {
  "agro-trading": "Commercial & supply-chain",
  "strategic-partnerships": "Joint ventures",
  "asset-acquisition": "Asset & real estate",
  "business-ventures": "Emerging African ventures",
  "Commercial & supply-chain": "Commercial & supply-chain",
  "Joint ventures": "Joint ventures",
  "Asset & real estate": "Asset & real estate",
  "Emerging African ventures": "Emerging African ventures",
};

/**
 * Normalizes partnership category into one of the 4 approved strategic routes
 */
export function normalizePartnershipCategory(category: string): (typeof APPROVED_PARTNERSHIP_CATEGORIES)[number] {
  return partnershipCategoryMap[category] || "Commercial & supply-chain";
}

/**
 * 1. Partnership Proposal Validation Schema
 */
export const partnershipProposalSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full legal name must be at least 2 characters.")
    .max(100, "Full legal name cannot exceed 100 characters."),
  organizationName: z
    .string()
    .trim()
    .min(2, "Organisation name must be at least 2 characters.")
    .max(120, "Organisation name cannot exceed 120 characters."),
  role: z
    .string()
    .trim()
    .min(2, "Role / Designation must be at least 2 characters.")
    .max(100, "Role cannot exceed 100 characters."),
  workEmail: z
    .string()
    .trim()
    .email("Please provide a valid corporate or work email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number must be at least 7 digits.")
    .max(25, "Phone number cannot exceed 25 characters.")
    .regex(/^[0-9+\s().-]+$/, "Please provide a valid phone or WhatsApp number."),
  partnershipCategory: z.enum(
    [
      "Commercial & supply-chain",
      "Joint ventures",
      "Asset & real estate",
      "Emerging African ventures",
      "agro-trading",
      "strategic-partnerships",
      "asset-acquisition",
      "business-ventures",
    ],
    {
      message:
        "Partnership category must match one of the 4 approved routes (Commercial & supply-chain, Joint ventures, Asset & real estate, Emerging African ventures).",
    }
  ),
  operationalLocation: z
    .string()
    .trim()
    .max(150, "Operational location cannot exceed 150 characters.")
    .optional()
    .or(z.literal("")),
  collaborationScale: z
    .string()
    .trim()
    .max(200, "Collaboration scale cannot exceed 200 characters.")
    .optional()
    .or(z.literal("")),
  timelineReadiness: z
    .string()
    .trim()
    .max(100, "Timeline readiness cannot exceed 100 characters.")
    .optional()
    .or(z.literal("")),
  proposalSummary: z
    .string()
    .trim()
    .min(10, "Proposal summary must be at least 10 characters.")
    .max(5000, "Proposal summary cannot exceed 5,000 characters."),
});

export type PartnershipProposalInput = z.infer<typeof partnershipProposalSchema>;

/**
 * 2. Contact Message Validation Schema
 */
export const contactMessageSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name cannot exceed 100 characters."),
  entityName: z
    .string()
    .trim()
    .max(150, "Entity name cannot exceed 150 characters.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email("Please provide a valid institutional email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number must be at least 7 digits.")
    .max(25, "Phone number cannot exceed 25 characters.")
    .regex(/^[0-9+\s().-]+$/, "Please provide a valid contact number.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(2, "Subject or department category is required.")
    .max(200, "Subject cannot exceed 200 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Executive brief / memorandum must provide at least 10 characters.")
    .max(5000, "Memorandum cannot exceed 5,000 characters."),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

/**
 * 3. The Fold Inquiry Validation Schema
 */
export const theFoldInquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Principal / delegate name must be at least 2 characters.")
    .max(100, "Principal name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid work email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number must be at least 7 digits.")
    .max(25, "Phone number cannot exceed 25 characters.")
    .regex(/^[0-9+\s().-]+$/, "Please provide a valid telephone or WhatsApp number."),
  profileType: z
    .string()
    .trim()
    .min(2, "Please select an applicant profile type.")
    .max(100, "Profile type cannot exceed 100 characters."),
  voucherCode: z
    .string()
    .trim()
    .max(50, "Voucher code cannot exceed 50 characters.")
    .optional()
    .or(z.literal("")),
  interestNotes: z
    .string()
    .trim()
    .max(2000, "Interest notes cannot exceed 2,000 characters.")
    .optional()
    .or(z.literal("")),
});

export type TheFoldInquiryInput = z.infer<typeof theFoldInquirySchema>;
