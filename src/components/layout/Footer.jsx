import { Link } from "react-router-dom";
import SubscribeArrow from "@images/icons/ECommerceFooter/send-email.png";
import QRCode from "@images/icons/ECommerceFooter/Qrcode.jpg";
import PlayStore from "@images/icons/ECommerceFooter/android.jpg";
import AppStore from "@images/icons/ECommerceFooter/appstore.jpg";
import Facebook from "@images/icons/ECommerceFooter/icon-Facebook.png";
import instagrem from "@images/icons/ECommerceFooter/instagrem.png";
import Linkedin from "@images/icons/ECommerceFooter/linkedin.png";
import Twitter from "@images/icons/ECommerceFooter/icon-Twitter.png";
import useScrollToTop from "@hooks/useScrollToTop";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className={styles.footerColumn}>
          <h3>My Account</h3>
          <ul className={styles.myAccount}>
            <li>
              <Link to="/account" onClick={() => useScrollToTop()}>
                My Account
              </Link>
            </li>
            <li>
              <Link to="/signIn" onClick={() => useScrollToTop()}>
                Login/Register
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={() => useScrollToTop()}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => useScrollToTop()}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={() => useScrollToTop()}>
                Wishlist
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p> <p>Contact</p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Download our app</h3>
          <p>Save $3 with App New User Only</p>
          <div className={styles.subscribeQr}>
            <div className={styles.qrCode}>
              {" "}
              <img src={QRCode} alt="QR Code" />
            </div>
            <div className={styles.appLinks}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com"
              >
                <img src={PlayStore} alt="Google Play" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com"
              >
                <img src={AppStore} alt="App Store" />
              </a>
            </div>
          </div>
          <ul className={styles.socialLinks}>
            <li>
              <a target="_blank" href="https://facebook.com">
                <img src={Facebook} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com">
                {" "}
                <img src={instagrem} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com">
                {" "}
                <img src={Linkedin} alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com">
                {" "}
                <img src={Twitter} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
