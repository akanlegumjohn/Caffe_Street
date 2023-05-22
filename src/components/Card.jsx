import { useState } from "react";
import cart from "../assets/Frame_5.png";
// import cart from "../assets/navbar-images/Group.png";
import favIcon from "../assets/akar-icons_star.png";

// eslint-disable-next-line react/prop-types
const Card = ({ image, name, price, desc }) => {
  const [coffeeState, setCoffeeState] = useState("hot");

  const handleIsHot = () => {
    setCoffeeState("hot");
  };

  const handleIsCold = () => {
    setCoffeeState("cold");
  };

  return (
    <div className="card--container ">
      <div>
        <div className="fav--container">
          4.8
          <img className="card--fav--icon" src={favIcon} alt={`${name}image`} />
        </div>
        <img className="card--image" src={image} alt="popularNow" />
      </div>
      <div className="product--info">
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <div className="product--bottom--details">
        {desc ? (
          <div className="desc">{desc}</div>
        ) : (
          <div className="coffee--state">
            <button
              className={`coffee--state--${
                coffeeState === "hot" ? "selected" : "btn"
              }`}
              onClick={handleIsHot}
            >
              Hot
            </button>
            <button
              className={`coffee--state--${
                coffeeState === "cold" ? "selected" : "btn"
              }`}
              onClick={handleIsCold}
            >
              Cold
            </button>
          </div>
        )}
        <div>
          <img className="product--cart" src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
