import React, { useContext, useState } from "react";
import { ListingContext } from "../../../utils/contexts/ListingContext/ListingContext";
import { SimpleFilterLabel } from "../../BaseComponents/SimpleFilterLabel";

export const FilterBlock = (props) => {
  //Categories are dynamic, if stick to the coffees.json format, no need to edit code.
  const listingContext = useContext(ListingContext);

  //finding categories inside of list
  const categories = [
    "All Coffees",
    ...new Set(props.list.map((element) => element.category)),
  ];
  //building object checkList for controlling activation of buttons
  const [activeCheckList, setActiveCheckList] = useState(
    categories.reduce(
      (acc, curr) => (
        curr != "All Coffees" ? (acc[curr] = false) : (acc[curr] = true), acc
      ),
      {}
    )
  );
  //set chosen category active, change appearance and set filter for listing
  const setFilterActive = (category) => {
    setActiveCheckList(
      categories.reduce(
        (acc, curr) => (
          curr != category ? (acc[curr] = false) : (acc[curr] = true), acc
        ),
        {}
      )
    );
    listingContext.setFilter(category);
  };
  return (
    <div className="filter-block-container flex flex-col items-start w-full p-4 h-28">
      {categories.map((element) => {
        return (
          <SimpleFilterLabel
            text={element.charAt(0).toUpperCase() + element.slice(1)} //Elements could be start with lower case letter on raw data, make first letter uppercase for UI
            isActive={activeCheckList[element]} //Prop that controls appearance of button
            onClick={() => setFilterActive(element)}
          ></SimpleFilterLabel>
        );
      })}
    </div>
  );
};
