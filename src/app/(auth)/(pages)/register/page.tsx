import React from "react";
import RegisterForm from "../../components/register/RegisterForm";
import AuthBanner from "../../components/AuthBanner";
import { Col, Row } from "antd";
import styles from "./Register.module.scss";

const page = () => {
  return (
    <div>
      <AuthBanner isLogin={false} />
      <Row className={styles.registerRow}>
        <Col xl={13} lg={13} md={13} sm={24}>
          <RegisterForm />
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
