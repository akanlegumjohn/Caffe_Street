import Card from "./Card";
import image1 from "../assets/img_product_1.png";
import image2 from "../assets/img_product_2.png";
import image3 from "../assets/img_product_3.png";

const Popular = () => {
  return (
    <div className="popular--now--container">
      <div className="popular--now--items">
        <Card image={image1} name={"Vanilla Latte"} price={"21K"} />
        <Card image={image2} name={"Espresso"} price={"12K"} />
        <Card image={image3} name={"Hazelnut Latte"} price={"23K"} />
      </div>
    </div>
  );
};

export default Popular;
