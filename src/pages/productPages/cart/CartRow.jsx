import { useState, useEffect } from "react";
import styles from "./CartRow.module.css";
import DropUpIcon from "@images/icons/Drop-Up-Small.png";
import DropDownIcon from "@images/icons/Drop-Down-Small.png";
import cancelIcon from "@images/icons/icon-cancel.png";
import useRemoveFromCart from "@hooks/useRemoveFromCart";

function CartRow({ product, updateProduct }) {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  const subtotal = product.discountPrice
    ? product.discountPrice * quantity
    : product.originalPrice * quantity;

  const updatedProduct = {
    ...product,
    quantity: Number(quantity),
    quantityTotalPrice: Number(subtotal),
  };

  useEffect(() => {
    if (
      product.quantity !== updatedProduct.quantity ||
      product.quantityTotalPrice !== updatedProduct.quantityTotalPrice
    ) {
      updateProduct(updatedProduct);
    }
  }, [quantity, subtotal, product, updateProduct]);

  const removeFromCart = useRemoveFromCart();
  const handleDeleteFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className={styles.cartRow}>
      <div className={styles.cartRow__product}>
        <button
          onClick={handleDeleteFromCart}
          className={styles.cartRow__productCancelIcon}
        >
          <img
            src={cancelIcon}
            alt="cancel icon"
            className={styles.cartRow__productCancelIcon}
          />
        </button>
        <img src={product.productImage} alt={product.productName} />
        <p className={styles.cartRow__text}>{product.productName}</p>
      </div>
      <p className={styles.cartRow__text}>
        ${product.discountPrice ? product.discountPrice : product.originalPrice}
      </p>
      <div className={styles.cartRow__quantity}>
        <p className={styles.cartRow__text}>{quantity}</p>
        <div className={styles.cartRow__quantityControlButtons}>
          <button
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
            className={styles.cartRow__quantityButton}
          >
            <img src={DropUpIcon} alt="" />
          </button>
          <button
            onClick={() =>
              setQuantity((prevQuantity) =>
                prevQuantity > 1 ? prevQuantity - 1 : 1
              )
            }
            className={styles.cartRow__quantityButton}
          >
            <img src={DropDownIcon} alt="" />
          </button>
        </div>
      </div>
      <p className={styles.cartRow__text}>${subtotal.toFixed(2)}</p>
    </div>
  );
}

export default CartRow;
