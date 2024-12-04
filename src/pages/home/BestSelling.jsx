import products from "@products/productsObject";
import ProductCard from "@pages/productPages/ProductCard";
import SectionLayout from "./SectionLayout";
import styles from "./BestSelling.module.css";
function BestSelling() {
  return (
    <SectionLayout
      title="This Month"
      description="Best Selling Products"
      extraContentType="button"
      button=""
    >
      <div className={styles.cardContent}>
        {" "}
        {products.bestSelling.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default BestSelling;
