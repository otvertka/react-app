import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import BikesStore from '../store/BikesStore';
import BikesList from '../components/BikesList';
import DefaultAccordion from '../components/Layout/DefaultAccordion';
import Pages from '../components/UI/Pages';
// import Paginanion from "../components/UI/Paginanion";

const store = new BikesStore();

const BikesPage = observer(() => {
  const { types, brands, frames, bikesAll } = store;

  console.log(bikesAll);
  const [currentPage, setCurrentPage] = useState(2);
  const [bikesPerPage, setBikesPerPage] = useState(4);
  console.log(brands);
  console.log(currentPage);
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
  const currentBikes = bikesAll.slice(indexOfFirstBike, indexOfLastBike);
  console.log(currentBikes);

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
          <BikesList filteredBikes={currentBikes} />
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
