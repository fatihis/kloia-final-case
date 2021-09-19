import React, { useContext } from "react";
import { ListingContext } from "../../../utils/contexts/ListingContext/ListingContext";
import { SimpleInput } from "../../BaseComponents/SimpleInput";

export const SearchBox = (props) => {
  const listingContext = useContext(ListingContext);

  return (
    <SimpleInput
      placeholder="Search"
      onChange={listingContext.setSearchString}
    ></SimpleInput>
  );
};
