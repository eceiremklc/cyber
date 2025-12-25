"use client";
import ProductCard from "@/app/shared/product-card/ProductCard";
import { useProductStore } from "@/app/store/UseProductStore";
import { Flex } from "antd";
import styles from "./Wishlist.module.scss";

const Wishlist = () => {
  const { favProducts, addToWishlist, removeFromWishlist, addToCart } =
    useProductStore();
  return (
    <Flex justify="center">
      <Flex gap={16} className={styles.wishlistRow}>
        {favProducts.map((product) => (
          <div key={product.id}>
            <ProductCard
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              addToWishlist={() => addToWishlist(product)}
              removeFromWishlist={() => removeFromWishlist(product)}
              heartActive={favProducts.some((p) => p.id === product.id)}
              onClick={() => addToCart(product)}
            />
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default Wishlist;
