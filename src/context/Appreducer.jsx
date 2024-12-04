export const initialState = {
  user: null,
  placeOrder: null,
  productDetails: {},
  discountParcentage: {},
  cartTotalPrice: {},
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "PLACE_ORDER":
      return {
        ...state,
        placeOrder: action.placeOrder,
      };
    case "SET_DISCOUNT_PERCENTAGE":
      return {
        ...state,
        discountParcentage: action.discountParcentage,
      };
    case "SHOW_PRODUCT_DETAILS":
      return {
        ...state,
        productDetails: action.item,
      };
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        cartTotalPrice: action.cartTotalPrice,
      };

    // cart actions
    case "ADD_TO_CART":
      return {
        ...state,
        cart: action.item,
      };

    // Wishlist actions
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: action.item, // Updated wishlist
      };

    case "REMOVE_FROM_WISHLIST":
      const wishlistIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );
      let newWishlist = [...state.wishlist];
      if (wishlistIndex >= 0) {
        newWishlist.splice(wishlistIndex, 1);
      }
      return {
        ...state,
        wishlist: newWishlist,
      };

    default:
      return state;
  }
};

export default AppReducer;
