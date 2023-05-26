// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ image, name, message }) => {
  return (
    <div className="testimonial--details--card--container">
      <img
        className="testimonial--card--image"
        src={image}
        alt={`${name}Image`}
      />
      <div className="testimonial--card--details">
        <h5>{name}</h5>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
