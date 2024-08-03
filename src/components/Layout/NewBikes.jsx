import { useContext } from "react";
import { Context } from "../..";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DeviceCard from "../Cards/DeviceCard";
import { NavLink } from "react-router-dom";

// import bikesData from "../../data/bikes.json";


const NewBikes = (bikesInfo) => {

  const { bikes } = useContext(Context);
  const newBikesFromStore = bikes.bikesAll.filter((bike)=> bike.id > 50);

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
    <div className=" w-full bg-gray-100">
      <div>
        <h2 className="py-11 uppercase text-6xl">NEU</h2>
        <Carousel responsive={responsive}>
          {newBikesFromStore.map((bike) => (
            <DeviceCard key={bike.id} bikesInfo={bike} pathTo="bikes"/>
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center mt-6">
        <NavLink to='/bikes' className="uppercase align-items-center hover:scale-110 transition-all duration-300">ZEIGE ALLES</NavLink>
      </div>
    </div>
  );
};

export default NewBikes;
