import React from "react";
import { Steps } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import styles from "./Checkout.module.scss";
import AddressCard from "./components/AddressCard";
const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <Steps
        current={0}
        items={[
          {
            icon: <FaLocationDot />,
            title: "Step 1",
            description: "Address",
          },
          {
            icon: <FaShoppingCart />,
            title: "Step 2",
            description: "Shipping",
          },
          {
            icon: <MdPayment />,
            title: "Step 3",
            description: "Payment",
          },
        ]}
      />
      <AddressCard />
    </div>
  );
};

export default Checkout;
