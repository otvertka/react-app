import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

import BikesStore from '../store/BikesStore';
import BikesList from '../components/BikesList';
import DefaultAccordion from '../components/Layout/DefaultAccordion';
import Pagination from '../components/UI/Pagination';

const BikesPage = observer(() => {
  const { bikes } = useContext(Context);
  const {
    types,
    brands,
    frames,
    bikesAll,
    selectedBrands,
    selectedFrames,
    selectedTypes,
  } = bikes;

  const [currentPage, setCurrentPage] = useState(1);
  const [bikesPerPage, setBikesPerPage] = useState(6);

  const filteredBikes = bikesAll
    .filter(
      (bike) => !selectedTypes.length || selectedTypes.includes(bike.type)
    )
    .filter(
      (bike) => !selectedBrands.length || selectedBrands.includes(bike.brand)
    )
    .filter(
      (bike) => !selectedFrames.length || selectedFrames.includes(bike.frame)
    );

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));
  const frameNames = frames.map((frame, index) => ({
    name: frame.name, index,
  }));

  const indexOfLastBike = currentPage * bikesPerPage;
  const indexOfFirstBike = indexOfLastBike - bikesPerPage;

  const currentBikes = filteredBikes.slice(indexOfFirstBike, indexOfLastBike);

  return (
    <section className='bg-gray-200 min-h-screen flex flex-col items-center'>
      <h1 className='text-center my-4'>ALLE FAHRRÄDER</h1>
      <div className='flex flex-col md:flex-row w-full max-w-6xl'>
        <div className='bg-gray-50 w-full md:w-1/4'>
          <DefaultAccordion
            items={{
              brands: brandNames,
              types: typesNames,
              frames: frameNames,
            }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='ml-2 w-full md:w-3/4'>
          <BikesList bikes={currentBikes} />
        </div>
      </div>
      <Pagination
        itemsPerPage={bikesPerPage}
        totalItems={filteredBikes.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
});

export default BikesPage;
