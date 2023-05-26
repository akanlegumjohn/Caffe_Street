import heroBgImg from "../assets/bg_img_hero.png";
import orderCart from "../assets/Group_2.png";
import favIcon from "../assets/akar-icons_star.png";
import bgHeroImage from "../assets/bg_img_hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero--top--bg--image" src={bgHeroImage} alt="heroImage" />

      <div className="first--hero--section">
        <h1>
          Enjoy your <span>coffee</span> <br /> before activity
        </h1>{" "}
        <p>
          Boost your productivity and <br /> build your mood with a glass of
          coffee in the morning
        </p>
        <div className="first--hero--section--bottom">
          <button className="order--btn">
            Order now <img src={orderCart} alt="orderCart" />
          </button>{" "}
          <button className="more--menu">More menu</button>
        </div>
      </div>
      <div className="second--hero--section">
        <div className="hero--main--image"></div>
        <div className=" coffee--name">Cappuccino</div>
        <div className=" price">18K</div>
        <div className=" rating">
          4.8 <img src={favIcon} alt="" />
        </div>
      </div>
      <img className="hero--bottom--bg--image" src={heroBgImg} alt="" />
    </section>
  );
};

export default Hero;
