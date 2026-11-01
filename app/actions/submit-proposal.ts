"use server";

import { z } from "zod";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

/**
 * SQL Definition for Supabase PostgreSQL table:
 * 
 * CREATE TABLE IF NOT EXISTS partnership_proposals (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   full_name TEXT NOT NULL,
 *   organization_name TEXT NOT NULL,
 *   work_email TEXT NOT NULL,
 *   partnership_category TEXT NOT NULL,
 *   phone TEXT,
 *   organization_type TEXT,
 *   operational_location TEXT,
 *   collaboration_scale TEXT,
 *   proposal_summary TEXT NOT NULL,
 *   timeline_readiness TEXT,
 *   status TEXT DEFAULT 'pending_review',
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

export const proposalSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full Name must be at least 3 characters." })
    .max(100, { message: "Full Name cannot exceed 100 characters." }),
  organizationName: z
    .string()
    .min(2, { message: "Organization Name must be at least 2 characters." })
    .max(120, { message: "Organization Name cannot exceed 120 characters." }),
  workEmail: z
    .string()
    .email({ message: "Please provide a valid corporate or work email address." }),
  partnershipCategory: z.enum(
    [
      "agro-trading",
      "asset-acquisition",
      "strategic-partnerships",
      "business-ventures",
      "other-institutional",
    ],
    {
      message: "Please select a valid Partnership Category.",
    }
  ),
  phone: z
    .string()
    .min(7, { message: "Phone or WhatsApp number must be at least 7 digits." })
    .max(25, { message: "Phone number is too long." }),
  organizationType: z
    .string()
    .min(2, { message: "Please select your organization structure." }),
  operationalLocation: z
    .string()
    .min(2, { message: "Please specify your operational state or country." })
    .max(100),
  collaborationScale: z
    .string()
    .min(2, { message: "Please indicate the anticipated capital or transaction scope." }),
  proposalSummary: z
    .string()
    .min(20, {
      message: "Proposal Summary must provide at least 20 characters of commercial context.",
    })
    .max(3000, { message: "Proposal Summary cannot exceed 3,000 characters." }),
  timelineReadiness: z
    .string()
    .min(2, { message: "Please select your operational timeline readiness." }),
});

export type ProposalFormData = z.infer<typeof proposalSchema>;

export interface ActionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string[]>;
}

export async function submitPartnershipProposal(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData = {
      fullName: formData.get("fullName")?.toString().trim() || "",
      organizationName: formData.get("organizationName")?.toString().trim() || "",
      workEmail: formData.get("workEmail")?.toString().trim() || "",
      partnershipCategory: formData.get("partnershipCategory")?.toString() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      organizationType: formData.get("organizationType")?.toString() || "",
      operationalLocation: formData.get("operationalLocation")?.toString().trim() || "",
      collaborationScale: formData.get("collaborationScale")?.toString() || "",
      proposalSummary: formData.get("proposalSummary")?.toString().trim() || "",
      timelineReadiness: formData.get("timelineReadiness")?.toString() || "",
    };

    // Zod validation check
    const validationResult = proposalSchema.safeParse(rawData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the highlighted fields before submitting.",
        errors: fieldErrors,
      };
    }

    const validData = validationResult.data;
    const generatedRefId = `HIN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;

    // If Supabase is connected, insert record
    if (isSupabaseConfigured) {
      const { error: dbError } = await supabase
        .from("partnership_proposals")
        .insert([
          {
            full_name: validData.fullName,
            organization_name: validData.organizationName,
            work_email: validData.workEmail,
            partnership_category: validData.partnershipCategory,
            phone: validData.phone,
            organization_type: validData.organizationType,
            operational_location: validData.operationalLocation,
            collaboration_scale: validData.collaborationScale,
            proposal_summary: validData.proposalSummary,
            timeline_readiness: validData.timelineReadiness,
            status: "pending_executive_review",
          },
        ]);

      if (dbError) {
        console.error("Supabase submission error:", dbError);
        return {
          success: false,
          message:
            "A database communication error occurred while recording your proposal. Please try again or email us directly.",
        };
      }
    } else {
      // Safe fallback for staging/demo environments when SUPABASE credentials are pending
      console.info(
        "[STAGING SUBMISSION RECORDED - Supabase credentials not yet configured in .env.local]",
        {
          referenceId: generatedRefId,
          proposal: validData,
        }
      );
    }

    return {
      success: true,
      message:
        "Your commercial proposal has been formally received by the Executive Partnerships Committee. A verification confirmation has been logged.",
      referenceId: generatedRefId,
    };
  } catch (err: unknown) {
    console.error("Unhandled proposal submission error:", err);
    return {
      success: false,
      message:
        "An unexpected error occurred while processing your proposal. Please verify your connection or email our corporate desk directly.",
    };
  }
}
