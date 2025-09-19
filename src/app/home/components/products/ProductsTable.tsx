import React from "react";
import styles from "./ProductsTable.module.scss";
import { Flex, Row, Col } from "antd";
import { useProductStore } from "@/app/store/UseProductStore";
import ProductCard from "@/app/shared/product-card/ProductCard";
import { Product } from "@/app/types/Product";
import { formatProducts } from "@/app/utils/formatProduct";

const ProductsTable = () => {
  const { products } = useProductStore();
  const formattedProducts: Product[] = formatProducts(products);

  return (
    <div className={styles.productsTable}>
      <Flex justify="space-between" align="center">
        <Row gutter={[16, 16]} className={styles.productsRow}>
          {formattedProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard
                imageUrl={product.image}
                title={product.title}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </Flex>
    </div>
  );
};

export default ProductsTable;
