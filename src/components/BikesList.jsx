import React, { Component } from 'react';
import { observer } from 'mobx-react-lite';
// import { Context } from '..';

import DeviceCard from './Cards/DeviceCard';

const BikesList = observer(({ bikes }) => {

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
      {bikes.map((bike) => (
        <DeviceCard key={bike.id} bikesInfo={bike} pathTo={'bikes'} />
      ))}
    </div>
  );
});

export default BikesList;

BikesList.displayName = "BikeListComponent";