import TourItem from "./tour-item";
import styles from "./tour-list.module.css";

const TourList = (props) => {
  const { tours } = props;
  return (
    <ul className={styles.list}>
      {tours.map((tour) => (
        <TourItem
          key={tour.id}
          id={tour.id}
          title={tour.title}
          image={tour.image}
          date={tour.date}
          location={tour.location}
        />
      ))}
    </ul>
  );
};

export default TourList;
