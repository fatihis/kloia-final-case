import React from "react";
import PropTypes from "prop-types";
export const SimpleInput = ({ placeholder, onChange }) => {
  return (
    <div className="flex flex-col space-y-2  lg:min-w-full">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="roboto-regular px-4 py-2 min-w-full  rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};

SimpleInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
