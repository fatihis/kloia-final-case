import React, { useContext } from "react";
import { ListingContext } from "../../../utils/contexts/ListingContext/ListingContext";
import { useSearch } from "../../../utils/useSearch";
import { MenuItem } from "../../ComponentBlocks/MenuItem";

export const Menu = (props) => {
  const listingContext = useContext(ListingContext);
  const elements = useSearch(
    props.list,
    listingContext.searchString,
    listingContext.filter
  ).data;
  return (
    <div className="w-full px-16 flex flex-col min-h-full pt-8">
      {elements.map((element) => {
        return <MenuItem item={element} />;
      })}
    </div>
  );
};
