import { menu } from "../menu";
import Card from "./Card";
const SpecialMenu = () => {
  return (
    <section className="special--menu--container">
      <h2 className="popular--text">
        Special menu <span className="underline">for you</span>
      </h2>
      <div className="special--menu--items">
        {menu.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            price={item.price}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialMenu;
