import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const AccessAccordion = observer(() => {
  const { accessories } = useContext(Context);
  console.log(accessories);

  const handleTypeChange = (type) => {
    console.log("Выбран тип:", type.name);
    if (accessories.selectedTypes.includes(type.name)) {
      accessories.removeSelectedType(type.name);
    } else {
      accessories.addSelectedType(type.name);
    }
  };

  const handleBrandChange = (brand) => {
    console.log("Выбран brand:", brand.name);

    if (accessories.selectedBrands.includes(brand.name)) {
      accessories.removeSelectedBrand(brand.name);
    } else {
      accessories.addSelectedBrand(brand.name);
    }
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {accessories.types.map((type) => (
              <li>
                <input className="appearance-none checked:bg-orange-500 hover:ring-black" key={type.id} type="checkbox" onChange={() => handleTypeChange(type)} />
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
            {accessories.brands.map((brand) => (
              <li>
                <input className="appearance-none checked:bg-orange-500 hover:ring-black" key={brand.id} type="checkbox" onChange={() => handleBrandChange(brand)} />
                {brand.name}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default AccessAccordion;
