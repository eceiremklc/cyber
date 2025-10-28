import React from "react";
import styles from "./AddressCard.module.scss";
import { Flex, Radio } from "antd";

const AddressCard = () => {
  return (
    <div className={styles.addressCard}>
      <Radio>adres adı</Radio>
      <Flex align="center" justify="space-between">
        <div>
          <p>adres</p>
          <p>telefon</p>
        </div>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </Flex>
    </div>
  );
};

export default AddressCard;
