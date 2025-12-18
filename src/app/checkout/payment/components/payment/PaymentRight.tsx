"use client";

import { Button, Checkbox, Flex } from "antd";
import styles from "./PaymentRight.module.scss";
import PaymentForm from "./PaymentForm";
import CheckoutNavBtns from "@/app/shared/checkout-nav-buttons/CheckoutNavBtns";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useTotalPriceCount } from "@/app/hooks/UseTotalPriceCount";
import { handlePay } from "@/app/utils/handlePay";

const PaymentRight = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = useTotalPriceCount();
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.payment}>
      <h3 className={styles.head}>Payment</h3>

      <Flex gap={56} className={styles.methods}>
        <Flex vertical>
          <Button
            className={`${styles.methodBtn} ${styles.selected}`}
            type="text"
            block
          >
            Credit Card
          </Button>
          <div className={styles.line} />
        </Flex>

        <Button className={styles.methodBtn} type="text" block disabled>
          PayPal
        </Button>
        <Button className={styles.methodBtn} type="text" block disabled>
          PayPal Credit
        </Button>
      </Flex>

      <PaymentForm />

      <div className={styles.check}>
        <Checkbox>Same as billing address</Checkbox>
      </div>

      <Flex justify="flex-start" className={styles.nav}>
        <CheckoutNavBtns
          backUrl="/checkout/shipping"
          nextChildren={loading ? "Paying..." : "Pay"}
          onNext={() => {
            if (!stripe || !elements) {
              return;
            }
            handlePay(stripe, elements, totalPrice, setLoading);
          }}
        />
      </Flex>
    </div>
  );
};

export default PaymentRight;
