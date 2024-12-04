import useUpdateCart from "./useUpdateCart";
function useAddToCart() {
  const updateCart = useUpdateCart();
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = cart.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (!productExists) {
      cart.push(product);
      updateCart(cart);
    }
  };
  return addToCart;
}

export default useAddToCart;
