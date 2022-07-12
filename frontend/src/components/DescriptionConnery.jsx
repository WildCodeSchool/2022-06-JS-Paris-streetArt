import React from "react";
import MapConnery from "./MapConnery";

function DescriptionConnery() {
  return (
    <div>
      <p>
        Acteur et cinéaste britannique de renommée internationale. Dans le film
        'Le nom de la rose' de Jean-Jacques Annaud, il a joué le rôle principal
        du moine Guillaume de Baskerville. Le film est tiré du roman policier
        médiéval du même nom écrit par Umberto Eco qui publie par la suite 'Le
        pendule de Foucault' dont l'intrigue se passe en partie à Provins.
      </p>
      <div className="carte">
        <h2>17 rue St Thibault</h2>
        <MapConnery />
      </div>
    </div>
  );
}

export default DescriptionConnery;
