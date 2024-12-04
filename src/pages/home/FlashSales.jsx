import SectionLayout from "./SectionLayout";
import ProductCard from "@pages/productPages/ProductCard";
import products from "@products/productsObject";
import styles from "./FlashSales.module.css";
function FlashSales() {
  return (
    <SectionLayout
      title="Today’s"
      description="Flash Sales"
      extraContentType="arrows"
      button="button"
      flashSales={true}
      bottomLine
    >
      <div className={styles.cardContent}>
        {" "}
        {products.flashSales.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default FlashSales;
