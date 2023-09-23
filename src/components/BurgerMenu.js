import React from "react";

export const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="flex-col justify-center items-center hidden lg:flex"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};
