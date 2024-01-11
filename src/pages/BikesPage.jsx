import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

import BikesStore from '../store/BikesStore';
import BikesList from '../components/BikesList';
import DefaultAccordion from '../components/Layout/DefaultAccordion';
import Pagination from '../components/UI/Pagination';
// import Paginanion from "../components/UI/Paginanion";

// const store = new BikesStore();

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

  console.log('bikes:', bikes);

  console.log('selectedBrands:', selectedBrands);
  console.log(bikesAll);
  const [currentPage, setCurrentPage] = useState(1);
  const [bikesPerPage, setBikesPerPage] = useState(4);

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

  console.log('currentPage:', currentPage);

  console.log(brands);
  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));
  const frameNames = frames.map((frame, index) => ({
    name: frame.name,
    index,
  }));

  const indexOfLastBike = currentPage * bikesPerPage;
  const indexOfFirstBike = indexOfLastBike - bikesPerPage;

  const currentBikes = filteredBikes.slice(indexOfFirstBike, indexOfLastBike);
  console.log('currentBikes:', currentBikes);

  return (
    <section>
      <h1>ВСЕ ВЕЛОСИПЕДЫ</h1>
      <div className='flex'>
        <div className='border border-red-700 w-64'>
          <DefaultAccordion
            items={{
              brands: brandNames,
              types: typesNames,
              frames: frameNames,
            }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2'>
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
