import React from "react";
import MapProvins from "./MapProvins";
import "../CSS/Localisation.css";
import SocialFollow from "./Footer";

function Localisation() {
  return (
    <div className="Localisation">
      <h2>PROVINS, FRANCE</h2>
      <div className="carte">
        <MapProvins />
        <p>
          Jolie ville médiévale du XI au XIIIème siècle figurant au patrimoine
          mondial de l'UNESCO, Provins se situe dans le top 10 des plus belles
          villes médiévales de France. Retrouvez 58 monuments historiques tout
          au long de votre parcours dans ses rues.
        </p>
      </div>
      <SocialFollow />
    </div>
  );
}

export default Localisation;
