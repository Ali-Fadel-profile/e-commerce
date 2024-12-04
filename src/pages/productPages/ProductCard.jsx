import styles from "./ProductCard.module.css";
import viewIcon from "@images/icons/viewIcon.svg";
import Rating from "./Rating";
import WishlistButton from "@components/common/WishlistButton";
import CartButton from "@components/common/CartButton";
import useShowProductDetails from "@hooks/useShowProductDetails";
import React from "react";

function ProductCard({ product }) {
  const showProductDetails = useShowProductDetails();

  return (
    <div className={styles.productCard}>
      {/* Product Header */}
      <div className={styles.productCard__header}>
        <div className={styles.productCard__headerContent}>
          {/* New/Discount Label */}
          {product.isNew ? (
            <div className={styles.productCard__labelNew}>
              <span>New</span>
            </div>
          ) : product.discount ? (
            <div className={styles.productCard__labelDiscount}>
              <span>-{product.discount}%</span>
            </div>
          ) : (
            <div
              className={styles.productCard__label}
              style={{ visibility: "hidden" }}
            ></div>
          )}

          {/* Icons */}
          <div className={styles.productCard__icons}>
            <WishlistButton product={product} />

            <button
              onClick={() => showProductDetails(product)}
              title="View Product"
              className={styles.productCard__iconsButton}
            >
              <img src={viewIcon} alt="View Product icon" />
            </button>
          </div>
        </div>

        {/* Product Image and Add to Cart */}
        <div className={styles.productCard__deatailsLink}>
          <div className={styles.productCard__headerImage}>
            <button
              className={styles.productCard__headerButton}
              onClick={() => showProductDetails(product)}
            >
              {" "}
              <img src={product.productImage} alt={product.productName} />
            </button>

            <CartButton product={product} />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className={styles.productCard__details}>
        <h3>{product.productName}</h3>
        {/* Pricing */}
        <div className={styles.productCard__pricing}>
          {product.discount && (
            <span className={styles.productCard__discountPrice}>
              ${product.discountPrice.toFixed(2)}{" "}
            </span>
          )}
          <span
            className={styles.productCard__originalPrice}
            style={
              !product.discount
                ? { color: "#db4444", opacity: 1, textDecoration: "none" }
                : { textDecoration: "line-through" }
            }
          >
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
        {/* Rating */}
        <div className={styles.productCard__rating}>
          <Rating rateStar={product.rateStar} rateNumber={product.rateNumber} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
