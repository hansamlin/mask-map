import React from "react";
import MaskProvider from "./maskProvider";
import FilterProvider from "./filterProvider";

export default ({ children }) => {
  return (
    <MaskProvider>
      <FilterProvider>{children}</FilterProvider>
    </MaskProvider>
  );
};
