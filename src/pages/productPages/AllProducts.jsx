import ProductCard from "@pages/productPages/ProductCard";
import { allProducts } from "@products/productsObject";
import styles from "./AllProducts.module.css";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "@pages/productPages/ProductCardSkelton";
function AllProducts() {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [isLoading]);

  const loadMoreProducts = () => {
    setIsLoading(true);
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <div className={styles.AllProducts}>
      <h1>Explore Our Products</h1>{" "}
      <div className={styles.cardContent}>
        {" "}
        {isLoading
          ? Array.from({ length: visibleProducts }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : allProducts
              .slice(0, visibleProducts)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
      </div>
      {visibleProducts < allProducts.length && !isLoading && (
        <button
          className={styles.AllProducts_button}
          onClick={loadMoreProducts}
        >
          Load More...
        </button>
      )}
    </div>
  );
}

export default AllProducts;
