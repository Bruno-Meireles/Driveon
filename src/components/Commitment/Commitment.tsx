import React from "react";
import "./Commitment.css";
        <img src={drivers} alt="Car img" />;
        import drivers from "../../assets/img/drivers.png";

const Commitment: React.FC = () => {
  return (
    <section className="commitment">
      <div className="commitment-content">
        <h2>Our Commitment to Your Safety</h2>
        <p>
                  With every safetyfeature we add and every standard in the Community Guide that we uphold,
                  we are committed to protecting you throughout the journey.
                  Learn more about our Community Guide here..
        </p>
        <span>See all safety features</span>
      </div>
      <div className="commitment-image">
        <img src={drivers} alt="Car img" />
      </div>
    </section>
  );
};

export default Commitment;
