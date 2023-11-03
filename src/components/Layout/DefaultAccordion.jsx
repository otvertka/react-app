import React from "react";
import { Accordion } from "flowbite-react";

const DefaultAccordion = ({ item }) => {
  // console.log(Array.from(item));
  const totalArray = [];
  const itemArray = item.split(",");

  console.log([...itemArray]);

  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            <li>
              <input className="mr-2" type="checkbox" /> <span className="text-gray-400"> Велосипеды для триатлона</span>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Бренд</Accordion.Title>
        <Accordion.Content>
          <ul>
            {itemArray.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Материал рамы</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://flowbite.com/pro/">
                <p>Flowbite Pro</p>
              </a>
            </li>
            <li>
              <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://tailwindui.com/" rel="nofollow">
                <p>Tailwind UI</p>
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default DefaultAccordion;
