import PromoSection from "./PromoSection";
import styles from "./Home.module.css";
import FlashSales from "./FlashSales";
import Category from "./Category";
import BestSelling from "./BestSelling";
import PromoCard from "./PromoCard";
import OurProducts from "./OurProducts";
import NewArrival from "./NewArrival";
import Services from "@components/common/Services";
import FindProducts from "@helper/FindProducts";

function Home() {
  const PromoSectionProduct = FindProducts("iPhone 14 Series");
  const PromoCardProduct = FindProducts("Portable Music Player");
  const product1 = FindProducts("PlayStation 5");
  const product2 = FindProducts("Women's Collection");
  const product3 = FindProducts("Amazon Speakers");
  const product4 = FindProducts("Perfume");

  return (
    <>
      {" "}
      <section className={styles.promoSection}>
        <PromoSection product={PromoSectionProduct} />
      </section>{" "}
      <section className={styles.container}>
        <FlashSales />
      </section>{" "}
      <section className={styles.container}>
        <Category />
      </section>{" "}
      <section className={styles.container}>
        <BestSelling />
      </section>{" "}
      <section className={styles.promoSection}>
        <PromoCard product={PromoCardProduct} />
      </section>{" "}
      <section className={styles.container}>
        <OurProducts />
      </section>{" "}
      <section className={styles.container}>
        <NewArrival products={{ product1, product2, product3, product4 }} />
      </section>{" "}
      <section className={styles.container}>
        <Services />
      </section>{" "}
    </>
  );
}

export default Home;
