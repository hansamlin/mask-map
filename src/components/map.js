import React, { useState } from "react";
import { Map, Marker, ZoomControl, WMSTileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import MarkerClusterGroup from "react-leaflet-markercluster";

const init = {
  lat: 25.081764,
  lng: 121.552271
};

export default () => {
  const [position, setPosition] = useState(init);

  const handleClick = e => setPosition(e.latlng);

  const icon = L.icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <Container
      zoom={16}
      zoomControl={false}
      maxZoom={17}
      minZoom={13}
      center={position}
      onclick={handleClick}
      className="markercluster-map"
    >
      <ZoomControl position="topright" />
      <WMSTileLayer
        attribution={`Map data <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Sam`}
        url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}"
      />

      <MarkerClusterGroup>
        <Marker icon={icon} position={init}>
          <Popup>test</Popup>
        </Marker>
        <Marker icon={icon} position={[25.079394, 121.548388]} />
        <Marker icon={icon} position={[25.080181, 121.545427]} />
      </MarkerClusterGroup>
    </Container>
  );
};

const Container = styled(Map)`
  height: 100vh;
  width: calc(100% - 315px);
  z-index: 0;
`;
