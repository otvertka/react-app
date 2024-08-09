import React, { useContext } from 'react';
import { Accordion } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const HeimtrainerAccordion = observer(({ setCurrentPage }) => {
  const { heimtrainer } = useContext(Context);
  console.log(heimtrainer);
  const handleTypeChange = (type) => {
    // console.log('Выбран тип:', type.name);
    if (heimtrainer.selectedTypes.includes(type.name)) {
      heimtrainer.removeSelectedType(type.name);
    } else {
      heimtrainer.addSelectedType(type.name);
    }
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    // console.log('Выбран brand:', brand.name);
    if (heimtrainer.selectedBrands.includes(brand.name)) {
      heimtrainer.removeSelectedBrand(brand.name);
    } else {
      heimtrainer.addSelectedBrand(brand.name);
    }
    setCurrentPage(1);
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Produkt Kategorien</Accordion.Title>

        <Accordion.Content>
          <ul>
            {heimtrainer.types.map((type) => (
              <li>
                <input
                  className='appearance-none checked:bg-orange-500 hover:ring-black'
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
            {heimtrainer.brands.map((brand) => (
              <li key={brand.id} className='flex items-center'>
                <input
                  className='appearance-none checked:bg-orange-500 hover:ring-black'
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

export default HeimtrainerAccordion;
