import React, { useContext } from "react";
import { ListingContext } from "../../../utils/contexts/ListingContext/ListingContext";
import { useSearch } from "../../../utils/useSearch";
import { MenuItem } from "../../ComponentBlocks/MenuItem";
import PropTypes from "prop-types";
export const Menu = ({ list }) => {
  const listingContext = useContext(ListingContext);
  //useSearch hook for continuous delivery of content that bond to searched text
  const elements = useSearch(
    list,
    listingContext.searchString,
    listingContext.filter
  ).data;
  return (
    <div className="w-full px-16 flex flex-col min-h-full pt-8">
      {elements.length === 0 && (
        <p className="exo-bold"> Sorry... Unable to find what you need </p>
      )}
      {elements.map((element, id) => {
        //render each element within provided list
        return <MenuItem key={id} item={element} />;
      })}
    </div>
  );
};

Menu.propTypes = {
  list: PropTypes.array.isRequired,
};
