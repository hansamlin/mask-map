import React from "react";
import { Marker /*, Popup*/ } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";

export default props => {
  const { location } = props.item;
  const iconPublicURL = props.iconPublicURL;

  const icon = L.icon({
    iconUrl: iconPublicURL,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return <Marker icon={icon} position={location} />;
};

const Img = styled.img``;
