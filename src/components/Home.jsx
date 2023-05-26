import Hero from "./Hero";
import Popular from "./Popular";
import Delivery from "./Delivery";
import About from "./About";
import SpecialMenu from "./SpecialMenu";
import Testimonial from "./Testimonial";
import Newsletter from "./Newsletter";
// import WindowWidthComponent from "./WindowWidth";
import { useEffect, useState } from "react";
import MobileCardSlider from "./MobileCardSlider";

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
    <>
      <Hero />
      <div className="main">
        {windowWidth >= 900 ? <Popular /> : <MobileCardSlider />}
        <Delivery />
        <About />
        <SpecialMenu />
        <Testimonial />
        <Newsletter />
      </div>
      {/* <WindowWidthComponent/> */}
    </>
  );
};

export default Home;
