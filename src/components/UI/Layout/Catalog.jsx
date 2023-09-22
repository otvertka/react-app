import Bikes_img from "../images/Catalog-img/bikes.png";

const Catalog = (props) => {
  return (
    <div>
      <h2 className="py-11 uppercase text-6xl">Новинки</h2>
      <div className="relative">
        <a className="w-full  " href="#">
          <img
            className="w-full rounded bg-orange-500 inline-block object-cover"
            src={Bikes_img}
            alt="bikes"
          />
          <div className="absolute bottom-12 left-8 text-4xl text-white uppercase">
            <h2 className="">Велосипеды</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Catalog;
