import React, { createContext, useContext, useState } from "react";

const AboutModalContext = createContext();

export const AboutModalProvider = ({ children }) => {
  const [isPoped, setIsPoped] = useState(false);
  return (
    <AboutModalContext.Provider value={{ isPoped, setIsPoped }}>
      {children}
    </AboutModalContext.Provider>
  );
};
export const AboutModalCtx = () => useContext(AboutModalContext);
