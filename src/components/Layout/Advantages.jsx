// import diamondImage from "../../Assets/images/video-sect-img/diamond.png";

import AllDaySVG from "../UI/svg-components/AllDaySVG";
import DiamondSVG from "../UI/svg-components/DiamondSVG";
import GuaranteeSVG from "../UI/svg-components/GuaranteeSVG";
import SettingsSVG from "../UI/svg-components/SettingsSVG";

const Advantages = (props) => {
  return (
    <section className="py-8 px-5 md:px-20 md:py-16 bg-gray-700 md:flex md:justify-center md:space-x-6 ">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="pt-8 flex flex-col text-white">
          <div>
            <div className="flex gap-4 mb-4">
              <DiamondSVG />
              <h4 className="text-lg md:text-xl whitespace-nowrap">Europäische Marken</h4>
            </div>
            <p className="font-light">Wie vertreten dutzende europäischer Marken.</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col text-white">
          <div>
            <div className="flex gap-4 mb-4">
              <GuaranteeSVG />
              <h4 className="text-lg md:text-xl whitespace-nowrap">Lebenslange Garantie</h4>
            </div>
            <p className="font-light">Für einige Marken bieten wir eine lebenslange Garantie.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="pt-8 flex flex-col  text-white">
          <div>
            <div className="flex gap-4 mb-4">
              <SettingsSVG />
              <h4 className="text-lg md:text-xl whitespace-nowrap">Einrichtung vor dem Verkauf</h4>
            </div>
            <p className="font-light">Unsere Spezialisten optimieren Ihr Fahrrad für optimale Leistung.</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col  text-white">
          <div>
            <div className="flex gap-4 mb-4">
              <AllDaySVG />
              <h4 className="text-lg md:text-xl whitespace-nowrap">Lieferung innerhalb von 24 Stunden.</h4>
            </div>
            <p className="font-light">Wir liefern Waren mit allen gängigen Transportunternehmen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
