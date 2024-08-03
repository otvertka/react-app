import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '..';
import PartsAccordion from '../components/Layout/PartsAccordion';
import PartsList from '../components/UI/PartsList';
import Pagination from '../components/UI/Pagination';

const PartsPage = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage, setPartsPerPage] = useState(6);

  const { parts } = useContext(Context);

  const { types, brands, partsAll, selectedBrands, selectedTypes } = parts;
  console.log(parts);

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));

  const filteredParts = partsAll
    .filter(
      (acc) =>
        !selectedTypes.length || selectedTypes.includes(acc.type)
    )
    .filter(
      (acc) =>
        !selectedBrands.length || selectedBrands.includes(acc.brand)
    );

  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = filteredParts.slice(indexOfFirstPart, indexOfLastPart);
  return (
    <section className='bg-gray-200 min-h-screen flex flex-col items-center'>
      <h1 className='text-center my-4'>PARTS PAGE</h1>
      <div className='flex flex-col md:flex-row w-full max-w-6xl'>
        <div className='bg-gray-50 w-full md:w-1/4 p-4'>
          <PartsAccordion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2 w-full md:w-3/4'>
          <PartsList parts={currentParts} />
        </div>
      </div>
      <Pagination
        itemsPerPage={partsPerPage}
        totalItems={filteredParts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
});

export default PartsPage;
