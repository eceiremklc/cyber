"use client";
import React, { useState } from "react";
import styles from "./AddressModal.module.scss";
import { Modal } from "antd";
import CustomInput from "@/app/shared/input/CustomInput";
import { useAddress } from "@/app/hooks/UseAddress";

type props = {
  open: boolean;
  onClose: () => void;
};

const AddressModal: React.FC<props> = ({ open, onClose }) => {
  const [addressTitle, setAddressTitle] = useState("");
  const [addressBody, setAddressBody] = useState("");
  const [badge, setBadge] = useState("");
  const { createAddress } = useAddress();
  const newAddress = {
    id: +Date.now(),
    title: addressTitle,
    body: addressBody,
    badge: badge,
  };
  const handleOk = () => {
    createAddress(newAddress);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <Modal
        title="Adres"
        closable={{ "aria-label": "Custom Close Button" }}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CustomInput
          type="text"
          label="Adres Başlığı"
          placeholder="New York Office"
          onChange={(value) => setAddressTitle(value)}
        />
        <CustomInput
          type="text"
          label="Adres"
          placeholder="81 Bowery, New York, NY 10002, Amerika Birleşik Devletleri"
          onChange={(value) => setAddressBody(value)}
        />
        <CustomInput
          type="text"
          label="Adres Türü"
          placeholder="Home / Office / Headoffice / ..."
          onChange={(value) => setBadge(value)}
        />
      </Modal>
    </>
  );
};

export default AddressModal;
