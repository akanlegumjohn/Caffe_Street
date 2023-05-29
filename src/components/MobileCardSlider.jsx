import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import image1 from "../assets/img_product_1.png";
import image2 from "../assets/img_product_2.png";
import image3 from "../assets/img_product_3.png";
import Card from "./Card";

function MobileCardSlider() {
  return (
    <div className="slider--container">
      <div className="popular--text">
        Popular <span className="underline">Now</span>{" "}
      </div>
      <Carousel
        nextIcon={
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <BsChevronRight />
          </IconContext.Provider>
        }
        prevIcon={
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <BsChevronLeft />
          </IconContext.Provider>
        }
      >
        <Carousel.Item>
          <Card image={image3} name={"Hazelnut Latte"} price={"23K"} />
        </Carousel.Item>
        <Carousel.Item>
          <Card image={image1} name={"Vanilla Latte"} price={"21K"} />
        </Carousel.Item>
        <Carousel.Item>
          <Card image={image2} name={"Espresso"} price={"12K"} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MobileCardSlider;
