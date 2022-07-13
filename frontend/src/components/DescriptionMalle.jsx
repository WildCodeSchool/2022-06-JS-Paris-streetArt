import React from "react";
import MapMalle from "./MapMalle";
import "../Description.css";

function DescriptionMalle() {
  return (
    <div className="description">
      <p>
        Cinéaste français à succès, il a choisi l'institution Sainte Croix de
        Provins pour réaliser son long-métrage autobiographique 'Au Revoir Les
        Enfants'. Le film nous emmène sous l'occupation, et nous plonge dans
        l'histoire d'amitié, à l'issue tragique, entre un garçon issu de la
        bourgeoisie, et l'un de ses camarades, qu'il découvre être juif.
        L'oeuvre est un triomphe, et obtient plusieurs récompenses dont le César
        du meilleur film et du meilleur réalisateur.
      </p>
      <div className="carte">
        <h2>5 rue des Jacobins</h2>
        <MapMalle />
      </div>
    </div>
  );
}

export default DescriptionMalle;
