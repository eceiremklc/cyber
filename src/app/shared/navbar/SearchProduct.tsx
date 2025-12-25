"use client";
import React, { useState } from "react";
import styles from "./SearchProduct.module.scss";
import { Col, Flex, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useProductStore } from "@/app/store/UseProductStore";
import Image from "next/image";

const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const { searchProduct, products } = useProductStore();

  const handleSearch = (query: string) => {
    searchProduct(query);
    setSearch(query);
  };
  return (
    <div className={styles.searchBar}>
      <Input
        className={styles.searchInput}
        size="large"
        placeholder=" Search"
        prefix={<SearchOutlined />}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {search ? (
        <Col className={styles.searchField}>
          {products.map((product) => (
            <div key={product.id} className={styles.searchItem}>
              <Flex align="center" justify="space-between" gap={10}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </Flex>
            </div>
          ))}
        </Col>
      ) : (
        <Col xs={0} className={styles.searchField}></Col>
      )}
    </div>
  );
};

export default SearchProduct;
