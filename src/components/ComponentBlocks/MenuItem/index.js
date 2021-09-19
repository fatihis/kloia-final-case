import React from "react";
import { SimpleTextBlock } from "../../BaseComponents/SimpleTextBlock";

export const MenuItem = (props) => {
  return (
    <div className="w-full h-full  flex flex-col mb-10">
      <SimpleTextBlock text={props.item.title} type="header" />
      <SimpleTextBlock text={props.item.description} type="description" />
      <SimpleTextBlock
        text={`Ingredients: ${props.item.ingredients}`}
        type="annotation"
      />
    </div>
  );
};
