// Accordion.js
import React, { useState } from "react";

const Accordion = ({ title, answer, isOpen, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center w-full p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-300"
      >
        <span className="flex-1 font-bold">{title}</span>
        <svg
          className={`fill-current text-red-600 transform origin-center transition duration-200 ease-out ${
            isOpen ? "rotate-45" : ""
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="7"
            width="10"
            height="2"
            rx="1"
            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
          />
          <rect
            x="7"
            y="3"
            width="2"
            height="10"
            rx="1"
            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3 text-xs">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
