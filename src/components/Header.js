import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        My App
      </Link>
      <div className="header-right">
        <NavLink to="/charts" className="nav-link" activeClassName="active">
          Charts
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/map" className="nav-link" activeClassName="active">
          Map
        </NavLink>
      </div>

      <div className="header-right">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
