import banner from "../../assets/img/banner.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Start Your Workday Comfortably </h1>
          <p>
            Get In, sit black and experience the comfort of car that takes you
            directly to your destination. Arriving work as a sardine with public
            transport or sweating is a thing of the past.
          </p>
          <button>Discover </button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
