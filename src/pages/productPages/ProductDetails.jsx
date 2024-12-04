import { useAuth } from "@context/GlobalState";
import Rating from "@pages/productPages/Rating";
import styles from "./productDetails.module.css";
import fastDeliveryIcon from "@images/icons/IconDelivery.svg";
import returnIcon from "@images/icons/IconReturn.svg";
import ProductSuggestions from "@pages/productPages/ProductSuggestions";
import { allProducts } from "@products/productsObject";
import ShopingButton from "./ShopingButton";

function ProductDetails() {
  const { productDetails } = useAuth();

  // Filter products by category and exclude the current product
  const filteredProducts = allProducts.filter(
    (product) =>
      product.category === productDetails.category &&
      product.id !== productDetails.id
  );

  // Randomly select up to 6 unique products
  const suggestedProducts = filteredProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <>
      <section className={styles.ProductDetails}>
        <div className={styles.ProductDetails_Header}>
          <p>Account</p>
          <span>/</span>
          <p>{productDetails.category}</p>
          <span>/</span>
          <p>{productDetails.productName}</p>
        </div>
        <div className={styles.ProductDetails_Body}>
          <div className={styles.ProductDetails_Images}>
            <div className={styles.ProductDetails_ColumnImages}>
              <div>
                <img
                  src={
                    productDetails.productImage1
                      ? productDetails.productImage1
                      : productDetails.productImage
                  }
                  alt="Side Image 1"
                />
              </div>
              <div>
                <img
                  src={
                    productDetails.productImage2
                      ? productDetails.productImage2
                      : productDetails.productImage
                  }
                  alt="Side Image 2"
                />
              </div>
              <div>
                <img
                  src={
                    productDetails.productImage3
                      ? productDetails.productImage3
                      : productDetails.productImage
                  }
                  alt="Side Image 3"
                />
              </div>
              <div>
                <img
                  src={
                    productDetails.productImage4
                      ? productDetails.productImage4
                      : productDetails.productImage
                  }
                  alt="Side Image 4"
                />
              </div>
            </div>
            <div className={styles.ProductDetails_MainImages}>
              <img src={productDetails.productImage} alt="Main Product" />
            </div>
          </div>

          <div className={styles.ProductDetails_Description}>
            <p className={styles.ProductDetails_Name}>
              {productDetails.productName}
            </p>
            <div className={styles.ProductDetails_Rating}>
              <Rating
                rateStar={productDetails.rateStar}
                rateNumber={productDetails.rateNumber}
              />
              <div className={styles.ProductDetails_RatingStock}>
                <span>|</span>
                <p>In Stock</p>
              </div>
            </div>
            <div className={styles.ProductDetails_Price}>
              {productDetails.discountPrice > 0 && (
                <p className={styles.ProductDetails_discountPrice}>
                  ${productDetails.discountPrice}
                </p>
              )}{" "}
              <p
                className={
                  productDetails.discountPrice
                    ? styles.ProductDetails_OriginalPrice
                    : ""
                }
              >
                ${productDetails.originalPrice}
              </p>{" "}
            </div>

            <p className={styles.ProductDetails_ProductDescription}>
              {productDetails.description}
            </p>
            <hr />
            <div className={styles.ProductDetails_Color}>
              <p>Colors: </p>
              <button
                disabled
                className={styles.ProductDetails_RedCircleColor}
              ></button>
              <button
                disabled
                className={styles.ProductDetails_BlueCircleColor}
              ></button>
            </div>
            <div className={styles.ProductDetails_Size}>
              <p>Size:</p>
              <button disabled className={styles.ProductDetails_SizeSquare}>
                XS
              </button>
              <button disabled className={styles.ProductDetails_SizeSquare}>
                S
              </button>
              <button disabled className={styles.ProductDetails_SizeSquare}>
                M
              </button>
              <button disabled className={styles.ProductDetails_SizeSquare}>
                L
              </button>
              <button disabled className={styles.ProductDetails_SizeSquare}>
                XL
              </button>
            </div>
            <ShopingButton product={productDetails} />

            <div className={styles.ProductDetails_FeaturesBorder}>
              <div className={styles.ProductDetails_Features}>
                <img src={fastDeliveryIcon} alt="Fast Delivery" />
                <div className={styles.ProductDetails_FeaturesDescription}>
                  <p className={styles.ProductDetails_FeaturesDescriptionTitle}>
                    Free Delivery
                  </p>
                  <p className={styles.ProductDetails_FeaturesDescriptionText}>
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className={styles.ProductDetails_Features}>
                <img src={returnIcon} alt="Fast Delivery" />
                <div className={styles.ProductDetails_FeaturesDescription}>
                  <p className={styles.ProductDetails_FeaturesDescriptionTitle}>
                    Return Delivery
                  </p>
                  <p className={styles.ProductDetails_FeaturesDescriptionText}>
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSuggestions
        title="Related Item"
        products={suggestedProducts}
        showSeeAll={false}
      />
    </>
  );
}

export default ProductDetails;
