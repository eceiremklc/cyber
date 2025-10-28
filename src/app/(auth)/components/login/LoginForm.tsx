"use client";
import CustomInput from "@/app/shared/input/CustomInput";
import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { Flex } from "antd";
import { signInWithEmail } from "@/app/utils/logIn";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Flex vertical className={styles.registerForm}>
      <h2>Login</h2>
      <CustomInput type="text" label="E-Posta Adresi" onChange={setEmail} />
      <CustomInput type="password" label="Şifre" onChange={setPassword} />
      <button
        onClick={() => signInWithEmail(email, password)}
        className={styles.registerBtn}
      >
        Login
      </button>
    </Flex>
  );
};

export default RegisterForm;
