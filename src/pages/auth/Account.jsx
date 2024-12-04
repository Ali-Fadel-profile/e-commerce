import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "@services/firebase"; // Firebase auth import
import styles from "./Account.module.css";
import useScrollToTop from "@hooks/useScrollToTop";
import Location from "@components/layout/Location";
import LoadingSpinner from "@components/LoadingSpinner";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";

function Account() {
  const [initialState, setInitialState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isModified, setIsModified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the current user info when the component mounts
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userProfile = {
        firstName: "your first name",
        lastName: "your last name",
        email: user.email,
        address: "123 Example Street",
      };
      setInitialState(userProfile);
      setFormState(userProfile);
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Check if any form field has changed compared to the initial state
    setIsModified(
      value !== initialState[name] ||
        newPassword !== "" ||
        confirmPassword !== ""
    );
  };

  // Re-authenticate and update password
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const user = auth.currentUser;
      if (user && password) {
        // Step 1: Re-authenticate the user
        const credential = EmailAuthProvider.credential(user.email, password);
        await reauthenticateWithCredential(user, credential);

        // Step 2: Update the password after re-authentication
        await updatePassword(user, newPassword).then(() => {
          setError("Password updated successfully");
          setPassword("");
          setNewPassword("");
          setConfirmPassword("");
          setIsModified(false);
        });
      } else {
        setError("Please enter your current password to update.");
      }
    } catch (error) {
      setError("Failed to update password: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    useScrollToTop();
    return <LoadingSpinner />;
  } else {
    return (
      <Location>
        <section className={styles.accountSection}>
          {/* Navigation */}
          <div className={styles.navSection}>
            <div className={styles.navSection_group}>
              <h3 className={styles.navSection_title}>Manage My Account</h3>
              <ul>
                <li>
                  <Link className={styles.navSection_link}>My Account</Link>
                </li>
              </ul>
            </div>

            <div className={styles.navSection_group}>
              <h3 className={styles.navSection_title}>Manage My Orders</h3>
              <ul>
                <li>
                  <Link
                    className={styles.navSection_link}
                    to="/orders"
                    onClick={useScrollToTop}
                  >
                    My Returns
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.navSection_link}
                    to="/orders"
                    onClick={useScrollToTop}
                  >
                    My Cancellations
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.navSection_group}>
              <h3 className={styles.navSection_title}>Manage My Wishlist</h3>
              <ul>
                <li>
                  <Link
                    className={styles.navSection_link}
                    to="/wishlist"
                    onClick={useScrollToTop}
                  >
                    My Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Account Information Form */}
          <div className={styles.formSection}>
            <h2 className={styles.formSection_title}>Edit Your Profile</h2>
            <form
              className={styles.accountForm}
              onSubmit={handlePasswordUpdate}
            >
              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <label>First Name</label>
                  <input
                    disabled
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Last Name</label>
                  <input
                    disabled
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    disabled
                    placeholder={formState.email}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Address</label>
                  <input
                    disabled
                    type="text"
                    name="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              {/* Change Password Section */}
              <div className={styles.changePassword}>
                <div className={styles.passwordGroup}>
                  <label>Password Changes</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.passwordGroup}>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setIsModified(
                        e.target.value !== "" || confirmPassword !== ""
                      );
                    }}
                  />
                </div>
                <div className={styles.passwordGroup}>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setIsModified(
                        newPassword !== "" || e.target.value !== ""
                      );
                    }}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p
                  className={styles.errorMessage}
                  style={
                    isModified
                      ? { color: "var(--color-red)" }
                      : { color: "var(--color-green)" }
                  }
                >
                  {error}
                </p>
              )}

              {/* Buttons */}
              <div className={styles.buttonGroup}>
                <button type="button" className={styles.cancelButton}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.saveButton}
                  disabled={!isModified || isLoading}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </section>
      </Location>
    );
  }
}

export default Account;
