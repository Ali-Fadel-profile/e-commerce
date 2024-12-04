import { useState, useEffect } from "react";
import arrowUp from "@images/icons/arrow-up.png";
import styles from "./ArrowUp.module.css";
import useScrollToTop from "@hooks/useScrollToTop";

function ArrowUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.arrowUp} onClick={useScrollToTop}>
          <img src={arrowUp} alt="Scroll to top" />
        </div>
      )}
    </>
  );
}

export default ArrowUp;
