# Hundredfold Backend Execution Plan

[x] **Step 1: Supabase Client & Environment Setup**
Create the Next.js Supabase utility files. Generate `utils/supabase/client.ts` and `utils/supabase/server.ts` using the official `@supabase/ssr` package structure. Read the `.env.local` file to ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are present. If they are missing, output a warning to the terminal but proceed with creating the utility files.

[x] **Step 2: Database Schema & RLS Policies (SQL)**
Generate a `supabase/migrations/001_init.sql` file. Write the exact PostgreSQL commands to create three tables: `partnership_proposals` (10 fields including Name, Organisation, Role, Email, Phone, Category, Summary), `contact_messages` (Name, Email, Subject, Message), and `the_fold_inquiries`. Crucially, write Row Level Security (RLS) policies for all three tables that allow `INSERT` for anonymous users, but restrict `SELECT`, `UPDATE`, and `DELETE` exclusively to authenticated admins.

[x] **Step 3: Zod Validation Schemas**
Create `lib/validations.ts`. Define strict Zod schemas for all three forms. Ensure emails are validated as proper email strings, phone numbers have reasonable length checks, and the partnership category strictly matches the 4 approved routes (Commercial & supply-chain, Joint ventures, Asset & real estate, Emerging African ventures). Export these schemas so they can be shared between the client and server.

[x] **Step 4: Secure Server Actions**
Create `app/actions/submitForms.ts`. Write three Next.js Server Actions (`submitProposal`, `submitContact`, `submitFoldInquiry`). Each action must: 1) Receive formData. 2) Parse and validate the data using the Zod schemas from Step 3. 3) Instantiate the Supabase server client. 4) Insert the validated data into the respective PostgreSQL table. 5) Return a strict success or error payload (e.g., `{ success: true, message: "..." }`).

[x] **Step 5: Wire the Client Forms (Partnerships & Contact)**
Open `components/forms/ProposalForm.tsx` and `components/contact/ContactForm.tsx`. Connect them to the Server Actions created in Step 4. Implement React's `useTransition` or `useActionState` to handle loading states (disabling the submit button while pending). Add a UI notification (like `react-hot-toast` or a simple Tailwind alert box) to display the success message or validation errors returned from the server without breaking the premium glassmorphic design. 

[ ] **Step 6: Wire the Client Form (The Fold)**
Open `components/the-fold/FoldInquiryForm.tsx`. Connect it to the `submitFoldInquiry` Server Action. Implement the same loading states and glassy success notifications as Step 5. Once finished, run

