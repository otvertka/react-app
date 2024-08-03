import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '..';
import AccessList from '../components/UI/AccessList';
import AccessAccordion from '../components/Layout/AccessAccordion';
import Pagination from '../components/UI/Pagination';

const AccessoriesPage = observer(() => {
  const { accessories } = useContext(Context);
  const { types, brands, accessesAll, selectedBrands, selectedTypes } = accessories;
  console.log(accessories);

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));

  const [currentPage, setCurrentPage] = useState(1);
  const [accesPerPage, setAccesPerPage] = useState(6);

  const filteredAccess = accessesAll
    .filter((acc) => !selectedTypes.length || selectedTypes.includes(acc.type))
    .filter((acc) => !selectedBrands.length || selectedBrands.includes(acc.brand));

  const indexOfLastAcces = currentPage * accesPerPage;
  const indexOfFirstAcces = indexOfLastAcces - accesPerPage;
  const currentAcces = filteredAccess.slice(indexOfFirstAcces, indexOfLastAcces);

  return (
    <section className='bg-gray-200 min-h-screen flex flex-col items-center'>
      <h1 className='text-center my-4'>ACCESSORIES PAGE</h1>
      <div className='flex flex-col md:flex-row w-full max-w-6xl'>
        <div className='bg-gray-50 w-full md:w-1/4 p-4'>
          <AccessAccordion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2 w-full md:w-3/4'>
          <AccessList accessories={currentAcces} />
        </div>
      </div>
      <Pagination
        itemsPerPage={accesPerPage}
        totalItems={filteredAccess.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
});

export default AccessoriesPage;
