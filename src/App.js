import "./App.css";
import Advantages from "./components/UI/Layout/Advantages";
import BestWinterModels from "./components/UI/Layout/BestWinterModels";
import Catalog from "./components/UI/Layout/Catalog";
import Header from "./components/UI/Layout/Header";
import Main from "./components/UI/Layout/Main";

import New_bikes from "./components/UI/Layout/New_bikes";
import Unstoppable from "./components/UI/Layout/Unstoppable";
import Video_section from "./components/UI/Layout/Video_section";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Main />
      <New_bikes />
      <Catalog />
      <Unstoppable />
      <Video_section />
      <Advantages />
      <BestWinterModels />
    </div>
  );
}

export default App;
