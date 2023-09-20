import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className="bg-black">
        <a href="#">
          {" "}
          <img
            src="C:\Users\JK\react-project\src\svg\logo.svg"
            alt="logo"></img>
        </a>
        <nav>
          {/* основные */}
          <div className="text-white-100">
            <ul>
              <li>
                <a className="text-white-100" href="#">
                  Trade In
                </a>
              </li>
              <li>
                <a href="#">Велосипеды</a>
              </li>
              <li>
                <a href="#">Запчасти</a>
              </li>
              <li>
                <a href="#">Экипировка</a>
              </li>
              <li>
                <a href="#">Аксессуары</a>
              </li>
              <li>
                <a href="#">Велостанки</a>
              </li>
            </ul>
          </div>
          {/* поиск, логин, избранное, корзина */}
          <div>
            <ul>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
