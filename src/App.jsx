import "./App.css";
import Accordion from "./components/accordion";
import GithubFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMore from "./components/load-more";
import ModalDemo from "./components/modal/demo-modal";
import QRGenerator from "./components/QR-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import DemoTabs from "./components/tabs/demo-tabs";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/*Accordion Component #1
     <Accordion />
    */}
      {/*Rondom color generator Component #2
       <RandomColor />
      */}
      {/*Star Rating #3
        <StarRating noOfStars={10}/>
      */}
      {/*Image Slider #4
            <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
      */}
      {/*Load Morer #5
          <LoadMore />
      */}
      {/*Tree Menu Project #6
          <TreeView menus={menus}/>
      */}
      {/* 
      QR Generator #7
      <QRGenerator />*/}
      {/*  QR Generator #8
      <LightDarkMode />*/}
      {/*  Scroll Indicator #9
      <LightDarkMode />*/}
      {/*  Demo Tabs #10
      <DemoTabs />*/}
      {/*  Demo Tabs #11
      <ModalDemo />*/}

      <GithubFinder />
      
      

    </>
  );
}

export default App;
