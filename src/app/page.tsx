import styles from "./page.module.css";
import Banner from "./home/components/banner/Banner";
import BannerBottom from "./home/components/banner-bottom/BannerBottom";
import Browse from "./home/components/browse-by-category/Browse";
import ProductsTable from "./home/components/products/ProductsTable";
import BannerT from "./home/components/banner3/BannerT";
import BannerFour from "./home/components/bannerFour/BannerFour";
import Discount from "./home/components/discount/Discount";

export default async function Home() {
  const products = await fetchISRProducts();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />
        <BannerBottom />
        <Browse />
        <ProductsTable products={products} />
        <BannerT />
        <Discount />
        <BannerFour />
      </main>
    </div>
  );
}
async function fetchISRProducts() {
  const res = await fetch(
    "https://cyber-backend-lake.vercel.app/api/products",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data.products;
}
