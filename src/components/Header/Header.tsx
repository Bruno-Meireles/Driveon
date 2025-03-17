import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import person from "../../assets/img/person.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header>
          <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Driveon" />
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <ul className={`navbar-items ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className="navbar-item" to="/drivers">
              Drivers
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/passengers">
              Passengers
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="auth-buttons">
          <button className="login-button">
            <img src={person} alt="Login Icon" />
            Log in
          </button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
     {/* </div> */}
    </header>
  );
};

export default Header;
