"use client";
import React, { useState } from "react";
import styles from "./ShippingMethods.module.scss";
import MethodCard from "./MethodCard";
import { Flex } from "antd";
import { useAddressStore } from "@/app/store/useAddressStore";
import { ShippingMethod } from "@/app/types/shippingMethod";

const addDays = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

const initialShippingMethods: ShippingMethod[] = [
  {
    id: 0,
    price: "Free",
    description: "Regulary shipment",
    getCalculatedDate: () => addDays(10),
    isDatePicker: false,
  },
  {
    id: 1,
    price: "$8.50",
    description: "Get your delivery as soon as possible",
    getCalculatedDate: () => addDays(2),
    isDatePicker: false,
  },
  {
    id: 2,
    price: "Schedule",
    description: "Pick a date when you want to get your delivery",
    getCalculatedDate: () => null,
    isDatePicker: true,
  },
];

const ShippingMethods: React.FC = () => {
  const [selectedMethodId, setSelectedMethodId] = useState<number>(0);
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);

  const { setSelectedShippingMethod } = useAddressStore();

  const handleSelect = (method: ShippingMethod) => {
    setSelectedMethodId(method.id);
    if (method.isDatePicker) {
      setSelectedShippingMethod({ ...method, deliveryDate: scheduledDate });
    } else {
      setSelectedShippingMethod({
        ...method,
        deliveryDate: method.getCalculatedDate() || null,
      });
    }
  };

  const handleDateChange = (date?: Date) => {
    setScheduledDate(date ?? null);
    const scheduledMethod = initialShippingMethods.find((m) => m.id === 2);
    if (scheduledMethod) {
      setSelectedShippingMethod({
        ...scheduledMethod,
        deliveryDate: date ?? null,
      });
    }
  };

  return (
    <div className={styles.shippingMethods}>
      <h3>Shipment Method</h3>

      <Flex vertical gap={16} className={styles.methodsList}>
        {initialShippingMethods.map((method) => (
          <MethodCard
            key={method.id}
            price={method.price}
            description={method.description}
            checked={method.id === selectedMethodId}
            date={
              (method.id === 2 ? scheduledDate : method.getCalculatedDate()) ??
              undefined
            }
            onSelect={() => handleSelect(method)}
            onDateChange={handleDateChange}
          />
        ))}
      </Flex>
    </div>
  );
};

export default ShippingMethods;
