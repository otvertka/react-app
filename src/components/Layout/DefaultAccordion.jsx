import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const DefaultAccordion = observer(() => {
  const { bikes } = useContext(Context);
  console.log(bikes);

  const handleTypeChange = (type) => {
    console.log("Выбран тип:", type.name);
    bikes.setSelectedType(type);
  };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {bikes.types.map((type) => (
              <li key={type.id} active={type.id === bikes.setSelectedType.id} className="cursor-pointer">
                <input type="checkbox" checked={type.id === bikes.selectedType.id} onChange={() => handleTypeChange(type)} />
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
