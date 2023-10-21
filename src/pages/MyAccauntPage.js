import React from "react";
import { NavLink } from "react-router-dom";

const MyAccauntPage = () => {
  return (
    <>
      <h1>Мой аккаунт</h1>
      <ul>
        <li>История заказов</li>
        <li>Персональные данные</li>
        <li>Смена пароля</li>
        <li>Список желаний</li>
        <li>Выйти</li>
      </ul>
    </>
  );
};

export default MyAccauntPage;
