import styles from "./ServicesCard.module.css";
function ServicesCard({ image, title, text }) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceBorder}>
        {" "}
        <div className={styles.serviceImage}>
          <img src={image} alt="" />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ServicesCard;
