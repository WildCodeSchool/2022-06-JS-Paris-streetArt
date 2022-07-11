import React from "react";
import { Link } from "react-router-dom";
import andre from "../image/Andréfrancoisponcet.jpg";
import louis from "../image/Louis XIII.jpg";
import louism from "../image/Louis Malle.jpg";
import rose from "../image/Rose de Provins.jpg";
import sean from "../image/Seanconnery.jpg";
import umberto from "../image/Umberto ECO.jpg";

export default function Oeuvres() {
  return (
    <div>
      <Link to="/DescriptionPoncet">
        <img src={andre} alt="Poncet" height="230px" width="230px" />
      </Link>
      <Link to="/DescriptionLouisXIII">
        <img src={louis} alt="LouisXIII" height="230px" width="230px" />
      </Link>
      <Link to="/DescriptionMalle">
        <img src={louism} alt="Malle" height="230px" width="230px" />
      </Link>
      <Link to="/DescriptionRose">
        <img src={rose} alt="rose" height="230px" width="230px" />
      </Link>
      <Link to="/DescriptionConnery">
        <img src={sean} alt="Connery" height="230px" width="230px" />
      </Link>
      <Link to="/DescriptionEco">
        <img src={umberto} alt="Eco" height="230px" width="230px" />
      </Link>
    </div>
  );
}
