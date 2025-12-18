"use client";
import React from "react";
import styles from "./CheckoutNavBtns.module.scss";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";

type Props = {
  backUrl: string;
  nextUrl?: string;
  onNext?: () => void;
  nextChildren?: string;
};
const CheckoutNavBtns: React.FC<Props> = ({
  backUrl,
  nextUrl,
  onNext,
  nextChildren,
}) => {
  const router = useRouter();
  const handleNext = () => {
    if (!onNext && nextUrl) {
      router.push(nextUrl);
    } else if (onNext) {
      onNext();
    }
  };
  return (
    <Flex gap={24} justify="flex-end" className={styles.navButtons}>
      <Button className={styles.backBtn} onClick={() => router.push(backUrl)}>
        Back
      </Button>
      <Button className={styles.nextBtn} onClick={() => handleNext()}>
        {nextChildren ? nextChildren : "Next"}
      </Button>
    </Flex>
  );
};

export default CheckoutNavBtns;
