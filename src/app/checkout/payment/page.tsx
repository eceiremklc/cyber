"use client";
import React from "react";
import { itemArray } from "../(step1)/page";
import { Col, Flex, Steps } from "antd";
import styles from "./Payment.module.scss";
import Summary from "./components/summary/Summary";
import PaymentRight from "./components/payment/PaymentRight";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className={styles.payment}>
        <Steps current={2} items={itemArray} className={styles.stepper} />
        <Flex justify="space-between">
          <Col xl={11} md={24}>
            <Summary />
          </Col>
          <Col xl={11} md={24}>
            <PaymentRight />
          </Col>
        </Flex>
      </div>
    </Elements>
  );
};

export default Payment;
