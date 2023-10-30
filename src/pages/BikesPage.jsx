import React from "react";
import BikesCard from "../components/Cards/BikesCard";

import bikesData from "../data/bikes.json";
import DefaultAccordion from "../components/Layout/DefaultAccordion";

const BikesPage = () => {
  return (
    <section>
      <h1>ВСЕ ВЕЛОСИПЕДЫ</h1>
      <div className="flex justify-between">
        <div className="w-1/4">
          <DefaultAccordion />
        </div>

        <div className="3/4">
          <div className="grid grid-cols-3 ">
            {bikesData.map((bike) => (
              <BikesCard key={bike.id} bikesInfo={bike} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikesPage;
