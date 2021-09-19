import React, { useState } from "react";
import "./styles/styles.css";
import PropTypes from "prop-types";
export const SimpleFilterLabel = ({ onClick, isActive, text }) => {
  const [category] = useState(text);
  return (
    <div
      onClick={onClick}
      className="w-full flex items-start justify-start h-4 mb-2"
    >
      {isActive ? (
        <p className="active cursor-pointer exo-bold font-bold">{category}</p>
      ) : (
        <p className="cursor-pointer roboto-regular">{category}</p>
      )}
    </div>
  );
};

SimpleFilterLabel.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
