import React from 'react';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

const FavoritesPage = () => {
  const { favorites } = useContext(CartContext);

  return (
    <div>
      <h1>Избранное</h1>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
