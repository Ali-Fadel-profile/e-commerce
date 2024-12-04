import { useAuth } from "@context/GlobalState";
function useUpdateCart() {
  const { dispatch } = useAuth();

  return (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "ADD_TO_CART",
      item: cart,
    });
  };
}

export default useUpdateCart;
