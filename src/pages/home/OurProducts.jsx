import products from "@products/productsObject";
import ProductCard from "@pages/productPages/ProductCard";
import SectionLayout from "./SectionLayout";
import styles from "./OurProducts.module.css";
function OurProducts() {
  return (
    <SectionLayout
      title="Our Products"
      description="Explore Our Products"
      extraContentType="arrows"
      button="button"
    >
      <div className={styles.cardContent}>
        {" "}
        {products.ourProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </SectionLayout>
  );
}

export default OurProducts;
