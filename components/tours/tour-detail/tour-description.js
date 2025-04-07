import styles from "./tour-description.module.css";

const TourDescription = ({ children }) => {
  return <div className={styles.desc}>{children}</div>;
};

export default TourDescription;
