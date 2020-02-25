import React, { useContext, useMemo, createRef } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MaskProvider } from "../store/maskProvider";
import { useStaticQuery, graphql } from "gatsby";
import Marker from "./marker";

const getIcon = source => {
  const [shadow] = source.filter(item => item.name === "marker-shadow");
  const [orange] = source.filter(item => item.name === "marker-icon-orange");
  const [red] = source.filter(item => item.name === "marker-icon-red");
  const [green] = source.filter(item => item.name === "marker-icon-green");

  return { shadow, orange, red, green };
};

export default () => {
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
  const icon = getIcon(source);

  const { data } = useContext(MaskProvider);

  return useMemo(
    () => (
      <MarkerClusterGroup>
        {data.map(item => {
          return <Marker item={item} icon={icon} key={item.code} />;
        })}
      </MarkerClusterGroup>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
