import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

import BikesCard from "../Cards/BikesCard";

const AccessList = observer(() => {
  const { accessories } = useContext(Context);

  console.log(accessories);

  const filteredAccess = accessories.accessesAll.filter((acc) => !accessories.selectedTypes.length || accessories.selectedTypes.includes(acc.type)).filter((acc) => !accessories.selectedBrands.length || accessories.selectedBrands.includes(acc.brand));

  console.log("filteredAccess:", filteredAccess);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredAccess.map((acc) => (
        <BikesCard key={acc.id} bikesInfo={acc} />
      ))}
    </div>
  );
});

export default AccessList;
