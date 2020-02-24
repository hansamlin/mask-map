import React, { useState, useContext } from "react";
import { Map, ZoomControl, WMSTileLayer } from "react-leaflet";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import MarkerClusterGroup from "react-leaflet-markercluster";

import Marker from "./marker";
import { MaskProvider } from "../store/maskProvider";

const init = {
  lat: 25.081764,
  lng: 121.552271
};

export default () => {
  // const [position, setPosition] = useState(init);
  let publicURL;
  const { data } = useContext(MaskProvider);

  const {
    allFile: { nodes: source }
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "png" }, name: { regex: "/marker.+/" } }
      ) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);
  console.log(source);

  return (
    <Container
      zoom={16}
      zoomControl={false}
      maxZoom={18}
      minZoom={6}
      center={init}
      className="markercluster-map"
    >
      <ZoomControl position="topright" />
      <WMSTileLayer
        attribution={`Map data <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Sam`}
        url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}"
      />

      <MarkerClusterGroup>
        {data.map(item => {
          if (item.adult_count + item.child_count >= 100) {
            publicURL = source[2].publicURL;
          } else {
            publicURL = source[1].publicURL;
          }

          if (item.adult_count + item.child_count === 0) {
            publicURL = source[0].publicURL;
          }

          return (
            <Marker item={item} iconPublicURL={publicURL} key={item.code} />
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
