import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OneclickSVG from '../UI/svg-components/OneclickSVG';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const DeviceCard = ({ bikesInfo, pathTo }) => {
  const navigate = useNavigate();
  const { addToFavorites } = useContext(CartContext);

  const handleSelectItem = () => {
    // navigate(`/accessorries/${bikesInfo.id}`);
    navigate(`/${pathTo}/${bikesInfo.id}`);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bg-white rounded-md border-2 border-black  flex flex-col justify-around max-w-sm' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='flex justify-between'>
        <img height={46} width={88} src={bikesInfo.country} alt='flag' />
        <span className='text-green-600 m-4'>В наличии</span>
      </div>
      <div className='flex flex-col justify-center m-4'>
        <img className='' src={bikesInfo.image} alt='photo-bike' />
        <h3 className='text-lg mb-6 '>{bikesInfo.title}</h3>
        <p className='text-gray-600 mb-8'>{bikesInfo.price} €</p>
        {isHovered && (
          <>
            <button onClick={handleSelectItem} className='bg-orange-500 rounded-lg py-4 text-white'>
              <div className='flex justify-center gap-1'>
                <OneclickSVG /> В 1 клик
              </div>
            </button>
            <button onClick={() => addToFavorites(bikesInfo)} className='bg-yellow text-yellow-500 font-bold text-5xl'>
              Добавить в избранное
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;
