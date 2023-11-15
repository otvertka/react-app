import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

import BikesCard from "./Cards/BikesCard";

const DeviceList = observer(() => {
  const { bikes } = useContext(Context);

  console.log("bikes.selectedType:", bikes.selectedType.name);
  console.log("bikes.selectedBrand:", bikes.selectedBrand);
  console.log("bikes.selectedFrame:", bikes.selectedFrame);
  console.log("bikes.bikesAll:", bikes.bikesAll);

  // bikes.bikesAll.target.map((bike) => console.log(bike));
  // const realArray = bikes.bikesAll[ObservableArrayAdministration.target];
  // console.log(realArray)

  // const filteredBikes = bikes.bikesAll.filter((bike) => (!bikes.selectedType || bike.type.name === bikes.selectedType.name) && (!bikes.selectedBrand || bike.brand.name === bikes.selectedBrand.name) && (!bikes.selectedFrame || bike.frame.name === bikes.selectedFrame.name));

  // const filteredBikes = bikes.bikesAll.filter((bike) =>
  // (bikes.selectedType.name === bike.type)&&
  // (bikes.selectedBrand.name === bike.brand)&&
  // (bikes.selectedFrame.name === bike.frame));
  // const filteredBikes = bikes.bikesAll
  //   .filter((bike) => bikes.selectedType.name === bike.type)
  //   .filter((bike) => bikes.selectedBrand.name === bike.brand)
  //   .filter((bike) => bikes.selectedFrame.name === bike.frame);
  const filteredBikes = bikes.bikesAll
    .filter((bike) => !bikes.selectedType.name || bikes.selectedType.name === bike.type)
    .filter((bike) => !bikes.selectedBrand.name || bikes.selectedBrand.name === bike.brand)
    .filter((bike) => !bikes.selectedFrame.name || bikes.selectedFrame.name === bike.frame);

  // const filteredBikes = bikes.bikesAll.filter((bike) => bikes.selectedType.name === bike.type);

  console.log("filteredBikes:", filteredBikes);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {/*  */}
      {filteredBikes.map((bike) => (
        <BikesCard key={bike.id} bikesInfo={bike} />
      ))}
    </div>
  );
});

export default DeviceList;
