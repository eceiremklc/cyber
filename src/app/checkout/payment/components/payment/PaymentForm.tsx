"use client";
import React from "react";
import CreditCard from "./CreditCard";
import styles from "./PaymentForm.module.scss";
import CustomInput from "@/app/shared/input/CustomInput";
import { Flex } from "antd";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
const elementStyle = {
  style: {
    base: {
      fontSize: "16px",
      color: "#000",
      fontFamily: "inherit",
      "::placeholder": {
        color: "#999",
      },
    },
    invalid: {
      color: "#ff4d4f",
    },
  },
};

const PaymentForm = () => {
  const [cardHolderName, setCardHolderName] = React.useState("");

  return (
    <div>
      <CreditCard cardHolderName={cardHolderName} />
      <Flex vertical gap={4} className={styles.form}>
        <CustomInput
          type="text"
          onChange={(value: string) => setCardHolderName(value)}
          placeholder="Cardholder Name"
        />
        <div className={styles.input}>
          <CardNumberElement options={elementStyle} />
        </div>

        <Flex gap={20}>
          <div className={styles.input}>
            <CardExpiryElement options={elementStyle} />
          </div>
          <div className={styles.input}>
            <CardCvcElement options={elementStyle} />
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default PaymentForm;
