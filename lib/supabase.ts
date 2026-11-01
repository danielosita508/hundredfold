import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseKey &&
    !supabaseUrl.includes("your-project") &&
    !supabaseKey.includes("your-anon-key")
);

/**
 * Supabase client instance.
 * If credentials are not configured in environment variables,
 * a placeholder client is created to prevent runtime import crashes.
 */
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : createClient(
      "https://placeholder-project.supabase.co",
      "placeholder-anon-key",
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

export default supabase;
