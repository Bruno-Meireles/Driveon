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
        <div className="download-content">
          <div className="download-text">
            <h2>Download the DriveOn application to get more benefits and experience.</h2>
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
        <span>
          <h3>Register to be a driver partner </h3>
          <img src={setas} alt="Arrow" />
          <img src={line} alt="Line" />
        </span>
        <span>
          <h3>Register to start your journey </h3>
          <img src={line} alt="Line" />
          <img src={setas} alt="Arrow" />
        </span>
      </div>
    </>
  );
};

export default DownloadApp;
