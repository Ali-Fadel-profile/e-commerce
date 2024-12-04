import useUpdateCart from "./useUpdateCart";

function useRemoveFromCart() {
  const updateCart = useUpdateCart();

  return (productId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartIndex = cart.findIndex((cartItem) => cartItem.id === productId);

    if (cartIndex >= 0) {
      cart.splice(cartIndex, 1);
    }
    updateCart(cart);
  };
}

export default useRemoveFromCart;
