import React from "react";
import { NavLink } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselMain = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
    <section>
      <Carousel showDots={true} responsive={responsive}>
        <NavLink to='/bikes' className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full" href="#">
          <h2 className="text-white mb-4 text-lg font-light">Extremes Mountainbike-Fahren</h2>
          <a className="text-orange-500">weitere...</a>
        </NavLink>

        <NavLink to='/bikes' className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full" href="#">
          <h2 className="text-white mb-4 text-lg font-light">Fahrräder für Profis</h2>
          <a className="text-orange-500">weitere...</a>
        </NavLink>

        <NavLink to='/bikes' className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full " href="#">
          <h2 className="text-white mb-4 text-lg font-light">Lange Fahrt mit dem Rennrad</h2>
          <a className="text-orange-500">weitere...</a>
        </NavLink>

        <NavLink to='/bikes' className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full" href="#">
          <h2 className="text-white mb-4 text-lg font-light">Fahrräder für Profis</h2>
          <a className="text-orange-500">weitere...</a>
        </NavLink>
      </Carousel>
    </section>
  );
};

export default CarouselMain;
