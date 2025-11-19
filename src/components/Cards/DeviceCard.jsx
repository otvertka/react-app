import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import OneclickSVG from '../UI/svg-components/OneclickSVG';
import CartContext from '../../store/CartContext';

const DeviceCard = ({ bikesInfo, pathTo }) => {
  const navigate = useNavigate();
  const { addToFavorites, favorites, removeFromFavorites } = useContext(CartContext);

  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some(item => item.id === bikesInfo.id));
  }, [favorites, bikesInfo.id]);

  const handleSelectItem = () => {
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
    <div
      className="relative w-[90%] h-[506px] md:w-[290px] md:h-[373px] bg-white rounded-md border-2 flex flex-col justify-start max-w-sm md:max-w-none transition-transform transform-gpu hover:shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Верхняя часть карточки */}
      <div className="flex justify-between px-3 pt-3">
        <img className="h-8 w-16 md:h-6 md:w-12" src={bikesInfo.country} alt="flag" />
        <span className="text-green-600">Vorrätig</span>
      </div>

      {/* Основной контент — сдвинут к верхнему краю */}
      <div className="flex flex-col justify-start p-4 flex-1">
        <img className="w-full h-48 md:h-32 object-contain pb-2" src={bikesInfo.image} alt="photo-bike" />
        <div className="h-16 flex items-center">
          <h3 className="text-lg">{bikesInfo.title}</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{bikesInfo.price} €</p>
          <button
            className="hover:scale-105 transition-transform duration-200"
            onClick={handleAddToFavorites}
          >
            <svg
              width="29"
              height="26"
              viewBox="0 0 29 26"
              fill={isFavorite ? "#F57520" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.67757 13.34L14.5 25.4464L26.3224 13.34C27.6367 11.9941 28.375 10.1688 28.375 8.26553C28.375 4.30217 25.2374 1.08923 21.367 1.08923C19.5084 1.08923 17.7259 1.84531 16.4117 3.19112L14.5 5.14876L12.5883 3.19112C11.274 1.84531 9.49156 1.08923 7.63294 1.08923C3.76255 1.08923 0.625 4.30217 0.625 8.26553C0.625 10.1688 1.36333 11.9941 2.67757 13.34Z"
                stroke="#F57520"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Кнопка "Mit 1 Klick" внизу карточки */}
      <div
        className={`absolute bottom-4 left-4 right-4 transition-all duration-400 ease-out ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <button
          onClick={handleSelectItem}
          className="bg-orange-500 rounded-lg py-2 px-4 w-full text-white hover:scale-105 transition-transform duration-500 flex justify-center gap-2"
        >
          <OneclickSVG /> Mit 1 Klick
        </button>
      </div>
    </div>
  );
};

export default DeviceCard;
