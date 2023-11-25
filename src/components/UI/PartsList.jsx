import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

import DeviceCard from "../Cards/DeviceCard";

const PartsList = observer(() => {
  const { parts } = useContext(Context);
  console.log("parts:", parts);

  console.log("partsAll:", parts.partsAll);

  const filteredParts = parts.partsAll.filter((acc) => !parts.selectedTypes.length || parts.selectedTypes.includes(acc.type)).filter((acc) => !parts.selectedBrands.length || parts.selectedBrands.includes(acc.brand));

  console.log("filteredParts:", filteredParts);

  // const handleSelectAccessory = (pathTo) => {
  // let pathTo= 'accessorries';
  // }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredParts.map((part) => (
        <DeviceCard key={part.id} bikesInfo={part} pathTo={"parts"} />
      ))}
    </div>
  );
});

export default PartsList;
