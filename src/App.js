import "./App.css";
import Catalog from "./components/UI/Layout/Catalog";
import Header from "./components/UI/Layout/Header";
import Main from "./components/UI/Layout/Main";

import New_bikes from "./components/UI/Layout/New_bikes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Main />
      <New_bikes />
      <Catalog />
    </div>
  );
}

export default App;
