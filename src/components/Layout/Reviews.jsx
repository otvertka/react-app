import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import equipImage from "../../Assets/images/equip-img/777.png";
import ReviewsCard from "../Cards/ReviewsCard";

const Reviews = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="my-40 flex flex-col">
      <h2 className="py-11 uppercase text-[40px]">Neueste Bewertungen</h2>
      {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 container mx-auto mt-10 mb-12">
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
      </div> */}

      <Carousel responsive={responsive}>
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
      </Carousel>

      <div className="flex justify-center mt-8">
        <button className=" text-gray-500 hover:text-black uppercase">zeige alles</button>
      </div>
    </section>
  );
};

export default Reviews;
