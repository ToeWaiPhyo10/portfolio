import React from "react";

const AppLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full inline-block z-0 px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default AppLayout;
