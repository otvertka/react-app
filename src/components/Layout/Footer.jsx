import React from "react";
import PhoneSVG from "../UI/svg-components/PhoneSVG";
import NavigationSVG from "../UI/svg-components/NavigationSVG";
import EmailSVG from "../UI/svg-components/EmailSVG";
import MainSVGLogo from "../UI/svg-components/MainSVGLogo";

const Footer = (props) => {
  return (
    <footer className="bg-black py-24">
      <div className="flex flex-col lg:flex-row text-white mx-10 lg:mx-5">
        <div className="lg:w-2/5">
          <a href="#">
            <MainSVGLogo />
          </a>
          <p className="text-gray-500 lg:w-2/3 mt-10">Компания World-bikes специализируется на продаже товаров для велосипедного спорта.</p>
        </div>

        <div className="hidden lg:block lg:w-1/5">
          <h2 className="mb-9 text-2xl font-semibold">Каталог</h2>
          <ul className="text-lg space-y-4">
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Trade-in
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Велосипеды
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Экипировка
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Запчасти
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Велостанки
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Аксессуары
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block lg:w-1/5">
          <h2 className="mb-9 text-2xl font-semibold">Для клиента</h2>
          <ul className="text-lg space-y-4">
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                О нас
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Доставка и оплата
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Блог
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Контакты
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Веломастерская
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Хранение
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="#">
                Гарантии
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/5">
          <h2 className="invisible lg:visible mb-9 text-2xl font-semibold">Контакты</h2>
          <ul className="text-lg space-y-4 ">
            <li>
              <a className="flex items-center gap-4" href="#">
                <PhoneSVG />
                <div>
                  <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="tel:+11234567890">
                    +49 (211) 777-88{" "}
                  </a>
                  <br />
                  <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="tel:+11234567890">
                    +49 (211) 888-77
                  </a>
                </div>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4" href="#">
                <NavigationSVG />
                <span className="hover:text-orange-700 transition-all duration-300 hover:font-semibold">c. Dusseldorf, Bahnhofstrasse, 7/8</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-4" href="#">
                <EmailSVG />
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" href="mailto:order@world-bike.com">
                  order@world-bike.com
                </a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
