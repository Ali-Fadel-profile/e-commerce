import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "./ProductSuggestions.module.css";
import useScrollToTop from "@hooks/useScrollToTop";
const ProductSuggestions = ({ title, products, showSeeAll }) => {
  return (
    <section className={styles.productSuggestions}>
      <div className={styles.productSuggestions_top}>
        <div className={styles.productSuggestions_title}>
          <div className={styles.productSuggestions_square}></div>
          <p>{title}</p>
        </div>
        {showSeeAll && (
          <Link onClick={() => useScrollToTop()} to="/products">
            <button>See All</button>
          </Link>
        )}
      </div>
      <div className={styles.cardContent}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductSuggestions;
