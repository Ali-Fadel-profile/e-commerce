import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";
import styles from "./ForgotPassword.module.css";
import { auth } from "@services/firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Please enter your email address!",
        position: "top-end",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "Password reset email sent!",
        text: "Please check your inbox.",
        position: "top-end",
        timer: 3000,
        showConfirmButton: false,
      });
      setEmail("");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to send email",
        text: error.message,
        position: "top-end",
        timer: 3000,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <h2>Forgot Password</h2>
      <form
        onSubmit={handleForgotPassword}
        className={styles.forgotPasswordForm}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.emailInput}
        />
        <button
          type="submit"
          disabled={loading}
          className={styles.submitButton}
        >
          {loading ? "Sending..." : "Send Reset Email"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
