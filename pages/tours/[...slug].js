import { getFilteredTours } from "@/helpers/api";
import Button from "@/components/tours/button/button";
import TourList from "@/components/tours/tour-list";

const FilteredTourPage = (props) => {
  if (props.hasError) {
    return (
      <div className="center-tag">
        <h3 className="center-tag">
          You have entered invalid values. Please check the parameters.
        </h3>
        <div className="center-tag">
          <Button link="/tours">Return All Tours</Button>
        </div>
      </div>
    );
  }

  const filteredTours = props.tours;

  if (!filteredTours || filteredTours.length === 0) {
    return (
      <div className="center-tag">
        <h3 className="center-tag">
          There are no tours on the dates you selected.
        </h3>
        <div className="center-tag">
          <Button link="/tours">Return All Tours</Button>
        </div>
      </div>
    );
  }

  const { year, month } = props.date;
  const date = new Date(year, month - 1);
  const newDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="center-tag">
      <h1>Tours in {newDate}</h1>
      <TourList tours={filteredTours} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const filteredDate = params?.slug;

  if (!filteredDate || filteredDate.length !== 2) {
    return {
      props: { hasError: true },
    };
  }

  const selectedYear = filteredDate[0];
  const selectedMonth = filteredDate[1];

  const numYear = +selectedYear;
  const numMonth = +selectedMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  try {
    const filteredTours = await getFilteredTours({
      year: numYear,
      month: numMonth,
    });
    return {
      props: {
        tours: filteredTours,
        date: {
          year: numYear,
          month: numMonth,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching filtered tours:", error);
    return {
      props: {
        hasError: true,
      },
    };
  }
};

export default FilteredTourPage;
