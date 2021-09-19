import "./styles/styles.css";

import React, { useState } from "react";

export const SimpleFilterLabel = (props) => {
  const [category, setCategory] = useState(props.text);
  return (
    <div
      onClick={(category) => props.onClick(category)}
      className="w-full flex items-start justify-start h-4 mb-2"
    >
      {props.isActive ? (
        <p className=" active font-bold">{category}</p>
      ) : (
        <p className=" passive">{category}</p>
      )}
    </div>
  );
};
