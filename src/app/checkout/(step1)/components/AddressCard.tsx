import React from "react";
import styles from "./AddressCard.module.scss";
import { Flex, Radio } from "antd";
import type { Address } from "@/app/hooks/UseAddress";

type props = {
  address: Address[];
};

const AddressCard: React.FC<props> = ({ address }) => {
  return (
    <div>
      {address?.map((a, index) => (
        <div className={styles.addressCard} key={index}>
          <Radio>{a.title}</Radio>
          <Flex align="center" justify="space-between">
            <div>
              <p>{a.body}</p>
              <p>telefon</p>
            </div>
            <div>
              <button>edit</button>
              <button>delete</button>
            </div>
          </Flex>
        </div>
      ))}
    </div>
  );
};

export default AddressCard;
