import React from "react";
import { Marker /*, Popup*/ } from "react-leaflet";
import L from "leaflet";

export default props => {
  const { location } = props.item;
  const iconPublicURL = props.iconPublicURL;
  const shadowPublicURL = props.shadowPublicURL;

  const icon = L.icon({
    iconUrl: iconPublicURL,
    shadowUrl: shadowPublicURL,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return <Marker icon={icon} position={location} />;
};
