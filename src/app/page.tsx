import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./home/components/banner/Banner";
import BannerBottom from "./home/components/banner-bottom/BannerBottom";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />
        <BannerBottom />
      </main>
    </div>
  );
}
