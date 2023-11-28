import Modal from "../components/Layout/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);

  const userProgressCtx = useContext(UserProgressContext);

  return (
    <Modal open={userProgressCtx.progress === "cart"}>
      <h2>Your cart</h2>

      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p>{cartTotal}</p>
      <p>
        <button textOnly>Close</button>
        <button>Go to checkout</button>
      </p>
    </Modal>
  );
}
