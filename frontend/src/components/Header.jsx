import React, { useState } from "react";
import "../CSS/Header.css";
import { NavLink } from "react-router-dom";
import Logo from "../image/logo-street-art.png";

function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
        <NavLink to="/home" className="navbar_logo" logo>
          <img src={Logo} alt="Logo" height={50} />
        </NavLink>
        <ul className="navbar_links">
          <li className="navbar_items slideInDown-1">
            <NavLink to="/artistes" className="navbar_link">
              Artistes
            </NavLink>
          </li>
          <li className="navbar_items slideInDown-2">
            <NavLink to="/gallerie" className="navbar_link">
              Galerie
            </NavLink>
          </li>
          <li className="navbar_items slideInDown-3">
            <NavLink to="/home" className="navbar_link">
              {/* <img id="logo" src={Logo} alt="Logo" height={50} /> */}
              <span id="home">Home</span>
            </NavLink>
          </li>
          <li className="navbar_items slideInDown-4">
            <NavLink to="/localisation" className="navbar_link">
              Localisation
            </NavLink>
          </li>
          <li className="navbar_items slideInDown-5">
            <NavLink to="/contact" className="navbar_link">
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          type="button"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger_bar" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
