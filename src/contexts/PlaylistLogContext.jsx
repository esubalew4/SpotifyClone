import React, { createContext, useContext, useState } from "react";

const PlaylistLogContext = createContext();

export const PlaylistLogProvider = ({ children }) => {
  const [isLogOpen, setIsLogOpen] = useState(false);
  return (
    <PlaylistLogContext.Provider value={{ isLogOpen, setIsLogOpen }}>
      {children}
    </PlaylistLogContext.Provider>
  );
};
export const PlaylistLogCtx = () => useContext(PlaylistLogContext);
