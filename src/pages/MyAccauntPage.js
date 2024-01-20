import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthDetails from '../components/auth/AuthDetails';
import { signOut } from 'firebase/auth'; // Импортируйте функцию signOut из firebase/auth
import { auth } from '../firebase';

const MyAccauntPage = () => {
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Вышел successful');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <AuthDetails userSignOut={userSignOut} />
      <h1>Мой аккаунт</h1>
      <ul>
        <li>История заказов</li>
        <li>Персональные данные</li>
        <li>Смена пароля</li>
        <li>Список желаний</li>
        <button onClick={userSignOut}>Выйти</button>
      </ul>
    </>
  );
};

export default MyAccauntPage;
