import Modal from "../components/Layout/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Counter from "../components/Counter";
// import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);

  // const userProgressCtx = useContext(UserProgressContext);

  return (
    <section className="">
      <h1 className="uppercase text-6xl font-semibold mt-32">Корзина</h1>
      <section className="mt-20 border">
        <ul className="flex flex-col">
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="img" className="inline-block" /> {item.title} <Counter /> {item.quantity} {item.price}
            </li>
          ))}
        </ul>
        <p>{cartTotal}</p>
      </section>
    </section>
  );
}
