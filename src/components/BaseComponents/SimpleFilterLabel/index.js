import "./styles/styles.css";

import React from "react";

export const SimpleFilterLabel = (props) => {
  return (
    <div className="w-full flex items-center justify-center h-4">
      {props.isActive ? (
        <p className="select-none active font-bold">{props.text}</p>
      ) : (
        <p className="select-none passive">{props.text}</p>
      )}
    </div>
  );
};
