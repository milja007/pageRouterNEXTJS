import { getTourById, getAllTours, getFeaturedTours } from "@/helpers/api";
import style from "@/styles/tour-detail.module.css";
import TourHeader from "@/components/tours/tour-detail/tour-header";
import TourContent from "@/components/tours/tour-detail/tour-content";

import TourDescription from "@/components/tours/tour-detail/tour-description";

const TourDetailPage = ({ tour }) => {
  if (!tour) {
    return <h3 className={style.notFound}>Tour N0T Found</h3>;
  }
  return (
    <div className={style.wrapper}>
      <TourHeader title={tour.title} />
      <TourContent tour={tour} />
      <TourDescription>
        <p>{tour.description}</p>
      </TourDescription>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const tourId = context.params.tourId;
  const tour = await getTourById(tourId);
  //tu malo promjenjeno
  return {
    props: {
      tour: tour,
    },
    revalidate: 60,
  };
};
export const getStaticPaths = async () => {
  const tours = await getAllTours();
  const paths = tours.map((tour) => ({ params: { tourId: tour.id } }));
  return {
    paths: paths,
    fallback: false,
  };
};
export default TourDetailPage;

/* <li className={styles.tour}>
<img src={"/" + image} alt={title} />
<div className={styles.cardBody}>
  <div className={styles.cardHeader}>
    <h2> {title} </h2>
    <div className={styles.date}>
      <p> {newDate}</p>
    </div>
    <div className={styles.address}>
      <p> {newAddress} </p>
    </div>
  </div>
  <div className={styles.cardFooter}>
    <Button link={targetLink}>Go To Tour</Button>
  </div>
</div>
</li> */
