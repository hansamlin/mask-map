import React, { useState } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import styled from "styled-components";

const init = {
  lat: 25.081764,
  lng: 121.552271,
  zoom: 16
};

export default () => {
  const [params] = useState(init);

  const position = [params.lat, params.lng];

  return (
    <Container center={position} zoom={params.zoom} zoomControl={false}>
      <ZoomControl position="topright" />
      <TileLayer
        attribution="&amp;copy <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Container>
  );
};

const Container = styled(Map)`
  height: 100%;
  width: 100%;
`;
