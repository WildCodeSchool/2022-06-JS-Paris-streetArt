import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// CSS
const containerStyle = {
  width: "500px",
  height: "500px",
  marginTop: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  border: "1px solid black",
};

// localisation voulue
const poncet = {
  lat: 48.562061,
  lng: 3.296939,
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
    const bounds = new window.google.maps.LatLngBounds(poncet);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  // affichage de la Map
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={poncet}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {
        /* Child components, such as markers, info windows, etc. */
        <div>
          <Marker position={poncet} map={mapGoogle} />
        </div>
      }
    </GoogleMap>
  ) : null;
}
