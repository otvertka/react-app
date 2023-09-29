import React from "react";

import equipImage from "../../Assets/images/equip-img/777.png";
import ReviewsCard from "../Cards/ReviewsCard";

const Reviews = (props) => {
  return (
    <section className="my-40">
      <h2>Последние обзоры</h2>
      <div>
        <ReviewsCard />
      </div>

      <div className="flex justify-center">
        <button className="uppercase align-items-center">Показать все</button>
      </div>
    </section>
  );
};

export default Reviews;
