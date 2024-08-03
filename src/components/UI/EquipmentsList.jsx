import React from 'react';
import { observer } from 'mobx-react-lite';

import DeviceCard from '../Cards/DeviceCard';

const EquipmentsList = observer(({ equipments }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
      {equipments.map((equip) => (
        <DeviceCard key={equip.id} bikesInfo={equip} pathTo={'equipments'} />
      ))}
    </div>
  );
});

export default EquipmentsList;
