import React from "react";

import rew_1_Image from "../../Assets/images/reviews-img/r-1.png";

const ReviewsCard = (props) => {
  return (
    <div className="w-[400px] h-[267px] rounded-[12px]">
      <img className="w-full h-[195px]" src={rew_1_Image} alt="review-1" />
      <div className="flex flex-col justify-around h-full bg-black text-white">
        <span className="pl-6">25.01.2023</span>
        <span className="pl-6 text-orange-500">#обзор</span>
        <p className="pl-6">BMC Kaius 01 идеальный гоночный гравийный велосипед</p>
        <a className="pl-6 inline-block" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default ReviewsCard;
