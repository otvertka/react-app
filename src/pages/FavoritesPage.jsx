import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../store/CartContext';
import DeviceCard from '../components/Cards/DeviceCard';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(CartContext);

  const handleSelectItem = (item) => {
    let pathTo = '';

    if (item.id < 200) {
      pathTo = `bikes/${item.id}`;
    } else if (item.id >= 200 && item.id < 300) {
      pathTo = `parts/${item.id}`;
    } else if (item.id >= 300 && item.id < 400) {
      pathTo = `equipments/${item.id}`;
    } else if (item.id >= 400 && item.id < 500) {
      pathTo = `accessorries/${item.id}`;
    }

    navigate(`/${pathTo}`);
  };

  return (
    <div>
      <h1>Избранное</h1>
      <ul className='grid grid-cols-3 '>
        {favorites.map((item) => (
          <li className='' key={item.id} onClick={() => handleSelectItem(item)}>
            <DeviceCard bikesInfo={item} pathTo='' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
