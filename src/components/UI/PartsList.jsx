import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import DeviceCard from '../Cards/DeviceCard';

const PartsList = observer(({ parts }) => {

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
      {parts.map((part) => (
        <DeviceCard key={part.id} bikesInfo={part} pathTo={'parts'} />
      ))}
    </div>
  );
});

export default PartsList;
