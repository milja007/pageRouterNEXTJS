import { useRouter } from "next/router";
import { getFilteredTours } from "@/fake-data";
import Button from "@/components/tours/button/button";
import TourList from "@/components/tours/tour-list";

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
    numYear > 2028 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  )
    return (
      <>
        <h3 className="center-tag">
          You have entered invalid values . Please check the parameters.
        </h3>
        <div className="center-tag">
          <Button link="/tours">Return All Tours</Button>
        </div>
      </>
    );
  const filteredTours = getFilteredTours({
    year: numYear,
    month: numMonth,
  });
  if (!filteredTours || filteredTours.length === 0) {
    return (
      <>
        <h3 className="center-tag">
          There is no tours on the dates you selected
        </h3>
        <div className="center-tag">
          <Button link="/tours">Return All Tours</Button>
        </div>
      </>
    );
  }
  //january is 0 so we need to subtract 1 from the month
  const date = new Date(numYear, numMonth - 1);
  const newDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="center-tag">
      <h1>Tours in {newDate}</h1>
      <TourList tours={filteredTours} />
    </div>
  );
};

export default FilteredTourPage;
