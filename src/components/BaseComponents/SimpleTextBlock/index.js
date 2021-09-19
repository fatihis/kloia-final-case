import React from "react";
import "./styles/styles.css";
import PropTypes from "prop-types";

export const SimpleTextBlock = ({ text, type }) => {
  return (
    <div className="flex-1 flex items-center mb-1 ">
      {type === "header" ? (
        <h4 className=" exo-bold font-extrabold  text-2xl mb-1">{text}</h4>
      ) : type === "description" ? (
        <p className=" roboto-regular text-xl mb-1">{text}</p>
      ) : type === "annotation" ? (
        <p className="roboto-regular">{` ${text}`}</p>
      ) : null}
    </div>
  );
};

//Props : {Types : "header","description", "annotation" }
SimpleTextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["header", "description", "annotation"]).isRequired,
};
