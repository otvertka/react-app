import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '..';
// import AccessoriesStore from "../store/AccsessoriesStore";
import AccessList from '../components/UI/AccessList';
import AccessAccordion from '../components/Layout/AccessAccordion';
import Pagination from '../components/UI/Pagination';
// const store = new AccessoriesStore();

const AccessoriesPage = observer(() => {
  const { accessories } = useContext(Context);
  const { types, brands, accessesAll, selectedBrands, selectedTypes } =
    accessories;
  console.log(accessories);
  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const [accesPerPage, setAccesPerPage] = useState(4);

  const filteredAccess = accessesAll
    .filter((acc) => !selectedTypes.length || selectedTypes.includes(acc.type))
    .filter(
      (acc) => !selectedBrands.length || selectedBrands.includes(acc.brand)
    );

  const indexOfLastAcces = currentPage * accesPerPage;
  const indexOfFirstAcces = indexOfLastAcces - accesPerPage;
  const currentAcces = filteredAccess.slice(
    indexOfFirstAcces,
    indexOfLastAcces
  );

  return (
    <section>
      <h1>ACCESSORIES PAGE</h1>
      <div className='flex'>
        <div className='border border-red-700'>
          <AccessAccordion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2'>
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
