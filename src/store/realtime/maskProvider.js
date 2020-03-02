import React, { createContext, useState, useEffect } from "react";

export const MaskProvider = createContext();

export default ({ children }) => {
  const [store, setStore] = useState([]);
  const { geoJson, isloading } = useGeoJsonData();

  return (
    <MaskProvider.Provider value={{ store, setStore, geoJson, isloading }}>
      {children}
    </MaskProvider.Provider>
  );
};

const useGeoJsonData = () => {
  const [geoJson, setGeoJson] = useState({});
  const [isloading, setIsLoading] = useState(true);

  const getData = async () => {
    fetch("https://kiang.github.io/pharmacies/json/points.json")
      .then(res => res.json())
      .then(data => setGeoJson(data));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (geoJson.hasOwnProperty("features")) setIsLoading(false);
  }, [geoJson]);

  return { geoJson, isloading };
};
