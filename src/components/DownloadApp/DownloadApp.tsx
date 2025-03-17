import React from "react";
import "./DownloadApp.css";
import googlePlay from "../../assets/img/google-play.webp";
import playApp from "../../assets/img/playApp.png";
import setas from "../../assets/img/setas.png";
import line from "../../assets/img/linha.png";

const DownloadApp: React.FC = () => {
  return (
    <>
      <section className="download-app">
        <div className="content">
          <div className="download-content">
            <h2>
              Download the DriveOn application to get more benefits and
              experience.
            </h2>
            <div className="download-buttons">
              <a href="#">
                <img src={googlePlay} alt="Google Play Store" />
              </a>
              <a href="#">
                <img src={playApp} alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="register">
        <div className="content">
          <div className="register-content">
            <h3>
              Register to be
              <br />a driver partner
              <img className="arrow" src={setas} alt="Arrow" />
            </h3>
            <h3>
              Register to start <br />
              your journey
              <img className="arrow" src={setas} alt="Arrow" />
            </h3>
          </div>

          <div className="register-lines">
            <img src={line} alt="Line" />
            <img src={line} alt="Line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
