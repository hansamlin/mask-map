import React, { useContext, useEffect, useRef, useCallback } from "react";
import { Map, ZoomControl, WMSTileLayer } from "react-leaflet";
import styled from "styled-components";
import { MaskProvider } from "../../store/realtime/maskProvider";
import MarkerGroup from "./markerGroup";
import L, { LatLng } from "leaflet";

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
  const { setStore, geoJson, isloading } = useContext(MaskProvider);
  const mapRef = useRef();
  const firstRef = useRef(false);

  const setVisibleData = bounds => {
    const { _southWest, _northEast } = bounds;

    if (!isloading) {
      const visibleData = getBounds(geoJson, _southWest, _northEast);
      setStore(visibleData);
    }
  };

  useEffect(() => {
    if (!isloading) {
      if (!firstRef.current) {
        firstRef.current = true;
      }
    }
  }, [isloading]);

  const handleMoveEnd = useCallback(
    e => {
      if (!isloading) {
        setVisibleData(e.target.getBounds());
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isloading]
  );

  useEffect(() => {
    if (!isloading) {
      setVisibleData(mapRef.current.leafletElement.getBounds());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloading]);

  useNavigator(mapRef, firstRef);

  return React.useMemo(
    () => (
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
        <MarkerGroup />
      </Container>
    ),
    [handleMoveEnd]
  );
};

const useNavigator = (mapRef, firstRef) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      const popup = L.popup()
        .setLatLng([parseFloat(latitude) + 0.00015, longitude])
        .setContent(`我的位置`)
        .openOn(mapRef.current.leafletElement);

      L.marker(new LatLng(latitude, longitude))
        .bindPopup(popup)
        .addTo(mapRef.current.leafletElement);

      mapRef.current.leafletElement.flyTo(new LatLng(latitude, longitude));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstRef]);
};

const Container = styled(Map)`
  height: 100vh;
  z-index: 0;
  transition: width 0.5s;
`;
