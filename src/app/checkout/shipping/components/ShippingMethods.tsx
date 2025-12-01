"use client";
import React, { useState } from "react";
import styles from "./ShippingMethods.module.scss";
import MethodCard from "./MethodCard";
import { Flex } from "antd";

const ShippingMethods = () => {
  const [selected, setSelected] = useState<number>(0);

  const initialDates: Array<Date | undefined> = [
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    undefined,
  ];

  const [dates, setDates] = useState<Array<Date | undefined>>(initialDates);

  const setDateAt = (index: number, d?: Date) => {
    setDates((prev) => {
      const copy = [...prev];
      copy[index] = d;
      return copy;
    });
  };

  return (
    <div className={styles.shippingMethods}>
      <h3>Shipment Method</h3>
      <Flex vertical gap={16} className={styles.methodsList}>
        <MethodCard
          price="Free"
          description="Regulary shipment"
          date={dates[0]}
          checked={selected === 0}
          onSelect={() => setSelected(0)}
          onDateChange={(d?: Date) => setDateAt(0, d)}
        />
        <MethodCard
          price="$8.50"
          description="Get your delivery as soon as possible"
          date={dates[1]}
          checked={selected === 1}
          onSelect={() => setSelected(1)}
          onDateChange={(d?: Date) => setDateAt(1, d)}
        />
        <MethodCard
          price="Schedule"
          description="Pick a date when you want to get your delivery"
          date={dates[2]}
          checked={selected === 2}
          onSelect={() => setSelected(2)}
          onDateChange={(d?: Date) => setDateAt(2, d)}
        />
      </Flex>
    </div>
  );
};

export default ShippingMethods;
