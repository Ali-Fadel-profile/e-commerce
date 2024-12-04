import { Link } from "react-router-dom";
import styles from "./Ads.module.css";
function Ads() {
  return (
    <div className={styles.ads}>
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link to="/products">
          <strong className={styles.shopNow}>ShopNow</strong>
        </Link>
      </p>
    </div>
  );
}

export default Ads;
