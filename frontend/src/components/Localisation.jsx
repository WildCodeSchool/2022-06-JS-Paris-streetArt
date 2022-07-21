import React from "react";
import MapProvins from "./MapProvins";
import "../CSS/Localisation.css";
import mairie from "../image/mairie.jpg";

function Localisation() {
  return (
    <div className="Localisation">
      <h2>PROVINS, FRANCE</h2>
      <img src={mairie} alt="" width={300} />
      <div className="carte">
        <p>
          Jolie ville médiévale du XI au XIIIème siècle <br /> figurant au
          patrimoine mondial de l'UNESCO,
          <br /> Provins se situe dans le top 10 des plus belles villes
          médiévales de France. <br /> Retrouvez 58 monuments historiques <br />{" "}
          tout au long de votre parcours dans ses rues.
        </p>
        <MapProvins />
      </div>
    </div>
  );
}

export default Localisation;
