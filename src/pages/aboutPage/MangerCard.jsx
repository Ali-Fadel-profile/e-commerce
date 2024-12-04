import { Link } from "react-router-dom";
import styles from "./MangerCard.module.css";
function MangerCard({ twitter, instagrem, linkedin, image, name, position }) {
  return (
    <>
      {" "}
      <div className={styles.managerCard}>
        <img src={image} alt="Manager 2" />
        <h3>{name}</h3>
        <p>{position}</p>
        <div className={styles.socialLinks}>
          <Link>
            <img src={twitter} alt="" />
          </Link>
          <Link>
            <img src={instagrem} alt="" />
          </Link>{" "}
          <Link>
            <img src={linkedin} alt="" />
          </Link>
        </div>
      </div>
      {/* Circle navigation for managers */}
    </>
  );
}

export default MangerCard;
