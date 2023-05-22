import aboutImage from "../assets/about_coffee_image.png";
const About = () => {
  return (
    <section className="about--container">
      <div>
        <img className="about--image" src={aboutImage} alt="" />
      </div>
      <div className="about--info">
        <h2 className="about--text">
          About <span className="underline">us</span>
        </h2>
        <h3>
          We provide quality coffee,
          ready to deliver
        </h3>
        <h4>
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </h4>
        <button className="about--btn">Get your coffee</button>
      </div>
    </section>
  );
};

export default About;
