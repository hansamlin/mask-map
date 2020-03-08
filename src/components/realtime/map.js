import React, { useRef } from "react";
import { Map, ZoomControl, WMSTileLayer } from "react-leaflet";
import styled from "styled-components";
import MarkerGroup from "./markerGroup";
import { SetBounds, Moveend, Navigator } from "./mapOptions";

const init = {
  lat: 25.045655,
  lng: 121.536456
};

export default () => {

  return (
    <Container
      zoom={16}
      zoomControl={false}
      maxZoom={18}
      minZoom={10}
      center={init}
    >
      <ZoomControl position="bottomright" />
      <WMSTileLayer
        attribution={`Map data <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Sam`}
        url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}"
      />
      <SetBounds />
      <Moveend />
      <Navigator />
      <MarkerGroup />
    </Container>
  );
};

const Container = styled(Map)`
  height: 100vh;
  z-index: 0;
  transition: width 0.5s;
`;
