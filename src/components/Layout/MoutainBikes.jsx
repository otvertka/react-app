import React from "react";
import BikeSVG from "../UI/svg-components/BikeSVG";
import { NavLink } from "react-router-dom";
import mountBikerImage from "../../Assets/images/moutain-img/mount-bike.png";
import BoardCompSVG from "../UI/svg-components/BoardCompSVG";
import TransmissionSVG from "../UI/svg-components/TransmissionSVG";
import EquipmentSVG from "../UI/svg-components/EquipmentSVG";

const MoutainBikes = () => {
  return (
    <section className="m-20 flex flex-col justify-center">
      <h2 className="py-11 uppercase text-[40px]">Mountainbikes</h2>
      <div className="lg:flex md:justify-between lg:gap-20">
        <div className="w-full max-w-5xl md:columns-2 ">
          <a className=" w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Fahrradrahmen</h3>
              <BikeSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Bordcomputer</h3>
              <BoardCompSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">die Transmission</h3>
              <TransmissionSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
          <a className="w-[302px] h-[233px] p-5 inline-block rounded relative flex-col bg-gray-700 mb-2" href="#">
            <div className="flex justify-between">
              <h3 className="text-white">Fahrradausrüstung</h3>
              <EquipmentSVG />
            </div>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of</p>
          </a>
        </div>

        <div className="min-w-[350px]">
          <img className="w-full mb-8" src={mountBikerImage} alt="mountain_biker" />
          <p className="mb-10">Mountainbikes werden trotz ihres Namens häufig und aktiv im städtischen Umfeld eingesetzt, da sie über eine Reihe von Eigenschaften verfügen, die das Radfahren angenehm und komfortabel machen.</p>
          <NavLink to='/bikes'>
          <button className="w-44 h-12 rounded-xl bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white hover:scale-110 transition-all duration-300">Katalog</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MoutainBikes;
