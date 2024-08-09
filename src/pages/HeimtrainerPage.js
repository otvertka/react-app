import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '..';
import HeimtrainerList from '../components/UI/HeimtrainerList';
import Pagination from '../components/UI/Pagination';
import HeimtrainerAccordion from '../components/Layout/HeimtrainerAccordion';

const HeimtrainerPage = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [heimtrainerPerPage, setHeimtrainerPerPage] = useState(6);

  const { heimtrainer } = useContext(Context);

  const { types, brands, heimtrainerAll, selectedBrands, selectedTypes } = heimtrainer;
  console.log(heimtrainer);

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({
    name: brand.name,
    index,
  }));

  const filteredHeimtrainer = heimtrainerAll
    .filter(
      (acc) =>
        !selectedTypes.length || selectedTypes.includes(acc.type)
    )
    .filter(
      (acc) =>
        !selectedBrands.length || selectedBrands.includes(acc.brand)
    );

  const indexOfLastHeimtrainer = currentPage * heimtrainerPerPage;
  const indexOfFirstHeimtrainer = indexOfLastHeimtrainer - heimtrainerPerPage;
  const currentHeimtrainer = filteredHeimtrainer.slice(indexOfFirstHeimtrainer, indexOfLastHeimtrainer);
  return (
    <section className='bg-gray-200 min-h-screen flex flex-col items-center'>
      <h1 className='text-center my-4'>Heimtrainer</h1>
      <div className='flex flex-col md:flex-row w-full max-w-6xl'>
        <div className='bg-gray-50 w-full md:w-1/4 p-4'>
          <HeimtrainerAccordion
            items={{ brands: brandNames, types: typesNames }}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className='pl-2 w-full md:w-3/4'>
          <HeimtrainerList heimtrainer={currentHeimtrainer} />
        </div>
      </div>
      <Pagination
        itemsPerPage={heimtrainerPerPage}
        totalItems={filteredHeimtrainer.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
});

export default HeimtrainerPage;
