import React, { createContext, useState, useContext, useEffect } from "react";
import { FilterProvider } from "../filterProvider";

export const MaskProvider = createContext();

export default ({ children }) => {
  const { filter } = useContext(FilterProvider);
  let [store, setStore] = useState([]);
  const geoJson = useGeoJsonData();

  if (!filter.all && store.length > 0) {
    if (filter.adult) {
      store = store.filter(item => item.properties.mask_adult > 0);
    } else {
      store = store.filter(item => item.properties.mask_child > 0);
    }
  }

  return (
    <MaskProvider.Provider value={{ store, setStore, geoJson }}>
      {children}
    </MaskProvider.Provider>
  );
};

const useGeoJsonData = () => {
  const [geoJson, setGeoJson] = useState({});

  const getData = async () => {
    fetch("https://kiang.github.io/pharmacies/json/points.json")
      .then(res => res.json())
      .then(data => setGeoJson(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return geoJson;
};
