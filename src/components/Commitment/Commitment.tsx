import React from "react";
import "./Commitment.css";
import linha from "../../assets/img/linha.png";
<img src={drivers} alt="Car img" />;
import drivers from "../../assets/img/drivers.png";

const Commitment: React.FC = () => {
  return (
    <section className="commitment">
      <div className="content">
        <div className="commitment-wrapper">
          <div className="commitment-content">
            <div className="commitment-container">
              <img className="commitment-line" src={linha} alt="Line" />
              <h2 className="commitment-title">
                Our Commitment <br/> to Your Safety
              </h2>
              <p>
                With every safetyfeature we add and every standard in the
                Community Guide that we uphold, we are committed to protecting
                you throughout the journey. Learn more about our Community Guide
                here..
              </p>
              <span className="commitment-link">See all safety features</span>
            </div>
          </div>
          <div className="commitment-image">
            <img src={drivers} alt="Car img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
