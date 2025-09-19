"use client";
import React, { useEffect } from "react";
import styles from "./ProductCard.module.scss";
import { Flex } from "antd";
import { IoHeartOutline } from "react-icons/io5";
import Image from "next/image";
import { useProductStore } from "@/app/store/UseProductStore";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  addToWishlist?: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  addToWishlist,
}) => {
  return (
    <div className={styles.productCard}>
      <Flex vertical>
        <div className={styles.wishlistIcon}>
          <IoHeartOutline onClick={addToWishlist} />
        </div>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className={styles.producImg}
        />
        <h4>{title}</h4>
        <p>${price}</p>
      </Flex>
    </div>
  );
};

export default ProductCard;
