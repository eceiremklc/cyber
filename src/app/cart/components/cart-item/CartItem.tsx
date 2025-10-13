"use client";
import React from "react";
import styles from "./CartItem.module.scss";
import { Flex } from "antd";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";

type Props = {
  imageURL: string;
  title: string;
  price: number;
  quantity: number;
  barcode: number;
  increaseItem?: () => void;
  decreaseItem?: () => void;
  removeFromCart: () => void;
  onClick: () => void;
};

const CartItem: React.FC<Props> = ({
  imageURL,
  title,
  quantity,
  price,
  barcode,
  increaseItem,
  decreaseItem,
  removeFromCart,
}) => {
  return (
    <div className={styles.cartItem}>
      <Flex align="center" gap={16}>
        <Image src={imageURL} alt={title} width={90} height={90} />
        <Flex justify="space-between" align="center" className={styles.cartDetail}>
          <Flex vertical className={styles.text}>
          <h4 className={styles.productTitle}>{title}</h4>
          <p className={styles.barcode}>#{barcode}</p>
        </Flex>
        <div className={styles.itemQuantity}>
          <button onClick={decreaseItem}>-</button>
          <div className={styles.qBox}>{quantity}</div>
          <button onClick={increaseItem}>+</button>
        </div>
        <h4 className={styles.price}>${price}</h4>
        <button className={styles.removeBtn} onClick={removeFromCart}><IoIosClose/></button>
        </Flex>
      </Flex>
    </div>
  );
};

export default CartItem;
