import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const DefaultAccordion = observer(() => {
  const { bikes } = useContext(Context);
  console.log(bikes);

  const handleTypeChange = (type) => {
    console.log("Выбран тип:", type.name);

    if (bikes.selectedTypes.includes(type)) {
      bikes.removeSelectedType(type.name);
    } else {
      bikes.addSelectedType(type.name);
      console.log(type.name);
      // console.log(bikes.addSelectedType(type));
    }
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {bikes.types.map((type) => (
              // <li key={type.id} className={type.id === bikes.selectedType.id ? "border border-blue-500" : ""} onClick={() => handleTypeChange(type)}>
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
            {bikes.brands.map((brand) => (
              <li
                className={brand.id === bikes.selectedBrand.id ? "border border-red-800" : ""}
                key={brand.id}
                onClick={() => {
                  bikes.setSelectedBrand(brand);
                  console.log("Выбран бренд:", brand.name);
                  console.log(brand.id);
                  console.log(bikes.selectedBrand.name);
                }}>
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
              <li
                className={frame.id === bikes.selectedFrame.id ? "border border-red-800" : ""}
                key={frame.id}
                onClick={() => {
                  bikes.setSelectedFrame(frame);
                  console.log("Выбран тип рамы:", frame.name);
                  console.log(frame.id);
                  console.log(bikes.selectedFrame.name);
                }}>
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
