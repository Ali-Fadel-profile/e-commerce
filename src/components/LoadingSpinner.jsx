import styles from "./LoadingSpinner.module.css";
function LoadingSpinner() {
  return (
    <div className={styles.loading_spinner}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default LoadingSpinner;
