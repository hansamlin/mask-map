import React, { createContext, useState } from "react";

export const FilterProvider = createContext();

export default ({ children }) => {
  const [check, setCheck] = useState({ all: true, adult: false, child: false });

  return (
    <FilterProvider.Provider value={{ check, setCheck }}>
      {children}
    </FilterProvider.Provider>
  );
};
