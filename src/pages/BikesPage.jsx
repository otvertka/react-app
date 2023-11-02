import React from "react";
// import BikesCard from "../components/Cards/BikesCard";

// import bikesData from "../data/bikes.json";
import { observer } from "mobx-react-lite";
import DefaultAccordion from "../components/Layout/DefaultAccordion";
import BikesStore from "../store/BikesStore";

const store = new BikesStore();

const BikesPage = observer(() => {
  const { types, brands, bikes } = store;
  console.log(brands);
  return (
    <section>
      <h1>ВСЕ ВЕЛОСИПЕДЫ</h1>
      <div className="flex justify-between">
        <div className="w-1/4">
          {brands.map((brand) => (
            <DefaultAccordion key={brand.id} item={brand.name} />
          ))}
        </div>

        <div className="3/4">
          <div className="grid grid-cols-3 ">
            {/* {bikesData.map((bike) => (
              <BikesCard key={bike.id} bikesInfo={bike} />
            ))} */}

            <ul>
              {types.map((type) => (
                <li key={type.id}>{type.name}</li>
              ))}
            </ul>
            <ul>
              {brands.map((brand) => (
                <li key={brand.id}>{brand.name}</li>
              ))}
            </ul>
            <ul>
              {bikes.map((bike) => (
                <li key={bike.id}>
                  <img src={bike.img} alt={bike.name} />
                  <p>{bike.name}</p>
                  <p>{bike.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default BikesPage;
