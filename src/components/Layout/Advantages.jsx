// import diamondImage from "../../Assets/images/video-sect-img/diamond.png";

import AllDaySVG from "../UI/svg-components/AllDaySVG";
import DiamondSVG from "../UI/svg-components/DiamondSVG";
import GuaranteeSVG from "../UI/svg-components/GuaranteeSVG";
import SettingsSVG from "../UI/svg-components/SettingsSVG";

const Advantages = (props) => {
  return (
    <section className="md:px-20 md:py-16 bg-gray-700 md:flex md:justify-center md:space-x-6 ">
      <div className="flex flex-col border-2 border-white text-white">
        <div>
          <div className="flex gap-4 mb-4">
            <DiamondSVG />
            <h4 className="text-lg md:text-xl whitespace-nowrap">Европейские бренды</h4>
          </div>
          <p className="font-light">Представляем десятки европейских брендов</p>
        </div>
      </div>

      <div className="flex flex-col border-2 border-white text-white">
        <div>
          <div className="flex gap-4 mb-4">
            <GuaranteeSVG />
            <h4 className="text-lg md:text-xl whitespace-nowrap">Вечная гарантия</h4>
          </div>
          <p className="font-light">На некоторые бренды предоставляем пожизненную гарантию</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-white text-white">
        <div>
          <div className="flex gap-4 mb-4">
            <SettingsSVG />
            <h4 className="text-lg md:text-xl whitespace-nowrap">Предпродажная настройка</h4>
          </div>
          <p className="font-light">Специалисты настроят ваш велосипед наилучшим образом</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-white text-white">
        <div>
          <div className="flex gap-4 mb-4">
            <AllDaySVG />
            <h4 className="text-lg md:text-xl whitespace-nowrap">Доставка за 24 часа</h4>
          </div>
          <p className="font-light">Доставляем товар всеми популярными транспортными компаниями</p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
