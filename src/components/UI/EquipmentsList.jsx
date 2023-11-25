import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

import DeviceCard from "../Cards/DeviceCard";

const EquipmentsList = observer(() => {
  const { equipments } = useContext(Context);
  console.log("equipments:", equipments);

  console.log("equipmentsAll:", equipments.equipmentsAll);

  const filteredEquipments = equipments.equipmentsAll.filter((equip) => !equipments.selectedTypes.length || equipments.selectedTypes.includes(equip.type)).filter((equip) => !equipments.selectedBrands.length || equipments.selectedBrands.includes(equip.brand));

  console.log("filteredEquipments:", filteredEquipments);

  // const handleSelectAccessory = (pathTo) => {
  // let pathTo= 'accessorries';
  // }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredEquipments.map((equip) => (
        <DeviceCard key={equip.id} bikesInfo={equip} pathTo={"equipments"} />
      ))}
    </div>
  );
});

export default EquipmentsList;
