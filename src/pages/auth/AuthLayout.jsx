import signUpImage from "@images/signin-image.jpg";
import styles from "./AuthLayout.module.css";

function AuthLayout({ children }) {
  return (
    <div className={styles.AuthLayoutauthContainer}>
      <div className={styles.authImage}>
        <img src={signUpImage} alt="Sign Up" />
      </div>
      <div className={styles.authForm}> {children}</div>
    </div>
  );
}

export default AuthLayout;
