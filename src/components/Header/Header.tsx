import "./Header.css";
import logo from "../../assets/img/logo.png";
import person from "../../assets/img/person.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo Driveon" />
        </div>
        <ul className="navbar-items">
          <li>
            <a className="navbar-item" href="#">
              Drivers
            </a>
          </li>
          <li>
            <a className="navbar-item" href="#">
              Passengers
            </a>
          </li>
          <li>
            <a className="navbar-item" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="navbar-item" href="#">
              Contact
            </a>
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
    </header>
  );
};

export default Header;
