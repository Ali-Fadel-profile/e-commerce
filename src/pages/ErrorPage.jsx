import { Link } from "react-router-dom";
import Location from "@components/layout/Location";
import styles from "./ErrorPage.module.css";
import useScrollToTop from "@hooks/useScrollToTop";
function ErrorPage() {
  return (
    <Location>
      <div className={styles.error}>
        <h1>404 Not Found</h1>;
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/" onClick={useScrollToTop}>
          {" "}
          <button>Back to home page</button>
        </Link>
      </div>
    </Location>
  );
}

export default ErrorPage;
