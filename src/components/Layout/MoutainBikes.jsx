import React from "react";
import BikeSVG from "../UI/svg-components/BikeSVG";

import mountBikerImage from "../../Assets/images/moutain-img/mount-bike.png";
import BoardCompSVG from "../UI/svg-components/BoardCompSVG";
import TransmissionSVG from "../UI/svg-components/TransmissionSVG";
import EquipmentSVG from "../UI/svg-components/EquipmentSVG";

const MoutainBikes = () => {
  return (
    <section className="m-20 flex flex-col justify-center">
      <h2 className="py-11 uppercase text-[40px]">Горные велосипеды</h2>
      <div className="lg:flex md:justify-between lg:gap-20">
        <div className="w-full max-w-5xl md:columns-2 ">
          <a className=" w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Рама</h3>
              <BikeSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Бортовой компьютер</h3>
              <BoardCompSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Трансмиссия</h3>
              <TransmissionSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Оборудование</h3>
              <EquipmentSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
        </div>

        <div className="min-w-[350px]">
          <img className="w-full mb-8" src={mountBikerImage} alt="mountain_biker" />
          <p className="mb-10">Горный велосипед несмотря на свое название часто и активно используются в условиях города, так как обладает рядом характеристик, позволяющих сделать велопрогулку максимально приятной и комфортной</p>
          <button className="w-44 h-12 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white hover:scale-110 transition-all duration-300">Каталог</button>
        </div>
      </div>
    </section>
  );
};

export default MoutainBikes;
