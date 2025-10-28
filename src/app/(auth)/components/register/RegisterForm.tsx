"use client";
import CustomInput from "@/app/shared/input/CustomInput";
import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";
import { Flex, message } from "antd";
import { signUp } from "@/app/utils/signUp";
import { validateSignUpForm } from "@/app/utils/validation";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Hata varsa temizle
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Form submit
  const handleSubmit = async () => {
    // Önce client-side validation
    const validation = validateSignUpForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      messageApi.error("Lütfen tüm alanları doğru şekilde doldurun");
      return;
    }

    setLoading(true);

    try {
      const result = await signUp(
        formData.email,
        formData.password,
        formData.fullname
      );

      if (result.success) {
        messageApi.success(result.message);

        // Email confirmation gerekiyorsa
        if (result.data?.needsEmailConfirmation) {
          setTimeout(() => {
            router.push("/auth/verify-email");
          }, 2000);
        } else {
          // Direkt giriş yapıldı
          setTimeout(() => {
            router.push("/");
            router.refresh();
          }, 1500);
        }
      } else {
        messageApi.error(result.message);
      }
    } catch (error) {
      messageApi.error("Kayıt sırasında bir hata oluştu");
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Enter tuşuyla submit
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleSubmit();
    }
  };

  return (
    <>
      {contextHolder}
      <Flex
        vertical
        className={styles.registerForm}
        onKeyPress={handleKeyPress}
      >
        <h2>Kayıt Ol</h2>

        <CustomInput
          type="text"
          label="Adınız Soyadınız"
          onChange={handleChange("fullname")}
          disabled={loading}
        />
        {errors.fullname && (
          <span className={styles.errorText}>{errors.fullname}</span>
        )}

        <CustomInput
          type="email"
          label="E-Posta Adresi"
          onChange={handleChange("email")}
          disabled={loading}
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email}</span>
        )}

        <CustomInput
          type="password"
          label="Şifre"
          onChange={handleChange("password")}
          disabled={loading}
        />
        {errors.password && (
          <span className={styles.errorText}>{errors.password}</span>
        )}
        <span className={styles.passwordHint}>
          En az 6 karakter, bir büyük harf, bir küçük harf ve bir rakam
        </span>

        <CustomInput
          type="password"
          label="Şifre (Tekrar)"
          onChange={handleChange("confirmPassword")}
          disabled={loading}
        />
        {errors.confirmPassword && (
          <span className={styles.errorText}>{errors.confirmPassword}</span>
        )}

        <button
          className={styles.registerBtn}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Kayıt yapılıyor..." : "Kayıt Ol"}
        </button>

        <p className={styles.loginLink}>
          Zaten hesabınız var mı? <a href="/auth/login">Giriş Yap</a>
        </p>
      </Flex>
    </>
  );
};

export default RegisterForm;
