import React from "react";

import equipImage from "../../Assets/images/equip-img/equipment.png";
const Equipment = () => {
  return (
    <section className="bg-gray-200">
      <h2>Экипировка</h2>
      <div>
        <img src={equipImage} alt="equip" />
      </div>

      <div className="flex justify-center">
        <button className="uppercase align-items-center">Показать все</button>
      </div>
    </section>
  );
};

export default Equipment;
