import { useAuth } from "@context/GlobalState";
import useScrollToTop from "./useScrollToTop";
import { useNavigate } from "react-router-dom";

function useShowProductDetails() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  return (productDeatails) => {
    dispatch({
      type: "SHOW_PRODUCT_DETAILS",
      item: productDeatails,
    });
    useScrollToTop();
    navigate("/productDetails");
  };
}

export default useShowProductDetails;
