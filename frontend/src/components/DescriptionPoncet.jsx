import React from "react";
import MapPoncet from "./MapPoncet";
import "../CSS/Description.css";
import SocialFollow from "./SocialFollow";

function DescriptionPoncet() {
  return (
    <div className="description">
      <h1>André François-Poncet</h1>
      <p>
        Né à Provins, André François-Poncet a été à la fois homme politique,
        diplomate et écrivain. Il fut ambassadeur à Berlin puis en Italie jusque
        dans les années 50. Académicien en 1952, président de la Croix-Rouge en
        1955, puis membre de l'Académie des sciences morales en 1961, André
        François-Poncet a écrit plusieurs ouvrages historiques.
      </p>
      <div className="carte">
        <h2>16 rue Valentin Abeille</h2>
        <MapPoncet />
        <SocialFollow />
      </div>
    </div>
  );
}

export default DescriptionPoncet;
