import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@images/Logo.svg";
import wishlistOff from "@images/icons/wishList.svg";
import CartOff from "@images/icons/CartOff.svg";
import userOn from "@images/icons/UserOn.svg";
import userIcon from "@images/icons/user.svg";
import cancelIcon from "@images/icons/icon-cancel.svg";
import orders from "@images/icons/icon-mallbag.svg";
import reviews from "@images/icons/Icon-Reviews.svg";
import logOut from "@images/icons/Icon-logout.svg";
import styles from "./Header.module.css";
import Ads from "./Ads";
import { useAuth } from "@context/GlobalState";
import { auth } from "@services/firebase";
import { signOut } from "firebase/auth";
import useScrollToTop from "@hooks/useScrollToTop";
import SearchForm from "./SearchForm";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDroppedDown, setIsDroppedDown] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { user, wishlist, cart } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
    setIsDroppedDown(true);
  };

  const toggleDropdown = () => {
    setIsDroppedDown(!isDroppedDown);
    setIsCollapsed(true);
  };

  const handleLogOut = () => {
    signOut(auth);
  };
  const handleActiveLink = () => {
    useScrollToTop();
    setIsCollapsed(true);
  };

  return (
    <header
      className={`${styles.header} ${
        isHeaderVisible ? styles.visible : styles.hidden
      }`}
    >
      {" "}
      <Ads />
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logoContainer}>
            <button className={styles.navbarToggler} onClick={toggleNavbar}>
              <span className={styles.navbarTogglerIcon}></span>
            </button>
            <Link to="/" onClick={useScrollToTop}>
              <img src={Logo} alt="logo image" />
            </Link>
          </div>
          <div
            className={`${styles.navbarCollapse} ${
              isCollapsed ? "" : styles.active
            }`}
          >
            <ul className={styles.navbarNav}>
              <li>
                <NavLink
                  to="/"
                  onClick={handleActiveLink}
                  style={({ isActive }) => ({
                    color: isActive ? "var(--color-red)" : "inherit",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={handleActiveLink}
                  style={({ isActive }) => ({
                    color: isActive ? "var(--color-red)" : "inherit",
                  })}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={handleActiveLink}
                  style={({ isActive }) => ({
                    color: isActive ? "var(--color-red)" : "inherit",
                  })}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={handleActiveLink}
                  style={({ isActive }) => ({
                    color: isActive ? "var(--color-red)" : "inherit",
                  })}
                >
                  About
                </NavLink>
              </li>
              {!user && (
                <>
                  {" "}
                  <li>
                    <NavLink
                      to="/signin"
                      onClick={handleActiveLink}
                      style={({ isActive }) => ({
                        color: isActive ? "var(--color-red)" : "inherit",
                      })}
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      onClick={handleActiveLink}
                      style={({ isActive }) => ({
                        color: isActive ? "var(--color-red)" : "inherit",
                      })}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
              {user && (
                <li onClick={handleLogOut}>
                  {" "}
                  <NavLink to="/" onClick={handleActiveLink}>
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className={styles.navbarExtra}>
          <SearchForm />
          <div className={styles.navbarExtra__icons}>
            <Link
              to="/wishlist"
              className={styles.navbarExtra__iconsLink}
              onClick={handleActiveLink}
            >
              <img
                src={wishlistOff}
                alt="wishlist icon"
                className={styles.navbarExtra__iconWhishList}
              />
              {wishlist.length > 0 ? (
                <p className={styles.navbarExtra__WishListText}>
                  {wishlist.length}
                </p>
              ) : null}
            </Link>
            <Link
              to="/cart"
              className={styles.navbarExtra__iconsLink}
              onClick={handleActiveLink}
            >
              <img
                src={CartOff}
                alt="basket icon"
                className={styles.navbarExtra__iconsBasket}
              />
              {cart.length > 0 ? (
                <p className={styles.navbarExtra__BasketText}>{cart.length}</p>
              ) : null}
            </Link>
            {user ? (
              <Link
                className={styles.navbarExtra__iconsLink}
                onClick={toggleDropdown}
              >
                <img
                  src={userOn}
                  alt="user icon"
                  className={styles.navbarExtra__iconUser}
                />
                <ul
                  className={`${styles.navbarExtra__manageMyAccount} ${
                    isDroppedDown ? "" : styles.active
                  }`}
                >
                  <li>
                    <Link
                      to="/account"
                      onClick={handleActiveLink}
                      className={styles.navbarExtra__manageMyAccount_link}
                    >
                      <img src={userIcon} alt="" />
                      <p>Manage My Account</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      onClick={handleActiveLink}
                      className={styles.navbarExtra__manageMyAccount_link}
                    >
                      <img src={orders} alt="" />
                      <p>My Order</p>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/orders"
                      className={styles.navbarExtra__manageMyAccount_link}
                    >
                      <img src={cancelIcon} alt="" />
                      <p>My Cancellations</p>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/orders"
                      onClick={handleActiveLink}
                      className={styles.navbarExtra__manageMyAccount_link}
                    >
                      <img src={reviews} alt="" />
                      <p>My Reviews</p>
                    </Link>
                  </li>
                  <li onClick={handleLogOut}>
                    {" "}
                    <Link
                      to="/"
                      onClick={handleActiveLink}
                      className={styles.navbarExtra__manageMyAccount_link}
                    >
                      <img src={logOut} alt="" />
                      <p>Logout</p>
                    </Link>
                  </li>
                </ul>
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
