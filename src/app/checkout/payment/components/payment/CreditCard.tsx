"use client";
import React, { useState } from "react";
import styles from "./CreditCard.module.scss";
import { FcSimCardChip } from "react-icons/fc";
import { PiContactlessPaymentLight } from "react-icons/pi";
import { SiMastercard } from "react-icons/si";
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
  const formattedExpirationDate =
    expirationDate?.slice(0, 2) + "/" + expirationDate?.slice(2, 4);
  return (
    <div className={styles.card} onClick={() => setFlipped((prev) => !prev)}>
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}>
        <div className={styles.cardFront}>
          <Flex gap={10} align="center" className={styles.chip}>
            <FcSimCardChip size={35} />
            <PiContactlessPaymentLight size={30} fill="#ffffff" />
          </Flex>

          <p className={styles.cardNumber}>{formattedCardNumber}</p>

          <Flex
            justify="space-between"
            align="center"
            className={styles.cardBottom}
          >
            <p className={styles.cardHolder}>
              {cardHolderName || "CardHolder"}
            </p>
            <SiMastercard fill="#F79E1B" size={40} />
          </Flex>
        </div>

        <Flex justify="space-around" align="end" className={styles.cardBack}>
          <div className={styles.cvvSection}>
            <span className={styles.cvvLabel}>CVV: </span>
            <span className={styles.cvvValue}>{cvv || "###"}</span>
          </div>

          <div className={styles.expirationDate}>
            <span className={styles.expirationLabel}>Exp: </span>
            <span className={styles.expirationValue}>
              {expirationDate ? formattedExpirationDate : "MM/YY"}
            </span>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CreditCard;
