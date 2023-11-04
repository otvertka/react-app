import React from "react";
import { Accordion } from "flowbite-react";

const DefaultAccordion = ({ items }) => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {items.types.map((type) => (
              <li key={type.index}>
                <input type="checkbox" />
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
            {items.brands.map((brand) => (
              <li key={brand.index}>
                <input type="checkbox" />
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
            {items.frames.map((frame) => (
              <li key={frame.index}>
                <input type="checkbox" /> {frame.name}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default DefaultAccordion;
