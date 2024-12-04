import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import ArrowUp from "./ArrowUp";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ArrowUp />
      <Footer />
    </>
  );
};

export default Layout;
