import { useContext } from "react";
import { Context } from "../..";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DeviceCard from "../Cards/DeviceCard";
import { NavLink } from "react-router-dom";

const Equipment = (props) => {
  // Showing the last equipments from store (with latest id) 
  const { equipments } = useContext(Context);
  const lastEquipmentsFromStore = equipments.equipmentsAll.filter((equip)=> equip.id > 310)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-gray-100 object-contain min-h-[770px]">
      <div>
        <h2 className="py-11 uppercase text-6xl text-center">Bekleidung</h2>
        <div className="flex justify-center">
        <div className="w-[90vw] md:w-[100vw] lg:max-w-6xl px-10">
        <Carousel 
          className="mx-5" 
          responsive={responsive}
          itemClass="px-2 md:px-3"
          infinite={false}
          arrows
          >
          {lastEquipmentsFromStore.map((bike) => (
            <DeviceCard key={bike.id} bikesInfo={bike} pathTo= "equipments"/>
          ))}
        </Carousel>
        </div>
        </div>
        <div className="flex justify-center mt-6">
        <NavLink to="/equipments">
          <button className="
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
          >zeige alles...</button>
        </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
