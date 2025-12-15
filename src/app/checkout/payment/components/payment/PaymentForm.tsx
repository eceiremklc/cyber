"use client";
import React from "react";
import CreditCard from "./CreditCard";
import styles from "./PaymentForm.module.scss";
import CustomInput from "@/app/shared/input/CustomInput";
import { Flex } from "antd";

const PaymentForm = () => {
  const [cardHolderName, setCardHolderName] = React.useState("");
  const [creditCardNumber, setCreditCardNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  return (
    <div>
      <CreditCard
        cardHolderName={cardHolderName}
        creditCardNumber={creditCardNumber}
        expirationDate={expirationDate}
        cvv={cvv}
      />
      <Flex vertical gap={4} className={styles.form}>
        <CustomInput
          type="text"
          onChange={(value: string) => setCardHolderName(value)}
          placeholder="Cardholder Name"
        />
        <CustomInput
          type="text"
          onChange={(value: string) => setCreditCardNumber(value)}
          placeholder="Card Number"
        />
        <Flex gap={20}>
          <CustomInput
            type="text"
            onChange={(value: string) => setExpirationDate(value)}
            placeholder="Exp. Date"
          />
          <CustomInput
            type="text"
            onChange={(value: string) => setCvv(value)}
            placeholder="CVV"
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default PaymentForm;
