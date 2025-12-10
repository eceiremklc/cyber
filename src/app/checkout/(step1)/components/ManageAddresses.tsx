"use client";
import { useState } from "react";
import styles from "./ManageAddresses.module.scss";
import AddressCard from "./AddressCard";
import Image from "next/image";
import { Button } from "antd";
import AddressModal from "./AddressModal";
import CheckoutNavBtns from "@/app/shared/checkout-nav-buttons/CheckoutNavBtns";

const ManageAddresses = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.manageAddresses}>
      <h3>Select Address</h3>
      <AddressCard />
      <div className={styles.add}>
        <Image src="/addAddress.svg" alt="line" width={1244} height={24} />
        <Button className={styles.addBtn} onClick={() => setOpen(true)}>
          Adres Ekle
        </Button>
      </div>
      <CheckoutNavBtns backUrl="/cart" nextUrl="/checkout/shipping" />
      <AddressModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ManageAddresses;
