import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthDetails from '../components/auth/AuthDetails';
import { signOut } from 'firebase/auth'; // Импортируйте функцию signOut из firebase/auth
import { auth } from '../firebase';
p;
const MyAccauntPage = () => {
  const navigation = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Вышел successful');
        navigation('/auth');
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
