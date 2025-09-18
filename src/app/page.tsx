import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/banner/Banner";
import BannerBottom from "./components/banner-bottom/BannerBottom";

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
