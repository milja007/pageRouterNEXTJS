import { useRef } from "react";
import Button from "../button/button";
import styles from "./tour-search.module.css";

const TourSearch = ({ routeHandler }) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    routeHandler(selectedYear, selectedMonth);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.mainWrapper}>
        <div className={styles.selectWrapper}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Tour</Button>;
    </form>
  );
};

export default TourSearch;
