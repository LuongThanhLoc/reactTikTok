import React from "react";

const Span = ({ className, children }) => {
  return (
    <span className={`flex justify-between w-fit ${className}`}>
      {children}
    </span>
  );
};

export default Span;
