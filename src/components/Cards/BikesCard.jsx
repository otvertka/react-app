import React, { useState } from "react";
import OneclickSVG from "../UI/svg-components/OneclickSVG";

const BikesCard = ({ bikesInfo }) => {
  // const { id, title, country, image, price } = bikesInfo;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-md border-2 border-black  flex flex-col justify-around max-w-sm" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex justify-between">
        <img height={46} width={88} src={bikesInfo.country} alt="flag" />
        <span className="text-green-600 m-4">В наличии</span>
      </div>
      <div className="flex flex-col justify-center m-4">
        <img className="" src={bikesInfo.image} alt="photo-bike" />
        <h3 className="text-lg mb-6 ">{bikesInfo.title}</h3>
        <p className="text-gray-600 mb-8">{bikesInfo.price} €</p>
        {isHovered && (
          <button className="bg-orange-500 rounded-lg py-4 text-white ">
            <div className="flex justify-center gap-1">
              <OneclickSVG /> В 1 клик
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default BikesCard;
