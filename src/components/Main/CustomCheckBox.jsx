import { useState } from "react";

const CustomCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="absolute opacity-0"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`size-6 flex items-center justify-center border-2  text-primaryText rounded-md transition-all ${
          checked ? "bg-orange border-orange" : "border-complimentaryText"
        }`}
      >
        {checked && (
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
      <span className={`pl-2 capitalize text-complimentaryText`}>{label}</span>
    </label>
  );
};

export default CustomCheckbox;
