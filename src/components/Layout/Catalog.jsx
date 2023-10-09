import bikesImage from "../../Assets/images/catalog-img/bikes.png";
import tradeinImage from "../../Assets/images/catalog-img/tradein.png";
import ersatzteileImage from "../../Assets/images/catalog-img/ersatzeile.png";
import zubehorImage from "../../Assets/images/catalog-img/zubehor.png";
import outfitImage from "../../Assets/images/catalog-img/outfit.png";
import fahrradstanderImage from "../../Assets/images/catalog-img/fahrradstander.png";

const Catalog = (props) => {
  return (
    <section className="min-h-[458px] mx-4 lg:mx-20">
      <h2 className="py-11 uppercase text-[40px] ">Каталог</h2>

      <div className="flex space-y-2 flex-col">
        <a className="w-full bg-orange-500 rounded relative flex flex-col justify-end items-end" href="#">
          <img className="w-full object-cover" src={bikesImage} alt="bikes" />
          <div className="absolute inset-0 flex items-center justify-start text-white uppercase">
            <h2 className="text-xl font-medium md:text-4xl max-w-[90%]">Велосипеды</h2>
          </div>
        </a>

        <div className="flex flex-col lg:flex-row space-x-2 ">
          <a className="lg:w-1/3 rounded bg-black relative flex flex-col justify-end items-end" href="#">
            <img className="object-cover rounded" src={tradeinImage} alt="trade-in" />
            <div className="absolute inset-0 flex items-center justify-center text-white uppercase">
              <h2 className="text-xl font-medium md:text-4xl max-w-[90%]">Trade-in</h2>
            </div>
          </a>

          <div className="flex lg:w-2/3 space-x-2">
            <div className="flex w-full space-y-2 flex-col">
              <a className="w-full rounded bg-gray-800 relative flex flex-col justify-end items-end max-h-[130px]" href="#">
                <img className="rounded object-cover max-h-[130px] lg:h-max" src={ersatzteileImage} alt="ersatzteile" />
                <div className="absolute inset-0 flex items-center justify-center  text-white uppercase">
                  <h2 className="text-l font-medium md:text-4xl max-w-[90%]">Запчасти</h2>
                </div>
              </a>

              <a className="w-full rounded lg:grow-[2] bg-gray-500  relative flex flex-col justify-start items-start min-h-[130px]" href="#">
                <img className="rounded object-cover" src={zubehorImage} alt="accesorires" />
                <div className="absolute lg:inset-0 flex items-center justify-center z-20 text-white uppercase">
                  <h2 className="text-l font-medium md:text-4xl max-w-[90%]">Аксессуары</h2>
                </div>
              </a>
            </div>

            <div className="flex w-full space-y-2 flex-col">
              <a className="w-full rounded lg:grow-[2] bg-gray-800 relative flex flex-col justify-end items-end min-h-[130px]" href="#">
                <img className="rounded object-cover" src={outfitImage} alt="outfit-img" />
                <div className="absolute inset-0 flex items-center justify-center z-20 text-white uppercase ">
                  <h2 className="text-l font-medium md:text-4xl max-w-[90%]">Экипировка</h2>
                </div>
              </a>

              <a className="w-full rounded bg-gray-700 relative flex flex-col justify-end items-end max-h-[130px] sm:max-h-full" href="#">
                <img className=" rounded object-cover max-h-[130px] sm:max-h-full" src={fahrradstanderImage} alt="fahrradstander-img" />
                <div className="absolute lg:inset-0 flex items-center justify-center z-20 text-white uppercase">
                  <h2 className="text-l font-medium md:text-4xl">Велостанки</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
