import { Product } from "@/app/types/Product";
import { Flex } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./Card.module.scss";

type Props = {
  product: Product;
};

const Card: React.FC<Props> = ({ product }) => {
  return (
    <Flex justify="space-between" className={styles.card}>
      <Flex gap={16}>
        <Image src={product.image} width={40} height={40} alt={product.title} />
        <p className={styles.pTitle}>{product.title}</p>
      </Flex>
      <p className={styles.pPrice}>${product.price}</p>
    </Flex>
  );
};

export default Card;
