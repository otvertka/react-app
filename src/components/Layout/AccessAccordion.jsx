import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const AccessAccordion = observer(({ setCurrentPage }) => {
  const { accessories } = useContext(Context);

  const handleTypeChange = (type) => {
    if (accessories.selectedTypes.includes(type.name)) {
      accessories.removeSelectedType(type.name);
    } else {
      accessories.addSelectedType(type.name);
    }
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    if (accessories.selectedBrands.includes(brand.name)) {
      accessories.removeSelectedBrand(brand.name);
    } else {
      accessories.addSelectedBrand(brand.name);
    }
    setCurrentPage(1);
  };

  return (
    <Accordion flush={true} alwaysOpen={false} className="bg-gray-50 rounded-lg shadow-md">
      {/* Категории */}
      <Accordion.Panel>
        <Accordion.Title className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300 rounded-md">
          Produkt Kategorien
        </Accordion.Title>
        <Accordion.Content className="bg-white p-4 transition-all duration-500 ease-in-out">
          <ul className="space-y-2">
            {accessories.types.map((type) => (
              <li key={type.id} className="flex items-center">
                <input
                  id={`type-${type.id}`}
                  type="checkbox"
                  checked={accessories.selectedTypes.includes(type.name)}
                  onChange={() => handleTypeChange(type)}
                  className="w-5 h-5 text-orange-500 bg-gray-200 rounded border-gray-300 focus:ring-orange-400 transition-all duration-300 checked:scale-110 checked:transform"
                />
                <label htmlFor={`type-${type.id}`} className="pl-2 cursor-pointer select-none">
                  {type.name}
                </label>
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Бренды */}
      <Accordion.Panel>
        <Accordion.Title className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300 rounded-md">
          Marke
        </Accordion.Title>
        <Accordion.Content className="bg-white p-4 transition-all duration-500 ease-in-out">
          <ul className="space-y-2">
            {accessories.brands.map((brand) => (
              <li key={brand.id} className="flex items-center">
                <input
                  id={`brand-${brand.id}`}
                  type="checkbox"
                  checked={accessories.selectedBrands.includes(brand.name)}
                  onChange={() => handleBrandChange(brand)}
                  className="w-5 h-5 text-orange-500 bg-gray-200 rounded border-gray-300 focus:ring-orange-400 transition-all duration-300 checked:scale-110 checked:transform"
                />
                <label htmlFor={`brand-${brand.id}`} className="pl-2 cursor-pointer select-none hover:scale-105 transition-all duration-300">
                  {brand.name}
                </label>
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default AccessAccordion;
