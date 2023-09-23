import Bikes_img from "../images/Catalog-img/bikes.png";
import Tradein_img from "../images/Catalog-img/tradein.png";
import Ersatzteile_img from "../images/Catalog-img/ersatzeile.png";
import Zubehor_img from "../images/Catalog-img/zubehor.png";
import Outfit_img from "../images/Catalog-img/outfit.png";
import Fahrradstander_img from "../images/Catalog-img/fahrradstander.png";

import classes from "./Catalog.module.css";

const Catalog = (props) => {
  return (
    <section>
      <h2 className="py-11 uppercase text-6xl">Каталог</h2>

      <div className="flex flex-col">
        <a className="inline-block w-full relative " href="#">
          <img
            className="w-full rounded bg-orange-500 object-cover"
            src={Bikes_img}
            alt="bikes"
          />
          <div className="absolute bottom-12 left-8 text-4xl text-white uppercase">
            <h2 className="">Велосипеды</h2>
          </div>
        </a>

        <div className={`flex ${classes.catalogSize}`}>
          <a className="w-1/3 rounded relative inline-block" href="#">
            <img
              className="w-full h-full bg-black object-cover"
              src={Tradein_img}
              alt="trade-in"
            />
            <div className="absolute bottom-12 left-8 text-4xl text-white uppercase">
              <h2 className="">Trade-in</h2>
            </div>
          </a>

          <div className="flex w-full">
            <div className="flex w-full flex-col">
              <a className="w-full relative inline-block" href="#">
                <img
                  className=" w-full bg-black object-cover"
                  src={Ersatzteile_img}
                  alt="trade-in"
                />
                <div className="absolute bottom-12 left-8 text-4xl text-white uppercase">
                  <h2 className="">Запчасти</h2>
                </div>
              </a>

              <a className="w-full relative inline-block" href="#">
                <img
                  className="w-full rounded bg-black object-cover"
                  src={Zubehor_img}
                  alt="accesorires"
                />
                <div className="absolute bottom-0 left-0 text-4xl z-20 text-white uppercase">
                  <h2 className="">Аксессуары</h2>
                </div>
              </a>
            </div>

            <div className="flex w-full flex-col">
              <a className="w-full relative inline-block" href="#">
                <img
                  className="w-full rounded bg-black object-cover"
                  src={Outfit_img}
                  alt="outfit-img"
                />
                <div className="absolute bottom-0 left-0 text-4xl z-20 text-white uppercase">
                  <h2 className="">Экипировка</h2>
                </div>
              </a>

              <a className="w-full relative inline-block" href="#">
                <img
                  className="w-full rounded bg-black object-cover"
                  src={Fahrradstander_img}
                  alt="fahrradstander-img"
                />
                <div className="absolute bottom-0 left-0 text-4xl z-20 text-white uppercase">
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
