import React from "react";
import styles from "./BannerBottom.module.scss";
import { Flex, Row, Col, Button } from "antd";
import Image from "next/image";
const BannerBottom = () => {
  return (
    <div className={styles.bannerBottom}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} className={styles.leftCol}>
          <Flex className={styles.PlayStation} justify="space-between">
            <div className={styles.playStationImgWrap}>
              <Image
                src="/PlayStation.svg"
                alt="PlayStation"
                width={360}
                height={343}
                className={styles.playStationImage}
              />
            </div>
            <Flex vertical justify="center" className={styles.playStationText}>
              <h3>Playstation 5</h3>
              <p className={styles.bannerText}>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </Flex>
          </Flex>
          <Flex wrap>
            <Col xs={24} sm={24} md={24} lg={12}>
              <Flex className={styles.Airpods} justify="space-between">
                <div className={styles.playStationImgWrap}>
                  <Image
                    src="/airpodsmax.svg"
                    alt="PlayStation"
                    width={285.5}
                    height={272}
                    className={styles.airpodsImage}
                  />
                </div>
                <Flex vertical justify="center" className={styles.airpodsText}>
                  <h3>
                    Apple
                    <br />
                    Airpods
                    <br />
                    <strong>Max</strong>
                  </h3>
                  <p className={styles.bannerText}>
                    Computational audio. <br /> Listen, it's powerful
                  </p>
                </Flex>
              </Flex>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <Flex className={styles.visionPro} justify="space-between">
                <div className={styles.playStationImgWrap}>
                  <Image
                    src="/vp.svg"
                    alt="VisionPro"
                    width={285.5}
                    height={272}
                    className={styles.vpImage}
                  />
                </div>
                <Flex vertical justify="center" className={styles.vpText}>
                  <h3>
                    Apple <br /> Vision <strong>Pro</strong>
                  </h3>
                  <p className={styles.bannerText}>
                    An immersive way to <br />
                    experience entertainment.
                  </p>
                </Flex>
              </Flex>
            </Col>
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} className={styles.macbookCol}>
          <Flex className={styles.Macbook} justify="space-between">
            <Flex vertical justify="center" className={styles.macbookText}>
              <h3>Macbook</h3>
              <h4>Air</h4>
              <p className={styles.bannerText}>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <Button variant="outlined" className={styles.shopBtn}>
                Shop Now
              </Button>
            </Flex>
            <div className={styles.playStationImgWrap}>
              <Image
                src="/MacBookPro14.svg"
                alt="Macbook Pro"
                width={776}
                height={600}
                className={styles.macbookImg}
              />
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default BannerBottom;
