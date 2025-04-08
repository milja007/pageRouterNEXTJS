import TourList from "@/components/tours/tour-list";
import { getFeaturedTours } from "@/helpers/api";

const HomePage = (props) => {
  return (
    <div>
      <TourList tours={props.featuredTours} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredTours = await getFeaturedTours();
  return {
    props: {
      featuredTours: featuredTours,
    },
  };
};
export default HomePage;
