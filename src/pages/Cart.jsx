// import Modal from "../components/Layout/Modal";
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
// import Counter from "../components/Counter";

// import deleteSvg from "../../src/Assets/svg/deleteSVG.svg";
import CartItem from "../components/UI/CartItem";
// import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  // const [total, setTotal] = useState(0);

  // const updateTotal = (quantity, price) => {
  //   setTotal(quantity * price);
  // };
  const cartTotal = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);

  // const userProgressCtx = useContext(UserProgressContext);

  return (
    <section className="">
      <h1 className="uppercase text-6xl font-semibold mt-32">Корзина</h1>
      <section className="mt-20 border p-4">
        <ul className="flex flex-col">
          {cartCtx.items.map((item) => (
            <CartItem key={item.id} image={item.image} title={item.title} quantity={item.quantity} price={item.price} onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)} onDelete={() => cartCtx.deleteItem(item.id)} />
          ))}
        </ul>
        <p>Итого: {cartTotal}</p>
      </section>
    </section>
  );
}
