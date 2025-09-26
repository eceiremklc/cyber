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
  heartActive?: boolean;
}
const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  addToWishlist,
  heartActive = false,
}) => {
  return (
    <div className={styles.productCard}>
      <Flex vertical>
        <div className={styles.wishlistIcon}>
          {heartActive === true ? (
            <IoHeartOutline fill="#ff0000" />
          ) : (
            <button onClick={addToWishlist}>
              <IoHeartOutline fill="#000000" />
            </button>
          )}
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
        <button className={styles.cartBtn}>Buy Now</button>
      </Flex>
    </div>
  );
};

export default ProductCard;
