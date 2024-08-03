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
          <h1 className='text-white uppercase text-4xl sm:ml-8 z-10 pb-8'>Über uns</h1>
        </div>
      </header>
      <main>
        <div className='p-5 '>
          <h1 className='uppercase text-5xl md:text-[110px] font-semibold sm:ml-8 mb-6 md:my-16'>
            <span className='text-orange-500 '>Fahhrad</span> – es ist nicht nur ein Transportmittel!
          </h1>
          <CarouselAboutUs />
        </div>
      </main>
      <section className='flex flex-col md:flex-row mb-12 md:mb-[100px]'>
        <div className='md:w-1/2 w-full md:order-last'>
          <img src={bikerImg} />
        </div>
        <div className='md:w-1/2 w-full bg-[#101010] pt-10 px-5 sm:my-12'>
          <h2 className='text-white uppercase text-5xl font-medium mb-6'>EIN PAAR WORTE ÜBER UNS UND UNSER UNTERNEHMEN</h2>
          <p className='text-white mb-4'>Fahhrad— es ist nicht nur ein Transportmittel. Wir, das Dein-Fahrrad-Team, sind uns dessen sicher. Für uns ist das Radfahren ein ganzes Leben voller Freiheit, Antrieb, Abenteuer und neuer Entdeckungen. </p>
          <p className='text-white mb-10'>Wir lieben, was wir tun, und versuchen, das Radfahren zu einem integralen Bestandteil Ihres Lebens zu machen.</p>

          <SocialMedia />
        </div>
      </section>
      <section className='p-5'>
        <h2 className='uppercase font-semibold text-4xl lg:text-6xl mb-6 md:mb-12'>Wir haben für Sie das Beste aus der Welt des Radfahrens gesammelt !</h2>
        <div className='flex flex-col md:flex-row mb-6 md:mb-10'>
          <p className='font-semibold'>Dein-Fahrrad ist auf den Verkauf und Service von Fahrrädern, Ersatzteilen, Zubehör und Ausrüstung spezialisiert.</p>
          <p className='text-gray-500'>Wir kennen den Preis von Qualität. Deshalb gibt es bei World-Bike ausschließlich hochwertige Premium-Produkte zu angemessenen Preisen. Und auf Bestellung stellen wir für Sie ein individuelles Fahrrad mit einzigartigem Design und einzigartigen technischen Eigenschaften zusammen!</p>
        </div>
        <img className='mb-6' src={bikerBridge} alt='bikerBridge' />
      </section>

      <section className='my-12'>
        <h2 className='text-5xl lg:text-6xl font-medium mb-4 md:mb-20'>Dein-Fahrrad IST VOR ALLEM EIN TEAM!</h2>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 w-full md:order-last'>
            <img src={teamPhoto} alt='teamPhoto' />
          </div>
          <div className='md:w-1/2'>
            <p className='p-5 font-medium'>Alle unsere Experten sind professionelle Radsportexperten, Meister und Teilnehmer europäischer deutscher Wettbewerbe sowie Mitglieder der Nationalmannschaft. Machen Sie sich keine Sorgen, Sie sollten eine professionelle Online-Beratung in Anspruch nehmen.</p>
            <div className='p-5 '>
              <h3 className='text-xl font-medium mb-6'>Dein-Fahrrad-Berater helfen Ihnen bei allen Fragen, die Sie haben könnten: </h3>
            </div>
            <ul className='p-5'>
              <li className='mb-4'>
                <span className='text-orange-500'>✓</span> Auswahl eines Fahrrads entsprechend Ihrer Größe, Ihrem Gewicht, Ihrem Fahrstil und dem Zweck des Fahrradkaufs;
              </li>
              <li className='mb-4'>
                <span className='text-orange-500'>✓</span> Unterstützung bei der Auswahl von Ersatzteilen, Zubehör und Ausrüstung;
              </li>
              <li className='mb-4'>
                <span className='text-orange-500'>✓</span> Beratung zu allen sportbezogenen Themen.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className='uppercase text-5xl	font-medium pl-5 mb-8 md:mb-20'>Fotogalerie</h2>
        <CarouselAboutGalery />
      </section>
      <Map />
    </div>
  );
};

export default Aboutus;
