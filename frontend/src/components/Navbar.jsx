import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo-street-art.png";
import "../Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link id="link" to="/artistes">
          Artistes
        </Link>
        <Link id="link" to="/oeuvres">
          Gallerie
        </Link>
        <Link id="logo" to="/home">
          <img src={logo} alt="logo" height="80px" width="80px" />
        </Link>
        <Link id="link" to="/Localisation">
          {" "}
          Localisation{" "}
        </Link>
        <Link id="link" to="/contact">
          {" "}
          Contact{" "}
        </Link>
      </nav>
    </header>
  );
}
