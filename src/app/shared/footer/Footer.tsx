import React from "react";
import styles from "./Footer.module.scss";
import { Row, Col } from "antd";
import Image from "next/image";
import { TwitterOutlined } from "@ant-design/icons";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row
        gutter={32}
        className={styles.footerContent}
        justify={"space-between"}
      >
        <Col xl={9} className={styles.aboutCol}>
          <Image src="/Logo.svg" alt="Cyber" width={65.4} height={22.87} />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </Col>
        <Col xl={7} className={styles.quicklinks}>
          <h5>Services</h5>
          <p>Bonus program</p>
          <p>Gift cards</p>
          <p>Credit and payment</p>
          <p>Service contracts</p>
          <p>Non-cash account</p>
          <p>Payment</p>
        </Col>
        <Col xl={7} className={styles.quicklinks}>
          <h5>Asistance to the buyer</h5>
          <p>Find an order</p>
          <p>Terms of delivery</p>
          <p>Exchange and return of goods</p>
          <p>Guarantee</p>
          <p>Frequently asked questions</p>
          <p>Terms of use of the site</p>
        </Col>
      </Row>
      <div className={styles.socials}>
        <TwitterOutlined />
        <FaFacebookF />
        <FaTiktok />
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default Footer;
