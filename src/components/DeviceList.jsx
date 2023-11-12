import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";

import BikesCard from "./Cards/BikesCard";

const DeviceList = observer(() => {
  const { bikes } = useContext(Context);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {bikes.bikesAll.map((bike) => (
        <BikesCard key={bike.id} bikesInfo={bike} />
      ))}
    </div>
  );
});

export default DeviceList;
