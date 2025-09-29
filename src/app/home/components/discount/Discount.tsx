"use client";
import React from "react";
import styles from "./Discount.module.scss";
import { Col, Flex, Row } from "antd";
import { useProductStore } from "@/app/store/UseProductStore";
import ProductCard from "@/app/shared/product-card/ProductCard";

const Discount = () => {
  const { discountProducts, addToWishlist, removeFromWishlist, favProducts } =
    useProductStore();
  const discountedProducts = discountProducts ? discountProducts(50) : [];

  return (
    <div className={styles.discount}>
      <h3>Discounts up to -50%</h3>
      <Row gutter={[16, 16]} className={styles.productRow}>
        {discountedProducts.map((product) => (
          <Col xl={6} key={product.id}>
            <ProductCard
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              addToWishlist={() => addToWishlist(product)}
              removeFromWishlist={() => removeFromWishlist(product)}
              heartActive={favProducts.some((p) => p.id === product.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Discount;
