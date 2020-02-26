import React, { createContext, useState } from "react";

export const TextProvider = createContext();

export default ({ children }) => {
  const [text, setText] = useState("");

  return (
    <TextProvider.Provider value={{ text, setText }}>
      {children}
    </TextProvider.Provider>
  );
};
