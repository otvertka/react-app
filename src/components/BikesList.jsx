import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

import BikesCard from "./Cards/BikesCard";

const BikesList = observer(() => {
  const { bikes } = useContext(Context);

  const filteredBikes = bikes.bikesAll
    .filter((bike) => !bikes.selectedTypes.length || bikes.selectedTypes.includes(bike.type))
    .filter((bike) => !bikes.selectedBrands.length || bikes.selectedBrands.includes(bike.brand))
    .filter((bike) => !bikes.selectedFrames.length || bikes.selectedFrames.includes(bike.frame));

  console.log("filteredBikes:", filteredBikes);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredBikes.map((bike) => (
        <BikesCard key={bike.id} bikesInfo={bike} />
      ))}
    </div>
  );
});

export default BikesList;
