import mainImage from "./UI/images/main_images/1.png";
import partnersImage from "./UI/images/main_images/partner.png";

const Main = (props) => {
  return (
    <>
      <main>
        <div className="relative">
          <img className=" w-full h-full" src={mainImage} alt="main-img" />

          <div className="absolute top-12 left-0 w-1/2 flex flex-col text-white">
            <h1 className="text-4xl">
              Электро
              <br />
              велосипеды
            </h1>
            <p>
              Cento10 Hybrid — это гоночный велосипед с помогающим педалированию
              электроприводом, который устанавливает новый, очень высокий
              стандарт для данной категории
            </p>
            <button className="mx-5 w-40 rounded bg-orange-600">
              Подробнее
            </button>
          </div>
        </div>

        <section>
          <a
            className="h-52 w-1/3 bg-gray-800 inline-block items-center "
            href="#">
            <h2 className="text-white">
              Экстремальное вождение на горном велосипеде
            </h2>
            <button className="text-orange-500">Подробнее</button>
          </a>
          <a
            className="h-52 w-1/3 bg-gray-800 inline-block items-center "
            href="#">
            <h2 className="text-white">Велосипеды для профессионалов</h2>
            <button className="text-orange-500">Подробнее</button>
          </a>
          <a
            className="h-52 w-1/3 bg-gray-800 inline-block items-center "
            href="#">
            <h2 className="text-white">
              Долгая поездка на шоссейном велосипеде
            </h2>
            <button className="text-orange-500">Подробнее</button>
          </a>
        </section>

        <section className="h-2 py-6">
          <img src={partnersImage} alt="partners" />
        </section>
      </main>
    </>
  );
};

export default Main;
