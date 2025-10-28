// app/actions/auth.ts
import { createClient } from "@/app/lib/supabase/supabaseClient";
import { redirect } from "next/navigation";

const supabase = createClient();

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }

  if (data.user) {
    // login başarılı → server-side redirect
    redirect("/"); // direkt home sayfasına yönlendirir
  }

  return { success: false, error: "Unknown error" };
};
