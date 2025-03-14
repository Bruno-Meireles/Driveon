import React from "react";
import "./Hero.css";
import banner from "../../assets/img/banner.png";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Start Your Workday Comfortably</h1>
        <p>
          Get In, sit black and experience the comfort of car that takes you
          directly to your destination. Arriving work as a sardine with public
          transport or sweating is a thing of the past.
        </p>
        <button className="cta-button">Discover</button>
      </div>
      <div className="hero-image">
        <img src={banner} alt="Banner" />
      </div>
    </section>
  );
};

export default Hero;
