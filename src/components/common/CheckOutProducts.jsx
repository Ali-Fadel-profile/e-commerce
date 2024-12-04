import styles from "./CheckOutProducts.module.css";
function CheckOutProducts({ product }) {
  return (
    <div className={styles.checkOutProducts_container}>
      {" "}
      <div className={styles.checkOutProducts_Product}>
        <img src={product.productImage} alt="" />
        <p>{product.productName}</p>{" "}
        <span className={styles.checkOutProducts_Price}>X</span>
        <p className={styles.checkOutProducts_Price}>{product.quantity}</p>
      </div>
      <div className={styles.checkOutProducts_Product}>
        <p className={styles.checkOutProducts_Price}>
          ${product.quantityTotalPrice}
        </p>
      </div>
    </div>
  );
}

export default CheckOutProducts;
