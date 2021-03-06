import React, { useContext } from "react";
import { ListingContext } from "../../../utils/contexts/ListingContext/ListingContext";
import { SimpleInput } from "../../BaseComponents/SimpleInput";
//Sets onChange of SimpleInput into setSearchString of context, also sets placeholder
export const SearchBox = () => {
  const listingContext = useContext(ListingContext);
  return (
    <SimpleInput
      placeholder="Search"
      onChange={listingContext.setSearchString}
    />
  );
};
