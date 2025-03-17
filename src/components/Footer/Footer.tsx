
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png"
import youtube from "../../assets/icons/youtube.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import location from "../../assets/icons/location.png"


import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="">
          <div className="footer-container ">
            <div className="footer-section">
              <Link to="/" className="logo">
                <h1 className="footer-title">
                  Drive
                  <span>
                    <img
                      className="footer-location"
                      src={location}
                      alt="Icon Location"
                    />
                  </span>
                  n
                </h1>
              </Link>
              <ul>
                <li className="footer-description">Resolution Center</li>
                <li className="footer-description">English</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>About Us</h3>
              <ul>
                <li>Newsroom</li>
                <li>Investor relations</li>
                <li>Global citizenship</li>
                <li>Safety</li>
                <li>Carrer</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Our Products</h3>
              <ul>
                <li>Take a trip</li>
                <li>Drive it</li>
                <li>Eats</li>
                <li>DriveOn for Business</li>
                <li>DriveOn Freight</li>
                <li>Health</li>
                <li>DriveOn Air</li>
                <li>Advanced Technologies Group</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="line"></div>

            <div className="footer-copyright">
              <p className="copyright">© 2025 DriveOn Technologies Inc.</p>
              <span className="icons">
                <img src={facebook} alt="Facebook Icon" />
                <img src={twitter} alt="twitter Icon" />
                <img src={youtube} alt="Youtube Icon" />
                <img src={instagram} alt="instagram Icon" />
                <img src={linkedin} alt="linkedin Icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
