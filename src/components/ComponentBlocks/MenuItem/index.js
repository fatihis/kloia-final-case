import React from "react";
import { SimpleTextBlock } from "../../BaseComponents/SimpleTextBlock";
import PropTypes from "prop-types";
export const MenuItem = ({ item }) => {
  return (
    <div className="w-full h-full  flex flex-col mb-10 max-h-60  lg:max-h-full">
      <SimpleTextBlock text={item.title} type="header" />
      <SimpleTextBlock text={item.description} type="description" />
      <SimpleTextBlock
        text={`Ingredients: ${item.ingredients}`}
        type="annotation"
      />
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.array,
  }),
};
