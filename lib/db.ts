// Uses service role key to bypass RLS — same pattern as EA Rally
import { createClient } from "@supabase/supabase-js";

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export type Coach = {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
  status: string;
};

export async function findCoachByEmail(email: string): Promise<Coach | null> {
  const { data } = await adminClient()
    .from("Coach")
    .select("id, email, firstName, lastName, role, status")
    .eq("email", email)
    .single();
  return data ?? null;
}
