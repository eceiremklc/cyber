import { Button, Checkbox, Flex } from "antd";
import styles from "./PaymentRight.module.scss";
import PaymentForm from "./PaymentForm";
import CheckoutNavBtns from "@/app/shared/checkout-nav-buttons/CheckoutNavBtns";

const PaymentRight = () => {
  return (
    <div className={styles.payment}>
      <h3 className={styles.head}>Payment</h3>
      <Flex gap={56} className={styles.methods}>
        <Flex vertical>
          <Button
            className={`${styles.methodBtn} ${styles.selected}`}
            type="text"
            block
          >
            Credit Card
          </Button>
          <div className={styles.line} />
        </Flex>
        <Button className={styles.methodBtn} type="text" block>
          PayPal
        </Button>
        <Button className={styles.methodBtn} type="text" block>
          PayPal Credit
        </Button>
      </Flex>
      <PaymentForm />
      <div className={styles.check}>
        <Checkbox>Same as billing address</Checkbox>
      </div>
      <Flex justify="flex-start" className={styles.nav}>
        <CheckoutNavBtns
          backUrl="/checkout/shipping"
          nextUrl="/pay"
          nextChildren="Pay"
        />
      </Flex>
    </div>
  );
};

export default PaymentRight;
