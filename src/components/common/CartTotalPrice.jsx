import { useEffect } from "react";
import { useAuth } from "@context/GlobalState";
import styles from "./CartTotalPrice.module.css";
import CheckOutProducts from "./CheckOutProducts";

function CartTotalPrice({ cartProducts }) {
  const { cart, dispatch, discountParcentage } = useAuth();

  const totalPrice = cart
    .map((product) => product.quantityTotalPrice)
    .reduce((accum, price) => accum + price, 0);

  const discountValue =
    discountParcentage > 0 ? (totalPrice * discountParcentage) / 100 : 0;
  const discountedTotal =
    discountParcentage > 0 ? totalPrice - discountValue : 0;
  useEffect(() => {
    dispatch({
      type: "SET_TOTAL_PRICE",
      cartTotalPrice: discountedTotal > 0 ? discountedTotal : totalPrice,
    });
  }, [cart, discountParcentage]);

  return (
    <>
      {cartProducts &&
        cart.map((product) => (
          <CheckOutProducts key={product.id} product={product} />
        ))}
      <div className={styles.cartPrice__totalDescription}>
        <div className={styles.cartPrice__text}>
          <p>Subtotal:</p>
          <p>${totalPrice.toFixed(2)}</p>{" "}
          {/* Use toFixed to display two decimal places */}
        </div>
        <div className={styles.cartPrice__text}>
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className={styles.cartPrice__text}>
          <p>Total:</p>
          {discountedTotal > 0 ? (
            <div className={styles.cartPrice__DiscountedPrice}>
              <p className={styles.DiscountPrice_discount}>
                ${discountedTotal.toFixed(2)}
              </p>
              <p className={styles.DiscountPrice_total}>
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          ) : (
            <p>${totalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CartTotalPrice;
