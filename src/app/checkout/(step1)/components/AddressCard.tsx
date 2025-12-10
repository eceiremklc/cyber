"use client";
import styles from "./AddressCard.module.scss";
import { Badge, Button, Flex } from "antd";
import CustomRadio from "@/app/shared/radio/CustomRadio";
import { MdEdit, MdClose } from "react-icons/md";
import { useAddressStore } from "@/app/store/useAddressStore";
import { useAddress, Address } from "@/app/hooks/UseAddress";

const AddressCard = () => {
  const { addresses, selectedAddress, setSelectedAddress } = useAddressStore();
  const { deleteAddress } = useAddress();
  const selectAddress = (addr: Address) => {
    setSelectedAddress(addr);
    console.log("Selected Address:", addr);
  };
  return (
    <Flex vertical gap={24}>
      {addresses?.map((a) => (
        <Flex
          className={styles.addressCard}
          key={a.id}
          align="center"
          justify="space-between"
        >
          <div className={styles.cardContent}>
            <Flex align="center" gap={16} className={styles.selectAddress}>
              <CustomRadio
                onChange={() => selectAddress(a)}
                checked={!!selectedAddress && selectedAddress.id === a.id}
              />
              <p className={styles.label}>{a.title}</p>
              <Badge count={a.badge} color="black" />
            </Flex>

            <Flex align="center" justify="space-between">
              <Flex vertical gap={8} className={styles.addBody}>
                <p>{a.body}</p>
                <p>telefon</p>
              </Flex>
            </Flex>
          </div>
          <div className={styles.btnBox}>
            <Button variant="text">
              <MdEdit fontSize={24} />
            </Button>
            <Button variant="text" onClick={() => deleteAddress(a.id)}>
              <MdClose fontSize={24} />
            </Button>
          </div>
        </Flex>
      ))}
    </Flex>
  );
};

export default AddressCard;
