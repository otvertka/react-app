import React from "react";

import rew_1_Image from "../../Assets/images/reviews-img/r-1.png";

const ReviewsCard = (props) => {
  return (
    <div className="max-w-sm min-w-[289px] ">
      <div className=" ">
        <img className="rounded-t-xl" src={rew_1_Image} alt="review-1" />
        <div className="flex flex-col justify-around bg-black rounded-b-xl text-white py-6">
          <span className=" pl-6 mb-2">15.06.2024</span>
          <span className="pl-6 mb-4 text-orange-500">#Überprüfung</span>
          <p className="pl-6 mb-5">BMC Kaius 01 das perfekte Schotterrennrad</p>
          <a className="pl-6 inline-block" href="#">
            lies mehr
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
