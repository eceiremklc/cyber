"use client";
import React, { useState } from "react";
import { Menu, Button, Drawer, Input } from "antd";
import Link from "next/link";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import styles from "./CollapsedMenu.module.scss";

type MenuItems = Required<MenuProps>["items"][number];

const items: MenuItems[] = [
  { key: "1", label: <Link href="/">Home</Link> },
  { key: "2", label: <Link href="/about">About</Link> },
  { key: "3", label: <Link href="/contact">Contact Us</Link> },
  { key: "4", label: <Link href="/blog">Blog</Link> },
  {
    key: "5",
    label: (
      <Input
        className={styles.searchInput}
        size="large"
        placeholder=" Search"
        prefix={<SearchOutlined />}
      />
    ),
  },
  { key: "6", label: <Link href="/favorites">Favorites</Link> },
  { key: "7", label: <Link href="/cart">Cart</Link> },
  { key: "8", label: <Link href="/profile">Profile</Link> },
];

const CollapsedMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className={styles.collapsedMenu}>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        width={250}
      >
        <Menu mode="vertical" items={items} />
      </Drawer>
    </div>
  );
};

export default CollapsedMenu;
