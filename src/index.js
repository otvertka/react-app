import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BikesStore from "./store/BikesStore";
import AccessoriesStore from "./store/AccsessoriesStore";
import PartsStore from "./store/PartsStore";
import EquipmentsStore from "./store/EquipmentsStore";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import HeimtrainerStore from "./store/HeimtrainerStore";

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
