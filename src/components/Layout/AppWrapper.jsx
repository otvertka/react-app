import Advantages from "./Advantages";
import Benefits from "./Benefits";
import BestWinterModels from "./BestWinterModels";
import Catalog from "./Catalog";
import Equipment from "./Equipment";
import Header from "./Header";
import Main from "./Main";
import MoutainBikes from "./MoutainBikes";
import NewBikes from "./NewBikes";
import Reviews from "./Reviews";
import Unstoppable from "./Unstoppable";
import VideoSection from "./VideoSection";

const AppWrapper = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Main />
      <NewBikes />
      <Catalog />
      <Unstoppable />
      <VideoSection />
      <Advantages />
      <BestWinterModels />
      <MoutainBikes />
      <Benefits />
      <Equipment />
      <Reviews />
    </div>
  );
};

export default AppWrapper;
