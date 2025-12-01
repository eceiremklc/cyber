"use client";
import React from "react";
import styles from "./CheckoutNavBtns.module.scss";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";

type Props = {
  backUrl: string;
  nextUrl: string;
};
const CheckoutNavBtns: React.FC<Props> = ({ backUrl, nextUrl }) => {
  const router = useRouter();
  return (
    <Flex gap={24} justify="flex-end" className={styles.navButtons}>
      <Button className={styles.backBtn} onClick={() => router.push(backUrl)}>
        Back
      </Button>
      <Button className={styles.nextBtn} onClick={() => router.push(nextUrl)}>
        Next
      </Button>
    </Flex>
  );
};

export default CheckoutNavBtns;
