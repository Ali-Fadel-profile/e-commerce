import styles from "./FeaturesCard.module.css";
function FeaturesCard({ image, number, title }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureBorder}>
        {" "}
        <div className={styles.featureImage}>{image}</div>
      </div>
      <h3>{number}</h3>
      <p>{title}</p>
    </div>
  );
}

export default FeaturesCard;
