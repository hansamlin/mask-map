import React, { useContext } from "react";
import { MaskProvider } from "../../store/realtime/maskProvider";
import { useStaticQuery, graphql } from "gatsby";
import { useLeaflet, GeoJSON } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import { createIcon, getIconUrl } from "../icon";
import "react-leaflet-markercluster/dist/styles.min.css";
import { popup } from "../popup";
import "../../style/popup.css";

export default () => {
  const { map } = useLeaflet();
  window.map = map;

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

  const { shadow, orange, red, green } = getIconUrl(source);

  const { geoJson, isloading } = useContext(MaskProvider);
  let iconUrl;

  const createCustomIcon = (feature, latlng) => {
    const { mask_adult, mask_child } = feature.properties;

    const total = mask_adult + mask_child;

    if (total >= 100) {
      iconUrl = orange;
    } else {
      iconUrl = red;
    }

    if (total === 0) {
      iconUrl = green;
    }

    return L.marker(latlng, {
      icon: createIcon({
        iconUrl,
        shadowUrl: shadow
      })
    });
  };

  const onEachFeature = (feature, layer) => {
    layer.bindPopup(popup(feature.properties));
  };

  const geo = isloading ? null : (
    <GeoJSON
      key="geoJson"
      data={geoJson}
      pointToLayer={createCustomIcon}
      onEachFeature={onEachFeature}
    />
  );

  return React.useMemo(
    () => (
      <MarkerClusterGroup disableClusteringAtZoom={17}>
        {geo}
      </MarkerClusterGroup>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isloading]
  );
};
