import React from "react";

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
        <a className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full" href="#">
          <h2 className="text-white mb-4 text-lg font-light">Экстремальное вождение на горном велосипеде</h2>
          <a className="text-orange-500">Подробнее</a>
        </a>

        <a className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full" href="#">
          <h2 className="text-white mb-4 text-lg font-light">Велосипеды для профессионалов</h2>
          <a className="text-orange-500">Подробнее</a>
        </a>

        <a className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full " href="#">
          <h2 className="text-white mb-4 text-lg font-light">Долгая поездка на шоссейном велосипеде</h2>
          <a className="text-orange-500">Подробнее</a>
        </a>

        <a className="h-52 bg-gray-800 rounded-md flex flex-col text-lg justify-center pl-5 w-full" href="#">
          <h2 className="text-white mb-4 text-lg font-light">Велосипеды для профессионалов</h2>
          <a className="text-orange-500">Подробнее</a>
        </a>
      </Carousel>
    </section>
  );
};

export default CarouselMain;
