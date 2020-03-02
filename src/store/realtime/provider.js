import React from "react";
import MaskProvider from "./maskProvider";
import FilterProvider from "../filterProvider";

export default ({ children }) => {
  return (
    <FilterProvider>
      <MaskProvider>{children}</MaskProvider>
    </FilterProvider>
  );
};
