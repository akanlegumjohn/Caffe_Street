import { NavLink } from "react-router-dom";
import searchIcon from "../assets/navbar-images/akar-icons_search.png";
import logo from "../assets/navbar-images/logo_coffe.png";
import cartIcon from "../assets/navbar-images/Group.png";
// import searchIcon from "../assets/navbar-images/akar-icons_search.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav--links">
        <li>
          <NavLink
            exact="true"
            to="/"
            activeclassname="active"
            className="nav--link"
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" activeclassname="active" className="nav--link">
            Our Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/delivery"
            activeclassname="active"
            className="nav--link"
          >
            Delivery
          </NavLink>
        </li>
      </ul>
      <div>
        <div className="search--bar--container">
          <img src={searchIcon} alt="search" />
          <input className="search--bar" type="text" placeholder="cappuccino" />
        </div>
        <div className="nav--cart">
          <span className="eclipse"></span>
          <img src={cartIcon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
