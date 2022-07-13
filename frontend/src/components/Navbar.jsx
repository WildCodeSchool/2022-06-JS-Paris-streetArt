import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo-street-art.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/artistes"> Anciens Artistes </Link>
        <Link to="/oeuvres"> Oeuvres de l'artiste du mois </Link>
        <Link to="/home">
          {" "}
          <img src={logo} alt="logo" height="100px" width="100px" />
        </Link>
        <Link to="/Localisation">Localisation</Link>
        <Link to="/contact"> contact </Link>
      </nav>
    </header>
  );
}
