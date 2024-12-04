import { NavLink, useLocation } from "react-router-dom";
import styles from "./Location.module.css";

const routesMap = {
  "/about": "About Us",
  "/contact": "Contact Us",
  "/cart": "Cart",
  "/checkOut": "Check Out",
  "/account": "My Account",
};

function Location({ children }) {
  const location = useLocation();

  const currentPage = routesMap[location.pathname] || "404 Error";

  return (
    <div className={styles.locationContainer}>
      <div className={styles.location}>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>/</p>
        <p>
          <span>{currentPage}</span>
        </p>
      </div>
      {children}
    </div>
  );
}

export default Location;
