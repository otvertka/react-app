import React, { useContext, useRef, useState, useEffect} from 'react';
import { Accordion } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const DefaultAccordion = observer(({ setCurrentPage }) => {
  const { bikes } = useContext(Context);
  const productCategoriesRef = useRef(null);
  const [minWidth, setMinWidth] = useState(0);

  useEffect(() => {
    if (productCategoriesRef.current) {
      setMinWidth(productCategoriesRef.current.offsetWidth);
    }
  }, [productCategoriesRef.current]);

  const handleTypeChange = (type) => {
    if (bikes.selectedTypes.includes(type.name)) {
      bikes.removeSelectedType(type.name);
    } else {
      bikes.addSelectedType(type.name);
    }
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    if (bikes.selectedBrands.includes(brand.name)) {
      bikes.removeSelectedBrand(brand.name);
    } else {
      bikes.addSelectedBrand(brand.name);
    }
    setCurrentPage(1);
  };

  const handleFrameChange = (frame) => {
    if (bikes.selectedFrames.includes(frame.name)) {
      bikes.removeSelectedFrame(frame.name);
    } else {
      bikes.addSelectedFrame(frame.name);
    }
    setCurrentPage(1);
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title ref={productCategoriesRef}>Produkt Kategorien</Accordion.Title>

        <Accordion.Content style={{ minWidth }}>
          <ul>
            {bikes.types.map((type) => (
              <li key={type.id}>
                <input
                  className='appearance-none checked:bg-orange-500 '
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
        <Accordion.Content style={{ minWidth }}>
          <ul>
            {bikes.brands.map((brand) => (
              <li key={brand.id}>
                <input
                  className='appearance-none checked:bg-orange-500 '
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
      <Accordion.Panel>
        <Accordion.Title>Fahrradrahmenmaterial</Accordion.Title>
        <Accordion.Content style={{ minWidth }}>
          <ul>
            {bikes.frames.map((frame) => (
              <li key={frame.id}>
                <input
                  className='appearance-none checked:bg-orange-500 '
                  key={frame.id}
                  type='checkbox'
                  onChange={() => handleFrameChange(frame)}
                />
                <span className='pl-2'>{frame.name}</span> 
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default DefaultAccordion;
