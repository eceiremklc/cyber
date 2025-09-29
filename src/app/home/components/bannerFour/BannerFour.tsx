import React from "react";
import styles from "./BannerFour.module.scss";
import { Flex } from "antd";
import ShopNow from "@/app/shared/shop-btn/ShopNow";

const BannerFour = () => {
  return (
    <div className={styles.bannerFour}>
      <Flex vertical justify="center" align="center" className={styles.content}>
        <h1>
          Big Summer <strong>Sale</strong>
        </h1>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <ShopNow textColor="white" />
      </Flex>
    </div>
  );
};

export default BannerFour;
