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

const getSixDigits = num => {
  return Math.floor(num * 1000000) / 1000000;
};

export default () => {
  const { setStore, data } = useContext(MaskProvider);

  const handleMoveEnd = e => {
    const { _southWest, _northEast } = e.target.getBounds();

    const visibleData = data.filter(item => {
      const { location } = item;

      return (
        location.lat > getSixDigits(_southWest.lat) &&
        location.lon > getSixDigits(_southWest.lng) &&
        location.lat < getSixDigits(_northEast.lat) &&
        location.lon < getSixDigits(_northEast.lng)
      );
    });

    setStore(visibleData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const ref = createRef();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        window.map.flyTo(new L.LatLng(latitude, getSixDigits(longitude)));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { _southWest, _northEast } = ref.current.leafletElement.getBounds();

    const visibleData = data.filter(item => {
      const { location } = item;

      return (
        location.lat > getSixDigits(_southWest.lat) &&
        location.lon > getSixDigits(_southWest.lng) &&
        location.lat < getSixDigits(_northEast.lat) &&
        location.lon < getSixDigits(_northEast.lng)
      );
    });

    setStore(visibleData);
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
        useFlyTo={true}
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
  width: calc(100% - 315px);
  z-index: 0;
`;
