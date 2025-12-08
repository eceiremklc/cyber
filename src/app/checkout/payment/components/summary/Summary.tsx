"use client";
import React from "react";
import styles from "./Summary.module.scss";
import { useProductStore } from "@/app/store/UseProductStore";
import Card from "./Card";
import { Flex } from "antd";
import { useAddressStore } from "@/app/store/useAddressStore";

const Summary = () => {
  const { cart } = useProductStore();
  const { selectedAddress, selectedShippingMethod } = useAddressStore();
  return (
    <div className={styles.summary}>
      <h3>Summary</h3>
      <Flex vertical gap={16}>
        {cart.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Flex>
      <Flex vertical>
        <div>
          <p>Address</p>
          <p>
            {selectedAddress ? selectedAddress.body : "No address selected"}
          </p>
        </div>
        <div>
          <p>Shipment method</p>
          <p>
            {selectedShippingMethod
              ? selectedShippingMethod.price
              : "No method selected"}
          </p>
        </div>
      </Flex>
    </div>
  );
};

export default Summary;
