import logo from "../../assets/img/logo.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png"
import youtube from "../../assets/icons/youtube.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="footer-container ">
          <div className="footer-section">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo Driveon" />
            </Link>
            <p>Your trusted ride-sharing service.</p>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>Company</li>
              <li>Testimonials</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our Products</h3>
            <ul>
              <li>Ride Services</li>
              <li>Driver Partners</li>
              <li>Safety & Security</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 DriveOn Technologies Inc.</p>
        </div>
        <span className="icons">
          <img src={facebook} alt="Facebook Icon" />
          <img src={twitter} alt="twitter Icon" />
          <img src={youtube} alt="Youtube Icon" />
          <img src={instagram} alt="instagram Icon" />
          <img src={linkedin} alt="linkedin Icon" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
