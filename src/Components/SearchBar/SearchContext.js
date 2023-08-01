import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <SearchContext.Provider value={{ searchHistory, setSearchHistory }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}
