import { Col, Row } from "antd";
import React from "react";
import styles from "./Login.module.scss";
import AuthBanner from "../../components/AuthBanner";
import LoginForm from "../../components/login/LoginForm";

const page = () => {
  return (
    <div>
      <AuthBanner isLogin={true} />
      <Row className={styles.registerRow}>
        <Col xl={13} lg={13} md={13} sm={24}>
          <LoginForm />
        </Col>
        <Col xl={11} lg={11} md={11} sm={24}>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default page;
