import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

import DeviceCard from '../Cards/DeviceCard';

const PartsList = observer(({ parts }) => {
  // const { parts } = useContext(Context);
  // console.log('parts:', parts);

  // console.log('partsAll:', parts.partsAll);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {parts.map((part) => (
        <DeviceCard key={part.id} bikesInfo={part} pathTo={'parts'} />
      ))}
    </div>
  );
});

export default PartsList;
