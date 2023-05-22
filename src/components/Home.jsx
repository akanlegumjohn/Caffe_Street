import Hero from "./Hero";
import bgHeroImage from "../assets/bg_img_hero.png";
import Popular from "./Popular";
import Delivery from "./Delivery";
import About from "./About";
import SpecialMenu from "./SpecialMenu";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
import WindowWidthComponent from "./WindowWidth";
import CardSlider from "./CardSlider";
import { useEffect, useState } from "react";

const Home = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    < >
      <Hero />
      <img className="hero--bg--image" src={bgHeroImage} alt="heroImage" />
     <div className="main">
       { windowWidth >= 900?<Popular />:<CardSlider />}
      <Delivery />
      <About />
      <SpecialMenu />
      <Testimonial />
      <Newsletter />
     </div>
      <WindowWidthComponent/>
    </>
  );
};

export default Home;
