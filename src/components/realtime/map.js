import React, { useContext, useEffect, useRef } from "react";
import { Map, ZoomControl, WMSTileLayer } from "react-leaflet";
import styled from "styled-components";
import { MaskProvider } from "../../store/realtime/maskProvider";
import MarkerGroup from "./markerGroup";
import L from "leaflet";

const init = {
  lat: 25.045655,
  lng: 121.536456
};

const getBounds = (geoJson, _southWest, _northEast) => {
  return geoJson.features.filter(item => {
    const [lng, lat] = item.geometry.coordinates;

    return (
      lat > _southWest.lat &&
      lng > _southWest.lng &&
      lat < _northEast.lat &&
      lng < _northEast.lng
    );
  });
};

export default () => {
  const { setStore, geoJson } = useContext(MaskProvider);
  const mapRef = useRef();
  const markerGroup = geoJson.hasOwnProperty("features") ? (
    <MarkerGroup />
  ) : null;

  const setVisibleData = bounds => {
    const { _southWest, _northEast } = bounds;
    if (geoJson.hasOwnProperty("features")) {
      const visibleData = getBounds(geoJson, _southWest, _northEast);

      setStore(visibleData);
    }
  };

  const handleMoveEnd = e => {
    setVisibleData(e.target.getBounds());
  };

  useEffect(() => {
    setVisibleData(mapRef.current.leafletElement.getBounds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geoJson]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        mapRef.current.leafletElement.flyTo(new L.LatLng(latitude, longitude));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geoJson]);

  return (
    <Container
      zoom={16}
      zoomControl={false}
      maxZoom={18}
      minZoom={10}
      center={init}
      onmoveend={handleMoveEnd}
      ref={mapRef}
    >
      <ZoomControl position="topright" />
      <WMSTileLayer
        attribution={`Map data <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Sam`}
        url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}"
      />

      {markerGroup}
    </Container>
  );
};

const Container = styled(Map)`
  height: 100vh;
  z-index: 0;
  transition: width 0.5s;
`;
