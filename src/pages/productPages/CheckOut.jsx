import Location from "@components/layout/Location";
import styles from "./CheckOut.module.css";
import CartTotalPrice from "@components/common/CartTotalPrice";
import paymentMethods from "@images/Payment-methods.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "@hooks/useScrollToTop";
import { useAuth } from "@context/GlobalState";

function CheckOut() {
  const [isCashPayment, setIsCashPayment] = useState(false);
  const [isCardPayment, setIsCardPayment] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    town: "",
    phoneNumber: "",
    emailAddress: "",
    saveInformation: false,
  });
  const { user, dispatch } = useAuth();
  const validateForm = () => {
    let errors = {};
    if (!user) {
      errors.paymentMethod = "Please Sign In to Place Orders";
    } else {
      if (!formData.firstName.trim())
        errors.firstName = "First Name is required";
      if (!formData.streetAddress.trim())
        errors.streetAddress = "Street Address is required";
      if (!formData.apartment.trim())
        errors.apartment = " Apartment, floor, is required";
      if (!formData.town.trim()) errors.town = "Town/City is required";
      if (!formData.phoneNumber)
        errors.phoneNumber = "Phone Number is required";
      if (!formData.emailAddress) {
        errors.emailAddress = "Email Address is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
        errors.emailAddress = "Email format is invalid";
      }
      if (!isCardPayment && !isCashPayment) {
        errors.paymentMethod = "Please select a payment method";
      }
    }

    return errors;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      if (isCardPayment) {
        navigate("/payment");
        useScrollToTop();
      } else if (isCashPayment) {
        navigate("/orders");
        useScrollToTop();
        dispatch({
          type: "PLACE_ORDER",
          placeOrder: true,
        });
      }
    } else {
      setErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Location />
      <section className={styles.checkOut}>
        <form className={styles.fullForm} onSubmit={handlePlaceOrder}>
          <div className={styles.billingDetails}>
            <p className={styles.billingDetails_title}>Billing Details</p>
            <div className={styles.billingDetails_form}>
              <label
                htmlFor="firstName"
                className={styles.billingDetails_formLabel}
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <p className={styles.error}>{errors.firstName}</p>
              )}

              <label
                htmlFor="CompanyName"
                className={styles.billingDetails_formLabel}
              >
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />

              <label
                htmlFor="StreetAddress"
                className={styles.billingDetails_formLabel}
              >
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
              />
              {errors.streetAddress && (
                <p className={styles.error}>{errors.streetAddress}</p>
              )}

              <label
                htmlFor="Apartment"
                className={styles.billingDetails_formLabel}
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
              />
              {errors.apartment && (
                <p className={styles.error}>{errors.apartment}</p>
              )}
              <label htmlFor="Town" className={styles.billingDetails_formLabel}>
                Town/City
              </label>
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={handleInputChange}
              />
              {errors.town && <p className={styles.error}>{errors.town}</p>}

              <label
                htmlFor="PhoneNumber"
                className={styles.billingDetails_formLabel}
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {errors.phoneNumber && (
                <p className={styles.error}>{errors.phoneNumber}</p>
              )}

              <label
                htmlFor="EmailAddress"
                className={styles.billingDetails_formLabel}
              >
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
              {errors.emailAddress && (
                <p className={styles.error}>{errors.emailAddress}</p>
              )}
            </div>
          </div>

          <div className={styles.checkoutDetails}>
            <CartTotalPrice cartProducts />
            <div className={styles.paymentForm}>
              <label className={styles.paymentOption}>
                <input
                  onClick={() => {
                    setIsCashPayment(false);
                    setIsCardPayment(true);
                  }}
                  className={styles.paymentOption_radio}
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                />
                <p className={styles.paymentOption_text}>Bank</p>
                <img src={paymentMethods} alt="payment methods" />
              </label>

              <label className={styles.paymentOption}>
                <input
                  className={styles.paymentOption_radio}
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  onClick={() => {
                    setIsCashPayment(true);
                    setIsCardPayment(false);
                  }}
                />
                <p className={styles.paymentOption_text}>Cash on delivery</p>
              </label>
              {errors.paymentMethod && (
                <p className={styles.error}>{errors.paymentMethod}</p>
              )}
            </div>
            <button className={styles.placeOrderButton} type="submit">
              Place Order
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CheckOut;
