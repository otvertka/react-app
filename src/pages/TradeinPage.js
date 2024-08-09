import React from 'react';

import headerImg from '../Assets/images/tradein/1.webp';
import bikerBridge from '../Assets/images/tradein/2.webp';
import CarouselAboutGalery from '../components/Layout/AboutUs/CarouselAboutGalery';
import Map from '../components/Layout/Map';
import CarouselTradeIn from '../components/Layout/CarouselTradeIn';

const TradeinPage = () => {
  return (
    <div className='mx-auto'>
      <header className='h-[198px] md:h-[278px] relative'>
        <img src={headerImg} className='absolute z-0 left-0 top-0 w-full h-full object-cover brightness-50' alt='subscribe' />
        <div className='py-10 z-20 absolute max-w-5xl'>
          <h1 className='text-white uppercase text-4xl sm:ml-8 z-10 pb-8'>Trade in</h1>
        </div>
      </header>
      <main>
        <div className='p-5 '>
          <h1 className='uppercase text-5xl md:text-[110px] font-semibold sm:ml-8 mb-6 md:my-16'>
            <span className='text-orange-500 '>Fahrrad</span> verkaufen bei uns
          </h1>
          <CarouselTradeIn />
        </div>
      </main>

      <section className='p-5'>
        <h2 className='uppercase font-semibold text-4xl lg:text-6xl mb-6 md:mb-12'>Fahrrad Ankauf: Was passiert mit deinem gebrauchten Fahrrad?</h2>
        <div className='flex flex-col md:flex-row mb-6 md:mb-10'>
          <p className='text-gray-500'>Gib deinem Fahrrad noch eine Chance. Mit dem Ankauf deines gebrauchten Fahrrads geben wir ihm ein zweites Leben. Wir machen dein E-Bike oder Fahrrad fit für den nächsten Kunden und als Second Hand Sport Produkt ist es dann bei uns im Store wieder erhältlich. Das ist nicht nur gut für dich, sondern auch für die Kreislaufwirtschaft.</p>
        </div>
        <img className='mb-6' src={bikerBridge} alt='bikerBridge' />
      </section>

      <section>
        <h2 className='uppercase text-5xl	font-medium pl-5 mb-8 md:mb-20'>Fotogalerie</h2>
        <CarouselAboutGalery />
      </section>
      <Map />
    </div>
  );
};

export default TradeinPage;
