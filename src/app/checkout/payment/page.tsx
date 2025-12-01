import React from "react";
import { itemArray } from "../(step1)/page";
import { Col, Flex, Steps } from "antd";
import styles from "./Payment.module.scss";
import Summary from "./components/summary/Summary";

const Payment = () => {
  return (
    <div className={styles.payment}>
      <Steps current={2} items={itemArray} className={styles.stepper} />
      <Flex justify="space-between">
        <Col xl={11} md={24}>
          <Summary />
        </Col>
        <Col xl={11} md={24}></Col>
      </Flex>
    </div>
  );
};

export default Payment;
