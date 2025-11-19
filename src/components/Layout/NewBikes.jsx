import { useContext } from "react";
import { Context } from "../..";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DeviceCard from "../Cards/DeviceCard";
import { NavLink } from "react-router-dom";

const NewBikes = () => {
  const { bikes } = useContext(Context);
  const newBikesFromStore = bikes.bikesAll.filter((bike) => bike.id > 50);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full bg-gray-100">
      <h2 className="py-11 uppercase text-6xl text-center">NEU</h2>
      <div className="flex justify-center">
        <div className="w-[90vw] md:w-[85vw] lg:max-w-6xl px-8">
          <Carousel
              responsive={responsive}
              itemClass="px-2 md:px-3"
              infinite={false}
              arrows
          >
            {newBikesFromStore.map((bike) => (
              <DeviceCard key={bike.id} bikesInfo={bike} pathTo="bikes" />
            ))}
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
    </div>
  );
};

export default NewBikes;
