import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import BikesStore from "./store/BikesStore";
import AccessoriesStore from "./store/AccsessoriesStore";
import PartsStore from "./store/PartsStore";
import EquipmentsStore from "./store/EquipmentsStore";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import HeimtrainerStore from "./store/HeimtrainerStore";
// import reportWebVitals from './reportWebVitals';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProgressContextProvider>
    <CartContextProvider>
      <Context.Provider
        value={{
          bikes: new BikesStore(),
          accessories: new AccessoriesStore(),
          parts: new PartsStore(),
          equipments: new EquipmentsStore(),
          heimtrainer: new HeimtrainerStore(),
        }}>
        <App />
      </Context.Provider>
    </CartContextProvider>
  </UserProgressContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
