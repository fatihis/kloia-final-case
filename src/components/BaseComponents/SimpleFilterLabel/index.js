import "./styles/styles.css";

import React, { useState } from "react";

export const SimpleFilterLabel = (props) => {
  const [category, _] = useState(props.text);
  return (
    <div
      onClick={props.onClick}
      className="w-full flex items-start justify-start h-4 mb-2"
    >
      {props.isActive ? (
        <p className="active cursor-pointer exo-bold font-bold">{category}</p>
      ) : (
        <p className="cursor-pointer roboto-regular">{category}</p>
      )}
    </div>
  );
};
