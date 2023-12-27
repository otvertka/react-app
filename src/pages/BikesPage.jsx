import React from 'react';
import { observer } from 'mobx-react-lite';

import BikesStore from '../store/BikesStore';
import BikesList from '../components/BikesList';
import DefaultAccordion from '../components/Layout/DefaultAccordion';
import Pages from '../components/UI/Pages';
// import Paginanion from "../components/UI/Paginanion";

const store = new BikesStore();

const BikesPage = observer(() => {
  const { types, brands, frames, bikesAll } = store;
  console.log(brands);
  const typesNames = types.map((type, index) => ({ name: type.name, index }));
  const brandNames = brands.map((brand, index) => ({ name: brand.name, index }));
  const frameNames = frames.map((frame, index) => ({ name: frame.name, index }));

  return (
    <section>
      <h1>ВСЕ ВЕЛОСИПЕДЫ</h1>
      <div className='flex'>
        <div className='border border-red-700'>
          <DefaultAccordion items={{ brands: brandNames, types: typesNames, frames: frameNames }} />
        </div>

        <div className='pl-2'>
          <BikesList />
        </div>
      </div>
      <Pages />
    </section>
  );
});

export default BikesPage;
