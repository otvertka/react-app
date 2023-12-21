import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import CarouselItem from "./CarouselItem";

const CarouselAboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <Carousel className='mb-12 mx-auto px-10' showDots={true} responsive={responsive}>
        <div className='p-8 bg-frameBrown bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>Хранение</h2>
          <p className='text-gray-300 font-light mb-8'>Любишь кататься — люби и велосипед в квартире на зиму парковать или сдавай к нам на хранение и обслуживание.</p>
          <a className='text-white'>Подробнее</a>
        </div>

        <div className='p-8 bg-frameGray bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>Веломастерская</h2>
          <p className='text-gray-300 font-light mb-8'>Если вы купили велосипед в нашем магазине, то то можете не волноваться о настройке и проверке, так как мы это выполняем в рамках предпродажной подготовки.</p>
          <a className='text-white'>Подробнее</a>
        </div>

        <div className='p-8 bg-frameOrange bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>Гарантия</h2>
          <p className='text-gray-100 font-light mb-8'>Также, для удобства покупателей, наш магазин помогает (участвует) в формирование гарантийных запросов по всем нижеперечисленным брендам. При любом гарантийном случае можно обращаться напрямую к нам</p>
          <a className='text-white'>Подробнее</a>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselAboutUs;
