import React from "react";
import styles from "./ShopNow.module.scss";

type Props = {
  textColor?: string;
};

const ShopNow: React.FC<Props> = ({ textColor }) => {
  return (
    <div>
      {textColor === "black" ? (
        <div className={styles.blackText}>
          <button className={styles.shopBtnDark}>Shop Now</button>
        </div>
      ) : (
        <div className={styles.whiteText}>
          <button className={styles.shopBtnLight}>Shop Now</button>
        </div>
      )}
    </div>
  );
};

export default ShopNow;
