import React from "react";
export const SimpleInput = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={(event) => props.onChange(event.target.value)}
        class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};
