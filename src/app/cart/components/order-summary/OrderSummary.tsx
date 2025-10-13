"use client";
import React from "react";
import styles from "./OrderSummary.module.scss";
import { Input, Flex } from "antd";
import { useTotalPriceCount } from "@/app/hooks/UseTotalPriceCount";
import { useRouter } from "next/navigation";

const OrderSummary = () => {
  const totalPrice = useTotalPriceCount();
  const router = useRouter();
  const tax = 50;
  const shipping = 29;
  return (
    <div className={styles.orderSummary}>
      <h3>Order Summary</h3>
      <label>Discount code / Promo code</label>
      <Input placeholder="Code" />
      <label>Your bonus card number</label>
      <div className={styles.bonusInput}>
        <Input placeholder="Enter Card Number" />
        <button>Apply</button>
      </div>
      <Flex justify="space-between" align="center">
        <h6 className={styles.price}>Subtotal</h6>
        <h6 className={styles.price}>${totalPrice}</h6>
      </Flex>
      <Flex justify="space-between" align="center">
        <h6 className={styles.subHeaders}>Estimated Tax</h6>
        <h6 className={styles.price}>${tax}</h6>
      </Flex>
      <Flex justify="space-between" align="center">
        <h6 className={styles.subHeaders}>Estimated shipping & Handling</h6>
        <h6 className={styles.price}>${shipping}</h6>
      </Flex>
      <Flex justify="space-between" align="center">
        <h6 className={styles.price}>Total</h6>
        <h6 className={styles.price}>${totalPrice + tax + shipping}</h6>
      </Flex>
      <button
        onClick={() => {
          router.push("/checkout");
        }}
        className={styles.checkoutBtn}
      >
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
