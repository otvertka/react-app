import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import CarouselItem from "./CarouselItem";

const CarouselTradeIn = () => {
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
          <h2 className='text-white mb-4 text-2xl font-medium'>1. Überprüfung durch unseren Experten</h2>
          <p className='text-gray-300 font-light mb-8'>Unsere Experten führen in einer unserer Filialen eine gründliche Überprüfung deines Fahrrads durch. Wir bewerten den technischen Zustand und das äußere Erscheinungsbild des Fahrrads, um den aktuellen Wert genau zu bestimmen.</p>
          <a className='text-white'>lies mehr</a>
        </div>

        <div className='p-8 bg-frameGray bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>2. Bewertung</h2>
          <p className='text-gray-300 font-light mb-8'>Nach der Überprüfung bieten wir dir eine faire und transparente Bewertung deines Fahrrads an. Wenn du mit dem vorgeschlagenen Preis einverstanden bist, kannst du direkt zum nächsten Schritt übergehen – der Abwicklung des Verkaufs.</p>
          <a className='text-white'>lies mehr</a>
        </div>

        <div className='p-8 bg-frameOrange bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>3. Abwicklung der Auszahlung</h2>
          <p className='text-gray-100 font-light mb-8'>Sobald du der Bewertung zugestimmt hast, wird der Verkauf vor Ort abgewickelt. Der Ankauf deines Fahrrads wird durch einen Vertrag abgesichert, um Transparenz und Sicherheit zu gewährleisten. Nach Unterzeichnung des Vertrags erhältst du sofort das Geld oder einen Gutschein, der per E-Mail an dich gesendet wird.</p>
          <a className='text-white'>lies mehr</a>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselTradeIn;
