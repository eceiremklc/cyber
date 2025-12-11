import { Button, Flex } from "antd";
import styles from "./PaymentRight.module.scss";
import CreditCard from "./CreditCard";

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
      <CreditCard />
    </div>
  );
};

export default PaymentRight;
