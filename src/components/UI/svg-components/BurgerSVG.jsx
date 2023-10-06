import React from "react";

const BurgerSVG = () => {
  return (
    <svg className="transition-fill fill-current duration-300 hover:scale-125 hover:text-orange-700" width="32" height="16" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1.25" x2="32" y2="1.25" stroke="white" stroke-width="1.5" />
      <line x1="8" y1="10.25" x2="32" y2="10.25" stroke="white" stroke-width="1.5" />
      <line x1="8" y1="19.25" x2="32" y2="19.25" stroke="white" stroke-width="1.5" />
    </svg>
  );
};

export default BurgerSVG;
