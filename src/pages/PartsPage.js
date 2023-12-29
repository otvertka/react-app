import React from 'react';
import { observer } from 'mobx-react-lite';

import PartsStore from '../store/PartsStore';
import PartsAccordion from '../components/Layout/PartsAccordion';
import PartsList from '../components/UI/PartsList';

const store = new PartsStore();

const PartsPage = observer(() => {
  const { types, brands } = store;

  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));

  return (
    <section>
      <h1>PARTS PAGE</h1>
      <div className='flex'>
        <div className='border border-red-700 w-[220px]'>
          <PartsAccordion items={{ brands: brandNames, types: typesNames }} />
        </div>

        <div className='pl-2'>
          <PartsList />
        </div>
      </div>
    </section>
  );
});

export default PartsPage;
