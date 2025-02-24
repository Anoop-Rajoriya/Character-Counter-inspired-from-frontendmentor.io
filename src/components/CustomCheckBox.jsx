import React from "react";

/**
 * CustomCheckbox Component
 * A reusable checkbox with a label and dynamic styling.
 *
 * Props:
 * - label: The label text for the checkbox.
 * - value: Boolean value indicating whether the checkbox is checked.
 * - handler: Function to update the application state.
 */
const CustomCheckbox = ({ label, handler, value }) => {
  return (
    <label className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="absolute opacity-0"
        value={value}
        onChange={handler}
      />
      <div
        className={`size-6 flex items-center justify-center border-2 rounded-md transition-all ${
          value
            ? "bg-orange border-orange text-primaryText"
            : "border-complimentaryText"
        }`}
      >
        {value && (
          <svg
            className="w-4 h-4 text-inherit"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="pl-2 capitalize text-complimentaryText">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
