import React, { useState } from "react";
import "./styles/styles.css";
import PropTypes from "prop-types";
export const SimpleFilterLabel = ({ onClick, isActive, text }) => {
  return (
    <div
      onClick={onClick}
      className="w-full flex items-start justify-start h-4 mb-2"
    >
      {/* rendering text in order to activity */}
      {isActive ? (
        <p className="active cursor-pointer exo-bold font-bold">{text}</p>
      ) : (
        <p className="cursor-pointer roboto-regular">{text}</p>
      )}
    </div>
  );
};

SimpleFilterLabel.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
