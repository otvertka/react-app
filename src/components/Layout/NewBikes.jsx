import BikesCard from "../Cards/BikesCard";

import bikesData from "../../data/bikes.json";

const NewBikes = (props) => {
  return (
    <div className="flex flex-col w-full bg-gray-100">
      <div>
        <h2 className="py-11 uppercase text-6xl">Новинки</h2>
        {bikesData.map((bike) => (
          <BikesCard key={bike.id} bikesInfo={bike} />
        ))}
      </div>

      <a className="pt-12  w-1/3 uppercase justify-items-center" href="#">
        Показать все
      </a>
    </div>
  );
};

export default NewBikes;
