import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import galeryPhoto1 from "../../../Assets/images/pageAbout/about_galery/a1.png";
import galeryPhoto2 from "../../../Assets/images/pageAbout/about_galery/a2.png";
import galeryPhoto3 from "../../../Assets/images/pageAbout/about_galery/a3.png";
import galeryPhoto4 from "../../../Assets/images/pageAbout/about_galery/a4.png";
import galeryPhoto5 from "../../../Assets/images/pageAbout/about_galery/a5.png";

const CarouselAboutGalery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
      <Carousel className="mb-12 px-5" showDots={true} responsive={responsive}>
        <div className="h-[228px] md:w-[400px] md:h-[334px] rounded-lg ">
          <img src={galeryPhoto3} alt="photo1" />
        </div>
        <div className="h-[228px] md:w-[400px] md:h-[334px] rounded-lg ">
          <img src={galeryPhoto2} alt="photo2" />
        </div>
        <div className="h-[228px] md:w-[400px] md:h-[334px] rounded-lg ">
          <img src={galeryPhoto3} alt="photo3" />
        </div>
        <div className="h-[228px] md:w-[400px] md:h-[334px] rounded-lg ">
          <img src={galeryPhoto4} alt="photo4" />
        </div>
        <div className="h-[228px] md:w-[400px] md:h-[334px] rounded-lg ">
          <img src={galeryPhoto2} alt="photo5" />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselAboutGalery;
