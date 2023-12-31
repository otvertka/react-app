import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DeviceCard from "../Cards/DeviceCard";

import bikesData from "../../data/bikes.json";

const NewBikes = (bikesInfo) => {
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
    <div className=" w-full bg-gray-100">
      <div>
        <h2 className="py-11 uppercase text-6xl">Новинки</h2>
        <Carousel responsive={responsive}>
          {bikesData.map((bike) => (
            <DeviceCard key={bike.id} bikesInfo={bike} />
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center mt-6">
        <button className="uppercase align-items-center">Показать все</button>
      </div>
    </div>
  );
};

export default NewBikes;
