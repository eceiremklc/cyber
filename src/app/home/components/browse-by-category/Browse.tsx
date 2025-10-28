import React from "react";
import styles from "./Browse.module.scss";
import { Row, Col } from "antd";
import CategoryCard from "./CategoryCard";
import { IoWatchOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { CiHeadphones, CiCamera } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceGamepad } from "react-icons/tb";
import Link from "next/link";

const Browse = () => {
  return (
    <div className={styles.browse}>
      <h2>Browse By Category</h2>
      <Row justify="center" align={"middle"} gutter={[16, 16]}>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <Link href={"/catalog/phone"}>
            <CategoryCard icon={<IoPhonePortraitOutline />} header="Phones" />
          </Link>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <Link href={"/catalog/watch"}>
            <CategoryCard icon={<IoWatchOutline />} header="Smart Watches" />
          </Link>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <Link href={"/catalog/camera"}>
            <CategoryCard icon={<CiCamera />} header="Cameras" />
          </Link>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <Link href={"/catalog/headphone"}>
            <CategoryCard icon={<CiHeadphones />} header="Headphones" />
          </Link>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <Link href={"/catalog/computer"}>
            <CategoryCard
              icon={<HiOutlineComputerDesktop />}
              header="Computers"
            />
          </Link>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard icon={<TbDeviceGamepad />} header="Gaming" />
        </Col>
      </Row>
    </div>
  );
};

export default Browse;
