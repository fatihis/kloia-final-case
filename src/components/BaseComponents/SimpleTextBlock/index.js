import React from "react";
import "./styles/styles.css";
//Props : {Types : "header","description", "annotation" }
export const SimpleTextBlock = (props) => {
  return (
    <div className="flex-1 flex items-center mb-4">
      {props.type === "header" ? (
        <h4 className="font-bold text-2xl">{props.text}</h4>
      ) : props.type === "description" ? (
        <p className="font-semibold text-xl">{props.text}</p>
      ) : props.type === "annotation" ? (
        <p className="">{props.text}</p>
      ) : null}
    </div>
  );
};
