import { useEffect, useState } from "react";
import wishlistIcon from "@images/icons/wishList.svg";
import deleteIcon from "@images/icons/deleteIcon.svg";
import { useAuth } from "@context/GlobalState";

function WishlistButton({ product }) {
  const { wishlist, dispatch } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    // Check if the product is in the wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (storedWishlist.some((item) => item.id === product.id)) {
      setIsWishlisted(true);
    } else {
      setIsWishlisted(false);
    }
  }, [wishlist, product.id]);

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      const updatedWishlist = [...wishlist, product];
      dispatch({
        type: "ADD_TO_WISHLIST",
        item: updatedWishlist,
      });
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  const handleDeleteFromWishlist = () => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: product.id,
    });
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <button
      onClick={isWishlisted ? handleDeleteFromWishlist : handleAddToWishlist}
      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      <img
        src={isWishlisted ? deleteIcon : wishlistIcon}
        alt={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      />
    </button>
  );
}

export default WishlistButton;
