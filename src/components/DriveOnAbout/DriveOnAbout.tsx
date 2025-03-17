import React from "react";
import "./DriveOnAbout.css";
import linha from "../../assets/img/linha.png";
import carImage from "../../assets/img/carImage.png"; 
const DriveOnAbout: React.FC = () => {
  return (
    <section className="driveon">
      <div className="content">
        <div className="driveon-content">
          <div className="driveon-image">
            <img src={carImage} alt="DriveOn Car" />
          </div>
          <div className="driveon-text">
            <div></div>
            <img className="driveon-line" src={linha} alt="Line" />
            <p>
              DriveOn is a mobile carpool platform that effortessly brings
              commuters together in one car. Traveling home and work will never
              be the same again. Our mission is to stop trafic jams and C02
              pollution as a result of innefficient car commuting.
            </p>
            <div className="driveon-action">
              <span className="driveon-call">Are you in?</span>
              <a className="driveon-learn-more" href="#">
                Learn more {">>"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriveOnAbout;