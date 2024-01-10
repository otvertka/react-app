import React from 'react';
import { observer } from 'mobx-react-lite';
// import { Context } from '..';

import DeviceCard from './Cards/DeviceCard';

const BikesList = observer(({ bikes }) => {
  // const { bikes } = useContext(Context);

  // const filteredBikes = bikes.bikesAll
  //   .filter(
  //     (bike) =>
  //       !bikes.selectedTypes.length || bikes.selectedTypes.includes(bike.type)
  //   )
  //   .filter(
  //     (bike) =>
  //       !bikes.selectedBrands.length ||
  //       bikes.selectedBrands.includes(bike.brand)
  //   )
  //   .filter(
  //     (bike) =>
  //       !bikes.selectedFrames.length ||
  //       bikes.selectedFrames.includes(bike.frame)
  //   );
  // setFilteredBikes(filteredBikes);

  // console.log('filteredBikes:', filteredBikes);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {bikes.map((bike) => (
        <DeviceCard key={bike.id} bikesInfo={bike} pathTo={'bikes'} />
      ))}
    </div>
  );
});

export default BikesList;
