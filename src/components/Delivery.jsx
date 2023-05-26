import firstDeliveryImage from "../assets/delivery_1.png";
import secondDeliveryImage from "../assets/delivery_2.png";
import thirdDeliveryImage from "../assets/delivery_3.png";
const Delivery = () => {
  return (
    <section className="delivery--container">
      <h2 className="popular--text">
        How to use delivery <span className="underline">service</span>
      </h2>
      <div className="delivery--container--items">
        <div className="delivery--item first--child">
          <div>
            <img
              className="delivery--first--image"
              src={firstDeliveryImage}
              alt="cup"
            />
          </div>
          <h3 className="delivery--items--h3 ">choose your coffee</h3>
          <h4 className="delivery--items--h4">there are 20+ coffee for you</h4>
        </div>
        <div>
          <div className="delivery--item">
            <div>
              <img
                className="delivery--image"
                src={secondDeliveryImage}
                alt="cup"
              />
            </div>
            <h3 className="delivery--items--h3">we deliver it to you </h3>
            <h4 className="delivery--items--h4">choose delivery service</h4>
          </div>
        </div>
        <div>
          <div className="delivery--item">
            <div>
              <img
                className="delivery--image"
                src={thirdDeliveryImage}
                alt="cup"
              />
            </div>
            <h3 className="delivery--items--h3">Enjoy your coffee</h3>
            <h4 className="delivery--items--h4">choose delivery service</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
