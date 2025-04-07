import styles from "./tour-item.module.css";
import Button from "./button/button";
const TourItem = (props) => {
  const { id, title, image, date, location } = props;
  const newDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const newAddress = location.replace(",", "\n");
  const targetLink = `/tours/${id}`;
  return (
    <li className={styles.tour}>
      <img src={"/" + image} alt={title} />
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h2> {title} </h2>
          <div className={styles.date}>
            <p> {newDate}</p>
          </div>
          <div className={styles.address}>
            <p> {newAddress} </p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <Button link={targetLink}>Go To Tour</Button>
        </div>
      </div>
    </li>
  );
};

export default TourItem;
