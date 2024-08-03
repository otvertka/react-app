import { useContext } from "react";
import { Context } from "../..";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

import DeviceCard from "../Cards/DeviceCard";

// import winterBikesData from "../../data/winterbikes.json";

const BestWinterModels = (props) => {
  const { bikes } = useContext(Context);
  const bestWinterBikesFromStore = bikes.bikesAll.filter((bike)=> bike.type === 'Mountainbikes');

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
    <section className="bg-winter object-contain min-h-[770px]">
      <div>
        <h2 className="lg:p-20 uppercase text-white text-4xl w-1/2 ">Top-Modelle für den Winter</h2>
        <Carousel className="mx-5" responsive={responsive}>
          {bestWinterBikesFromStore.map((bike) => (
            <DeviceCard key={bike.id} bikesInfo={bike} />
          ))}
        </Carousel>
        <div className="flex justify-center mt-6">
        <NavLink to='/bikes' className="text-white uppercase align-items-center hover:scale-110 transition-all duration-300">ZEIGE ALLES</NavLink>
        </div>
      </div>
    </section>
  );
};

export default BestWinterModels;
