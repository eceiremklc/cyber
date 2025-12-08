"use client";
import React from "react";
import styles from "./MethodCard.module.scss";
import { Flex, DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import CustomRadio from "@/app/shared/radio/CustomRadio";

type Props = {
  price: string;
  description: string;
  date?: Date;
  checked: boolean;
  onSelect: () => void;
  onDateChange?: (d?: Date) => void;
};

const MethodCard: React.FC<Props> = ({
  price,
  description,
  date,
  checked,
  onSelect,
  onDateChange,
}) => {
  const formattedDate = date
    ? date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

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
          {checked ? (
            <div
              className={styles.datePicker}
              onClick={(e) => e.stopPropagation()}
            >
              <DatePicker
                value={date ? dayjs(date) : null}
                onChange={(m: Dayjs | null) =>
                  onDateChange?.(m ? m.toDate() : undefined)
                }
                allowClear
              />
            </div>
          ) : date ? (
            <p className={styles.date}>{formattedDate}</p>
          ) : (
            <p className={styles.selectDate}>Select Date ▾</p>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default MethodCard;
