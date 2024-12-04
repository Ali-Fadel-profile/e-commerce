import { useState } from "react";
import AuthLayout from "./AuthLayout";
import styles from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@services/firebase";
import LoadingSpinner from "@components/LoadingSpinner";
import useScrollToTop from "@hooks/useScrollToTop";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "The email address is not valid. Please try again.";
      case "auth/user-disabled":
        return "This account has been disabled. Please contact support.";
      case "auth/user-not-found":
        return "No account found with this email. Please check your email or sign up.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/invalid-credential":
        return "The credentials are not valid. Please try again.";
      case "auth/too-many-requests":
        return "Too many unsuccessful login attempts. Please try again later.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  const handleSignIn = async (e) => {
    useScrollToTop();
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = handleFirebaseError(error.code);
        setError(errorMessage);
        setLoading(false);
      });
  };
  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <AuthLayout>
        <div className={styles.signInContainer}>
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

          <form onSubmit={handleSignIn}>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>{" "}
            {error ? <p className={styles.error}>{error}</p> : null}
            <div className={styles.logIn}>
              <button type="submit" className={styles.btnCreateAccount}>
                Log in
              </button>
              <p>
                <Link to="/login">Forgot Password?</Link>
              </p>
            </div>
          </form>
        </div>
      </AuthLayout>
    );
  }
}

export default SignIn;
