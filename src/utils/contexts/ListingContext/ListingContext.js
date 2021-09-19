import { createContext, useState } from "react";

export const ListingContext = createContext();

export const ListingContextProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("");
  const searchContextValue = { searchString, setSearchString };

  return (
    <ListingContext.Provider value={searchContextValue}>
      {children}
    </ListingContext.Provider>
  );
};
