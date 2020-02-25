import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default props => {
  let iconPublicURL;
  const { location, adult_count, child_count } = props.item;
  const { shadow, orange, red, green } = props.icon;

  if (adult_count + child_count >= 100) {
    iconPublicURL = orange.publicURL;
  } else {
    iconPublicURL = red.publicURL;
  }

  if (adult_count + child_count === 0) {
    iconPublicURL = green.publicURL;
  }

  const icon = L.icon({
    iconUrl: iconPublicURL,
    shadowUrl: shadow.publicURL,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <Marker icon={icon} position={location}>
      <Popup>{`lat: ${location.lat}, lng: ${location.lon}`}</Popup>
    </Marker>
  );
};
