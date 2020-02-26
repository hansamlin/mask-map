import { useContext, useEffect } from "react";
import "leaflet.markercluster";
import { MaskProvider } from "../store/maskProvider";
import { useStaticQuery, graphql } from "gatsby";
import { useLeaflet } from "react-leaflet";
import L, { markerClusterGroup } from "leaflet";
import { createIcon, getIconUrl } from "./icon";
import "react-leaflet-markercluster/dist/styles.min.css";
import { popup } from "./popup";
import "../style/popup.css";

export default () => {
  let mcg = markerClusterGroup();
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

  const { data } = useContext(MaskProvider);
  let iconUrl;

  const marker = () => {
    data.forEach(item => {
      const { location, adult_count, child_count } = item;
      const total = adult_count + child_count;

      if (total >= 100) {
        iconUrl = orange;
      } else {
        iconUrl = red;
      }

      if (total === 0) {
        iconUrl = green;
      }

      L.marker(new L.LatLng(location.lat, location.lon), {
        icon: createIcon({
          iconUrl,
          shadowUrl: shadow
        })
      })
        .addTo(mcg)
        .bindPopup(popup(item));
    });
  };

  useEffect(() => {
    mcg.clearLayers();

    marker();
    // optionally center the map around the markers
    // map.fitBounds(mcg.getBounds());
    // add the marker cluster group to the map
    map.addLayer(mcg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return null;
};
