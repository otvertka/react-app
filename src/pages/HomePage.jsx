import Advantages from "../components/Layout/Advantages";
import Benefits from "../components/Layout/Benefits";
import BestWinterModels from "../components/Layout/BestWinterModels";
import Catalog from "../components/Layout/Catalog";
import Equipment from "../components/Layout/Equipment";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Map from "../components/Layout/Map";
import MoutainBikes from "../components/Layout/MoutainBikes";
import NewBikes from "../components/Layout/NewBikes";
import Reviews from "../components/Layout/Reviews";
import Subscribe from "../components/Layout/Subscribe";
import Unstoppable from "../components/Layout/Unstoppable";
import VideoSection from "../components/Layout/VideoSection";

const HomePage = (props) => {
  return (
    <div className="max-w-screen-xl mx-auto font-main">
      {/* <Header /> */}
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

export default HomePage;
