import React, { useContext } from 'react';
import { Accordion } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const DefaultAccordion = observer(() => {
  const { bikes } = useContext(Context);
  console.log(bikes);

  const handleTypeChange = (type) => {
    // console.log("Выбран тип:", type.name);
    if (bikes.selectedTypes.includes(type.name)) {
      bikes.removeSelectedType(type.name);
    } else {
      bikes.addSelectedType(type.name);
    }
  };

  const handleBrandChange = (brand) => {
    if (bikes.selectedBrands.includes(brand.name)) {
      bikes.removeSelectedBrand(brand.name);
    } else {
      bikes.addSelectedBrand(brand.name);
    }
  };

  const handleFrameChange = (frame) => {
    if (bikes.selectedFrames.includes(frame.name)) {
      bikes.removeSelectedFrame(frame.name);
    } else {
      bikes.addSelectedFrame(frame.name);
    }
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {bikes.types.map((type) => (
              <li key={type.id}>
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
            {bikes.brands.map((brand) => (
              <li key={brand.id}>
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
      <Accordion.Panel>
        <Accordion.Title>Материал рамы</Accordion.Title>
        <Accordion.Content>
          <ul>
            {bikes.frames.map((frame) => (
              <li key={frame.id}>
                <input
                  className='appearance-none checked:bg-orange-500 hover:ring-black'
                  key={frame.id}
                  type='checkbox'
                  onChange={() => handleFrameChange(frame)}
                />
                {frame.name}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default DefaultAccordion;
