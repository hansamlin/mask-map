import L from "leaflet";

export const createIcon = ({ iconUrl, shadowUrl }) =>
  L.icon({
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

export const getIconUrl = source => {
  const [shadow] = source.filter(item => item.name === "marker-shadow");
  const [orange] = source.filter(item => item.name === "marker-icon-orange");
  const [red] = source.filter(item => item.name === "marker-icon-red");
  const [green] = source.filter(item => item.name === "marker-icon-green");

  return {
    shadow: shadow.publicURL,
    orange: orange.publicURL,
    red: red.publicURL,
    green: green.publicURL
  };
};
