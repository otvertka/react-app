import React, { useContext } from 'react';
import { Accordion } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const EquipmentsAccordion = observer(({ setCurrentPage }) => {
  const { equipments } = useContext(Context);
  console.log(equipments);

  const handleTypeChange = (type) => {
    if (equipments.selectedTypes.includes(type.name)) {
      equipments.removeSelectedType(type.name);
    } else {
      equipments.addSelectedType(type.name);
    }
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    if (equipments.selectedBrands.includes(brand.name)) {
      equipments.removeSelectedBrand(brand.name);
    } else {
      equipments.addSelectedBrand(brand.name);
    }
    setCurrentPage(1);
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Produkt Kategorien</Accordion.Title>

        <Accordion.Content>
          <ul>
            {equipments.types.map((type) => (
              <li key={type.id} className='flex items-center'>
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
            {equipments.brands.map((brand) => (
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

export default EquipmentsAccordion;
