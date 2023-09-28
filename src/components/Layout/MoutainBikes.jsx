import React from "react";
import BikeSVG from "../UI/svg-components/BikeSVG";

import mountBikerImage from "../../Assets/images/moutain-img/mount-bike.png";

const MoutainBikes = () => {
  return (
    <section>
      <h2 className="py-11 uppercase text-[40px]">Горные велосипеды</h2>
      <div className="lg:flex justify-between">
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto columns-2">
          <a className=" p-5 inline-block rounded relative flex-col bg-gray-700" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Рама</h3>
              <BikeSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="p-5 inline-block rounded relative flex-col bg-gray-700" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Рама</h3>
              <BikeSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="p-5 inline-block rounded relative flex-col bg-gray-700" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Рама</h3>
              <BikeSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="p-5 inline-block rounded relative flex-col bg-gray-700" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Рама</h3>
              <BikeSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
        </div>

        <div className="">
          <img className="object-cover" src={mountBikerImage} alt="mountain_biker" />
          <p className="">Горный велосипед несмотря на свое название часто и активно используются в условиях города, так как обладает рядом характеристик, позволяющих сделать велопрогулку максимально приятной и комфортной</p>
          <button className="bg-orange-500">Каталог</button>
        </div>
      </div>
    </section>
  );
};

export default MoutainBikes;
