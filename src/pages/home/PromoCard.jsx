import styles from "./PromoCard.module.css";
import FlashSaleTimer from "./FlashSaleTimer.jsx";
import { flashSaleEndTime } from "@products/productsObject.jsx";
import useShowProductDetails from "@hooks/useShowProductDetails.jsx";

function PromoCard({ product }) {
  const timerUnitStyles = {
    width: "60px",
    height: "60px",
    backgroundColor: "var(--color-white-bg)",
    color: "var(--color-red)",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  };
  const timeValueStyles = {
    fontFamily: "var(--font-family-primary)",
    fontWeight: "var(--font-weight-600)",
    fontSize: "var(--font-size-16)",
    lineHeight: "var(--line-height-20)",
    color: "var(--color-black)",
  };

  const timeLabelStyles = {
    fontFamily: "var(--font-family-primary)",
    fontWeight: "var(--font-weight-400)",
    fontSize: "var(--font-size-11)",
    lineHeight: "var(--line-height-18)",
    color: "var(--color-black)",
  };
  const showProduct = useShowProductDetails();
  return (
    <div className={styles.promoCard}>
      {/* Left Section: Category, Description, Timer, Button */}
      <div className={styles.promoCard__details}>
        <p className={styles.promoCard__category}>category</p>
        <p className={styles.promoCard__description}>
          {product.productDetails.description}
        </p>
        <div className={styles.promoCard__timer}>
          <FlashSaleTimer
            endTime={flashSaleEndTime}
            timerUnitStyle={timerUnitStyles}
            timeValueStyle={timeValueStyles}
            timeLabelStyle={timeLabelStyles}
          />
        </div>
        <button
          onClick={() => showProduct(product)}
          className={styles.promoCard__detailsButton}
        >
          Buy Now
        </button>
      </div>

      {/* Right Section: Product Image */}
      <button
        onClick={() => showProduct(product)}
        className={styles.promoCard__right}
      >
        <img
          src={product.productImage}
          alt={product.productName}
          className={styles.promoCard__image}
        />
      </button>
    </div>
  );
}

export default PromoCard;
