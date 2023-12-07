import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import CheckoutInput from "../components/UI/CheckoutInput";
import ModalConfirmOrder from "../components/UI/ModalConfirmOrder";

export default function CheckoutPage() {
  const cartCtx = useContext(CartContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const cartTotalPrice = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);
  const cartTotalQuantity = cartCtx.items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  console.log(cartCtx);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); //

    const orderData = {
      customer: customerData,
      items: cartCtx.items,
      tottalPrice: cartTotalPrice,
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));

    setOrderConfirmed(true);
    cartCtx.clearCart();
  }

  const handleCloseModal = () => {
    setOrderConfirmed(false);
  };

  if (orderConfirmed) {
    return <ModalConfirmOrder onClose={handleCloseModal} />;
  }

  return (
    <section className="mt-20">
      <h1 className="uppercase text-5xl font-medium m-5">Оформление заказа</h1>
      <div className="flex flex-col md:flex-row md:justify-between mx-10">
        <div className="">
          <form onSubmit={handleSubmit}>
            <h2 className="uppercase text-xl font-semibold mb-4">Покупатель</h2>
            <CheckoutInput label="Name*" type="text" id="name" placeholder="Имя" />
            <CheckoutInput label="Surname*" type="text" id="surname" placeholder="Фамилия" />
            <CheckoutInput label="E-mail*" type="email" id="email" placeholder="e-mail" />
            <div className="flex">
              <CheckoutInput label="Street*" type="text" id="street" placeholder="Улица" />
              <CheckoutInput label="House number*" type="text" id="house" placeholder="Дом" />
            </div>
            <div className="flex">
              <CheckoutInput label="City*" type="text" id="city" placeholder="Город" />
              <CheckoutInput label="Postal Code*" type="text" id="postal-code" placeholder="Почтовый индекс" />
            </div>
            <button type="submit" className="px-5 w-full h-12 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 hover:scale-105 transition-all duration-300 text-white">
              Подтвердить заказ
            </button>
          </form>
        </div>
        <div className="">
          <h2 className="uppercase text-3xl font-bold mb-11">ВАШ ЗАКАЗ </h2>

          <ul>
            {cartCtx.items.map((item) => (
              <li className="border-b-2 mb-2">
                <h3 className="text-2xl font-semibold">{item.title} </h3>
                <p className="text-gray-500">{item.type} </p>
                <p className="text-xl text-orange-500">
                  {item.price}€ x {item.quantity} шт.
                </p>
              </li>
            ))}
          </ul>
          {console.log(cartCtx.items)}
          <h3 className="text-lg mb-2">
            Итого позиций товара: <span className="font-semibold">{cartTotalQuantity} </span>
          </h3>
          <h3 className="text-lg uppercase font-bold mb-1">
            Доставка: <span className=" text-orange-600 font-semibold"> {cartTotalPrice > 500 ? "бесплатно" : "20 €"} </span>
          </h3>
          <h3 className="text-xl font-bold mb-2">
            Общая сумма: <span className="font-semibold">{cartTotalPrice}</span> €
          </h3>
        </div>
      </div>
    </section>
  );
}
