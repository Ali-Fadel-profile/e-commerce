import  { useEffect, useState } from "react";
import { useAuth } from "@context/GlobalState";
import useAddToCart from "@hooks/useAddToCart";
import useRemoveFromCart from "@hooks/useRemoveFromCart";
import styles from "./CartButton.module.css";

function CartButton({ product }) {
  const { cart } = useAuth();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    if (cart && cart.some((item) => item.id === product.id)) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [product.id, cart]);

  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true);
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setIsAddedToCart(false);
  };

  return (
    <button
      onClick={isAddedToCart ? handleRemoveFromCart : handleAddToCart}
      className={
        isAddedToCart
          ? styles.productCard__RemoveFromCart
          : styles.productCard__addToCart
      }
    >
      {isAddedToCart ? "Remove from cart" : "Add to Cart"}
    </button>
  );
}

export default CartButton;
