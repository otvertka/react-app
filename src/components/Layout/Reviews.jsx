import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import equipImage from "../../Assets/images/equip-img/777.png";
import ReviewsCard from "../Cards/ReviewsCard";
import { NavLink } from "react-router-dom";

const Reviews = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 850 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full my-20 flex flex-col">
      <h2 className="py-11 uppercase text-4xl lg:text-6xl text-center">Neueste Bewertungen</h2>
      <div className="flex justify-center lg:gap-2">
        <div className="w-[90vw] md:w-[100vw] lg:max-w-6xl px-5">
      <Carousel 
          responsive={responsive} itemClass="px-2 md:px-3"
          infinite={false}
          arrows>
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
      </Carousel>
    </div>
    </div>
    <div className="flex justify-center mt-3">
        <NavLink
          to="/bikes"
                  className="
                      px-2 py-1
                      my-2
                      rounded-lg
                      bg-transparent
                      text-gray-500
                      font-semibold
                      text-sm
                      shadow-md 
                      transition
                      duration-300
                      transform
                      hover:bg-gray-100/30
                      hover:text-gray-900
                      hover:scale-105
                      hover:shadow-xl
                      hover:-translate-y-1"
        >
          zeige alles...
        </NavLink>
      </div>
    </section>
  );
};

export default Reviews;
