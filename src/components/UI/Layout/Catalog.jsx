import Bikes_img from "../images/Catalog-img/bikes.png";
import Tradein_img from "../images/Catalog-img/tradein.png";
import Ersatzteile_img from "../images/Catalog-img/ersatzeile.png";
import Zubehor_img from "../images/Catalog-img/zubehor.png";
import Outfit_img from "../images/Catalog-img/outfit.png";
import Fahrradstander_img from "../images/Catalog-img/fahrradstander.png";

import classes from "./Catalog.module.css";

const Catalog = (props) => {
  return (
    <section className="mx-5 lg:mx-20">
      <h2 className="py-11 uppercase text-6xl">Каталог</h2>

      <div className="flex space-y-2 flex-col">
        <a
          className="w-full bg-orange-500 rounded relative flex flex-col justify-end items-end"
          href="#">
          <img className="w-full object-cover" src={Bikes_img} alt="bikes" />
          <div className="absolute inset-0 flex items-center justify-start text-4xl text-white uppercase">
            <h2 className="">Велосипеды</h2>
          </div>
        </a>

        <div className={`flex space-x-2 ${classes.catalogSize}`}>
          <a
            className="w-1/3 rounded bg-black relative flex flex-col justify-end items-end"
            href="#">
            <img
              className="object-cover rounded"
              src={Tradein_img}
              alt="trade-in"
            />
            <div className="absolute inset-0 flex items-center justify-center text-4xl text-white uppercase">
              <h2 className="">Trade-in</h2>
            </div>
          </a>

          <div className="flex w-2/3 space-x-2">
            <div className="flex w-full space-y-2 flex-col">
              <a
                className="w-full rounded bg-gray-800 relative flex flex-col justify-end items-end"
                href="#">
                <img
                  className="object-cover"
                  src={Ersatzteile_img}
                  alt="ersatzteile"
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-white uppercase">
                  <h2 className="">Запчасти</h2>
                </div>
              </a>

              <a
                className="w-full rounded grow-[2] bg-gray-500  relative flex flex-col justify-start items-start"
                href="#">
                <img
                  className="rounded object-cover"
                  src={Zubehor_img}
                  alt="accesorires"
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl z-20 text-white uppercase">
                  <h2 className="">Аксессуары</h2>
                </div>
              </a>
            </div>

            <div className="flex w-full space-y-2 flex-col">
              <a
                className="w-full rounded grow-[2] bg-gray-800 relative flex flex-col justify-end items-end"
                href="#">
                <img
                  className="rounded object-cover"
                  src={Outfit_img}
                  alt="outfit-img"
                />
                <div className="absolute inset-0 flex items-center justify-center text-4xl z-20 text-white uppercase">
                  <h2 className="">Экипировка</h2>
                </div>
              </a>

              <a
                className="w-full rounded bg-gray-700 relative flex flex-col justify-end items-end"
                href="#">
                <img
                  className=" rounded object-cover"
                  src={Fahrradstander_img}
                  alt="fahrradstander-img"
                />
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
