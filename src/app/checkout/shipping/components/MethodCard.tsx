"use client";
import React from "react";
import styles from "./MethodCard.module.scss";
import { Flex, DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import CustomRadio from "@/app/shared/radio/CustomRadio";
import { useAddressStore } from "@/app/store/useAddressStore";

type Props = {
  price: string;
  description: string;
  date?: Dayjs | null;
  checked: boolean;
  isDatePicker: boolean;
  onSelect: () => void;
  onDateChange?: (d?: Dayjs) => void;
};

const MethodCard: React.FC<Props> = ({
  price,
  description,
  date,
  checked,
  isDatePicker,
  onSelect,
  onDateChange,
}) => {
  const formatDate = (date: Dayjs | null | undefined) => {
    if (date) {
      const dayjsInstance = dayjs(date);
      return dayjsInstance.format("D MMM YYYY");
    }
    return "";
  };
  const { deliveryDate } = useAddressStore();
  return (
    <div
      className={`${styles.methodCard} ${checked ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <Flex justify="space-between" align="center">
        <Flex gap={16} align="center">
          <CustomRadio checked={checked} onChange={() => onSelect()} />
          <div className={styles.mainInfo}>
            <p className={styles.price}>{price}</p>
            <p className={styles.desc}>{description}</p>
          </div>
        </Flex>
        <div>
          {checked && isDatePicker ? (
            <div
              className={styles.datePicker}
              onClick={(e) => e.stopPropagation()}
            >
              <DatePicker
                value={deliveryDate ? dayjs(deliveryDate) : date}
                onChange={(m: Dayjs | null) =>
                  onDateChange?.(m ? m : undefined)
                }
                allowClear
                format="D MMM YYYY"
              />
            </div>
          ) : date ? (
            <p className={styles.date}>{formatDate(date)}</p>
          ) : (
            <p className={styles.selectDate}>Select Date ▾</p>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default MethodCard;
