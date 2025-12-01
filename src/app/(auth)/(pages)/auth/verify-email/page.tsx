"use client";
import React from "react";
import styles from "./VerificationPage.module.scss";
import { Flex } from "antd";

const Page = () => {
  return (
    <Flex vertical justify="center" align="center" className={styles.verify}>
      <Flex
        vertical
        align="center"
        justify="center"
        gap={16}
        className={styles.wrapper}
      >
        <Flex
          justify="center"
          align="center"
          gap={16}
          className={styles.successIcon}
        >
          <p>✅</p>
          <h2>E-Mail Verification Successful</h2>
        </Flex>

        <p>
          Your e-mail has been verified. You can now start using your account.
        </p>
      </Flex>
    </Flex>
  );
};

export default Page;
