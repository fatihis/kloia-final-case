import React from "react";
import "./styles/styles.css";
//Props : {Types : "header","description", "annotation" }
export const SimpleTextBlock = (props) => {
  return (
    <div className="flex-1 flex items-center mb-1 ">
      {props.type === "header" ? (
        <h4 className=" font-extrabold text-2xl mb-1">{props.text}</h4>
      ) : props.type === "description" ? (
        <p className=" text-xl mb-1">{props.text}</p>
      ) : props.type === "annotation" ? (
        <p className="">{props.text}</p>
      ) : null}
    </div>
  );
};
