"use client";
import React, { useState } from "react";
import styles from "./CreditCard.module.scss";
import { FcSimCardChip } from "react-icons/fc";
import { PiContactlessPaymentLight } from "react-icons/pi";
import { Flex } from "antd";

type Props = {
  creditCardNumber?: string;
  cardHolderName?: string;
  expirationDate?: string;
  cvv?: string;
};
const CreditCard: React.FC<Props> = ({
  creditCardNumber,
  cardHolderName,
  expirationDate,
  cvv,
}) => {
  const [flipped, setFlipped] = useState(false);
  const formattedCardNumber = creditCardNumber
    ? creditCardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")
    : "#### #### #### ####";
  return (
    <div className={styles.card}>
      {flipped ? (
        <div className={styles.cardBack} onClick={() => setFlipped(false)}>
          <div className={styles.cvvSection}>
            <span className={styles.cvvLabel}>CVV</span>
            <span className={styles.cvvValue}>{cvv || "###"}</span>
          </div>
        </div>
      ) : (
        <div className={styles.cardFront} onClick={() => setFlipped(true)}>
          <Flex gap={10} align="center" className={styles.chip}>
            <FcSimCardChip size={35} />
            <PiContactlessPaymentLight size={30} fill="#ffffff" />
          </Flex>
          <p className={styles.cardNumber}>{formattedCardNumber}</p>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
