import React from "react";
import styles from "./Banner.module.scss";
import { Button, Row, Col } from "antd";
import Image from "next/image";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <Row
        justify="space-between"
        align="middle"
        className={styles.bannerContent}
      >
        <Col xs={24} sm={24} md={14} className={styles.bannerTextContainer}>
          <h3>Pro.Beyond.</h3>
          <p className={styles.bannerText}>
            IPhone 14 <strong>Pro</strong>
          </p>
          <p className={styles.bannerDesc}>
            Created to change everything for the better. For everyone
          </p>
          <Button variant="outlined" className={styles.shopBtn}>
            Shop Now
          </Button>
        </Col>
        <Col xs={24} sm={24} md={10} className={styles.bannerImageContainer}>
          <Image
            src="/banner.svg"
            alt="Banner"
            width={406}
            height={632}
            className={styles.bimg}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
