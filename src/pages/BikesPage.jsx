import React from "react";
import { observer } from "mobx-react-lite";

import BikesStore from "../store/BikesStore";
import DeviceList from "../components/DeviceList";
import DefaultAccordion from "../components/Layout/DefaultAccordion";

const store = new BikesStore();

const BikesPage = observer(() => {
  const { types, brands, frames, bikesAll } = store;
  console.log(brands);
  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));
  const frameNames = frames.map((frame, index) => ({ name: frame.name, index }));

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
