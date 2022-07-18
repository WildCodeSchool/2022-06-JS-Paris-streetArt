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
    <div className="container-img">
      <Link to="/DescriptionPoncet">
        <img
          id="oeuvresImg"
          src={andre}
          alt="Poncet"
          height="230px"
          width="230px"
        />
      </Link>
      <Link to="/DescriptionLouisXIII">
        <img
          id="oeuvresImg"
          src={louis}
          alt="LouisXIII"
          height="230px"
          width="230px"
        />
      </Link>
      <Link to="/DescriptionMalle">
        <img
          id="oeuvresImg"
          src={louism}
          alt="Malle"
          height="230px"
          width="230px"
        />
      </Link>
      <Link to="/DescriptionRose">
        <img
          id="oeuvresImg"
          src={rose}
          alt="rose"
          height="230px"
          width="230px"
        />
      </Link>
      <Link to="/DescriptionConnery">
        <img
          id="oeuvresImg"
          src={sean}
          alt="Connery"
          height="230px"
          width="230px"
        />
      </Link>
      <Link to="/DescriptionEco">
        <img
          id="oeuvresImg"
          src={umberto}
          alt="Eco"
          height="230px"
          width="230px"
        />
      </Link>
    </div>
  );
}
