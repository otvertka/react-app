import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '..';
// import PartsStore from '../store/PartsStore';
import PartsAccordion from '../components/Layout/PartsAccordion';
import PartsList from '../components/UI/PartsList';
import Pagination from '../components/UI/Pagination';

// const store = new PartsStore();

const PartsPage = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [partsPerPage, setPartsPerPage] = useState(4);

  const { parts } = useContext(Context);

  const { types, brands, partsAll, selectedBrands, selectedTypes } = parts;
  console.log(parts);

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));

  const filteredParts = parts.partsAll
    .filter(
      (acc) =>
        !parts.selectedTypes.length || parts.selectedTypes.includes(acc.type)
    )
    .filter(
      (acc) =>
        !parts.selectedBrands.length || parts.selectedBrands.includes(acc.brand)
    );

  // console.log("filteredParts:", filteredParts);
  const indexOfLastPart = currentPage * partsPerPage;
  const indexOfFirstPart = indexOfLastPart - partsPerPage;
  const currentParts = filteredParts.slice(indexOfFirstPart, indexOfLastPart);
  return (
    <section>
      <h1>PARTS PAGE</h1>
      <div className='flex'>
        <div className='border border-red-700 w-[220px]'>
          <PartsAccordion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2'>
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
