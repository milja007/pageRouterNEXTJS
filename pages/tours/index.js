import TourSearch from "@/components/tours/search/tour-search";
import TourList from "@/components/tours/tour-list";
import { useRouter } from "next/router";
import { getAllTours } from "@/helpers/api";
const AllToursPage = (props) => {
  const tours = props.tours;
  const router = useRouter();
  const routeHandler = (year, month) => {
    const fullPath = `/tours/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <TourSearch routeHandler={routeHandler} />
      <TourList tours={tours} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const tours = await getAllTours();
  //tu malo promjenjeno
  return {
    props: {
      tours: tours,
    },
    revalidate: 60,
  };
};
export default AllToursPage;
