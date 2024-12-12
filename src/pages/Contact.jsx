import styles from "./Contact.module.css";
import phoneIcon from "@images/icons/contact/Cellphone.jpg";
import mailIcon from "@images/icons/contact/Mail.jpg";
import Location from "@components/layout/Location";
import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const contactHandler = (event) => {
    event.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thanks for contact us",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <Location>
      <div className={styles.contactUs}>
        <div className={styles.leftColumn}>
          <div className={styles.contactRow1}>
            <img src={phoneIcon} alt="Phone Icon" />
            <p>Call to us</p>{" "}
          </div>
          <div className={styles.contactRow2}>
            <p>We are available 24/7, 7 days a week.</p>
            <p>phone: +8801611112222</p>
          </div>
          <div className={styles.underline}></div>
          <div className={styles.contactRow1}>
            <img src={mailIcon} alt="Mail Icon" /> <p>Write to Us</p>
          </div>
          <div className={styles.contactRow2}>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>emails: customer@exclusive.com</p>
            <p>emails: support@exclusive.com</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <form className={styles.contactForm} onSubmit={contactHandler}>
            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={inputChangeHandler}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={inputChangeHandler}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className={styles.textAreaRow}>
              <textarea
                placeholder="Your message"
                rows="6"
                name="message"
                value={formData.message}
                onChange={inputChangeHandler}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>{" "}
    </Location>
  );
}

export default Contact;
