// src/app/utils/signUp.ts
"use server";

import { createClient } from "../lib/supabase/supabaseServerClient";

/**
 * Kullanıcı kayıt fonksiyonu
 * @param email - Kullanıcı e-posta adresi
 * @param password - Kullanıcı şifresi (min 6 karakter)
 * @param fullname - Kullanıcının tam adı
 * @returns Başarı/hata durumu ve mesaj
 */
export async function signUp(
  email: string,
  password: string,
  fullname: string
) {
  try {
    const supabase = await createClient();

    // Kayıt işlemini gerçekleştir
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullname,
        },
        // Callback URL'i belirt
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    // Supabase API hatası
    if (error) {
      console.error("[SignUp Error]:", error.message);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }

    // Email confirmation gerekiyorsa
    if (data.user && !data.session) {
      return {
        success: true,
        message:
          "Kayıt başarılı! Lütfen e-postanızı kontrol ederek hesabınızı onaylayın.",
        data: {
          user: data.user,
          needsEmailConfirmation: true,
        },
      };
    }

    // Başarılı kayıt ve oturum açıldı
    return {
      success: true,
      message: "Kayıt başarılı! Yönlendiriliyorsunuz...",
      data: {
        user: data.user,
        session: data.session,
        needsEmailConfirmation: false,
      },
    };
  } catch (error) {
    // Beklenmeyen hatalar
    const message =
      error instanceof Error
        ? error.message
        : "Kayıt sırasında beklenmeyen bir hata oluştu.";

    console.error("[SignUp Unexpected Error]:", message);

    return {
      success: false,
      message,
      data: null,
    };
  }
}
