import React from 'react';
import { observer } from 'mobx-react-lite';
// import { Context } from "../..";

import DeviceCard from '../Cards/DeviceCard';

const EquipmentsList = observer(({ equipments }) => {
  // const { equipments } = useContext(Context);
  // console.log("equipments:", equipments);

  // console.log("equipmentsAll:", equipments.equipmentsAll);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {equipments.map((equip) => (
        <DeviceCard key={equip.id} bikesInfo={equip} pathTo={'equipments'} />
      ))}
    </div>
  );
});

export default EquipmentsList;
