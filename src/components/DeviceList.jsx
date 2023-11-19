import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

import BikesCard from "./Cards/BikesCard";

const DeviceList = observer(() => {
  const { bikes } = useContext(Context);

  // console.log("bikes.selectedType:", bikes.selectedType.name);
  // console.log("bikes.selectedBrand:", bikes.selectedBrand);
  // console.log("bikes.selectedFrame:", bikes.selectedFrame);
  // console.log("bikes.bikesAll:", bikes.bikesAll);

  // const filteredBikes = bikes.bikesAll
  //   .filter((bike) => !bikes.selectedType.name || bikes.selectedType.name === bike.type)
  //   .filter((bike) => !bikes.selectedBrand.name || bikes.selectedBrand.name === bike.brand)
  //   .filter((bike) => !bikes.selectedFrame.name || bikes.selectedFrame.name === bike.frame);

  const filteredBikes = bikes.bikesAll
    .filter((bike) => !bikes.selectedTypes.length || bikes.selectedTypes.includes(bike.type))
    .filter((bike) => !bikes.selectedBrand.name || bikes.selectedBrand.name === bike.brand)
    .filter((bike) => !bikes.selectedFrame.name || bikes.selectedFrame.name === bike.frame);
  // const filteredBikes = bikes.bikesAll
  //   .filter((bike) => !bikes.selectedTypes.length || bikes.selectedTypes.includes(bike.type))
  //   .filter((bike) => !bikes.selectedBrand.name || bikes.selectedBrand.name === bike.brand)
  //   .filter((bike) => !bikes.selectedFrame.name || bikes.selectedFrame.name === bike.frame);
  console.log("filteredBikes:", filteredBikes);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {filteredBikes.map((bike) => (
        <BikesCard key={bike.id} bikesInfo={bike} />
      ))}
    </div>
  );
});

export default DeviceList;
