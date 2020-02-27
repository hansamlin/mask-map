import React, { useContext, useEffect, createRef, useMemo } from "react";
import { Map, ZoomControl, WMSTileLayer } from "react-leaflet";
import styled from "styled-components";
import { MaskProvider } from "../store/maskProvider";
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
  const ref = createRef();

  const setVisibleData = bounds => {
    const { _southWest, _northEast } = bounds;

    const visibleData = getBounds(geoJson, _southWest, _northEast);

    setStore(visibleData);
  };

  const handleMoveEnd = e => {
    setVisibleData(e.target.getBounds());
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        window.map.flyTo(new L.LatLng(latitude, longitude));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setVisibleData(ref.current.leafletElement.getBounds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => (
      <Container
        zoom={16}
        zoomControl={false}
        maxZoom={18}
        minZoom={10}
        center={init}
        onmoveend={handleMoveEnd}
        ref={ref}
      >
        <ZoomControl position="topright" />
        <WMSTileLayer
          attribution={`Map data <a href="http://osm.org/copyright">OpenStreetMap</a> contributors Sam`}
          url="https://wmts.nlsc.gov.tw/wmts/EMAP/default/EPSG:3857/{z}/{y}/{x}"
        />

        <MarkerGroup />
      </Container>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

const Container = styled(Map)`
  height: 100vh;
  z-index: 0;
  transition: width 0.5s;
`;
