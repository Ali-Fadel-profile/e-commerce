import CompleteStarIcon from "@images/icons/completeStar.svg";
import HalfStarIcon from "@images/icons/halfStar.svg";
import EmptyStarIcon from "@images/icons/emptyStar.svg";
import styles from "./Rating.module.css";

function Rating({ rateStar, rateNumber }) {
  // Helper function to render the stars
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate); // Integer part (full stars)
    const hasHalfStar = rate % 1 !== 0; // Check if there's a half star
    const totalStars = 5; // Max number of stars

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img key={`full-${i}`} src={CompleteStarIcon} alt="Full Star" />
      );
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<img key="half" src={HalfStarIcon} alt="Half Star" />);
    }

    // Add empty stars to fill up to 5 stars
    for (let i = stars.length; i < totalStars; i++) {
      stars.push(
        <img key={`empty-${i}`} src={EmptyStarIcon} alt="Empty Star" />
      );
    }

    return stars;
  };

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>{renderStars(rateStar)}</div>
      <p className={styles.rateNumber}>({rateNumber})</p>
    </div>
  );
}

export default Rating;
