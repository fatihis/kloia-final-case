import React from "react";
import { FilterBlock } from "../../ComponentBlocks/FilterBlock";
import { SearchBox } from "../../ComponentBlocks/SearchBox";
import PropTypes from "prop-types";
export const Sidebar = ({ list }) => {
  return (
    <div className="min-h-screen lg:min-h-full  flex-1 px-10 border-l-2 border-r-2">
      <div className="mt-14 flex flex-col items-center justify-center">
        <SearchBox />
        <FilterBlock list={list} />
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  list: PropTypes.array.isRequired,
};
