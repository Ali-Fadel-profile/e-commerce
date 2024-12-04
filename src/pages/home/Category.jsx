import SectionLayout from "./SectionLayout";
import styles from "./Category.module.css";
import phones from "@images/home/cellphone.svg";
import computer from "@images/home/computer.svg";
import smartWatch from "@images/home/smartWatch.svg";
import camera from "@images/home/camera.svg";
import headphone from "@images/home/headPhone.svg";
import gamepad from "@images/home/gamepad.svg";
import { Link } from "react-router-dom";
import useScrollToTop from "@hooks/useScrollToTop";
const categories = [
  { name: "Phones", image: phones },
  { name: "Computers", image: computer },
  { name: "Smart Watches", image: smartWatch },
  { name: "Cameras", image: camera },
  { name: "Headphones", image: headphone },
  { name: "Gamepads", image: gamepad },
];

function Category() {
  return (
    <SectionLayout
      title="Categories"
      description="Browse By Category"
      extraContentType="arrows"
      button=""
    >
      <section className={styles.category}>
        <div className={styles.categoryCards}>
          {categories.map((category, index) => (
            <Link
              onClick={useScrollToTop}
              to="/products"
              className={styles.categoryCard}
              key={index}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </SectionLayout>
  );
}

export default Category;
