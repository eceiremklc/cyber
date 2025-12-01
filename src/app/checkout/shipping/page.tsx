import { Steps } from "antd";
import { itemArray } from "../(step1)/page";
import styles from "./Shipping.module.scss";
import ShippingMethods from "./components/ShippingMethods";
import CheckoutNavBtns from "@/app/shared/checkout-nav-buttons/CheckoutNavBtns";

const Shipping = () => {
  return (
    <div>
      <div className={styles.shipping}>
        <Steps current={1} items={itemArray} />
        <ShippingMethods />
        <CheckoutNavBtns backUrl="/checkout" nextUrl="/checkout/payment" />
      </div>
    </div>
  );
};

export default Shipping;
