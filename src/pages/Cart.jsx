// import Modal from "../components/Layout/Modal";
import { useContext, useState } from 'react';
import CartContext from '../store/CartContext';

import CartItem from '../components/UI/CartItem';
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((tottalPrice, item) => tottalPrice + item.quantity * item.price, 0);

  return (
    <section className=''>
      <h1 className='uppercase text-6xl font-semibold mt-32'>Корзина</h1>
      <section className='mt-20 border p-4'>
        <ul className='flex flex-col'>
          {cartCtx.items.map((item) => (
            <CartItem key={item.id} image={item.image} title={item.title} quantity={item.quantity} price={item.price} onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)} onDelete={() => cartCtx.deleteItem(item.id)} />
          ))}
        </ul>
        <div className='flex justify-between'>
          {cartCtx.items.length > 0 && (
            <>
              <p>Итого: {cartTotal}</p>
              <NavLink to='/checkout' className='w-44 h-12 ml-2 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 hover:scale-110 transition-all duration-300 text-white flex items-center justify-center'>
                Перейти к заказу
              </NavLink>
            </>
          )}
        </div>
      </section>
    </section>
  );
}
