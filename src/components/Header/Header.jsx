import logo from "../../assets/Logo/BrainFlix-logo.svg";
import murgan from "../../assets/Images/Mohan-muruge.jpg";
import "./header.scss";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav className="header">
        <div className="header-content__logo">
        <Link to="/"> <img src={logo} alt="BrainFlix Logo" /></Link>
        </div>
        <div className="header-content__search">
          <input
            type="text"
            placeholder="Search"
            className="header-content__search-input"
          />
          <img className="header-content__search-murgan" src={murgan} alt="Murgan face image" />
        </div>
        <div className="header-content__button">
        <Link to="/upload">  
            <button>
              <h3>UPLOAD</h3>
            </button>
          </Link>
          <img className="header-content__button-murgan"src={murgan} alt="Murgan face image" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
