import React from "react";
import styles from "./AuthBanner.module.scss";
import { Flex } from "antd";

type AuthBannerProps = {
  isLogin: boolean;
};

const AuthBanner: React.FC<AuthBannerProps> = ({ isLogin }) => {
  return (
    <Flex align="center" justify="center" className={styles.authBanner}>
      <Flex
        vertical
        justify="center"
        align="center"
        className={styles.authContent}
      >
        <h1 className={styles.header}>My Account</h1>
        {isLogin ? (
          <p>
            Home / My Account / <strong>Login</strong>
          </p>
        ) : (
          <p>
            Home / My Account / <strong>Register</strong>
          </p>
        )}
      </Flex>
    </Flex>
  );
};

export default AuthBanner;
