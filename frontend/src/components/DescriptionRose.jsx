import React from "react";
import MapRose from "./MapRose";
import "../CSS/Description.css";

function DescriptionRose() {
  return (
    <div className="descriptionRose">
      <h1>La rose de Provins</h1>
      <p>
        Ce serait vers 1240 que , de retour de croisade, le Comte de Champagne
        Thibaut IV installe la culture de la rose à Provins. C'est en 1759 que
        Charles Linné, grand botaniste suédois nomme la rose de Provins :
        Gallica Officinalis, qui veut dire rose de France ayant des vertus
        médicinales et gustatives. On la nomme aussi Rose des Apothicaires.
      </p>
      <div className="carte">
        <h2>11 rue des prés</h2>
        <MapRose />
      </div>
    </div>
  );
}

export default DescriptionRose;
