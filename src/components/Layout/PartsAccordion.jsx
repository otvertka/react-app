import React, { useContext } from 'react';
import { Accordion } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const PartsAccordion = observer(({ setCurrentPage }) => {
  const { parts } = useContext(Context);
  console.log(parts);

  const handleTypeChange = (type) => {
    console.log('Выбран тип:', type.name);
    if (parts.selectedTypes.includes(type.name)) {
      parts.removeSelectedType(type.name);
    } else {
      parts.addSelectedType(type.name);
    }
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    console.log('Выбран brand:', brand.name);

    if (parts.selectedBrands.includes(brand.name)) {
      parts.removeSelectedBrand(brand.name);
    } else {
      parts.addSelectedBrand(brand.name);
    }
    setCurrentPage(1);
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {parts.types.map((type) => (
              <li>
                <input
                  className='appearance-none checked:bg-orange-500 hover:ring-black'
                  key={type.id}
                  type='checkbox'
                  onChange={() => handleTypeChange(type)}
                />
                {type.name}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Бренд</Accordion.Title>
        <Accordion.Content>
          <ul>
            {parts.brands.map((brand) => (
              <li>
                <input
                  className='appearance-none checked:bg-orange-500 hover:ring-black'
                  key={brand.id}
                  type='checkbox'
                  onChange={() => handleBrandChange(brand)}
                />
                {brand.name}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default PartsAccordion;
