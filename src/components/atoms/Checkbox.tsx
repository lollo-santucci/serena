'use client'; // Ensure the component is client-side

import React, { useState } from 'react';

const Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Toggle the checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("Checkbox clicked, new state: ", !isChecked); // Debugging
  };

  return (
    <label className="flex items-center cursor-pointer">
      {/* Hidden native checkbox with no event handler */}
      <input
        type="checkbox"
        checked={isChecked}
        readOnly // Prevents firing change event on this element
        className="hidden"
      />

      {/* Custom styled checkbox */}
      <span
        className={`w-4 lg:w-6 h-4 lg:h-6 border-2 border-black flex items-center justify-center cursor-pointer transition-colors duration-200 ${
          isChecked ? 'bg-black' : 'bg-white'
        }`}
        onClick={handleCheckboxChange} // Only handle click here
      >
        {isChecked && (
          <svg
            className="w-4 lg:w-6 h-4 lg:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
