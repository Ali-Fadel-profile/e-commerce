import { useAuth } from "@context/GlobalState";
import styles from "./Payment.module.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { cartTotalPrice, dispatch } = useAuth();
  const navigate = useNavigate();
  // Function to handle form submission
  const handlePayment = (event) => {
    event.preventDefault();
    dispatch({
      type: "PLACE_ORDER",
      placeOrder: true,
    });
    navigate("/orders");
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentBody}>
        <h2 className={styles.title}>Payment Details</h2>
        <p className={styles.totalPrice}>Total: ${cartTotalPrice}</p>
        {/* Payment form */}
        <form onSubmit={handlePayment} className={styles.paymentForm}>
          <p className={styles.error}>Payment by card is not available yet.</p>
          {/* Complete Payment button */}
          <button type="submit" className={styles.cardLinkPlaceholder}>
            Pay Cash On Delivery
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
