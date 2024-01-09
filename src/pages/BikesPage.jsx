import React, { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

import BikesStore from '../store/BikesStore';
import BikesList from '../components/BikesList';
import DefaultAccordion from '../components/Layout/DefaultAccordion';
import Pages from '../components/UI/Pages';
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

  console.log(brands);
  console.log('currentPage:', currentPage);
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

  useEffect(() => {
    // console.log('Setting currentPage to 1');
    setCurrentPage(1);
    // console.log('Current currentPage:', currentPage);
  }, [selectedTypes, selectedBrands, selectedFrames]);

  // useEffect(() => {
  //   console.log('Current currentPage:', currentPage);
  // }, [currentPage]);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          />
        </div>

        <div className='pl-2'>
          <BikesList bikes={currentBikes} />
        </div>
      </div>
      <Pages
        bikesPerPage={bikesPerPage}
        totalBikes={filteredBikes.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
});

export default BikesPage;
