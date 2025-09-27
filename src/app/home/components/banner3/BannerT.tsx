import React from "react";
import styles from "./BannerT.module.scss";
import { Flex, Row, Col } from "antd";
import Image from "next/image";

const BannerT = () => {
  return (
    <div>
      <Flex className={styles.bannerT}>
        <Col xs={24} md={6} lg={6}>
          <Flex vertical align="center" className={styles.popularProducts}>
            <div className={styles.bImg}>
              <Image
                src="/popular.png"
                alt="Popular products"
                width={360}
                height={366}
              ></Image>
            </div>
            <div className={styles.bText}>
              <h3>Popular Products</h3>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
            </div>
          </Flex>
        </Col>
        <Col xs={24} md={6} lg={6}>
          <Flex vertical align="center" className={styles.ipad}>
            <div className={styles.bImg}>
              <Image
                src="/ipadpro.png"
                alt="Popular products"
                width={360}
                height={366}
              ></Image>
            </div>
            <div className={styles.bText}>
              <h3>IPad Pro</h3>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
            </div>
          </Flex>
        </Col>
        <Col xs={24} md={6} lg={6}>
          <Flex vertical align="center" className={styles.samsung}>
            <div className={styles.bImg}>
              <Image
                src="/smgalaxy.png"
                alt="Popular products"
                width={360}
                height={366}
              ></Image>
            </div>
            <div className={styles.bText}>
              <h3>Samsung Galaxy</h3>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
            </div>
          </Flex>
        </Col>
        <Col xs={24} md={6} lg={6}>
          <Flex vertical align="center" className={styles.macbook}>
            <div className={styles.bImg}>
              <Image
                src="/MacBookPro14.svg"
                alt="Popular products"
                width={360}
                height={366}
              ></Image>
            </div>
            <div className={styles.bText}>
              <h3>Macbook Pro</h3>
              <p>
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
            </div>
          </Flex>
        </Col>
      </Flex>
    </div>
  );
};

export default BannerT;
