import React from "react";
import MapLouisXIII from "./MapLouisXIII";
import "../CSS/Description.css";

function DescriptionLouisXIII() {
  return (
    <div className="descriptionLouis13">
      <h1>Louis XIII</h1>
      <p>
        Louis XIII est un roi de France de la dynastie des Bourbons. Surnommé
        "le Juste", il a régné de 1610 à 1643. En 1617, il porte confirmation
        des trois foires de la ville de Provins ainsi que de leurs franchises et
        de leurs privilèges. La première, appelée la foire de May, précède le
        jour de l'Ascension durant 46 jours ; la seconde, la foire saint Ayoul,
        du 14 septembre au jour de la Toussaint ; et la troisième, la foire
        saint Martin, qui commence le jour de la saint André et dure jusqu'à la
        fin du mois de décembre.
      </p>
      <div className="carte">
        <h2>1 rue St Thibault</h2>
        <MapLouisXIII />
      </div>
    </div>
  );
}

export default DescriptionLouisXIII;
