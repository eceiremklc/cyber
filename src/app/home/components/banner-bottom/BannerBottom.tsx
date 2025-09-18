import React from "react";
import styles from "./BannerBottom.module.scss";
import { Flex, Row, Col, Button } from "antd";
import Image from "next/image";
import PRODUCT_DATA from "./ProductData";
import { ProductCard } from "./ProductCard";
const BannerBottom: React.FC = () => {
  return (
    <div className={styles.bannerBottom}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} className={styles.leftCol}>
          <ProductCard
            product={PRODUCT_DATA.playstation}
            className={styles.playStation}
            textClass={styles.playStationText}
          />
          <Flex wrap>
            <Col xs={24} sm={24} md={24} lg={12}>
              <ProductCard
                product={PRODUCT_DATA.airpods}
                className={styles.airpods}
                textClass={styles.airpodsText}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <ProductCard
                product={PRODUCT_DATA.visionPro}
                className={styles.visionPro}
                textClass={styles.vpText}
              />
            </Col>
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} className={styles.macbookCol}>
          <Flex className={styles.macbook} justify="space-between">
            <Flex vertical justify="center" className={styles.macbookText}>
              <h3>{PRODUCT_DATA.macbook.title}</h3>
              <h4>{PRODUCT_DATA.macbook.subtitle}</h4>
              <p className={styles.bannerText}>
                {PRODUCT_DATA.macbook.description}
              </p>
              <Button variant="outlined" className={styles.shopBtn}>
                Shop Now
              </Button>
            </Flex>
            <div className={styles.imageWrapper}>
              <Image
                src={PRODUCT_DATA.macbook.src}
                alt={PRODUCT_DATA.macbook.alt}
                width={PRODUCT_DATA.macbook.width}
                height={PRODUCT_DATA.macbook.height}
                className={styles.macbookImg}
                priority
              />
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default BannerBottom;
