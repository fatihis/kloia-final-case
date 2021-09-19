import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ListingContext = createContext();

//Returns Context provider for search text and filter
export const ListingContextProvider = ({ children }) => {
  const [searchString, setSearchString] = useState(""); //storing search string for multi component using
  const [filter, setFilter] = useState(""); //storing category filter in order to avoid prop-drilling
  const searchContextValue = {
    searchString,
    setSearchString,
    filter,
    setFilter,
  };

  return (
    <ListingContext.Provider value={searchContextValue}>
      {children}
    </ListingContext.Provider>
  );
};

ListingContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
