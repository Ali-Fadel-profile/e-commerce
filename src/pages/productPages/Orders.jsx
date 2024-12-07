import { Link } from "react-router-dom";
import { useAuth } from "@context/GlobalState";
import styles from "./Orders.module.css";
import CartTotalPrice from "@components/common/CartTotalPrice";
function Orders() {
  const { placeOrder, cart } = useAuth();

  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        {placeOrder ? (
          <>
            {" "}
            <p className={styles.ordersContainer_title}>My orders</p>{" "}
            <p className={styles.ordersContainer_text}>
              Thank you for your order! We'll contact you within 3 days.
            </p>
            <CartTotalPrice cartProducts={cart} />
          </>
        ) : (
          <div className={styles.emptyCart}>
            <h3 className={styles.ordersContainer_title}>
              Your don't have orders
            </h3>
            <p className={styles.ordersContainer_text}>
              Looks like you haven't added orders.
            </p>
            <Link to="/products" className={styles.shopNowButton}>
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Orders;
