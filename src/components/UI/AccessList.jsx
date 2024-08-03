import React from 'react';
import { observer } from 'mobx-react-lite';

import DeviceCard from '../Cards/DeviceCard';

const AccessList = observer(({ accessories }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
      {accessories.map((acc) => (
        <DeviceCard key={acc.id} bikesInfo={acc} pathTo={'accessorries'} />
      ))}
    </div>
  );
});

export default AccessList;
