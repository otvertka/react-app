import React, { useState } from "react";

const Counter = ({ updateQuant }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    updateQuant(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      updateQuant(count - 1);
    }
  };
  return (
    <div className="border flex justify-between">
      <button className="inline-block px-4 py-2 cursor-pointer" onClick={decrement}>
        -
      </button>
      <span classNames="text-xl">{count}</span>
      <button className="inline-block px-4 py-2 cursor-pointer" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
// import React from "react";
// import counterStore from "../store/counter";
// import { observer } from "mobx-react-lite";

// const Counter = observer(() => {
//   return (
//     <div className="border flex justify-between">
//       <button className="inline-block px-4 py-2 cursor-pointer" onClick={() => counterStore.decrement()}>
//         -
//       </button>
//       <span className="text-xl pt-2">{counterStore.count}</span>
//       <button className="inline-block px-4 py-2 cursor-pointer" onClick={() => counterStore.increment()}>
//         +
//       </button>
//     </div>
//   );
// });

// export default Counter;
