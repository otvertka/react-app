import Advantages from "./Advantages";
import Benefits from "./Benefits";
import BestWinterModels from "./BestWinterModels";
import Catalog from "./Catalog";
import Equipment from "./Equipment";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Map from "./Map";
import MoutainBikes from "./MoutainBikes";
import NewBikes from "./NewBikes";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
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
      <Map />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AppWrapper;
