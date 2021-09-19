import React from "react";
import "./styles/styles.css";
//Props : {Types : "header","description", "annotation" }
export const SimpleTextBlock = (props) => {
  return (
    <div className="flex-1 flex items-center mb-1 ">
      {props.type === "header" ? (
        <h4 className=" exo-bold font-extrabold  text-2xl mb-1">
          {props.text}
        </h4>
      ) : props.type === "description" ? (
        <p className=" roboto-regular text-xl mb-1">{props.text}</p>
      ) : props.type === "annotation" ? (
        <p className="roboto-regular">{props.text}</p>
      ) : null}
    </div>
  );
};
