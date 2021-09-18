import React from "react";

export const SimpleInput = () => {
  return (
    <div class="flex flex-col space-y-2">
      <input
        id="default"
        type="text"
        name="default"
        placeholder="Placeholder"
        class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};
