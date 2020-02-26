import React, { createContext, useState } from "react";

export const FilterProvider = createContext();

export default ({ children }) => {
  const [filter, setFilter] = useState({
    all: true,
    adult: false,
    child: false
  });

  return (
    <FilterProvider.Provider value={{ filter, setFilter }}>
      {children}
    </FilterProvider.Provider>
  );
};
