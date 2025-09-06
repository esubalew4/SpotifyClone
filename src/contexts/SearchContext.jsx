import React, { createContext, useContext, useRef, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const srchRef = useRef(null);
  return (
    <SearchContext.Provider value={{ query, setQuery, srchRef }}>
      {children}
    </SearchContext.Provider>
  );
};
export const searchCtx = () => useContext(SearchContext);
