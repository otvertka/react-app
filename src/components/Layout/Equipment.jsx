import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DeviceCard from "../Cards/DeviceCard";

import equipData from "../../data/equip.json";

const Equipment = (props) => {
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
    <section className="bg-gray-100 object-contain min-h-[770px]">
      <div>
        <h2 className="lg:p-20 uppercase text-4xl font-medium w-1/2">Экипировка</h2>
        <Carousel className="mx-5" responsive={responsive}>
          {equipData.map((bike) => (
            <DeviceCard key={bike.id} bikesInfo={bike} />
          ))}
        </Carousel>
        <div className="flex justify-center mt-6">
          <button className="uppercase align-items-center text-gray-500 hover:text-black">Показать все</button>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
