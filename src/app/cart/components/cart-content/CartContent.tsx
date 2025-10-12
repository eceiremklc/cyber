"use client";
import { useProductStore } from '@/app/store/UseProductStore';
import React from 'react'
import CartItem from '../cart-item/CartItem';

const CartContent = () => {
  const {cart, increaseCartItemQuantity, decreaseCartItemQuantity} = useProductStore();
  return (
    <div>
      <h4>Shopping Cart</h4>
{cart.map((item) => (
  <div key={item.id}>
    <CartItem
      imageURL={item.image}
      title={item.title}
      price={item.price}
      quantity={item.quantity || 1}
      increaseItem={()=>increaseCartItemQuantity(item)}
      decreaseItem={() => decreaseCartItemQuantity(item)}
      delete={() => {}}
      onClick={() => {}}
    />  
  </div>
))}
    </div>
  )
}

export default CartContent
