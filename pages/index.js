import TourList from "@/components/tours/tour-list";
import { getFeaturedTours } from "@/fake-data";

const HomePage = () => {
  const featuredTours = getFeaturedTours();
  return (
    <div>
      <TourList tours={featuredTours} />
    </div>
  );
};

export default HomePage;
