import TourSearch from "@/components/tours/search/tour-search";
import TourList from "@/components/tours/tour-list";
import { useRouter } from "next/router";
import { getAllTours } from "@/fake-data";
const AllToursPage = () => {
  const tours = getAllTours();
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

export default AllToursPage;
