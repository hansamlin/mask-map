import { useContext, useEffect, useRef } from "react";
import { MaskProvider } from "../../store/realtime/maskProvider";
import L, { LatLng } from "leaflet";
import { useLeaflet } from "react-leaflet";

export const getBounds = (geoJson, bounds) => {
  const { _southWest, _northEast } = bounds;

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

export const SetBounds = () => {
  const { map } = useLeaflet();
  const { setStore, geoJson, isloading } = useContext(MaskProvider);

  useEffect(() => {
    if (!isloading) {
      const visibleData = getBounds(geoJson, map.getBounds());
      setStore(visibleData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloading]);

  return null;
};

export const Moveend = () => {
  const { map } = useLeaflet();
  const { setStore, geoJson, isloading } = useContext(MaskProvider);

  useEffect(() => {
    if (!isloading) {
      map.on("moveend", e => {
        const visibleData = getBounds(geoJson, e.target.getBounds());
        setStore(visibleData);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isloading]);

  return null;
};

export const Navigator = () => {
  const { map } = useLeaflet();
  const initRef = useRef(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      const popup = L.popup()
        .setLatLng([latitude, longitude])
        .setContent(`我的位置`)
        .openOn(map);

      L.marker(new LatLng(latitude, longitude))
        .bindPopup(popup)
        .addTo(map);

      map.flyTo(new LatLng(latitude, longitude));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initRef]);

  return null;
};
