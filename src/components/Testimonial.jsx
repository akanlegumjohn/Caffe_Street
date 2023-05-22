import { testimonialData } from "../testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="testimonial--container">
      <div className="testimonial--content--container">
        <h3 className="testimonial--heading">What they say about us</h3>
        <p className="testimonial--content">
          We always provide the best services and always maintain the quality of
          coffee
        </p>
      </div>
      <div className="testimonial--container--items">
        {testimonialData.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            image={item.image}
            message={item.message}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
