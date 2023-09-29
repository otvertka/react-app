import React from "react";

import benefits_image from "../../Assets/images/benefits-img/benefits-img.png";

const Benefits = () => {
  return (
    <section className="my-40">
      <h2 className="py-11 uppercase text-[40px]">Преимущества</h2>
      <div className="lg:flex">
        <div className="mr-20">
          <img className="rounded-r-xl h-full w-full object-cover" src={benefits_image} alt="benefits-biker" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 gap-x-20 gap-y-5">
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500 " href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
              БЕСПЛАТНАЯ <br />
              ДОСТАВКА
            </h3>
            <p className="text-white mb-6 font-thin">Мы пользуемся всеми популярными видами доставки</p>
            <button className="text-white font-medium">Подробнее</button>
          </a>
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500" href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
              Обмен <br />и возврат
            </h3>
            <p className="text-white mb-6 font-thin">Все товары обеспечены фирменной гарантией фирм-производителей</p>
            <button className="text-white font-medium">Подробнее</button>
          </a>
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500" href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
              Доп. <br />
              обслуживание
            </h3>
            <p className="text-white mb-6 font-thin">Мы выполняем ремонт велосипеда любой сложности</p>
            <button className="text-white font-medium">Подробнее</button>
          </a>
          <a className="inline-block w-72 h-64 p-8 rounded-xl bg-orange-500" href="#">
            <h3 className="uppercase text-white mb-4 font-bold">
              Онлайн <br />
              оплата
            </h3>
            <p className="text-white mb-6 font-thin">Для удобства вы можете оплатить товар банковской картой через сайт</p>
            <button className="text-white font-medium">Подробнее</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
