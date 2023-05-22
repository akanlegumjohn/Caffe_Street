import heroCoffeeImg from "../assets/hero_coffee_img.png";
import heroBgImg from "../assets/bg_img_hero.png";
import orderCart from "../assets/Group_2.png";
import favIcon from "../assets/akar-icons_star.png";
const Hero = () => {
  return (
    <section className="hero">
      
      <div className="first--hero--section">
        <h1>
          Enjoy your <span>coffee</span> <br /> before activity
        </h1>{" "}
        <p>
          Boost your productivity and build your mood <br /> with a glass of
          coffee in the morning
        </p>
        <div className="first--hero--section--bottom">
          <button className="order--btn">
            Order now <img src={orderCart} alt="orderCart" />
          </button>{" "}
          <button className="more--menu">
            More menu
          </button>
        </div>
        <div className="popular--text">
          Popular <span className="underline">Now</span>{" "}
          <img className="popular--bg--image" src={heroBgImg} alt="" />
        </div>
      </div>
      <div className="second--hero--section">
        <div className=" coffee--name">Cappuccino</div>
        <div className=" rating">
          4.8 <img src={favIcon} alt="" />
        </div>
        <div className=" price">18K</div>
        <div className="hero--image--container">

        <img className="hero--image" src={heroCoffeeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
