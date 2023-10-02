import React from "react";

import equipImage from "../../Assets/images/equip-img/777.png";
import ReviewsCard from "../Cards/ReviewsCard";

const Reviews = (props) => {
  return (
    <section className="my-40 flex flex-col">
      <h2 className="py-11 uppercase text-[40px]">Последние обзоры</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 container mx-auto mt-10 mb-12">
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
        <ReviewsCard />
      </div>

      <div className="flex justify-center">
        <button className=" text-blue-500 uppercase">Показать все</button>
      </div>
    </section>
  );
};

export default Reviews;
