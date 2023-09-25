import Splash_r from "../images/BestWinterMod-img/splash_right-removebg-preview.png";
import Splash_l from "../images/BestWinterMod-img/splash_left-removebg-preview.png";

const BestWinterModels = (props) => {
  return (
    <section className="relative bg-black w-full flex">
      <h2 className="uppercase absolute pt-20 z-20 text-white text-5xl w-1/4">
        Лучшие модели для зимней езды
      </h2>
      <div className="flex justify-around w-full">
        <img
          className="z-0 opacity-50 object-cover"
          src={Splash_l}
          alt="splash-l"
        />
        <img
          className="z-0 opacity-50 object-cover hidden sm:block"
          src={Splash_r}
          alt="splash-r"
        />
      </div>
    </section>
  );
};

export default BestWinterModels;
