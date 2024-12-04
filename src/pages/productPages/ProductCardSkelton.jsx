import styles from "./ProductCardSkeleton.module.css";

function ProductCardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      {/* Placeholder for the image */}
      <div className={styles.skeletonImage}></div>

      {/* Placeholder for product details */}
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonPrice}></div>
        <div className={styles.skeletonRating}></div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
