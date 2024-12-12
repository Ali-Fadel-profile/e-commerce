import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import ErrorPage from "@pages/ErrorPage";
import SignUp from "@pages/auth/SignUp";
import SignIn from "@pages/auth/SignIn";
import Contact from "@pages/Contact";
import About from "@pages/aboutPage/About";
import AllProducts from "@pages/productPages/AllProducts";
import WishList from "@pages/productPages/WishList";
import ProductDetails from "@pages/productPages/ProductDetails";
import Cart from "@pages/productPages/cart/Cart";
import Payment from "@pages/productPages/Payment";
import Account from "@pages/auth/Account";
import Layout from "@components/layout/Layout";
import { useAuth } from "@context/GlobalState";
import { useEffect, useState } from "react";
import { auth } from "@services/firebase";
import CheckOut from "@pages/productPages/CheckOut";
import Orders from "@pages/productPages/Orders";
import LoadingSpinner from "@components/LoadingSpinner";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const { dispatch } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/resetPassword" element={<ForgotPassword />} />
            <Route path="/wishlist" element={<WishList />} />{" "}
            <Route path="/cart" element={<Cart />} />{" "}
            <Route path="/checkOut" element={<CheckOut />} />{" "}
            <Route path="/productDetails" element={<ProductDetails />} />{" "}
            <Route path="/payment" element={<Payment />} />{" "}
            <Route path="/account" element={<Account />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
