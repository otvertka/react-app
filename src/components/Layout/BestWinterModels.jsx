import { useContext } from "react";
import { Context } from "../..";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

import DeviceCard from "../Cards/DeviceCard";

const BestWinterModels = (props) => {
  const { bikes } = useContext(Context);
  const bestWinterBikesFromStore = bikes.bikesAll.filter((bike)=> bike.type === 'Mountainbikes');

  const responsive = {
    superLargeDesktop: {
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
    <section className="bg-winter object-contain min-h-[770px]">
      <div className="w-full">
        <h2 className="py-11 uppercase text-white text-center text-4xl">Top-Modelle für den Winter</h2>
      <div className="flex justify-center">
      <div className="w-[90vw] md:w-[100vw] lg:max-w-6xl">
        <Carousel 
          responsive={responsive}
          itemClass="px-2 md:px-3"
          infinite={false}
          arrows>
          {bestWinterBikesFromStore.map((bike) => (
            <DeviceCard key={bike.id} bikesInfo={bike} />
          ))}
        </Carousel>
      </div>
      </div>
        <div className="flex justify-center mt-6">
        <NavLink
          to="/bikes"
          className="
                      px-2 py-1
                      my-2
                      rounded-lg
                      bg-transparent
                      shadow-md
                      shadow-gray-500
                      text-white
                      font-semibold
                      text-sm
                      transition
                      duration-300
                      transform
                      hover:bg-gray-100
                      hover:text-gray-900
                      hover:scale-105
                      hover:shadow-lg
                      hover:shadow-gray-400
                      hover:-translate-y-1"
        >
          zeige alles...
        </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BestWinterModels;
