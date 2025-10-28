"use client";
import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/app/lib/supabase/supabaseClient";

const supabase = createClient();

type UserStore = {
  user: User | null;
  verified: boolean;
  setUser: (user: User | null) => void;
  initializeUser: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  verified: false,

  setUser: (user) => {
    set({
      user,
      verified: !!user?.email_confirmed_at,
    });
  },

  initializeUser: async () => {
    // Sayfa load olduğunda current user al
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Supabase getUser error:", error.message);
    }

    get().setUser(user ?? null);

    // Listener ile user değişikliklerini takip et
    supabase.auth.onAuthStateChange((_event, session) => {
      get().setUser(session?.user ?? null);
    });
  },
}));
