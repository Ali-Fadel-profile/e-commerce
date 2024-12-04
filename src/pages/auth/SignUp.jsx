import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import AuthLayout from "./AuthLayout";
import GoogleIcon from "@images/icons/google.png";
import { useState } from "react";
import LoadingSpinner from "@components/LoadingSpinner";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@services/firebase";
import useScrollToTop from "@hooks/useScrollToTop";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Custom error message mapping
  const handleFirebaseError = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        return "This email is already in use. Please try another email or log in.";
      case "auth/invalid-email":
        return "The email address is not valid. Please enter a valid email.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are currently disabled. Please try again later.";
      case "auth/weak-password":
        return "Your password is too weak. Please use a stronger password.";
      case "auth/popup-closed-by-user":
        return "The popup was closed before completing the sign-up. Please try again.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  // Handle form submission for email and password sign up
  const handleSubmit = async (e) => {
    useScrollToTop();
    setLoading(true);
    e.preventDefault();
    setError(null);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/");
    } catch (error) {
      const errorMessage = handleFirebaseError(error.code);
      setError(errorMessage);
      setLoading(false);
    }
  };

  // Handle Google Sign Up
  const handleGoogleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setError(
        "Sign Up with Google is currently unavailable. Please try again later."
      );
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <AuthLayout>
        <div className={styles.signUpContainer}>
          <h2>Create an Account</h2>
          <p className={styles.signUpText}>Enter your details below</p>

          <form onSubmit={handleSubmit}>
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
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button
              type="submit"
              className={styles.btnCreateAccount}
              disabled={loading}
            >
              Create Account
            </button>
          </form>
          <button
            onClick={handleGoogleSignUp}
            className={styles.btnSignUpWithGoogle}
          >
            <div>
              <img src={GoogleIcon} alt="Google Icon" />
            </div>
            <p>Sign Up with Google</p>
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/signIn" onClick={useScrollToTop}>
              Login
            </Link>
          </p>
        </div>
      </AuthLayout>
    );
  }
}

export default SignUp;
