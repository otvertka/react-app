import React, { useContext } from 'react';
import { Accordion } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const AccessAccordion = observer(({ setCurrentPage }) => {
  const { accessories } = useContext(Context);
  console.log(accessories);

  const handleTypeChange = (type) => {
    // console.log('Выбран тип:', type.name);
    if (accessories.selectedTypes.includes(type.name)) {
      accessories.removeSelectedType(type.name);
    } else {
      accessories.addSelectedType(type.name);
    }
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    // console.log('Выбран brand:', brand.name);

    if (accessories.selectedBrands.includes(brand.name)) {
      accessories.removeSelectedBrand(brand.name);
    } else {
      accessories.addSelectedBrand(brand.name);
    }
    setCurrentPage(1);
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Produkt Kategorien</Accordion.Title>

        <Accordion.Content>
          <ul>
            {accessories.types.map((type) => (
              <li key={type.id} className='flex items-center'>
                <input
                  className='appearance-none checked:bg-orange-500'
                  key={type.id}
                  type='checkbox'
                  onChange={() => handleTypeChange(type)}
                />
                <span className='pl-2'>{type.name}</span> 
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Marke</Accordion.Title>
        <Accordion.Content>
          <ul>
            {accessories.brands.map((brand) => (
              <li key={brand.id} className='flex items-center'>
                <input
                  className='appearance-none checked:bg-orange-500'
                  key={brand.id}
                  type='checkbox'
                  onChange={() => handleBrandChange(brand)}
                />
                  <span className='pl-2'>{brand.name}</span> 
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default AccessAccordion;
