import { Fragment } from "react";
import MainSVGLogo from "../UI/svg-components/MainSVGLogo";
// import BurgerSVG from "../UI/svg-components/BurgerSVG";

// import mainLogo from "../../Assets/svg/logo.svg";

const Header = (props) => {
  return (
    <navbar>
      <header className="bg-black flex items-center justify-between pt-5">
        <a href="#">
          <MainSVGLogo />
        </a>
        <nav className="text-white flex justify-between ">
          {/* основные */}
          <div className="hidden md:inline-block w-5/8 mx-12 ">
            <ul className="flex gap-8 text-xs whitespace-nowrap ">
              <li>
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold hover:text-base" href="#">
                  Trade In
                </a>
              </li>
              <li>
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold hover:text-base" href="#">
                  Велосипеды
                </a>
              </li>
              <li>
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold hover:text-base" href="#">
                  Запчасти
                </a>
              </li>
              <li>
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold hover:text-base" href="#">
                  Экипировка
                </a>
              </li>
              <li>
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold hover:text-base" href="#">
                  Аксессуары
                </a>
              </li>
              <li>
                <a className="hover:text-orange-700 transition-all duration-300 hover:font-semibold hover:text-base" href="#">
                  Велостанки
                </a>
              </li>
            </ul>
          </div>
          {/* поиск, логин, избранное, корзина */}
          <div className="w-4/6 md:w-2/8 mr-2">
            <ul className="flex gap-6">
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all duration-300 hover:scale-125 hover:text-orange-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all duration-300 hover:scale-125 hover:text-orange-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all duration-300 hover:scale-125 hover:text-orange-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all duration-300 hover:scale-125 hover:text-orange-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg class="w-5 h-5 transition-all duration-300 hover:scale-125 hover:text-orange-700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.25" x2="32" y2="1.25" stroke="white" stroke-width="1.5" />
                    <line x1="8" y1="10.25" x2="32" y2="10.25" stroke="white" stroke-width="1.5" />
                    <line x1="8" y1="19.25" x2="32" y2="19.25" stroke="white" stroke-width="1.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </navbar>
  );
};

export default Header;
