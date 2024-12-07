import { useState } from "react";
import styles from "./ManagersSection.module.css";
import MangerCard from "./MangerCard";
import twitter from "@images/about/twitter.png";
import instagrem from "@images/about/instagrem.png";
import linkedin from "@images/about/linkedin.png";
import mangerImage1 from "@images/about/manger1.png";
import mangerImage2 from "@images/about/manger2.png";

function ManagersSection() {
  const managers = [
    {
      name: "Will Smith",
      position: "Managing Director",
      image: mangerImage2,
    },
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      image: mangerImage1,
    },
    {
      name: "Tom Hanks",
      position: "Product Designer",
      image: mangerImage2,
    },

    {
      name: "John Wick",
      position: "Staff Engineer",
      image: mangerImage1,
    },
    {
      name: "Bill Gates",
      position: "Staff Engineer",
      image: mangerImage2,
    },
    {
      name: "John Cena",
      position: "Staff Engineer",
      image: mangerImage1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const totalGroups = Math.ceil(managers.length / visibleCount);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleManagers = () => {
    const startIndex = currentIndex * visibleCount;
    const endIndex = startIndex + visibleCount;
    return managers.slice(startIndex, endIndex);
  };

  return (
    <section className={styles.managersSection}>
      <div className={styles.managerGallery}>
        {getVisibleManagers().map((manager, index) => (
          <div key={index} className={styles.managerCard}>
            <MangerCard
              twitter={twitter}
              instagrem={instagrem}
              linkedin={linkedin}
              name={manager.name}
              position={manager.position}
              image={manager.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.managerNav}>
        {Array.from({ length: totalGroups }).map((_, index) => (
          <span
            key={index}
            className={`${styles.navCircle} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleCircleClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default ManagersSection;
