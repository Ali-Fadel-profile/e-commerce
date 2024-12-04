import styles from "./Cart.module.css";
import { useAuth } from "@context/GlobalState";
import CartRow from "./CartRow";
import { Link } from "react-router-dom";
import useScrollToTop from "@hooks/useScrollToTop";
import Coupon from "@components/Coupon";
import CartTotalPrice from "@components/common/CartTotalPrice";
import useShowCart from "@hooks/useUpdateCart";
import Location from "@components/layout/Location";

function Cart() {
  const { cart } = useAuth(); // Assuming this retrieves the user's cart

  const updateCart = useShowCart();

  const updateProduct = (updatedProduct) => {
    const updatedCart = cart.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    updateCart(updatedCart);
  };

  return (
    <>
      <Location>
        <section className={styles.cart}>
          {/* Cart Header */}
          <div className={styles.cart__header}>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {/* Cart Items */}
          <div className={styles.cart__items}>
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartRow
                  key={product.id}
                  product={product}
                  updateProduct={updateProduct}
                />
              ))
            ) : (
              <p className={styles.cart__emptyMessage}>
                Your cart is currently empty. <br />
                <Link
                  to="/products"
                  onClick={() => useScrollToTop()}
                  className={styles.cart__shopLink}
                >
                  Continue Shopping
                </Link>
              </p>
            )}
          </div>

          {/* Cart Actions */}
          {cart.length > 0 && (
            <>
              <div className={styles.cart__actions}>
                <Link onClick={useScrollToTop} to="/products">
                  <button className={styles.cart__return}>
                    Return To Shop
                  </button>
                </Link>

                <button
                  onClick={useScrollToTop}
                  className={styles.cart__update}
                >
                  Update Cart
                </button>
              </div>

              {/* Cart Total Section */}
              <div className={styles.cartPrice}>
                <Coupon />
                <div className={styles.cartPrice__totalContainer}>
                  <p className={styles.cartPrice__totalTitle}>Cart Total</p>
                  <CartTotalPrice />
                  <Link
                    onClick={useScrollToTop}
                    to={cart.length > 0 && "/checkOut"}
                    className={styles.cartPrice__checkout}
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </section>
      </Location>
    </>
  );
}

export default Cart;
