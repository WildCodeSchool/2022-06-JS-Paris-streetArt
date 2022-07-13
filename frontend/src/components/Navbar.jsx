import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../image/logo-street-art.png";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo" logo>
        <img src={Logo} alt="Logo" height={50} />
      </div>
      <ul className="navbar_links">
        <li className="navbar_items slideInDown-1">
          <NavLink to="/artistes" className="navbar_link">
            Artistes
          </NavLink>
        </li>
        <li className="navbar_items slideInDown-2">
          <NavLink to="/gallerie" className="navbar_link">
            Gallerie
          </NavLink>
        </li>
        <li className="navbar_items slideInDown-3">
          <NavLink to="/home" className="navbar_link">
            <img id="logo" src={Logo} alt="Logo" height={50} />
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
      <button type="button" className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Nav;
