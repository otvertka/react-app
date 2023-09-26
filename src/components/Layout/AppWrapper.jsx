import Advantages from "./Advantages";
import BestWinterModels from "./BestWinterModels";
import Catalog from "./Catalog";
import Header from "./Header";
import Main from "./Main";
import NewBikes from "./NewBikes";
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
    </div>
  );
};

export default AppWrapper;
