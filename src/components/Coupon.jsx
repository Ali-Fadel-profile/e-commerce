import { useState } from "react";
import styles from "./Coupon.module.css";
import { useAuth } from "@context/GlobalState";
function Coupon() {
  const [couponCode, setCouponCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const coupon = "AF30";
  const couponPercentage = 30;
  const { dispatch } = useAuth();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if (couponCode === coupon) {
      dispatch({
        type: "SET_DISCOUNT_PERCENTAGE",
        discountParcentage: couponPercentage,
      });
      setSuccessMessage("Coupon applied successfully!");
    } else {
      setErrorMessage("Invalid coupon code. Please try again.");
      dispatch({
        type: "SET_DISCOUNT_PERCENTAGE",
        discountParcentage: 0,
      });
    }
    setCouponCode("");
  };

  return (
    <div className={styles.cartPrice__coupon}>
      {" "}
      <div className={styles.cartPrice__couponInputContainer}>
        {" "}
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className={styles.cartPrice__couponInput}
        />{" "}
        {errorMessage && (
          <p className={styles.cartPrice__couponErrorMessage}>{errorMessage}</p>
        )}
        {successMessage && (
          <p className={styles.cartPrice__couponSuccessMessage}>
            {successMessage}
          </p>
        )}
      </div>
      <button
        onClick={handleApplyCoupon}
        className={styles.cartPrice__couponButton}
      >
        Apply Coupon
      </button>{" "}
    </div>
  );
}

export default Coupon;
