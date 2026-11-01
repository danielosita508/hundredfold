-- ==============================================================================
-- Migration: 001_init.sql
-- Description: Initial schema and RLS policies for Hundredfold Backend
-- Tables: partnership_proposals, contact_messages, the_fold_inquiries
-- ==============================================================================

-- 1. Partnership Proposals Table (10 fields + id, status, created_at)
CREATE TABLE IF NOT EXISTS public.partnership_proposals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    organization_name TEXT NOT NULL,
    role TEXT NOT NULL,
    work_email TEXT NOT NULL,
    phone TEXT NOT NULL,
    partnership_category TEXT NOT NULL,
    operational_location TEXT,
    collaboration_scale TEXT,
    timeline_readiness TEXT,
    proposal_summary TEXT NOT NULL,
    status TEXT DEFAULT 'pending_review',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Contact Messages Table (Name, Email, Subject/Category, Message + Entity, Phone)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    entity_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. The Fold Inquiries Table
CREATE TABLE IF NOT EXISTS public.the_fold_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    profile_type TEXT NOT NULL,
    voucher_code TEXT,
    interest_notes TEXT,
    status TEXT DEFAULT 'pending_review',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- Row Level Security (RLS) Policies
-- Enables INSERT for anonymous users, restricts SELECT, UPDATE, DELETE to authenticated admins
-- ==============================================================================

-- --- Table 1: partnership_proposals ---
ALTER TABLE public.partnership_proposals ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit proposals
CREATE POLICY "Allow anonymous and public insert on partnership_proposals"
    ON public.partnership_proposals
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict SELECT exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins select on partnership_proposals"
    ON public.partnership_proposals
    FOR SELECT
    TO authenticated
    USING (auth.role() = 'authenticated');

-- Restrict UPDATE exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins update on partnership_proposals"
    ON public.partnership_proposals
    FOR UPDATE
    TO authenticated
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Restrict DELETE exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins delete on partnership_proposals"
    ON public.partnership_proposals
    FOR DELETE
    TO authenticated
    USING (auth.role() = 'authenticated');


-- --- Table 2: contact_messages ---
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit contact messages
CREATE POLICY "Allow anonymous and public insert on contact_messages"
    ON public.contact_messages
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict SELECT exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins select on contact_messages"
    ON public.contact_messages
    FOR SELECT
    TO authenticated
    USING (auth.role() = 'authenticated');

-- Restrict UPDATE exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins update on contact_messages"
    ON public.contact_messages
    FOR UPDATE
    TO authenticated
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Restrict DELETE exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins delete on contact_messages"
    ON public.contact_messages
    FOR DELETE
    TO authenticated
    USING (auth.role() = 'authenticated');


-- --- Table 3: the_fold_inquiries ---
ALTER TABLE public.the_fold_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit inquiries
CREATE POLICY "Allow anonymous and public insert on the_fold_inquiries"
    ON public.the_fold_inquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict SELECT exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins select on the_fold_inquiries"
    ON public.the_fold_inquiries
    FOR SELECT
    TO authenticated
    USING (auth.role() = 'authenticated');

-- Restrict UPDATE exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins update on the_fold_inquiries"
    ON public.the_fold_inquiries
    FOR UPDATE
    TO authenticated
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Restrict DELETE exclusively to authenticated admins
CREATE POLICY "Allow authenticated admins delete on the_fold_inquiries"
    ON public.the_fold_inquiries
    FOR DELETE
    TO authenticated
    USING (auth.role() = 'authenticated');

