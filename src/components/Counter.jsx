import React from "react";

const Counter = ({ quant, onDecrease, onIncrease }) => {

  return (
    <div className="border flex justify-between">
      <button className="inline-block px-4 py-2 cursor-pointer" onClick={onDecrease}>
        -
      </button>
      <span classNames="text-xl">{quant}</span>
      <button className="inline-block px-4 py-2 cursor-pointer" onClick={onIncrease}>
        +
      </button>
    </div>
  );
};


export default Counter;