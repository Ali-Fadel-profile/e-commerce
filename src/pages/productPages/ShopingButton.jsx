import WishlistButton from "@components/common/WishlistButton";
import useAddToCart from "@hooks/useAddToCart";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "@hooks/useScrollToTop";
import styles from "./ShopingButton.module.css";
import { useState } from "react";
function ShopingButton({ product }) {
  const [quantity, setquantity] = useState(1);
  const navigate = useNavigate();
  const AddToCart = useAddToCart();

  const handleBuyNow = () => {
    const updatedProduct = {
      ...product,
      quantity: Number(quantity),
    };
    AddToCart(updatedProduct);
    navigate("/cart");
    useScrollToTop();
  };
  return (
    <div className={styles.ProductDetails_Shopping}>
      <div className={styles.ProductDetails_ShoppingCount}>
        <button
          onClick={() =>
            setquantity((prevCount) =>
              prevCount > 0 ? prevCount - 1 : prevCount
            )
          }
          className={styles.ProductDetails_ShoppingCountSquare}
        >
          {" "}
          -{" "}
        </button>
        <p className={styles.ProductDetails_ShoppingCountRectangle}>
          {quantity}
        </p>
        <button
          className={styles.ProductDetails_ShoppingCountSquare}
          onClick={() => setquantity((prevCount) => prevCount + 1)}
        >
          {" "}
          +{" "}
        </button>
      </div>
      {quantity > 0 ? (
        <button
          onClick={handleBuyNow}
          className={styles.ProductDetails_ShoppingButton}
        >
          Buy Now
        </button>
      ) : (
        <button disabled className={styles.ProductDetails_ShoppingButton}>
          Buy Now
        </button>
      )}
      <div className={styles.ProductDetails_ShoppingWishListSquare}>
        {" "}
        <WishlistButton product={product} />
      </div>
    </div>
  );
}

export default ShopingButton;
