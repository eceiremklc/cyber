"use client";
import { useProductStore } from "@/app/store/UseProductStore";
import React from "react";
import CartItem from "../cart-item/CartItem";
import styles from "./CartContent.module.scss";

const CartContent = () => {
  const {
    cart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    removeFromCart,
  } = useProductStore();
  console.log(cart);
  return (
    <div className={styles.CartContent}>
      <h4 className={styles.header}>Shopping Cart</h4>
      {cart.map((item) => (
        <div key={item.id}>
          <CartItem
            imageURL={item.image}
            title={item.title}
            price={item.price * item.quantity!}
            quantity={item.quantity || 1}
            barcode={item.id}
            increaseItem={() => increaseCartItemQuantity(item)}
            decreaseItem={() => decreaseCartItemQuantity(item)}
            removeFromCart={() => removeFromCart(item)}
            onClick={() => {}}
          />
          {cart.length - 1 !== cart.indexOf(item) && (
            <div className={styles.divider} />
          )}
        </div>
      ))}
    </div>
  );
};

export default CartContent;
