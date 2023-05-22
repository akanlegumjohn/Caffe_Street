import { useState } from "react";
import logoImage from "../assets/navbar-images/logo_coffe.png";
import searchIcon from "../assets/navbar-images/akar-icons_search.png";
import cartIcon from "../assets/navbar-images/Group.png";
import { NavLink } from "react-router-dom";

const MobileScreenNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar ${isNavOpen ? "nav-open" : ""}`}>
      <div className="logo">
        <img src={logoImage} alt="" />
      </div>
      <div className="nav-toggle" onClick={handleNavToggle}>
        <div className={`bars-icon ${isNavOpen ? "hidden" : ""}`}>&#9776;</div>
        <div className={`close-icon ${isNavOpen ? "" : "hidden"}`}>
          &#10005;
        </div>
      </div>
      <ul className="nav-menu">
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
      {isSearchActive ? (
        <div className="search--bar--container">
          <img src={searchIcon} alt="search" />
          <input className="search--bar" type="text" placeholder="cappuccino" />
          <span style={{ cursor: "pointer" , fontSize:'20px' }} onClick={toggleSearch}>
            x
          </span>
        </div>
      ) : (
        <img
          onClick={toggleSearch}
          style={{ cursor: "pointer" }}
          src={searchIcon}
          alt="search"
        />
      )}

      <div className="nav--cart">
        <span className="eclipse"></span>
        <img src={cartIcon} alt="" />
      </div>
      {/* <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div> */}
    </nav>
  );
};

export default MobileScreenNavbar;
