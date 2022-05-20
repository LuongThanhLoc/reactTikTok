import React from "react";

const Button = ({ className, children, type = "button" }) => {
  return (
    <button
      type={type}
      className={`text-white px-6  text-center font-bold ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
