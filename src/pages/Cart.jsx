import Modal from "../components/Layout/Modal";
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import Counter from "../components/Counter";

import deleteSvg from "../../src/Assets/svg/deleteSVG.svg";
// import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const [total, setTotal] = useState(0);

  const updateTotal = (quantity, price) => {
    setTotal(quantity * price);
  };
  // const cartTotal = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);

  // const userProgressCtx = useContext(UserProgressContext);

  return (
    <section className="">
      <h1 className="uppercase text-6xl font-semibold mt-32">Корзина</h1>
      <section className="mt-20 border p-4">
        <ul className="flex flex-col">
          {cartCtx.items.map((item) => (
            <li key={item.id} className="flex flex-col md:flex-row justify-around border-b">
              <div className="flex justify-between  space-x-6">
                <img src={item.image} alt={item.title} className="w-28 h-24 md:h-40 md:w-44 " /> <span className="md:text-lg">{item.title} </span>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="">
                  <div className="inline-block max-w-[123px]">
                    <Counter updateQuant={(quantity) => updateTotal(quantity, item.price)} />
                  </div>
                  <p>{total}</p>
                </div>
                <button className="inline-block justify-center">
                  <img src={deleteSvg} alt="delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
