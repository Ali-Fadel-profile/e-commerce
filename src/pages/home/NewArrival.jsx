import SectionLayout from "./SectionLayout";
import styles from "./NewArrival.module.css";
import useShowProductDetails from "@hooks/useShowProductDetails";

function NewArrival({ products }) {
  const { product1, product2, product3, product4 } = products;
  const showProduct = useShowProductDetails();
  return (
    <SectionLayout title="Featured" description="New Arrival">
      <div className={styles.newArrival}>
        {/* Left side - two columns and two rows */}
        <div className={styles.newArrival__featured}>
          <button
            onClick={() => showProduct(product1)}
            className={styles.newArrival__button}
          >
            {" "}
            <img
              src={product1.productImage}
              alt="Featured Product"
              className={styles.newArrival__image}
            />
          </button>

          <div className={styles.newArrival__details}>
            <h3>{product1.productName}</h3>
            <p>{product1.productDetails.description}</p>
            <button
              onClick={() => showProduct(product1)}
              className={styles.shopNow}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className={styles.newArrival__right}>
          {/* Top section - two items */}
          <div className={styles.newArrival__rightTop}>
            {" "}
            <button
              onClick={() => showProduct(product2)}
              className={styles.newArrival__button}
            >
              {" "}
              <img
                src={product2.productImage}
                alt="Product 3"
                className={styles.newArrival__image}
              />
            </button>
            <div className={styles.newArrival__details}>
              <h3>{product2.productName}</h3>
              <p>{product2.productDetails.description}</p>
              <button
                onClick={() => showProduct(product2)}
                className={styles.shopNow}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom section - full width */}
          <div className={styles.newArrival__rightBottom}>
            <div className={styles.newArrival__rightItem}>
              <button
                onClick={() => showProduct(product3)}
                className={styles.newArrival__button}
              >
                {" "}
                <img
                  src={product3.productImage}
                  alt="Product 1"
                  className={styles.newArrival__image}
                />
              </button>

              <div className={styles.newArrival__details}>
                <h3>{product3.productName}</h3>
                <p>{product3.productDetails.description}</p>
                <button
                  onClick={() => showProduct(product3)}
                  className={styles.shopNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className={styles.newArrival__rightItem}>
              <button
                onClick={() => showProduct(product4)}
                className={styles.newArrival__button}
              >
                {" "}
                <img
                  src={product4.productImage}
                  alt="Product 2"
                  className={styles.newArrival__image}
                />
              </button>

              <div className={styles.newArrival__details}>
                <h3>{product4.productName}</h3>
                <p>{product4.productDetails.description}</p>
                <button
                  onClick={() => showProduct(product4)}
                  className={styles.shopNow}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default NewArrival;
