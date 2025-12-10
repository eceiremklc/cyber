"use client";
import { useEffect } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { Flex, Input } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import CollapsedMenu from "./CollapsedMenu";
import { useProductStore } from "@/app/store/UseProductStore";
import { useUserStore } from "@/app/store/useUserStore";

const Navbar = () => {
  const { searchProduct, favProducts, cart } = useProductStore();
  const initializeUser = useUserStore((state) => state.initializeUser);

  useEffect(() => {
    initializeUser();
  }, []);
  return (
    <div className={styles.navbar}>
      <Flex
        justify="space-between"
        align="center"
        className={styles.navbarContent}
        gap={10}
      >
        <div className={styles.navBrand}>
          <Image
            src="/cyber-logo.svg"
            alt="Cyber logo"
            width={96}
            height={32}
          />
        </div>
        <CollapsedMenu />
        <div className={styles.searchBar}>
          <Input
            className={styles.searchInput}
            size="large"
            placeholder=" Search"
            prefix={<SearchOutlined />}
            onChange={(e) => searchProduct(e.target.value)}
          />
        </div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
        </div>
        <div className={styles.icons}>
          <Link href="/wishlist" className={styles.icon}>
            <HeartOutlined />
            <div className={styles.favCount}>
              {favProducts.length > 0 ? favProducts.length : " "}
            </div>
          </Link>
          <Link href="/cart" className={styles.icon}>
            <ShoppingCartOutlined />
            <div className={styles.cartCount}>
              {cart.length > 0 ? cart.length : " "}
            </div>
          </Link>
          <Link href="/profile" className={styles.icon}>
            <UserOutlined />
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
