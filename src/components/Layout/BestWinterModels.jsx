import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BikesCard from "../Cards/BikesCard";

import winterBikesData from "../../data/winterbikes.json";

const BestWinterModels = (props) => {
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
        <h2 className="lg:p-20 uppercase text-white text-4xl w-1/2">Лучшие модели для зимней езды</h2>
        <Carousel className="mx-5" responsive={responsive}>
          {winterBikesData.map((bike) => (
            <BikesCard key={bike.id} bikesInfo={bike} />
          ))}
        </Carousel>
        <div className="flex justify-center mt-6">
          <button className="uppercase align-items-center text-white">Показать все</button>
        </div>
      </div>
    </section>
  );
};

export default BestWinterModels;
