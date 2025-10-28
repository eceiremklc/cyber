// src/app/utils/validation.ts
// Bu dosyada 'use server' yok - client-side validation için

/**
 * Email validasyonu
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Şifre validasyonu
 */
export function validatePassword(password: string): {
  isValid: boolean;
  message?: string;
} {
  if (password.length < 6) {
    return {
      isValid: false,
      message: "Şifre en az 6 karakter olmalıdır.",
    };
  }

  if (password.length > 72) {
    return {
      isValid: false,
      message: "Şifre en fazla 72 karakter olabilir.",
    };
  }

  // İsteğe bağlı: Daha güçlü şifre kontrolü
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasNumber) {
    return {
      isValid: false,
      message:
        "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir.",
    };
  }

  return { isValid: true };
}

/**
 * İsim validasyonu
 */
export function validateFullname(fullname: string): {
  isValid: boolean;
  message?: string;
} {
  const trimmedName = fullname.trim();

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      message: "İsim en az 2 karakter olmalıdır.",
    };
  }

  if (trimmedName.length > 100) {
    return {
      isValid: false,
      message: "İsim en fazla 100 karakter olabilir.",
    };
  }

  return { isValid: true };
}

/**
 * Tüm kayıt formunu validate et
 */
export function validateSignUpForm(data: {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // İsim kontrolü
  const fullnameCheck = validateFullname(data.fullname);
  if (!fullnameCheck.isValid) {
    errors.fullname = fullnameCheck.message!;
  }

  // Email kontrolü
  if (!validateEmail(data.email)) {
    errors.email = "Geçerli bir e-posta adresi girin.";
  }

  // Şifre kontrolü
  const passwordCheck = validatePassword(data.password);
  if (!passwordCheck.isValid) {
    errors.password = passwordCheck.message!;
  }

  // Şifre eşleşmesi
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Şifreler eşleşmiyor.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
