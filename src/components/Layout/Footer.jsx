import React from "react";
import PhoneSVG from "../UI/svg-components/PhoneSVG";
import NavigationSVG from "../UI/svg-components/NavigationSVG";
import EmailSVG from "../UI/svg-components/EmailSVG";
import MainSVGLogo from "../UI/svg-components/MainSVGLogo";

import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="bg-black pt-48">
      <div className="flex flex-col lg:flex-row text-white mx-10 lg:mx-5">
        <div className="lg:w-2/5">
          <a href="#">
            <MainSVGLogo />
          </a>
          <p className="text-gray-500 lg:w-2/3 mt-10">Das Unternehmen Dein Fahhrad ist auf den Verkauf von Fahrradprodukten spezialisiert.</p>
        </div>

        <div className="hidden lg:block lg:w-1/5">
          <h2 className="mb-9 text-2xl font-semibold">Katalog</h2>
          <ul className="text-lg space-y-4">
            <li>
              <NavLink to="/tradein" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
                Trade-in
              </NavLink>
            </li>
            <li>
              <NavLink to="/bikes" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Fahrräder
              </NavLink>
            </li>
            <li>
              <NavLink to="/equipments" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Bekleidung
              </NavLink>
            </li>
            <li>
              <NavLink to="/parts" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Fahrradteile
              </NavLink>
            </li>
            <li>
              <NavLink to="/bicyclestands" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Fahrradständer
              </NavLink>
            </li>
            <li>
              <NavLink to="/accessorries" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Zubehör
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block lg:w-1/5">
          <h2 className="mb-9 text-2xl font-semibold">Für den Kunden</h2>
          <ul className="text-lg space-y-4">
            <li>
              <NavLink to="/about" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Über uns
              </NavLink>
            </li>
            <li>
              <NavLink to="/delivery" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Lieferung und Zahlung
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Kontakte
              </NavLink>
            </li>
            <li>
              <NavLink to="/workshop" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Fahrradwerkstatt
              </NavLink>
            </li>
            <li>
              <NavLink to="/keeping" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Lagerung
              </NavLink>
            </li>
            <li>
              <NavLink to="/quarantees" className="hover:text-orange-700 transition-all duration-300 hover:font-semibold" style={({ isActive }) => ({ color: isActive ? "#F57520" : "" })}>
              Garantien
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/5">
          <h2 className="invisible lg:visible mb-9 text-2xl font-semibold">Kontakte</h2>
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
                  order@dein-fahrrad.com
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
