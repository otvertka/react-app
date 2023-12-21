import React from 'react';

import CarouselAboutUs from '../components/Layout/AboutUs/CarouselAboutUs';

import headerImg from '../Assets/images/pageAbout/aboutHeader.png';
import bikerImg from '../Assets/images/pageAbout/biker.png';
import teamPhoto from '../Assets/images/pageAbout/teamPhoto.png';
import bikerBridge from '../Assets/images/pageAbout/bikerBridge.png';
import socImg from '../Assets/images/social_demo.png';
import CarouselAboutGalery from '../components/Layout/AboutUs/CarouselAboutGalery';
import Map from '../components/Layout/Map';
import SocialMedia from '../components/UI/svg-components/SocialMedia';

const Aboutus = () => {
  return (
    <div className='mx-auto'>
      <header className='h-[198px] md:h-[278px] relative'>
        <img src={headerImg} className='absolute z-0 left-0 top-0 w-full h-full object-cover' alt='subscribe' />
        <div className='py-10 z-20 absolute max-w-5xl'>
          <h1 className='text-white uppercase text-4xl sm:ml-8 z-10 pb-8'>О нас</h1>
        </div>
      </header>
      <main>
        <div className='p-5 '>
          <h1 className='uppercase text-5xl md:text-[110px] font-semibold sm:ml-8 mb-6 md:my-16'>
            <span className='text-orange-500 '>Велосипед</span> – это не просто средство передвижения!
          </h1>
          <CarouselAboutUs />
        </div>
      </main>
      <section className='flex flex-col md:flex-row mb-12 md:mb-[100px]'>
        <div className='md:w-1/2 w-full md:order-last'>
          <img src={bikerImg} />
        </div>
        <div className='md:w-1/2 w-full bg-[#101010] pt-10 px-5 sm:my-12'>
          <h2 className='text-white uppercase text-5xl font-medium mb-6'>НЕСКОЛЬКО СЛОВ О НАС И НАШЕМ ДЕЛЕ</h2>
          <p className='text-white mb-4'>Велосипед — это не просто средство передвижения. Мы, команда World-Bike, уверены в этом. Для нас велосипед — это целая жизнь, полная свободы, драйва, приключений и новых открытий. </p>
          <p className='text-white mb-10'>Мы искренне любим своё дело и стараемся, чтобы и для вас велосипед стал неотъемлемой частью жизни.</p>

          <SocialMedia />
        </div>
      </section>
      <section className='p-5'>
        <h2 className='uppercase font-semibold text-4xl lg:text-6xl mb-6 md:mb-12'>МЫ СОБРАЛИ ДЛЯ ВАС ЛУЧШЕЕ ИЗ ВЕЛОСИПЕДНОГО МирА</h2>
        <div className='flex flex-col md:flex-row mb-6 md:mb-10'>
          <p className='font-semibold'>World-Bike специализируется на продаже и обслуживании велосипедов, запчастей, аксессуаров для них и экипировки</p>
          <p className='text-gray-500'>Мы знаем цену качеству. Поэтому в World-Bike только качественные премиальные товары по соответствующим ценам. А под заказ мы соберём для вас кастомный велосипед с уникальным дизайном и техническими характеристиками!</p>
        </div>
        <img className='mb-6' src={bikerBridge} alt='bikerBridge' />
      </section>

      <section className='my-12'>
        <h2 className='text-5xl lg:text-6xl font-medium mb-4 md:mb-20'>WORLD-BIKE – ЭТО В ПЕРВУЮ ОЧЕРЕДЬ КОМАНДА!</h2>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 w-full md:order-last'>
            <img src={teamPhoto} alt='teamPhoto' />
          </div>
          <div className='md:w-1/2'>
            <p className='p-5 font-medium'>Все наши сотрудники — это бывшие профессиональные велосипедисты, чемпионы и призёры соревнований Европы и Германии, участники отечественной сборной. Не сомневайтесь, если кто-то и способен предоставить вам по-настоящему профессиональную консультацию, то это они.</p>
            <div className='p-5 '>
              <h3 className='text-xl font-medium mb-6'>Консультанты World-Bike помогут вам в любом вопросе: </h3>
            </div>
            <ul className='p-5'>
              <li className='mb-4'>
                <span className='text-orange-500'>✓</span> подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;
              </li>
              <li className='mb-4'>
                <span className='text-orange-500'>✓</span> помощь в выборе запчастей, аксессуаров и экипировки;
              </li>
              <li className='mb-4'>
                <span className='text-orange-500'>✓</span> консультации по любой теме, касающейся спортивной тематики.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className='uppercase text-5xl	font-medium pl-5 mb-8 md:mb-20'>Фотогалерея</h2>
        <CarouselAboutGalery />
      </section>
      <Map />
    </div>
  );
};

export default Aboutus;
