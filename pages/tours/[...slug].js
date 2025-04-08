import { useRouter } from "next/router";
import { getFilteredTours } from "@/fake-data";

const FilteredTourPage = () => {
  const router = useRouter();
  const filteredDate = router.query.slug;
  // console.log(filteredData);
  if (!filteredDate) {
    return <h3 className="center-tag">Loading Tours...</h3>;
  }
  const selctedYear = filteredDate[0];
  const selectedMonth = filteredDate[1];

  const numYear = +selctedYear;
  const numMonth = +selectedMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2028 ||
    numYear > 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    const filteredTours = getFilteredTours({ year: numYear, month: numMonth });
  }

  if (!filteredTours || filteredTours.length === 0) {
    return (
      <h3 className="center-tag">
        There is no tours on the dates you selected
      </h3>
    );
  }
  return (
    <h3 className="center-tag">
      You have entered invalid values . Please check the parameters.{" "}
    </h3>
  );
};

export default FilteredTourPage;
