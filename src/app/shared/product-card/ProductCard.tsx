"use client";
import React, { useEffect } from "react";
import styles from "./ProductCard.module.scss";
import { Flex } from "antd";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  addToWishlist?: () => void;
  removeFromWishlist?: () => void;
  heartActive?: boolean;
  onClick: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  addToWishlist,
  removeFromWishlist,
  heartActive = false,
  onClick,
}) => {
  return (
    <div className={styles.productCard}>
      <Flex vertical>
        <div className={styles.wishlistIcon}>
          {heartActive === true ? (
            <button onClick={removeFromWishlist}>
              <FaHeart fill="#ff0000" />
            </button>
          ) : (
            <button onClick={addToWishlist}>
              <FaRegHeart color="#90909077" />
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
        <button className={styles.cartBtn} onClick={onClick}>
          Buy Now
        </button>
      </Flex>
    </div>
  );
};

export default ProductCard;
