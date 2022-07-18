import React from "react";
import MapProvins from "./MapProvins";
import "../CSS/Localisation.css";

function Localisation() {
  return (
    <div className="Localisation">
      <h2>PROVINS, FRANCE</h2>
      <div className="carte">
        <MapProvins />
      </div>
    </div>
  );
}

export default Localisation;
