"use client";
import React from "react";
import styles from "./CartItem.module.scss";
import { Flex } from "antd";
import Image from "next/image";

type Props = {
  imageURL: string;
  title: string;
  price: number;
  quantity: number;
  increaseItem?: () => void;
  decreaseItem?: () => void;
  delete: () => void;
  onClick: () => void;
};

const CartItem: React.FC<Props> = ({
  imageURL,
  title,
  quantity,
  price,
  increaseItem,
  decreaseItem,
}) => {
  return (
    <div>
      <Flex>
        <Image src={imageURL} alt={title} width={90} height={90} />
        <h4>{title}</h4>
        <div className={styles.itemQuantity}>
          <button onClick={decreaseItem}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseItem}>+</button>
        </div>
        <h4>{price}</h4>
      </Flex>
    </div>
  );
};

export default CartItem;
