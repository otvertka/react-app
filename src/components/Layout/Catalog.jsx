import bikesImage from "../../Assets/images/catalog-img/bikes.png";
import tradeinImage from "../../Assets/images/catalog-img/tradein.png";
import ersatzteileImage from "../../Assets/images/catalog-img/ersatzeile.png";
import zubehorImage from "../../Assets/images/catalog-img/zubehor.png";
import outfitImage from "../../Assets/images/catalog-img/outfit.png";
import fahrradstanderImage from "../../Assets/images/catalog-img/fahrradstander.png";

import classes from "./Catalog.module.css";

const Catalog = (props) => {
  return (
    <section className="min-h-[458px] mx-5 lg:mx-20">
      <h2 className="py-11 uppercase text-[40px]">Каталог</h2>

      <div className="flex space-y-2 flex-col">
        <a className="w-full bg-orange-500 rounded relative flex flex-col justify-end items-end" href="#">
          <img className="w-full object-cover" src={bikesImage} alt="bikes" />
          <div className="absolute inset-0 flex items-center justify-start text-4xl text-white uppercase">
            <h2 className="">Велосипеды</h2>
          </div>
        </a>

        <div className={`flex space-x-2 ${classes.catalogSize}`}>
          <a className="w-1/3 rounded bg-black relative flex flex-col justify-end items-end" href="#">
            <img className="object-cover rounded" src={tradeinImage} alt="trade-in" />
            <div className="absolute inset-0 flex items-center justify-center text-4xl text-white uppercase">
              <h2 className="">Trade-in</h2>
            </div>
          </a>

          <div className="flex w-2/3 space-x-2">
            <div className="flex w-full space-y-2 flex-col">
              <a className="w-full rounded bg-gray-800 relative flex flex-col justify-end items-end" href="#">
                <img className="object-cover" src={ersatzteileImage} alt="ersatzteile" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-white uppercase">
                  <h2 className="">Запчасти</h2>
                </div>
              </a>

              <a className="w-full rounded grow-[2] bg-gray-500  relative flex flex-col justify-start items-start" href="#">
                <img className="rounded object-cover" src={zubehorImage} alt="accesorires" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl z-20 text-white uppercase">
                  <h2 className="">Аксессуары</h2>
                </div>
              </a>
            </div>

            <div className="flex w-full space-y-2 flex-col">
              <a className="w-full rounded grow-[2] bg-gray-800 relative flex flex-col justify-end items-end" href="#">
                <img className="rounded object-cover" src={outfitImage} alt="outfit-img" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl z-20 text-white uppercase">
                  <h2 className="">Экипировка</h2>
                </div>
              </a>

              <a className="w-full rounded bg-gray-700 relative flex flex-col justify-end items-end" href="#">
                <img className=" rounded object-cover" src={fahrradstanderImage} alt="fahrradstander-img" />
                <div className="absolute inset-0 flex items-center justify-center text-4xl z-20 text-white uppercase">
                  <h2 className="">Велостанки</h2>
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
