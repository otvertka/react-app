import Bikes_card from "../../Cards/Bikes_card";

const New_bikes = (props) => {
  return (
    <div className="flex flex-col w-full bg-gray-100">
      <div>
        <h2 className="py-11 uppercase text-6xl">Новинки</h2>
        <Bikes_card />
      </div>

      <a className="pt-12 w-1/3 uppercase justify-items-center" href="#">
        Показать все
      </a>
    </div>
  );
};

export default New_bikes;
