import React from "react";

import socialImg from "../../src/Assets/images/social_demo.png";
import bikeImg from "../../src/Assets/images/card_bike.png";
import delivImg from "../../src/Assets/images/devicePage/deliv.png";

const DevicePage = () => {
  return (
    <div className="mx-10">
      <section>
        <div className="flex flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl">Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</h2>
          <h4>Scott</h4>
          <div className="flex">
            <h4>Артикул : 7655-188</h4>
            <img src={socialImg} alt="soc" />
            <span>В наличии</span>
          </div>

          <div className=" md:order-first md:justify-center">
            <img src={bikeImg} alt="bike" />
          </div>

          <h2>4350 €</h2>
          <span>5220 €</span>
          <p>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных хардтейлов для кросс-кантри.</p>
        </div>

        <div>
          <h2>Размер:</h2>
          <ul className="flex gap-4">
            <li>
              <a className="inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white text-center rounded " href="#">
                S
              </a>
            </li>
            <li>
              <a className="inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white text-center rounded " href="#">
                M-L
              </a>
            </li>
            <li>
              <a className="inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white text-center rounded " href="#">
                M
              </a>
            </li>
            <li>
              <a className="inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white text-center rounded " href="#">
                L
              </a>
            </li>
            <li>
              <a className="inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white text-center rounded " href="#">
                XL
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Цвет:</h2>
          <ul className="flex gap-4">
            <li>
              <a className="inline-block w-8 h-8 bg-yellow-200 hover:border hover:border-gray-300 hover:border-4 rounded-full " href="#"></a>
            </li>
            <li>
              <a className="inline-block w-8 h-8 bg-green-600 hover:border hover:border-gray-300 hover:border-4 rounded-full " href="#"></a>
            </li>
            <li>
              <a className="inline-block w-8 h-8 bg-orange-500 hover:border hover:border-gray-300 hover:border-4 rounded-full " href="#"></a>
            </li>
            <li>
              <a className="inline-block w-8 h-8 bg-amber-700 hover:border hover:border-gray-300 hover:border-4 rounded-full" href="#"></a>
            </li>
            <li>
              <a className="inline-block w-8 h-8 bg-red-600 hover:border hover:border-gray-300 hover:border-4 rounded-full" href="#"></a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h1>Описание</h1>
        <p>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных хардтейлов для кросс-кантри. Scott Scale 700 RC — это рама из композитного волокна HMX, гоночная трансмиссия Sram XX1/X01 1×11, дисковые тормоза Shimano XTR M9000 и гоночные колеса Syncros XR RC. Байк Нино Шуртера для шорт-трек кросс-кантри.</p>
      </section>

      <section>
        <h1>Характеристика</h1>
        <ul>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Цвет</h3>
            <span className="text-gray-500">Желтый</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Год</h3>
            <span className="text-gray-500">2016</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Диаметр колеса</h3>
            <span className="text-gray-500">27.5</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Материал рамы</h3>
            <span className="text-gray-500">Карбон</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Размер</h3>
            <span className="text-gray-500">L</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Страна</h3>
            <span className="text-gray-500">Швейцария</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Производитель</h3>
            <span className="text-gray-500">Scott</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Покрышки</h3>
            <span className="text-gray-500">Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Рама</h3>
            <span className="text-gray-500">Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Подседельный Штырь</h3>
            <span className="text-gray-500">Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Седло</h3>
            <span className="text-gray-500">Ritchey WCS Streem V3 Titanium rails</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Вилка</h3>
            <span className="text-gray-500">Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Вынос</h3>
            <span className="text-gray-500">Ritchey WCS C–260 700 Series: +6° / 900 Series: -6° / 31.8mm / 1 1/8»</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Колеса</h3>
            <span className="text-gray-500">Syncros XR RC</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Руль</h3>
            <span className="text-gray-500">Ritchey Carbon WCS / 9° / 720mm / грипсы с замком</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Тип тормозов</h3>
            <span className="text-gray-500">Дисковый гидравлический</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Тормозная система</h3>
            <span className="text-gray-500">Shimano XTR M9000 Disc 180/F and 160/Rmm SM-RT81 IceTech CL диски</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Манетки</h3>
            <span className="text-gray-500">SRAM XO1 Trigger</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Система шатунов</h3>
            <span className="text-gray-500">SRAM XX1 GXP PF DM Carbon crankarm / QF 156 700 Series: 34T / 900 Series: 32T</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Задний переключатель</h3>
            <span className="text-gray-500">SRAM XX1</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Цепь</h3>
            <span className="text-gray-500">SRAM PCX1</span>
          </li>
          <li className="p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Количество скоростей</h3>
            <span className="text-gray-500">11</span>
          </li>
          <li className="p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] ">
            <h3 className="font-semibold">Гарантия</h3>
            <span className="text-gray-500">1 год</span>
          </li>
        </ul>
      </section>

      <section>
        <h1 className="my-10 text-3xl uppercase font-semibold">Доставка</h1>
        <img src={delivImg} alt="delivery" />

        <h3 className="mt-6 mb-10 font-semibold">Для удобства покупателей действует несколько способов доставки товаров</h3>
        <ul>
          <li>Lieferung in Düsseldorf</li>
          <li>Lieferung in das Land NRW</li>
          <li>Lieferung in Deutschland</li>
        </ul>

        <h3 className="bg-gray-100 rounded p-3 inline-block">Любой из способов доступен при оформление заказа через сайт или у операторов</h3>
        <p>Велосипеды и вело-станки доставляются в собранном и настроенном виде.</p>
        <p>
          На любые вопросы по правилам и стоимости доставки ответит оператор: <span> +49 055-75-86</span>
        </p>

        <h3 className="mt-6 mb-10 font-semibold">Для любого заказа возможен самовывоз из магазина</h3>
      </section>
    </div>
  );
};

export default DevicePage;
