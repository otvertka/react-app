import bikesImage from "../../Assets/images/catalog-img/bikes.png";
import tradeinImage from "../../Assets/images/catalog-img/tradein.png";
import ersatzteileImage from "../../Assets/images/catalog-img/ersatzeile.png";
import zubehorImage from "../../Assets/images/catalog-img/zubehor.png";
import outfitImage from "../../Assets/images/catalog-img/outfit.png";
import fahrradstanderImage from "../../Assets/images/catalog-img/fahrradstander.png";

import { Link } from "react-router-dom";

const Catalog = () => {
  const titleClass =
    "text-xl font-medium xs:text-lg md:text-2xl lg:text-3xl max-w-[90%] transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-2";

  const overlayClass =
    "absolute inset-0 flex items-center justify-center text-white uppercase bg-black bg-opacity-0 transition duration-300 group-hover:bg-opacity-30"; // overlay прозрачный изначально

  const imgClass =
    "object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1";

  return (
    <section className="min-h-[458px] mx-4 lg:mx-20">
      <h2 className="py-11 uppercase text-[40px]">Katalog</h2>

      <div className="flex space-y-2 flex-col">
        <Link
          to="/bikes"
          className="w-full rounded relative flex flex-col justify-end items-end group overflow-hidden bg-orange-500"
        >
          <img className={imgClass} src={bikesImage} alt="bikes" />
          <div className={overlayClass + " justify-start"}>
            <h2 className={titleClass}>Fahrräder</h2>
          </div>
        </Link>

        <div className="flex flex-col lg:flex-row space-x-2">
  <Link
    to="/tradein"
    className="lg:w-1/3 rounded relative flex flex-col justify-end items-end mb-2 md:mb-4 lg:mb-0 group overflow-hidden bg-black"
  >
    <img
      className="w-full h-full object-contain object-left-bottom transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-1 group-hover:translate-y-1"
      src={tradeinImage}
      alt="trade-in"
    />
    <div className="absolute inset-0 flex items-center justify-center text-white uppercase bg-black bg-opacity-0 transition duration-300 group-hover:bg-opacity-30">
      <h2 className="text-xl font-medium xs:text-lg md:text-2xl lg:text-3xl max-w-[90%] transform transition-transform duration-300 group-hover:scale-105 group-hover:translate-x-2">
        Trade-in
      </h2>
    </div>
  </Link>

          <div className="flex lg:w-2/3 space-x-2 ml-0">
            <div className="flex w-full space-y-2 flex-col">
              <Link
                to="/parts"
                className="w-full rounded relative flex flex-col justify-end items-end max-h-[130px] group overflow-hidden bg-gray-800"
              >
                <img
                  className={imgClass + " max-h-[130px] lg:h-max"}
                  src={ersatzteileImage}
                  alt="ersatzteile"
                />
                <div className={overlayClass}>
                  <h2 className={titleClass}>Fahrradteile</h2>
                </div>
              </Link>

              <Link
                to="/accessorries"
                className="w-full rounded lg:grow-[2] relative flex flex-col justify-start items-start min-h-[123px] h-full group overflow-hidden  bg-orange-500"
              >
                <img className={imgClass} src={zubehorImage} alt="accessories" />
                <div className={overlayClass}>
                  <h2 className={titleClass}>Fahrradzubehör</h2>
                </div>
              </Link>
            </div>

            <div className="flex w-full space-y-2 flex-col">
              <Link
                to="/equipments"
                className="w-full rounded lg:grow-[2] relative flex flex-col justify-end items-end min-h-[130px] group overflow-hidden bg-gray-800"
              >
                <img className={imgClass} src={outfitImage} alt="outfit-img" />
                <div className={overlayClass}>
                  <h2 className={titleClass}>Bekleidungs</h2>
                </div>
              </Link>

              <Link
                to="/heimtrainer"
                className="w-full rounded relative flex flex-col justify-end items-end h-full group overflow-hidden bg-gray-700"
              >
                <img
                  className={imgClass + " max-h-[130px] sm:max-h-full"}
                  src={fahrradstanderImage}
                  alt="fahrradstander-img"
                />
                <div className={overlayClass}>
                  <h2 className={titleClass}>Heimtrainer</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
