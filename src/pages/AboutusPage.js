import React from "react";

import headerImg from "../Assets/images/pageAbout/aboutHeader.png";

const Aboutus = () => {
  return (
    <div>
      <header className="w-full h-[198px] md:h-[278px] relative">
        <img src={headerImg} className="absolute z-0 left-0 top-0 w-full h-full object-cover" alt="subscribe" />
        <div className="py-10 z-20 absolute">
          <h1 className="text-white uppercase text-4xl sm:ml-8 z-10 pb-8">О нас</h1>
        </div>
      </header>
      <main>
        <div>
          <h1 className="uppercase text-4xl sm:ml-8">Велосипед – это не просто средство передвижения!</h1>
        </div>
      </main>
    </div>
  );
};

export default Aboutus;
