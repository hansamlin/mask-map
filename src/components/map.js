import React, { useState, useContext, useEffect } from "react";
import { Map, ZoomControl, WMSTileLayer } from "react-leaflet";
import styled from "styled-components";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Marker from "./marker";
import { MaskProvider } from "../store/maskProvider";
import { useStaticQuery, graphql } from "gatsby";

const init = {
  lat: 25.045655,
  lng: 121.536456
};

export default () => {
  const [position, setPosition] = useState(init);
  let icon;
  let { data } = useContext(MaskProvider);
  // data = data.slice(0, 5);

  const {
    allFile: { nodes: source }
  } = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/marker/" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);

  const [shadow] = source.filter(item => item.name === "marker-shadow");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  return (
    <Container
      zoom={16}
      zoomControl={false}
      maxZoom={18}
      minZoom={6}
      center={position}
    >
      <ZoomControl position="topright" />
      <WMSTileLayer
        attribution={`Map data <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Sam`}
        url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}"
      />

      <MarkerClusterGroup>
        {data.map(item => {
          if (item.adult_count + item.child_count >= 100) {
            [icon] = source.filter(item => item.name === "marker-icon-orange");
          } else {
            [icon] = source.filter(item => item.name === "marker-icon-red");
          }

          if (item.adult_count + item.child_count === 0) {
            [icon] = source.filter(item => item.name === "marker-icon-green");
          }

          return (
            <Marker
              item={item}
              iconPublicURL={icon.publicURL}
              shadowPublicURL={shadow.publicURL}
              key={item.code}
            />
          );
        })}
      </MarkerClusterGroup>
    </Container>
  );
};

const Container = styled(Map)`
  height: 100vh;
  width: calc(100% - 315px);
  z-index: 0;
`;
