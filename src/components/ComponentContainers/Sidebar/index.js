import React from "react";
import { FilterBlock } from "../../ComponentBlocks/FilterBlock";
import { SearchBox } from "../../ComponentBlocks/SearchBox";

export const Sidebar = (props) => {
  return (
    <div className="flex-1 px-10 border-2">
      <div className="mt-14 flex flex-col items-center justify-center">
        <SearchBox></SearchBox>
        <FilterBlock list={props.list}></FilterBlock>
      </div>
    </div>
  );
};
