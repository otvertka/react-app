// import bikesImage from "../../Assets/images/bikes-img/image 23.png";
// import canadianFlag from "../../Assets/images/flags-img/image 59.png";

// const bike = {
//   id: 1,
//   name: "Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022",
//   price: 1000,
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6iXgi3ehJXPSlmeb8trHZDElzR5-VwQDyJA-QdJSLZM9HArjW00vefX5De-MNcn1tJk&usqp=CAU",
//   flag: "../src/data/countryImages/italy.png",
// };

import React from "react";

// import italyFlag from "../../data/countryImages/italy.png";

const BikesCard = ({ bikesInfo }) => {
  const { id, title, country, image, price } = bikesInfo;

  return (
    <div className="bg-white rounded-md border-2 border-black mt-22 min-h-max w-1/3 flex flex-col justify-around">
      <div className="flex justify-between">
        <img height={46} width={88} src={country} alt="flag" />
        <span>В наличии</span>
      </div>
      <img src="italy.png" alt="photo-bike" />
      <h3>{title}</h3>
      <p>{price}</p>

      <button className="bg-orange-500 rounded mx-1">В 1 клик</button>
    </div>
  );
};

export default BikesCard;
