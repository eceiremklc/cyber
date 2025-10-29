"use client";
import React, { useState } from "react";
import styles from "./ManageAddresses.module.scss";
import AddressCard from "./AddressCard";
import Image from "next/image";
import { Button } from "antd";
import AddressModal from "./AddressModal";
import { useAddress } from "@/app/hooks/UseAddress";

const ManageAddresses = () => {
  const [open, setOpen] = useState(false);
  const { addresses } = useAddress();
  return (
    <div className={styles.manageAddresses}>
      <h3>Select Address</h3>
      <AddressCard address={addresses} />
      <Image src="/addAddress.svg" alt="line" width={1244} height={24} />
      <Button onClick={() => setOpen(true)}>Adres Ekle</Button>
      <AddressModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ManageAddresses;
