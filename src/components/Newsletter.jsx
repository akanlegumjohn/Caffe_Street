const Newsletter = () => {
  return (
    <section className="newsletter ">
      <div className="newsletter--container">
        <h3 className="subscription--text">
          Subscribe to get 50% discount price
        </h3>
        <div className="newsletter--bottom">
          <div>
            <input type="text" placeholder="Email address" />
          </div>
          <button>
            Order now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
