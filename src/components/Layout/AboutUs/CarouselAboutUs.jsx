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
          <h2 className='text-white mb-4 text-2xl font-medium'>Lagerung</h2>
          <p className='text-gray-300 font-light mb-8'>Wenn Sie gerne Rad fahren, überwintern Sie Ihr Fahrrad gerne in Ihrer Wohnung oder übergeben es uns zur Lagerung und Wartung.</p>
          <a className='text-white'>lies mehr</a>
        </div>

        <div className='p-8 bg-frameGray bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>Fahrradwerkstatt</h2>
          <p className='text-gray-300 font-light mb-8'>Wenn Sie ein Fahrrad in unserem Geschäft gekauft haben, müssen Sie sich um den Aufbau und die Überprüfung nicht kümmern, da wir dies im Rahmen der Vorverkaufsvorbereitung tun.</p>
          <a className='text-white'>lies mehr</a>
        </div>

        <div className='p-8 bg-frameOrange bg-cover bg-center object-contain w-[294px] h-[294px] md:w-[400px] h-[334px] rounded-lg '>
          <h2 className='text-white mb-4 text-2xl font-medium'>Garantie</h2>
          <p className='text-gray-100 font-light mb-8'>Um den Kunden die Arbeit zu erleichtern, beteiligt sich unser Geschäft außerdem an der Erstellung von Garantieanfragen für alle unten aufgeführten Marken. Im Garantiefall können Sie sich direkt an uns wenden.</p>
          <a className='text-white'>lies mehr</a>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselAboutUs;
