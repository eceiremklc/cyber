import React from "react";
import styles from "./ProductsTable.module.scss";
import { Flex, Row, Col } from "antd";
import { useProductStore } from "@/app/store/UseProductStore";
import ProductCard from "@/app/shared/product-card/ProductCard";
import { Product } from "@/app/types/Product";
import { formatProducts } from "@/app/utils/formatProduct";

const ProductsTable = () => {
  const { products, addToWishlist, favProducts } = useProductStore();
  const formattedProducts: Product[] = formatProducts(products);

  return (
    <div className={styles.productsTable}>
      <Row className={styles.categoriesRow}>
        <button>
          <h3>New Arrival</h3>
        </button>
        <button>
          <h3>Bestseller</h3>
        </button>
        <button>
          <h3>Featured Products</h3>
        </button>
      </Row>
      <Flex justify="space-between" align="center">
        <Row gutter={[16, 16]} className={styles.productsRow}>
          {formattedProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                addToWishlist={() => addToWishlist(product)}
                heartActive={favProducts.some((p) => p.id === product.id)}
              />
            </Col>
          ))}
        </Row>
      </Flex>
    </div>
  );
};

export default ProductsTable;
