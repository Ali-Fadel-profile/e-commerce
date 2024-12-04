import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./Appreducer";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
        placeOrder: state.placeOrder,
        dispatch: dispatch,
        productDetails: state.productDetails,
        discountParcentage: state.discountParcentage,
        cartTotalPrice: state.cartTotalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

export const useAuth = () => {
  return useContext(GlobalContext);
};
