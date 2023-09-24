import Diamond_img from "../images/Video_sect-img/diamond.png";

const Advantages = (props) => {
  return (
    <section className="md:px-20 md:py-16 bg-gray-700 md:flex md:justify-center space-x-6">
      <div className=" border-2 border-white text-white">
        <div className="flex justify-around ">
          <img src={Diamond_img} alt="diamond" />
          <h4 className="">Европейские бренды</h4>
        </div>
        <p>Представляем десятки европейских брендов</p>
      </div>
      <div className=" border-2 border-white text-white">
        <div className="flex justify-around ">
          <img src={Diamond_img} alt="diamond" />
          <h4 className="">Вечная гарантия</h4>
        </div>
        <p>На некоторые бренды предоставляем пожизненную гарантию</p>
      </div>
      <div className="border-2 border-white  text-white">
        <div className="flex justify-around ">
          <img src={Diamond_img} alt="diamond" />
          <h4 className="">Предпродажная настройка</h4>
        </div>
        <p>Специалисты настроят ваш велосипед наилучшим образом</p>
      </div>
      <div className="border-2 border-white  text-white">
        <div className="flex justify-around ">
          <img src={Diamond_img} alt="diamond" />
          <h4 className="">Доставка за 24 часа</h4>
        </div>
        <p>Доставляем товар всеми популярными транспортными компаниями</p>
      </div>
    </section>
  );
};

export default Advantages;
