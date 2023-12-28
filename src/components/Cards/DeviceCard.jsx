import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OneclickSVG from '../UI/svg-components/OneclickSVG';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const DeviceCard = ({ bikesInfo, pathTo }) => {
  const navigate = useNavigate();
  const { addToFavorites, favorites, removeFromFavorites } = useContext(CartContext);

  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(
      favorites.some((item) => item.id === bikesInfo.id),
      [favorites, bikesInfo.id]
    );
  });

  const handleSelectItem = () => {
    // navigate(`/accessorries/${bikesInfo.id}`);
    navigate(`/${pathTo}/${bikesInfo.id}`);
  };

  const handleAddToFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(bikesInfo.id);
    } else {
      addToFavorites(bikesInfo);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='relative w-full h-[506px] md:w-[290px] md:h-[373px] bg-white rounded-md border-2 border-black flex flex-col justify-around max-w-sm md:max-w-none transition-transform transform-gpu' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='flex justify-between'>
        <img className='h-8 w-16 md:h-6 md:w-12' src={bikesInfo.country} alt='flag' />
        <span className='text-green-600 m-4'>В наличии</span>
      </div>
      <div className='flex flex-col justify-center p-4'>
        <img className='w-full h-48 md:h-32 object-contain mb-4' src={bikesInfo.image} alt='photo-bike' />
        <h3 className='text-lg mb-2 '>{bikesInfo.title}</h3>
        <div className='flex justify-between items-center mb-2'>
          <p className='text-gray-600 '>{bikesInfo.price} €</p>
          <button onClick={handleAddToFavorites}>
            <svg width='29' height='26' viewBox='0 0 29 26' fill={isFavorite ? '#F57520' : 'none'} xmlns='http://www.w3.org/2000/svg'>
              <path d='M2.67757 13.34L14.5 25.4464L26.3224 13.34C27.6367 11.9941 28.375 10.1688 28.375 8.26553C28.375 4.30217 25.2374 1.08923 21.367 1.08923C19.5084 1.08923 17.7259 1.84531 16.4117 3.19112L14.5 5.14876L12.5883 3.19112C11.274 1.84531 9.49156 1.08923 7.63294 1.08923C3.76255 1.08923 0.625 4.30217 0.625 8.26553C0.625 10.1688 1.36333 11.9941 2.67757 13.34Z' stroke='#F57520' stroke-linecap='round' stroke-linejoin='round' />
            </svg>
          </button>
        </div>
        {isHovered && (
          <div className='mt-auto'>
            <button onClick={handleSelectItem} className='bg-orange-500 rounded-lg py-2 px-4 text-white'>
              <div className='flex justify-center gap-1'>
                <OneclickSVG /> В 1 клик
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceCard;
