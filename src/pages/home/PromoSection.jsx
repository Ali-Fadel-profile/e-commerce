import { Link } from "react-router-dom";
import styles from "./PromoSection.module.css";
import CarousalApple from "@images/home/apple.svg";
import { GoArrowRight } from "react-icons/go";

function PromoSection({ product }) {
  return (
    <section className={styles.promoSection}>
      <div className={styles.promoSection__content}>
        {" "}
        <ul className={styles.promoSection__navbar}>
          <li>
            <Link to="/products">Woman’s Fashion</Link>
          </li>
          <li>
            <Link to="/products">Men’s Fashion</Link>
          </li>
          <li>
            <Link to="/products">Electronics</Link>
          </li>
          <li>
            <Link to="/products">Home & Lifestyle</Link>
          </li>
          <li>
            <Link to="/Products">Medicine</Link>
          </li>
          <li>
            <Link to="/products">Sports & Outdoor</Link>
          </li>
          <li>
            <Link to="/products">Baby’s & Toys</Link>
          </li>
          <li>
            <Link to="/products">Groceries & Pets</Link>
          </li>
          <li>
            <Link to="/products">Health & Beauty</Link>
          </li>
        </ul>
        <div className={styles.promoSection__carousel}>
          <div className={styles.promoSection__carouselLayout}>
            <div className={styles.promoSection__carouselText}>
              <div className={styles.promoSection__brandInfo}>
                <img src={CarousalApple} alt="" />
                <p>iPhone 14 Series</p>
              </div>
              <h1>
                <span>Up to 10%</span>
                <br />
                <span>off Voucher</span>
              </h1>
              <Link to="/products">
                <div className={styles.promoSection__link}>
                  {" "}
                  <p>shop now</p>{" "}
                  <GoArrowRight className={styles.promoSection__link__arrow} />
                </div>
              </Link>
            </div>
            <div className={styles.promoSection__carouselImage}>
              <Link to="/products">
                {" "}
                <img src={product.productImage} alt="" />
              </Link>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}

export default PromoSection;
