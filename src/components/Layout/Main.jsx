import mainImage from "../../Assets/images/main_images/1.png";
import partnersImage from "../../Assets/images/main_images/partner.png";
import CarouselMain from "./CarouselMain";
import { NavLink } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";

const Main = (props) => {
  const { scrollY } = useScroll();

  const opacityBiker = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);
  const scaleText = useTransform(scrollY, [0, 400], [1, 1.3]);
  return (
    <>
      <main className="min-h-[650px]">
        <motion.div className="relative bg-black">
          <motion.img style={{ opacity: opacityBiker, scale: scaleText }} className=" w-full h-full min-h-[850px] object-cover" src={mainImage} alt="main-img" />

          <div className=" absolute top-60 lg:absolute lg:top-20 left-5 lg:left-2 md:w-1/2 flex flex-col text-white">
            <h1 className="text-6xl lg:text-h1 uppercase font-normal tracking-tighter mb-6 lg:mb-12">
              e -
              <br />
              bikes
            </h1>
            <p className="text-lg font-light ml-2 mb-8 md:mb-10">Cento10 Hybrid — ist ein Rennrad mit elektrischer Tretunterstützung, das einen neuen, sehr hohen Standard in seiner Kategorie setzt.</p>
            <NavLink to='/bikes' className="w-44 h-12 ml-2 p-3 text-center rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 hover:scale-110 transition-all duration-300 ">Zum Bike</NavLink>
          </div>
        </motion.div>

        <CarouselMain />

        <section className=" py-6">
          <img src={partnersImage} alt="partners" />
        </section>
      </main>
    </>
  );
};

export default Main;
