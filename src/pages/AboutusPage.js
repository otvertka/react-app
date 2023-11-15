import React from "react";

import CarouselAboutUs from "../components/Layout/AboutUs/CarouselAboutUs";

import headerImg from "../Assets/images/pageAbout/aboutHeader.png";
// import bikerImg from "../Assets/images/pageAbout/biker.png";
import socImg from "../Assets/images/social_demo.png";

const Aboutus = () => {
  return (
    <div>
      <header className="w-full h-[198px] md:h-[278px] relative">
        <img src={headerImg} className="absolute z-0 left-0 top-0 w-full h-full object-cover" alt="subscribe" />
        <div className="py-10 z-20 absolute">
          <h1 className="text-white uppercase text-4xl sm:ml-8 z-10 pb-8">О нас</h1>
        </div>
      </header>
      <main>
        <div>
          <h1 className="uppercase text-4xl font-semibold sm:ml-8 mb-6">
            <span className="text-orange-500 ">Велосипед</span> – это не просто средство передвижения!
          </h1>
          <CarouselAboutUs />
        </div>
      </main>
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full md:order-last">{/* <img src={bikerImg} /> */}</div>
        <div className="md:w-1/2 w-full bg-[#101010] pt-10 px-5 sm:my-12">
          <h2 className="text-white uppercase text-5xl font-medium mb-6">НЕСКОЛЬКО СЛОВ О НАС И НАШЕМ ДЕЛЕ</h2>
          <p className="text-white mb-4">Велосипед — это не просто средство передвижения. Мы, команда World-Bike, уверены в этом. Для нас велосипед — это целая жизнь, полная свободы, драйва, приключений и новых открытий. </p>
          <p className="text-white mb-10">Мы искренне любим своё дело и стараемся, чтобы и для вас велосипед стал неотъемлемой частью жизни.</p>

          <div className="pb-10">
            <img src={socImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
