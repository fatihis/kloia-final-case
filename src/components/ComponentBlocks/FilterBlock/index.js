import React, { useEffect, useState } from "react";
import { SimpleFilterLabel } from "../../BaseComponents/SimpleFilterLabel";

export const FilterBlock = (props) => {
  //Categories are dynamic, if stick to the coffees.json format, no need to edit code.
  const categories = [
    ...new Set(props.list.map((element) => element.category)),
    "All Coffees",
  ];
  const [activeCheckList, setActiveCheckList] = useState(
    categories.reduce((acc, curr) => ((acc[curr] = false), acc), {})
  );
  useEffect(() => {
    console.log(categories);
  }, []);
  const setFilterActive = (category) => {
    let list = activeCheckList;
    list[category] = true;
    console.log(category + "clicked");
    //  setActiveCheckList(...prev => )
  };
  return (
    <div className="filter-block-container flex flex-col items-start w-full p-4 h-28">
      {categories.map((element) => {
        return (
          <SimpleFilterLabel
            text={element.charAt(0).toUpperCase() + element.slice(1)}
            isActive={activeCheckList[element]}
            onClick={(element) => setFilterActive(element)}
          ></SimpleFilterLabel>
        );
      })}
    </div>
  );
};
