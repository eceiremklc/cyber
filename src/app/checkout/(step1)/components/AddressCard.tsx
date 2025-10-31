"use client";
import React, { useState } from "react";
import styles from "./AddressCard.module.scss";
import { Badge, Button, Flex } from "antd";
import CustomRadio from "@/app/shared/radio/CustomRadio";
import { MdEdit, MdClose } from "react-icons/md";
import { useAddressStore } from "@/app/store/useAddressStore";
import { useAddress } from "@/app/hooks/UseAddress";

const AddressCard = () => {
  const [checked, setChecked] = useState(false);
  const { addresses } = useAddressStore();
  const { deleteAddress } = useAddress();
  return (
    <Flex vertical gap={24}>
      {addresses?.map((a, index) => (
        <Flex
          className={styles.addressCard}
          key={index}
          align="center"
          justify="space-between"
        >
          <div className={styles.cardContent}>
            <Flex align="center" gap={16} className={styles.selectAddress}>
              {" "}
              <CustomRadio
                onChange={() =>
                  checked ? setChecked(false) : setChecked(true)
                }
                checked={checked}
              />
              <p className={styles.label}>{a.title}</p>
              <Badge count={a.badge} color="black" />
            </Flex>

            <Flex align="center" justify="space-between">
              <Flex vertical gap={8} className={styles.addBody}>
                <p>{a.body}</p>
                <p>telefon</p>
              </Flex>
            </Flex>
          </div>
          <div className={styles.btnBox}>
            <Button variant="text">
              <MdEdit fontSize={24} />
            </Button>
            <Button variant="text" onClick={() => deleteAddress(a.id)}>
              <MdClose fontSize={24} />
            </Button>
          </div>
        </Flex>
      ))}
    </Flex>
  );
};

export default AddressCard;
