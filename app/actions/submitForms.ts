"use server";

import { createClient, isSupabaseConfigured } from "@/utils/supabase/server";
import {
  partnershipProposalSchema,
  contactMessageSchema,
  theFoldInquirySchema,
  normalizePartnershipCategory,
} from "@/lib/validations";

export interface FormActionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string[]>;
}

function resolveFormData(
  arg1: FormActionResponse | FormData | unknown,
  arg2?: FormData
): FormData {
  if (arg2 instanceof FormData) {
    return arg2;
  }
  if (arg1 instanceof FormData) {
    return arg1;
  }
  return new FormData();
}

/**
 * 1. Submit Partnership Proposal Action
 */
export async function submitProposal(
  prevStateOrFormData: FormActionResponse | FormData,
  maybeFormData?: FormData
): Promise<FormActionResponse> {
  try {
    const formData = resolveFormData(prevStateOrFormData, maybeFormData);

    const rawData = {
      fullName: (formData.get("fullName") || "").toString().trim(),
      organizationName: (formData.get("organizationName") || "").toString().trim(),
      role: (
        formData.get("role") ||
        formData.get("organizationType") ||
        ""
      )
        .toString()
        .trim(),
      workEmail: (formData.get("workEmail") || formData.get("email") || "")
        .toString()
        .trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      partnershipCategory: (formData.get("partnershipCategory") || "")
        .toString()
        .trim(),
      operationalLocation: (formData.get("operationalLocation") || "")
        .toString()
        .trim(),
      collaborationScale: (formData.get("collaborationScale") || "")
        .toString()
        .trim(),
      timelineReadiness: (formData.get("timelineReadiness") || "")
        .toString()
        .trim(),
      proposalSummary: (formData.get("proposalSummary") || "")
        .toString()
        .trim(),
    };

    const parsed = partnershipProposalSchema.safeParse(rawData);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors)[0]?.[0] ||
        "Please check the form for errors and retry.";

      return {
        success: false,
        message: firstErrorMessage,
        errors: fieldErrors,
      };
    }

    const validData = parsed.data;
    const normalizedCategory = normalizePartnershipCategory(
      validData.partnershipCategory
    );
    const referenceId = `HIN-PROP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const supabase = await createClient();

    if (isSupabaseConfigured) {
      const { error: dbError } = await supabase
        .from("partnership_proposals")
        .insert({
          full_name: validData.fullName,
          organization_name: validData.organizationName,
          role: validData.role,
          work_email: validData.workEmail,
          phone: validData.phone,
          partnership_category: normalizedCategory,
          operational_location: validData.operationalLocation || null,
          collaboration_scale: validData.collaborationScale || null,
          timeline_readiness: validData.timelineReadiness || null,
          proposal_summary: validData.proposalSummary,
          status: "pending_review",
        });

      if (dbError) {
        console.error("Supabase insert error (partnership_proposals):", dbError);
        return {
          success: false,
          message:
            "A database communication error occurred while recording your proposal. Please try again or contact our desk directly.",
        };
      }
    } else {
      console.info(
        "[STAGING RECORDED - Supabase credentials pending in .env.local]",
        {
          table: "partnership_proposals",
          referenceId,
          data: { ...validData, partnershipCategory: normalizedCategory },
        }
      );
    }

    return {
      success: true,
      message:
        "Your commercial proposal has been formally received by the Executive Partnerships Committee. An acknowledgment has been logged.",
      referenceId,
    };
  } catch (err: unknown) {
    console.error("Unexpected error in submitProposal:", err);
    return {
      success: false,
      message:
        "An unexpected error occurred while processing your proposal. Please verify your connection or reach out directly.",
    };
  }
}

/**
 * 2. Submit Contact Message Action
 */
export async function submitContact(
  prevStateOrFormData: FormActionResponse | FormData,
  maybeFormData?: FormData
): Promise<FormActionResponse> {
  try {
    const formData = resolveFormData(prevStateOrFormData, maybeFormData);

    const rawData = {
      fullName: (formData.get("fullName") || "").toString().trim(),
      entityName: (formData.get("entityName") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      subject: (
        formData.get("subject") ||
        formData.get("category") ||
        "General Secretariat Enquiry"
      )
        .toString()
        .trim(),
      message: (formData.get("message") || "").toString().trim(),
    };

    const parsed = contactMessageSchema.safeParse(rawData);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors)[0]?.[0] ||
        "Please check the highlighted memorandum fields and retry.";

      return {
        success: false,
        message: firstErrorMessage,
        errors: fieldErrors,
      };
    }

    const validData = parsed.data;
    const referenceId = `HIN-REG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const supabase = await createClient();

    if (isSupabaseConfigured) {
      const { error: dbError } = await supabase.from("contact_messages").insert({
        full_name: validData.fullName,
        entity_name: validData.entityName || null,
        email: validData.email,
        phone: validData.phone || null,
        subject: validData.subject,
        message: validData.message,
        status: "unread",
      });

      if (dbError) {
        console.error("Supabase insert error (contact_messages):", dbError);
        return {
          success: false,
          message:
            "A database communication error occurred while dispatching your memorandum. Please try again or reach out directly.",
        };
      }
    } else {
      console.info(
        "[STAGING RECORDED - Supabase credentials pending in .env.local]",
        {
          table: "contact_messages",
          referenceId,
          data: validData,
        }
      );
    }

    return {
      success: true,
      message:
        "Your formal enquiry has been logged with the Secretariat Registry. A designated liaison officer will review your dossier within 24 working hours.",
      referenceId,
    };
  } catch (err: unknown) {
    console.error("Unexpected error in submitContact:", err);
    return {
      success: false,
      message:
        "An unexpected error occurred while transmitting your memorandum. Please try again later.",
    };
  }
}

