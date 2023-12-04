import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function CheckoutPage() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);

  console.log(cartCtx);
  return (
    <>
      <h1 className="uppercase text-5xl font-medium m-5">Оформление заказа</h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h2>Покупатель</h2>
        </div>
        <div>
          <h2>ВАШ ЗАКАЗ </h2>

          <h3>Итого товара</h3>
          <h3>Общая сумма: {cartTotal} €</h3>
        </div>
      </div>
    </>
  );
}
