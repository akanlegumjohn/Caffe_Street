import image1 from "../assets/img_product_1.png";
import image2 from "../assets/img_product_2.png";
import image3 from "../assets/img_product_3.png";
import Card from "./Card";

const CardSlider = () => {
  return (
    <div>
      <div id="coffee" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#coffee"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
            style={{ backgroundColor: "orange" }}
          ></button>
          <button
            type="button"
            data-bs-target="#coffee"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ backgroundColor: "orange" }}
          ></button>
          <button
            type="button"
            data-bs-target="#coffee"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ backgroundColor: "orange" }}
          ></button>
        </div>
        <div className="carousel-inner inner--carousel ">
          <div className="carousel-item active">
            <Card image={image3} name={"Hazelnut Latte"} price={"23K"} />
          </div>
          <div className="carousel-item">
            <Card image={image1} name={"Vanilla Latte"} price={"21K"} />
          </div>
          <div className="carousel-item">
            <Card image={image2} name={"Espresso"} price={"12K"} />
          </div>
        </div>
        <button
          className="carousel-control-prev text-secondary"
          type="button"
          data-bs-target="#coffee"
          data-bs-slide="prev"
        >
          <span className="carousel--control--buttons">{"<"}</span>
        </button>
        <button
          className="carousel-control-next text-secondary "
          type="button"
          data-bs-target="#coffee"
          data-bs-slide="next"
        >
          <span className=" carousel--control--buttons">{">"}</span>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
