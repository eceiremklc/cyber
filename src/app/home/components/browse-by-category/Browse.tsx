import React from "react";
import styles from "./Browse.module.scss";
import { Flex, Row, Col } from "antd";
import CategoryCard from "./CategoryCard";
import { MobileOutlined } from "@ant-design/icons";
import {
  IoWatchOutline,
  IoPhonePortraitOutline,
  IoTvOutline,
} from "react-icons/io5";
import { CiHeadphones, CiCamera, CiDesktopMouse2 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceGamepad } from "react-icons/tb";

const Browse = () => {
  return (
    <div className={styles.browse}>
      <h2>Browse By Category</h2>
      <Row justify="center" align={"middle"} gutter={[16, 16]}>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard icon={<IoPhonePortraitOutline />} header="Phones" />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard icon={<IoWatchOutline />} header="Smart Watches" />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard icon={<CiCamera />} header="Cameras" />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard icon={<CiHeadphones />} header="Headphones" />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard
            icon={<HiOutlineComputerDesktop />}
            header="Computers"
          />
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} className={styles.col}>
          <CategoryCard icon={<TbDeviceGamepad />} header="Gaming" />
        </Col>
      </Row>
    </div>
  );
};

export default Browse;
