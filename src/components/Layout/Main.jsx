import mainImage from "../../Assets/images/main_images/1.png";
import partnersImage from "../../Assets/images/main_images/partner.png";
import CarouselMain from "./CarouselMain";

const Main = (props) => {
  return (
    <>
      <main className="min-h-[650px]">
        <div className="relative ">
          <img className=" w-full h-full min-h-[850px] object-cover" src={mainImage} alt="main-img" />

          <div className=" absolute top-60 lg:absolute lg:top-20 left-5 lg:left-2 md:w-1/2 flex flex-col text-white">
            <h1 className="text-6xl lg:text-h1 uppercase font-normal tracking-tighter mb-6 lg:mb-12">
              electro
              <br />
              bikes
            </h1>
            <p className="text-lg font-light ml-2 mb-8 md:mb-10">Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий стандарт для данной категории</p>
            <button className="w-44 h-12 ml-2 rounded-lg bg-orange-600 hover:scale-110 transition-all duration-300 ">Подробнее</button>
          </div>
        </div>

        <CarouselMain />

        <section className=" py-6">
          <img src={partnersImage} alt="partners" />
        </section>
      </main>
    </>
  );
};

export default Main;
