"use client";
import React from "react";
import styles from "./Summary.module.scss";
import { useProductStore } from "@/app/store/UseProductStore";
import Card from "./Card";
import { Flex } from "antd";
import { useAddressStore } from "@/app/store/useAddressStore";
import { useTotalPriceCount } from "@/app/hooks/UseTotalPriceCount";

const Summary = () => {
  const { cart } = useProductStore();
  const totalPrice = useTotalPriceCount();
  const tax = 50;
  const shipping = 29;
  const { selectedAddress, selectedShippingMethod } = useAddressStore();
  const extraShipping = selectedShippingMethod?.price.includes("$")
    ? Number(selectedShippingMethod.price.split("$")[1]) + Number(shipping)
    : 0;
  return (
    <div className={styles.summary}>
      <h3>Summary</h3>
      <Flex vertical gap={16}>
        {cart.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Flex>
      <Flex vertical>
        <div className={styles.address}>
          <p className={styles.addressHead}>Address</p>
          <p className={styles.addressBody}>
            {selectedAddress ? selectedAddress.body : "No address selected"}
          </p>
        </div>
        <div className={styles.shipment}>
          <p className={styles.shipmentHead}>Shipment method</p>
          <p className={styles.shipmentBody}>
            {selectedShippingMethod
              ? selectedShippingMethod.price
              : "No method selected"}
          </p>
        </div>
        <Flex
          className={styles.subtotal}
          justify="space-between"
          align="center"
        >
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </Flex>
        <Flex className={styles.tax} justify="space-between" align="center">
          <p className={styles.taxHead}>Estimated Tax</p>
          <p className={styles.taxPrice}>${tax}</p>
        </Flex>
        <Flex className={styles.tax} justify="space-between" align="center">
          <p className={styles.taxHead}>Estimated shipping & Handling</p>
          <p className={styles.taxPrice}>${extraShipping}</p>
        </Flex>
        <Flex justify="space-between" align="center">
          <p className={styles.totalHead}>Total</p>
          <p className={styles.totalPrice}>
            ${totalPrice + tax + extraShipping}
          </p>
        </Flex>
      </Flex>
    </div>
  );
};

export default Summary;
