import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const DefaultAccordion = observer(() => {
  const { bikes } = useContext(Context);
  console.log(bikes);

  const handleTypeChange = (type) => {
    // console.log("Выбран тип:", type.name);

    if (bikes.selectedType.id === type.id) {
      bikes.setSelectedType({});
    } else {
      bikes.setSelectedType(type);
      console.log(type.name);
      console.log(bikes.selectedType.name);
    }
  };
  // const handleTypeChange = (type) => {
  //   console.log("Выбран тип:", type.name);

  //   console.log(bikes.selectedType.name);
  //   if (bikes.selectedType.name && bikes.setSelectedType.name === type.name) {
  //     bikes.setSelectedType({});
  //   } else {
  //     bikes.setSelectedType(type);
  //   }
  // };

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {bikes.types.map((type) => (
              // <li key={type.id} className={type.id === bikes.selectedType.id ? "border border-blue-500" : ""} onClick={() => handleTypeChange(type)}>
              <li>
                <input className="appearance-none checked:bg-orange-500 hover:ring-black" key={type.id} type="checkbox" value={type.name === bikes.selectedType?.name} onChange={() => handleTypeChange(type)} />
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
