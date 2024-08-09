import React from 'react';
import { observer } from 'mobx-react-lite';

import DeviceCard from '../Cards/DeviceCard';

const HeimtrainerList = observer(({ heimtrainer }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
      {heimtrainer.map((item) => (
        <DeviceCard key={item.id} bikesInfo={item} pathTo={'heimtrainer'} />
      ))}
    </div>
  );
});

export default HeimtrainerList;
