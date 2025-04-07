import styles from "./tour-content.module.css";

const TourContent = ({ tour }) => {
  const { date, location, title, image } = tour;
  const newDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const newAddress = location.replace(",", "\n");

  return (
    <li className={styles.tour}>
      <img src={"/" + image} alt={title} />
      <div className={styles.cardBody}>
        <div>
          <h2> {title} </h2>
          <div className={styles.date}>
            <p> {newDate}</p>
          </div>
          <div>
            <p> {newAddress} </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TourContent;
