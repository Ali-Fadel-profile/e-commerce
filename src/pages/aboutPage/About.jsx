import styles from "./About.module.css";
import sideImage from "@images/about/Side-Image.jpg";
import { TbMoneybag } from "react-icons/tb";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import Location from "@components/layout/Location";
import FeaturesCard from "./FeaturesCard";
import Services from "@components/common/Services";
import ManagersSection from "./ManagersSection";

function About() {
  return (
    <>
      {" "}
      <Location />
      {/* Our Story Section */}
      <div className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2>Our Story</h2>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={styles.storyBackground}>
          <img src={sideImage} alt="image" />
        </div>
      </div>
      <div className={styles.aboutContainer}>
        {/* Our Features Section  */}
        <section className={styles.servicesSection}>
          <FeaturesCard
            image={<CiShop />}
            number={"10.5k"}
            title={"Sallers active our site"}
          />{" "}
          <FeaturesCard
            image={<LuCircleDollarSign />}
            number={"33k"}
            title={"Mopnthly Produduct Sale"}
          />
          <FeaturesCard
            image={<IoBagHandleOutline />}
            number={"45.5k"}
            title={"Customer active in our site"}
          />{" "}
          <FeaturesCard
            image={<TbMoneybag />}
            number={"25k"}
            title={"Anual gross sale in our site"}
          />
        </section>

        {/* Our Managers Section */}
        <ManagersSection />
        {/* Our Services */}
        <section className={styles.servicesSection}>
          <Services />
        </section>
      </div>
    </>
  );
}

export default About;
