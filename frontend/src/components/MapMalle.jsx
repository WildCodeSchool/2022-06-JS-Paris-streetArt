import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// CSS
const containerStyle = {
  width: "300px",
  height: "300px",
  marginTop: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid black",
};

// localisation voulue
const malle = {
  lat: 48.561791,
  lng: 3.293806,
};

export default function Map() {
  // chargement de l'API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDY21ExUtwTyqG2orKMnuEaPrZYuXlzuCs",
  });

  const ref = React.useRef(null);
  const [mapGoogle, setMap] = React.useState(null);

  React.useEffect(() => {
    if (ref.current && !mapGoogle) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, mapGoogle]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(malle);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  // affichage de la Map avec condition de chargement
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={malle}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {
        /* Composants enfant, markers, infos windows etc. */
        <div>
          <Marker position={malle} map={mapGoogle} />
        </div>
      }
    </GoogleMap>
  ) : null;
}
