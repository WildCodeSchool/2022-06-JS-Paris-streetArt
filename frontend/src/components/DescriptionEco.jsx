import React from "react";
import MapEco from "./MapEco";

function DescriptionEco() {
  return (
    <div>
      <p>
        Umberto Eco est un universitaire et écrivain italien. Surtout connu du
        grand public pour ses oeuvres romanesques, il est aussi auteur d'essais
        universitaires sur l'esthétique médiévale. En 1990, paraît en France 'Le
        pendule de Foucault', roman d'aventure qui a pour théâtre de nombreux
        lieux dont les Souterrains et la Grange aux Dimes de Provins.
      </p>
      <div className="carte">
        <MapEco />
      </div>
    </div>
  );
}

export default DescriptionEco;
