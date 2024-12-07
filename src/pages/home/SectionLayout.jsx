import styles from "./SectionLayout.module.css";
import { Link } from "react-router-dom";
import rightArrow from "@images/home/leftArrow.svg";
import leftArrow from "@images/home/RightArrow.svg";
import FlashSaleTimer from "./FlashSaleTimer.jsx";
import { flashSaleEndTime } from "@products/productsObject.jsx";
import useScrollToTop from "@hooks/useScrollToTop.jsx";
function SectionLayout({
  title,
  description,
  children,
  extraContentType,
  button,
  flashSales,
  bottomLine,
}) {
  return (
    <section className={styles.sectionLayout}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionSquare}></div>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionContainer__content}>
          <p className={styles.sectionDescription}>{description}</p>{" "}
          {flashSales === true && (
            <div>
              <FlashSaleTimer endTime={flashSaleEndTime} />
            </div>
          )}
        </div>

        {/* Conditional Rendering based on extraContentType */}
        {extraContentType === "arrows" && (
          <div className={styles.arrowsContainer}>
            <img
              src={rightArrow}
              alt="right arrow"
              className={styles.rightArrow}
            />
            <img src={leftArrow} alt="left arrow" />
          </div>
        )}

        {extraContentType === "button" && (
          <Link
            to="/products"
            className={styles.customButton}
            onClick={useScrollToTop}
          >
            View All
          </Link>
        )}
      </div>
      {/* Customizable content */}
      <div>{children}</div>
      {/* View All Button */}
      {button && (
        <Link
          to="/products"
          onClick={useScrollToTop}
          className={styles.viewAllButtonWrapper}
        >
          <button className={styles.viewAllButton}>View All Products</button>
        </Link>
      )}
      {/* Bottom Line */}
      {bottomLine && <hr className={styles.sectionLine} />}
    </section>
  );
}

export default SectionLayout;
