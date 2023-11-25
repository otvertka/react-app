import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const EquipmentsAccorion = observer(() => {
  const { equipments } = useContext(Context);
  console.log(equipments);

  const handleTypeChange = (type) => {
    console.log("Выбран тип:", type.name);
    if (equipments.selectedTypes.includes(type.name)) {
      equipments.removeSelectedType(type.name);
    } else {
      equipments.addSelectedType(type.name);
    }
  };

  const handleBrandChange = (brand) => {
    console.log("Выбран brand:", brand.name);

    if (equipments.selectedBrands.includes(brand.name)) {
      equipments.removeSelectedBrand(brand.name);
    } else {
      equipments.addSelectedBrand(brand.name);
    }
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {equipments.types.map((type) => (
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
            {equipments.brands.map((brand) => (
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

export default EquipmentsAccorion;
