import React from "react";
// import BikesCard from "../components/Cards/BikesCard";

// import bikesData from "../data/bikes.json";
import { observer } from "mobx-react-lite";
import DefaultAccordion from "../components/Layout/DefaultAccordion";
import BikesStore from "../store/BikesStore";
// import BikesCard from "../components/Cards/BikesCard";
import DeviceList from "../components/DeviceList";

const store = new BikesStore();

const BikesPage = observer(() => {
  const { types, brands, frames, bikesAll } = store;
  console.log(brands);
  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));
  const frameNames = frames.map((frame, index) => ({ name: frame.name, index }));

  // const bikesStorage = bikes.map((bike, index) => ({ index, title: bike.title, price: bike.price, image: bike.image }));
  // console.log(store);

  return (
    <section>
      <h1>ВСЕ ВЕЛОСИПЕДЫ</h1>
      <div className="flex justify-between">
        <div className="w-1/4 border border-red-700">
          <DefaultAccordion items={{ brands: brandNames, types: typesNames, frames: frameNames }} />
        </div>

        <div className="3/4">
          <DeviceList />
        </div>
      </div>
    </section>
  );
});

export default BikesPage;
