"use client";
import { Col, Row } from "antd";
import React from "react";
import CartContent from "./components/cart-content/CartContent";
import styles from "./Cart.module.scss";
import OrderSummary from "./components/order-summary/OrderSummary";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <Row gutter={48}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <CartContent />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <OrderSummary />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