/**
 * 3. Submit The Fold Inquiry Action
 */
export async function submitFoldInquiry(
  prevStateOrFormData: FormActionResponse | FormData,
  maybeFormData?: FormData
): Promise<FormActionResponse> {
  try {
    const formData = resolveFormData(prevStateOrFormData, maybeFormData);

    const rawData = {
      fullName: (formData.get("fullName") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      profileType: (formData.get("profileType") || "private-operator")
        .toString()
        .trim(),
      voucherCode: (formData.get("voucherCode") || "").toString().trim(),
      interestNotes: (formData.get("interestNotes") || "").toString().trim(),
    };

    const parsed = theFoldInquirySchema.safeParse(rawData);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors)[0]?.[0] ||
        "Please check the candidate profile fields and retry.";

      return {
        success: false,
        message: firstErrorMessage,
        errors: fieldErrors,
      };
    }

    const validData = parsed.data;
    const referenceId = `FOLD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const supabase = await createClient();

    if (isSupabaseConfigured) {
      const { error: dbError } = await supabase
        .from("the_fold_inquiries")
        .insert({
          full_name: validData.fullName,
          email: validData.email,
          phone: validData.phone,
          profile_type: validData.profileType,
          voucher_code: validData.voucherCode || null,
          interest_notes: validData.interestNotes || null,
          status: "pending_review",
        });

      if (dbError) {
        console.error("Supabase insert error (the_fold_inquiries):", dbError);
        return {
          success: false,
          message:
            "A database communication error occurred while registering your dossier. Please try again or contact the secretariat.",
        };
      }
    } else {
      console.info(
        "[STAGING RECORDED - Supabase credentials pending in .env.local]",
        {
          table: "the_fold_inquiries",
          referenceId,
          data: validData,
        }
      );
    }

    return {
      success: true,
      message:
        "Thank you for registering your interest in The Fold (Cycle 1, January 2027). The Admissions Committee reviews candidates strictly against the 100-member ceiling and mutual values alignment.",
      referenceId,
    };
  } catch (err: unknown) {
    console.error("Unexpected error in submitFoldInquiry:", err);
    return {
      success: false,
      message:
        "An unexpected error occurred while processing your expression of interest. Please try again later.",
    };
  }
}

