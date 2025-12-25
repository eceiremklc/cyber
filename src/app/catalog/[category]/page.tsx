"use client";
import { useEffect } from "react";
import styles from "./Catalog.module.scss";
import { useProductStore } from "@/app/store/UseProductStore";
import { useParams } from "next/navigation";
import { Col, Flex, Row } from "antd";
import ProductCard from "@/app/shared/product-card/ProductCard";

export default function Page() {
  const { category } = useParams();
  const {
    products,
    fetchProducts,
    addToWishlist,
    removeFromWishlist,
    favProducts,
    addToCart,
  } = useProductStore();
  const filteredProducts = products?.filter(
    (p) => p.category.toLowerCase() === category
  );
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.catalog}>
      <Flex>
        <Col xl={6}>
          <p>filter</p>
        </Col>
        <Col xl={18}>
          <Row gutter={[16, 16]}>
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={8}>
                <ProductCard
                  imageUrl={product.image}
                  title={product.title}
                  price={product.price}
                  addToWishlist={() => addToWishlist(product)}
                  removeFromWishlist={() => removeFromWishlist(product)}
                  heartActive={favProducts.some((p) => p.id === product.id)}
                  onClick={() => addToCart(product)}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Flex>
    </div>
  );
}
