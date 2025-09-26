"use client";
import styles from "./page.module.css";
import Banner from "./home/components/banner/Banner";
import BannerBottom from "./home/components/banner-bottom/BannerBottom";
import Browse from "./home/components/browse-by-category/Browse";
import { useProductStore } from "./store/UseProductStore";
import { useEffect } from "react";
import ProductsTable from "./home/components/products/ProductsTable";

export default function Home() {
  const { products, fetchAll, favProducts } = useProductStore();
  useEffect(() => {
    fetchAll();
  }, []);
  console.log(products);
  console.log(favProducts);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />
        <BannerBottom />
        <Browse />
        <ProductsTable />
      </main>
    </div>
  );
}
