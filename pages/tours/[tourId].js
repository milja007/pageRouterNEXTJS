import React, { use } from "react";
import { useRouter } from "next/router";
import { getTourById } from "@/fake-data";
import style from "@/styles/tour-detail.module.css";
import TourHeader from "@/components/tours/tour-detail/tour-header";
import TourContent from "@/components/tours/tour-detail/tour-content";

import TourDescription from "@/components/tours/tour-detail/tour-description";

const TourDetailPage = () => {
  const router = useRouter();
  const tourId = router.query.tourId;
  const tour = getTourById(tourId);

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

export default TourDetailPage;

{
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
}
