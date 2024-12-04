import services1 from "@images/about/services1.png";
import services2 from "@images/about/services2.png";
import services3 from "@images/about/services3.png";
import ServicesCard from "./ServicesCard";
import styles from "./Services.module.css";
function Services() {
  return (
    <div className={styles.serviceCards}>
      <ServicesCard
        image={services1}
        title={"FREE AND FAST DELIVERY"}
        text={"Free delivery for all orders over $140"}
      />{" "}
      <ServicesCard
        image={services2}
        title={"24/7 CUSTOMER SERVICE"}
        text={"Friendly 24/7 customer support"}
      />{" "}
      <ServicesCard
        image={services3}
        title={"MONEY BACK GUARANTEE"}
        text={"We reurn money within 30 days"}
      />{" "}
    </div>
  );
}

export default Services;
