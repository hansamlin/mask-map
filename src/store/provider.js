import React from "react";
import MaskProvider from "./realtime/maskProvider";
import FilterProvider from "./filterProvider";
import TextProvider from "./textProvider";

export default ({ children }) => {
  return (
    <TextProvider>
      <FilterProvider>
        <MaskProvider>{children}</MaskProvider>
      </FilterProvider>
    </TextProvider>
  );
};
