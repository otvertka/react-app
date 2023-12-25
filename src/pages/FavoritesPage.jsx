import React from 'react';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import DeviceCard from '../components/Cards/DeviceCard';

const FavoritesPage = () => {
  const { favorites } = useContext(CartContext);

  return (
    <div>
      <h1>Избранное</h1>
      <ul className='grid grid-cols-3 '>
        {favorites.map((item) => (
          <li className='' key={item.id}>
            <DeviceCard bikesInfo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
