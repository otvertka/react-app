// import React from "react";
// import { Accordion } from "flowbite-react";

// const DefaultAccordion = ({ items }) => {
//   return (
//     <Accordion>
//       <Accordion.Panel>
//         <Accordion.Title>Категории товара</Accordion.Title>

//         <Accordion.Content>
//           <ul>
//             {items.types.map((type) => (
//               <li key={type.index}>
//                 <input type="checkbox" />
//                 {type.name}
//               </li>
//             ))}
//           </ul>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title>Бренд</Accordion.Title>
//         <Accordion.Content>
//           <ul>
//             {items.brands.map((brand) => (
//               <li key={brand.index}>
//                 <input type="checkbox" />
//                 {brand.name}
//               </li>
//             ))}
//           </ul>
//         </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel>
//         <Accordion.Title>Материал рамы</Accordion.Title>
//         <Accordion.Content>
//           <ul>
//             {items.frames.map((frame) => (
//               <li key={frame.index}>
//                 <input type="checkbox" /> {frame.name}
//               </li>
//             ))}
//           </ul>
//         </Accordion.Content>
//       </Accordion.Panel>
//     </Accordion>
//   );
// };

// export default DefaultAccordion;

import React, { useContext } from "react";
import { Accordion } from "flowbite-react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const DefaultAccordion = observer(() => {
  const { bikes } = useContext(Context);
  console.log(bikes);
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Категории товара</Accordion.Title>

        <Accordion.Content>
          <ul>
            {bikes.types.map((type) => (
              <li
                key={type.id}
                // active={type.id === bikes.setSelectedType.id}
                onClick={() => {
                  console.log("Выбран тип:", type.name);
                  bikes.setSelectedType(type);
                }}
                className={`cursor-pointer ${type.id === bikes.setSelectedType.id ? "text-yellow-300" : ""}`}>
                {type.name}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Бренд</Accordion.Title>
        <Accordion.Content>
          {/* <ul>
            {items.brands.map((brand) => (
              <li key={brand.index}>
                <input type="checkbox" />
                {brand.name}
              </li>
            ))}
          </ul> */}
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Материал рамы</Accordion.Title>
        <Accordion.Content>
          {/* <ul>
            {items.frames.map((frame) => (
              <li key={frame.index}>
                <input type="checkbox" /> {frame.name}
              </li>
            ))}
          </ul> */}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
});

export default DefaultAccordion;
