import { useAuth } from "@context/GlobalState";
import ProductCard from "./ProductCard";
import styles from "./WishList.module.css";
import { allProducts } from "@products/productsObject";
import ProductSuggestions from "./ProductSuggestions";
import useAddToCart from "@hooks/useAddToCart";
import { Link } from "react-router-dom";
import useScrollToTop from "@hooks/useScrollToTop";
import Swal from "sweetalert2";

function WishList() {
  const { wishlist, cart } = useAuth();

  // Collect all the categories from the wishlist
  const wishlistCategories = [
    ...new Set(wishlist.map((product) => product.category)),
  ];

  // Randomly select up to 6 unique categories from the wishlist
  const randomCategories = wishlistCategories
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  // Get the IDs of products in the wishlist to filter them out later
  const wishlistProductIds = wishlist.map((product) => product.id);

  // Filter products by the randomly selected categories
  const filteredProducts = allProducts.filter((product) =>
    randomCategories.includes(product.category)
  );

  // Filter out products that are already in the wishlist
  const nonWishlistProducts = filteredProducts.filter(
    (product) => !wishlistProductIds.includes(product.id)
  );

  // Limit the products to 6 for display
  const limitedProducts = nonWishlistProducts.slice(0, 6);

  const moveToCart = useAddToCart();

  const handleMoveAllToCart = () => {
    let message;
    const newItems = wishlist.filter(
      (product) => !cart.some((cartItem) => cartItem.id === product.id)
    );

    if (newItems.length === 0) {
      message = "All items already in your cart!";
    } else {
      newItems.forEach((product) => moveToCart(product));
      message = "All items added to your cart!";
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${message}`,
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <>
      <section className={styles.Whishlist}>
        <div className={styles.Whishlist_top}>
          <p className={styles.Whishlist_topTitle}>
            Wishlist ({wishlist.length})
          </p>
          {wishlist.length > 0 ? (
            <button
              onClick={handleMoveAllToCart}
              className={styles.Whishlist_topButton}
            >
              Move All To Cart
            </button>
          ) : null}
        </div>
        <div className={wishlist.length > 0 ? styles.cardContent : ""}>
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <p className={styles.wishlist__emptyMessage}>
              Your wishlist is currently empty. <br />
              <Link
                to="/products"
                onClick={() => useScrollToTop()}
                className={styles.wishlist__shopLink}
              >
                Continue Shopping
              </Link>
            </p>
          )}
        </div>
      </section>

      {wishlist.length > 0 ? (
        <ProductSuggestions
          title="Just For You"
          products={limitedProducts}
          showSeeAll={true}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default WishList;
