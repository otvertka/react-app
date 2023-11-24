import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

import DeviceCard from "../Cards/DeviceCard";

const AccessList = observer(() => {
  const { accessories } = useContext(Context);
  console.log("accessories:", accessories);

  console.log("accessesAll:", accessories.accessesAll);

  const filteredAccess = accessories.accessesAll.filter((acc) => !accessories.selectedTypes.length || accessories.selectedTypes.includes(acc.type)).filter((acc) => !accessories.selectedBrands.length || accessories.selectedBrands.includes(acc.brand));

  console.log("filteredAccess:", filteredAccess);

  // const handleSelectAccessory = (pathTo) => {
  // let pathTo= 'accessorries';
  // }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredAccess.map((acc) => (
        <DeviceCard key={acc.id} bikesInfo={acc} pathTo={"accessorries"} />
      ))}
    </div>
  );
});

export default AccessList;
